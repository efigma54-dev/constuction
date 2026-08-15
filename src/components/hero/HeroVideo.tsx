"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  mp4Src: string;
  webmSrc?: string;
  posterSrc: string;
  className?: string;
};

export default function HeroVideo({
  mp4Src,
  webmSrc,
  posterSrc,
  className,
}: Props) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  const shouldRenderVideo = useMemo(() => {
    return !reducedMotion && !failed;
  }, [failed, reducedMotion]);

  return (
    <div
      className={[
        "relative h-full w-full overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage: `url(${posterSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {shouldRenderVideo ? (
        <video
          className={[
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
            ready ? "opacity-100" : "opacity-0",
          ].join(" ")}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={posterSrc}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
          aria-hidden="true"
        >
          {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mql.matches);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}
