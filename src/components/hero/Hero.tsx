import Link from "next/link";
import { company } from "@/lib/company";
import HeroWalkthrough from "./HeroWalkthrough";

const shots = [
  {
    mp4Src: "/videos/hero-tower.mp4",
    posterSrc: "/images/real/aakar-heights-reference.jpg",
    label: "Aakar Heights",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <HeroWalkthrough shots={shots} sectionHeightVh={100}>
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end">
        <div className="pointer-events-auto mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">

          {/* Eyebrow */}
          <p
            className="text-xs font-medium tracking-widest uppercase animate-fade-in-up opacity-0"
            style={{ color: "rgba(234, 227, 217, 0.65)" }}
          >
            Pune-based construction & real estate · Est. {company.foundedYear}
          </p>

          {/* ── HERO WORD ── */}
          <h1
            className="font-serif text-white animate-fade-in-up opacity-0"
            style={{
              fontSize: "var(--text-hero)",
              lineHeight: "0.93",
              letterSpacing: "-0.03em",
              animationDelay: "80ms",
              marginTop: "clamp(0.75rem, 1.5vw, 1.25rem)",
            }}
          >
            Built on trust.
            <br />
            <span style={{ color: "rgba(234, 227, 217, 0.8)" }}>
              Delivered with proof.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-6 text-base leading-relaxed animate-fade-in-up opacity-0 prose-constrained"
            style={{
              color: "rgba(213, 200, 181, 0.85)",
              animationDelay: "160ms",
              maxWidth: "54ch",
            }}
          >Every claim we makeâ€”progress, timelines, approvals, and
           deliverablesâ€”has a visible trail. No hype. Just proof you canverify
            before stepping on site.
          </p>

          {/* CTA row */}
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/projects" className="btn-primary">
              View projects
            </Link>
            <Link href="/construction-progress" className="btn-hero-outline">
              Construction progress
            </Link>
          </div>

          {/* Stat bar — supporting proof metrics, with the legal status treated as a compact badge */}
          <div
            className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4 animate-fade-in-up opacity-0"
            style={{
              animationDelay: "340ms",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="pt-6 pr-0 sm:pr-6"
                style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
              >
                {s.variant === "badge" ? (
                  <div className="stat-badge" aria-label={s.label}>
                    <span className="stat-badge-mark" aria-hidden="true">✓</span>
                    <span>{s.value}</span>
                  </div>
                ) : (
                  <div className="stat-drama" style={{ color: "#fff" }}>
                    {s.value}
                  </div>
                )}
                <div className="stat-drama-label" style={{ color: "rgba(213,200,181,0.55)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </HeroWalkthrough>
    </section>
  );
}

const stats = [
  { label: "Years in Pune", value: "12+" },
  { label: "Projects delivered", value: "18" },
  { label: "Families housed", value: "740+" },
  { label: "MahaRERA registered", value: "Yes", variant: "badge" },
];
