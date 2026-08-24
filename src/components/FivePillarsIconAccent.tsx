"use client";
import React, { useEffect, useRef, useState } from "react";

type PillarIcon = "identity" | "progress" | "delivery" | "documents" | "accountability";

const icons: Record<PillarIcon, React.ReactNode> = {
  identity: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19c.8-3.2 3-5 6.5-5s5.7 1.8 6.5 5" />
    </svg>
  ),
  progress: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19V9l4-3 4 3v10" />
      <path d="M12 19V5l4-2 4 2v14" />
      <path d="M3 19h18" />
    </svg>
  ),
  delivery: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16v12H4z" />
      <path d="M8 6V4h8v2M8 11h8M8 15h5" />
    </svg>
  ),
  documents: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4M10 12h5M10 16h5" />
    </svg>
  ),
  accountability: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.3 2.3 4.8-5" />
    </svg>
  ),
};

export default function FivePillarsIconAccent({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const icon = typeof children === "string" && children in icons ? icons[children as PillarIcon] : children;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={isVisible ? "icon-draw-in opacity-100" : "opacity-100"}>
      {icon}
    </div>
  );
}
