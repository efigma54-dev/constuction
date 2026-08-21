import Link from "next/link";
import HeroWalkthrough from "./HeroWalkthrough";

const balajiEmpirePhoto =
  "https://is1-3.housingcdn.com/4f2250e8/529671ac2127f19f26f860e2f281bfb5/v0/fs/aakar_balaji_empire-vikas_nagar_2-pune-aakar_developers.jpeg";

const shots = [
  {
    posterSrc: balajiEmpirePhoto,
    label: "Balaji Empire · published project photograph",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <HeroWalkthrough shots={shots} sectionHeightVh={100}>
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-end">
          <div className="pointer-events-auto mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
            <p className="text-xs font-medium tracking-widest uppercase animate-fade-in-up" style={{ color: "rgba(234, 227, 217, 0.65)" }}>
              Pune-based real estate · public company records available
            </p>

            <h1 className="font-serif text-white animate-fade-in-up" style={{ fontSize: "var(--text-hero)", lineHeight: "0.93", letterSpacing: "-0.03em", animationDelay: "80ms", marginTop: "clamp(0.75rem, 1.5vw, 1.25rem)" }}>
              Built on trust.
              <br />
              <span style={{ color: "rgba(234, 227, 217, 0.8)" }}>Delivered with proof.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed animate-fade-in-up prose-constrained" style={{ color: "rgba(213, 200, 181, 0.85)", animationDelay: "160ms", maxWidth: "54ch" }}>
              A Pune developer with public company and project records, presented with clear distinctions between verified facts, sourced imagery, and information still awaiting primary documentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "240ms" }}>
              <Link href="/projects" className="btn-primary">View projects</Link>
              <Link href="/transparency" className="btn-hero-outline">Company records</Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-y-8 sm:grid-cols-4 animate-fade-in-up" style={{ animationDelay: "340ms", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {stats.map((s, i) => (
                <div key={s.label} className="pt-6 pr-0 sm:pr-6" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <div className="stat-drama" style={{ color: "#fff" }}>{s.value}</div>
                  <div className="stat-drama-label" style={{ color: "rgba(213,200,181,0.55)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "rgba(213,200,181,0.45)" }}>
              Photograph source: Housing.com · Balaji Empire, Vikas Nagar, Pune
            </div>
          </div>
        </div>
      </HeroWalkthrough>
    </section>
  );
}

const stats = [
  { label: "Established", value: "2010" },
  { label: "Public portfolio", value: "11" },
  { label: "Verified RERA record", value: "01" },
  { label: "GST registration", value: "2017" },
];
