"use client";

import { useState } from "react";

type Props = {
  label: string;
  className?: string;
};

export default function ProjectMedia({ label, className = "" }: Props) {
  const [ready, setReady] = useState(false);

  return (
    <div className={`relative h-full min-h-75 overflow-hidden bg-charcoal ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/posters/hero-tower-poster.svg')" }}
        aria-hidden="true"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/posters/hero-tower-poster.svg"
        onCanPlay={() => setReady(true)}
        aria-label={label}
      >
        <source src="/videos/hero-tower.mp4" type="video/mp4" />
      </video>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 45%, rgba(20, 33, 31, 0.82) 100%)" }}
      />
      <div className="absolute bottom-5 left-6 text-xs font-medium uppercase tracking-[0.18em] text-sand">
        {label}
      </div>
    </div>
  );
}