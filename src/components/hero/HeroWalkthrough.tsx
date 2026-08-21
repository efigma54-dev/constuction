"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const subscribeToReducedMotion = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);

  return () => mediaQuery.removeEventListener("change", onChange);
};

const getReducedMotion = () =>
  window.matchMedia(reducedMotionQuery).matches;

const getServerReducedMotion = () => false;

export type WalkthroughShot = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  label: string;
};

type Props = {
  shots: WalkthroughShot[];
  sectionHeightVh?: number;
  children?: ReactNode;
};

export default function HeroWalkthrough({
  shots,
  sectionHeightVh = 100,
  children,
}: Props) {
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getServerReducedMotion,
  );

  const totalHeight = shots.length * sectionHeightVh;

  return (
    <div
      className="relative w-full"
      style={{ height: `${totalHeight}vh` }}
      aria-label="Building hero"
    >
      <div className="sticky top-0 relative h-screen w-full overflow-hidden">
        {shots.map((shot, index) => (
          <div
            key={`${shot.mp4Src}-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: 0,
              backgroundImage: `url(${shot.posterSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          >
            {!reducedMotion && (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
                poster={shot.posterSrc}
                aria-hidden="true"
              >
                {shot.webmSrc ? (
                  <source src={shot.webmSrc} type="video/webm" />
                ) : null}

                <source src={shot.mp4Src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}

        {/* Gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.08) 100%)",
          }}
        />

        {/* Shot indicator */}
        <div className="absolute bottom-8 left-6 z-20 sm:left-8">
          <div className="shot-indicator">
            <span className="shot-indicator-dot" />
            {shots[0]?.label}
            <span
              style={{
                color: "rgba(255,255,255,0.35)",
                margin: "0 0.25rem",
              }}
            >
              ·
            </span>
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              1 / {shots.length}
            </span>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 right-6 z-20 sm:right-8"
          style={{
            opacity: 1,
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
      </div>
    </div>
  );
}