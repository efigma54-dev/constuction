"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import type { ReactNode } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
};

const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;

const getServerReducedMotion = () => false;

export type WalkthroughShot = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  /** Short label shown in the shot-indicator pill */
  label: string;
};

type Props = {
  shots: WalkthroughShot[];
  /** Height multiplier per shot. Default 1 = 100vh per shot. */
  sectionHeightVh?: number;
  children?: ReactNode;
};

/**
 * Scroll-driven hero walkthrough.
 *
 * As the user scrolls through `shots.length × sectionHeightVh` worth of
 * scroll distance the panel stays sticky and cross-fades through the shot
 * sequence.  Adding new shots later is a one-line change to the `shots` prop.
 *
 * Additional shots can be added when distinct approved assets are supplied.
 */
export default function HeroWalkthrough({
  shots,
  sectionHeightVh = 100,
  children,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isCrossfading, setIsCrossfading] = useState(false);
  const [videoReady, setVideoReady] = useState<boolean[]>(() =>
    shots.map(() => false)
  );
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const crossfadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loadVideo = () => setShouldLoadVideo(true);
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(loadVideo);
      return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const timer = window.setTimeout(loadVideo, 900);
    return () => window.clearTimeout(timer);
  }, []);

  const switchShot = useCallback(
    (nextIndex: number) => {
      if (nextIndex === currentIndex) return;
      if (reducedMotion) {
        setCurrentIndex(nextIndex);
        return;
      }
      setPreviousIndex(currentIndex);
      setCurrentIndex(nextIndex);
      setIsCrossfading(true);
      if (crossfadeTimer.current) clearTimeout(crossfadeTimer.current);
      crossfadeTimer.current = setTimeout(() => {
        setPreviousIndex(null);
        setIsCrossfading(false);
      }, 1100);
    },
    [currentIndex, reducedMotion]
  );

  // Scroll-driven shot selection
  useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const stickyHeight = window.innerHeight;
      // How far the user has scrolled into the walkthrough container
      const scrolled = Math.max(0, -rect.top);
      const scrollable = containerHeight - stickyHeight;
      if (scrollable <= 0) return;
      const progress = Math.min(1, scrolled / scrollable);
      const rawIndex = Math.floor(progress * shots.length);
      const nextIndex = Math.min(rawIndex, shots.length - 1);
      switchShot(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shots.length, switchShot]);

  const handleVideoReady = (index: number) => {
    setVideoReady((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const totalHeight = shots.length * sectionHeightVh;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${totalHeight}vh` }}
      aria-label="Scroll to walk through the building"
    >
      {/* Sticky panel — pins the viewport while scroll progresses */}
      <div className="sticky top-0 relative h-screen w-full overflow-hidden">

        {/* Video layers — previous fades out, current fades in */}
        {shots.map((shot, i) => {
          const isCurrent = i === currentIndex;
          const isPrev = i === previousIndex;
          const isVisible = isCurrent || (isPrev && isCrossfading);

          return (
            <div
              key={shot.mp4Src + i}
              className="absolute inset-0"
              style={{
                opacity: isCurrent ? 1 : 0,
                transition: reducedMotion
                  ? "none"
                  : `opacity ${isCrossfading && isCurrent ? "1000" : "200"}ms ease`,
                zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
                backgroundImage: `url(${shot.posterSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden={!isVisible}
            >
              {!reducedMotion && shouldLoadVideo && (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    opacity: videoReady[i] ? 1 : 0,
                    transition: "opacity 800ms ease",
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={i === 0 ? "auto" : "none"}
                  poster={shot.posterSrc}
                  onCanPlay={() => handleVideoReady(i)}
                  aria-hidden="true"
                >
                  {shot.webmSrc && (
                    <source src={shot.webmSrc} type="video/webm" />
                  )}
                  <source src={shot.mp4Src} type="video/mp4" />
                </video>
              )}
            </div>
          );
        })}

        {/* Gradient overlay — bottom dark fade for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.08) 100%)",
          }}
        />

        {/* Shot indicator — bottom left */}
        <div className="absolute bottom-8 left-6 z-20 sm:left-8">
          <div className="shot-indicator">
            <span className="shot-indicator-dot" />
            {shots[currentIndex]?.label}
            <span style={{ color: "rgba(255,255,255,0.35)", margin: "0 0.25rem" }}>
              ·
            </span>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              {currentIndex + 1} / {shots.length}
            </span>
          </div>
        </div>

        {/* Scroll hint — visible only on first shot */}
        <div
          className="absolute bottom-8 right-6 z-20 sm:right-8"
          style={{
            opacity: currentIndex === 0 ? 1 : 0,
            transition: "opacity 400ms ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span>Scroll</span>
            <svg width="1" height="28" viewBox="0 0 1 28" fill="none">
              <line
                x1="0.5"
                y1="0"
                x2="0.5"
                y2="28"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>

        {children}

        {/* Content slot — filled by Hero.tsx as children */}
        {/* z-index 15 so it layers above gradient */}
      </div>
    </div>
  );
}
