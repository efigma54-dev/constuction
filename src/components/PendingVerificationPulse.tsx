import React from "react";

export default function PendingVerificationPulse({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="relative flex h-1.5 w-1.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--terracotta)" }}></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: "var(--terracotta)" }}></span>
      </span>
      {children}
    </span>
  );
}
