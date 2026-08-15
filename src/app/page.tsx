import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { projects } from "@/lib/projects";
import { stories } from "@/lib/stories";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import FivePillarsIconAccent from "@/components/FivePillarsIconAccent";
import PendingVerificationPulse from "@/components/PendingVerificationPulse";

export const metadata = {
  title: "Home",
  description:
    "Premium homes in Pune, built on trust and delivered with proof. Explore projects, construction milestones, and verified documents before you book.",
  openGraph: {
    title: "Aakar Developers",
    description:
      "Premium homes in Pune, built on trust and delivered with proof. Explore projects, construction milestones, and verified documents before you book.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Developers",
    description:
      "Premium homes in Pune, built on trust and delivered with proof. Explore projects, construction milestones, and verified documents before you book.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function Home() {
  const featured = projects[0] ?? null;
  const active = projects.filter((p) => p.status === "under_construction");
  const publishedProgress = active.filter((p) => p.milestones.length > 0);
  const featuredStories = stories.slice(0, 3);

  return (
    <main className="flex-1">
      {/* ── 1. HERO (scroll-driven walkthrough) ──────────────────── */}
      <Hero />

      {/* ── 2. FIVE PILLARS — premium verification framework ──────── */}
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {/* Eyebrow */}
          <div 
            className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-4 animate-fade-in-up opacity-0"
            style={{ color: "var(--terracotta)", opacity: 0.8 }}
          >
            Transparency by design
          </div>
          
          {/* Section header */}
          <div className="max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: "100ms" }}>
            <h2
              className="font-serif text-foreground"
              style={{
                fontSize: "var(--text-section)",
                lineHeight: "1.05",
                letterSpacing: "-0.025em",
              }}
            >
              Five pillars of trust
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">
              Every commitment is supported by a record you can inspect. Five principles shape how Aakar presents projects, progress, people, and proof.
            </p>
          </div>

          {/* Pillars — connected card system */}
          <div className="mt-16 sm:mt-24 relative flex flex-col gap-4 sm:gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 p-6 sm:p-8 animate-fade-in-up opacity-0 transition-all duration-300 ease-out bg-surface hover:bg-[rgba(0,0,0,0.015)]"
                style={{
                  animationDelay: `${(i + 2) * 100}ms`,
                  border: "1px solid var(--hairline)",
                  borderRadius: "2px",
                }}
              >
                {/* Connector down to next item */}
                {i !== pillars.length - 1 && (
                  <div className="hidden sm:flex absolute left-[3.25rem] -bottom-6 w-px h-6 items-center justify-center" style={{ background: "var(--hairline)", zIndex: 0 }}>
                    <div className="w-1.5 h-1.5 rounded-full opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" style={{ backgroundColor: "var(--terracotta)" }}></div>
                  </div>
                )}

                {/* Number */}
                <div className="relative shrink-0 flex items-center justify-center w-10 sm:h-14 bg-surface" style={{ zIndex: 2 }}>
                  <div
                    className="font-serif transition-colors duration-300 group-hover:text-terracotta"
                    style={{
                      fontSize: "1.75rem",
                      lineHeight: "1",
                      color: "var(--terracotta)",
                      opacity: 0.6,
                    }}
                  >
                    {p.num}
                  </div>
                </div>

                {/* Icon Frame */}
                <div 
                  className="shrink-0 flex items-center justify-center transition-all duration-300 ease-out sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5"
                  style={{ 
                    width: "56px", 
                    height: "56px", 
                    border: "1px solid var(--hairline)",
                    color: "var(--terracotta)",
                    backgroundColor: "rgba(255,255,255,0.4)"
                  }}
                >
                  <FivePillarsIconAccent>
                    {p.icon}
                  </FivePillarsIconAccent>
                </div>

                {/* Content */}
                <div className="flex-1 transition-transform duration-300 ease-out sm:group-hover:translate-x-1">
                  <h3
                    className="font-serif text-foreground transition-colors duration-300"
                    style={{
                      fontSize: "1.35rem",
                      lineHeight: "1.2",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted prose-constrained max-w-lg">
                    {p.body}
                  </p>
                </div>

                {/* Evidence Label */}
                <div 
                  className="sm:w-48 shrink-0 mt-6 sm:mt-0 flex flex-col transition-opacity duration-300 sm:opacity-70 sm:group-hover:opacity-100 w-full sm:w-auto"
                >
                  <div className="mb-5 w-full h-24">
                    <PhotoPlaceholder type={p.thumbnailType as "building" | "document" | "portrait"} label={p.evidence} className="w-full h-full" aspectRatio="auto" src={p.image} />
                  </div>
                  <div className="text-[0.6rem] font-semibold tracking-widest uppercase mb-1.5" style={{ color: "var(--terracotta)" }}>
                    Evidence
                  </div>
                  <div className="text-[0.75rem] text-muted leading-tight" style={{ borderTop: "1px solid var(--hairline)", paddingTop: "0.5rem" }}>
                    {p.evidence}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Section Ending CTA */}
          <div 
            className="mt-6 sm:mt-8 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 animate-fade-in-up opacity-0"
            style={{
              animationDelay: "700ms",
              border: "1px solid var(--hairline)",
              borderLeft: "2px solid var(--terracotta)",
              backgroundColor: "rgba(255,255,255,0.4)",
              borderRadius: "2px"
            }}
          >
            <div>
              <h3 className="font-serif text-[1.35rem] text-foreground mb-2">Built around proof.</h3>
              <p className="text-sm text-muted max-w-md leading-relaxed">
                Explore the records, documents, project information and people behind every published claim.
              </p>
            </div>
            <Link href="/transparency" className="group flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-terracotta shrink-0">
              <span className="flex flex-col text-left sm:text-right">
                <span className="mb-0.5">Explore transparency</span>
                <span className="text-[0.65rem] text-muted font-normal uppercase tracking-wider group-hover:text-terracotta/70 transition-colors">View project records</span>
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. CHARCOAL RHYTHM BREAK ───────────────────────────────
            Full-bleed dark section — deliberate pause.
            Typography: single Fraunces phrase at section scale.
            No cards, no grid. Just weight and contrast.
      ────────────────────────────────────────────────────────── */}
      <section className="section-charcoal w-full py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {/* The single most important phrase in this section — section scale */}
          <h2
            className="font-serif animate-fade-in-up opacity-0"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "var(--sand)",
            }}
          >
            Proof, not promises.
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed animate-fade-in-up opacity-0 prose-constrained"
            style={{
              color: "var(--charcoal-muted)",
              animationDelay: "80ms",
            }}
          >
            Dated site photos, filings, milestone timelines, and handover
            records are published here as they are verified.
          </p>
          {/* Stat row — thin hairline separator, sand tones */}
          <div
            className="mt-16 grid grid-cols-3 animate-fade-in-up opacity-0"
            style={{
              animationDelay: "160ms",
              borderTop: "1px solid rgba(200, 189, 179, 0.15)",
            }}
          >
            {[
              { label: "Years experience", value: "12+" },
              { label: "Projects delivered", value: "18" },
              { label: "Families housed", value: "740+" },
            ].map((s, i) => (
              <div
                key={s.label}
                className="pt-8 pr-8"
                style={{
                  borderRight:
                    i < 2 ? "1px solid rgba(200, 189, 179, 0.1)" : "none",
                }}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2rem, 4.5vw, 4rem)",
                    lineHeight: "1",
                    letterSpacing: "-0.02em",
                    color: "var(--sand)",
                  }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-2 text-xs uppercase tracking-widest"
                  style={{ color: "var(--charcoal-muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PROJECT — split layout, image scale variation ──
            Left 55%: full-height project image (breaking the card grid).
            Right 45%: copy + sharp CTAs.
      ────────────────────────────────────────────────────────── */}
      <section className="bg-background py-0">
        <div
          className="mx-auto w-full max-w-6xl animate-fade-in-up opacity-0"
          style={{ borderBottom: "1px solid var(--hairline)" }}
        >
          <div className="grid md:grid-cols-[55%_45%]">
            {/* Image — full bleed within grid column, no padding */}
            <div className="relative min-h-80 md:min-h-130 overflow-hidden flex flex-col justify-end">
              <PhotoPlaceholder
                type="building"
                label="Aakar Heights - Baner (Featured Project)"
                aspectRatio="auto"
                className="absolute inset-0 h-full w-full border-none!"
                src={featured?.heroImage ?? "/images/generated/aakar-heights-hero.svg"}
              />
              {/* Detail break — small overhanging label */}
              <div
                className="absolute bottom-0 left-0 z-10"
                style={{
                  background: "var(--terracotta)",
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.5rem 1rem",
                }}
              >
                Currently developing
              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-center px-8 py-16 md:px-12 md:py-0">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: "var(--terracotta)" }}
              >
                Featured project
              </div>
              <h3
                className="font-serif text-foreground"
                style={{
                  fontSize: "var(--text-card)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}
              >
                {featured ? featured.name : "Aakar Heights, Baner"}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted prose-constrained">
                {featured ? (
                  <>
                    {featured.name}, {featured.location} — project information
                    and verified progress records will be published here.
                  </>
                ) : (
                  <>
                    Project information and verified progress records will be
                    published here when available.
                  </>
                )}
              </p>
              <div className="mt-10 flex flex-col gap-5">
                <Link href="/projects" className="btn-primary self-start">
                  Explore projects
                </Link>
                <Link href="/contact" className="btn-secondary self-start">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CONSTRUCTION PROGRESS ───────────────────────────────── */}
      <section
        className="bg-surface py-24 sm:py-32"
        style={{ borderTop: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start animate-fade-in-up opacity-0">
            <div>
              {/* Section headline — section scale */}
              <h2
                className="font-serif text-foreground"
                style={{
                  fontSize: "var(--text-section)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.025em",
                }}
              >
                Construction progress
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">
                Promised vs actual dates, milestone by milestone. Dated site
                photos belong next to every stage — you can verify progress
                before stepping on site.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <Link href="/construction-progress" className="btn-primary">
                  View progress
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Ask a question
                </Link>
              </div>
            </div>

            <div className="space-y-0">
              {publishedProgress.length > 0 ? (
                publishedProgress.slice(0, 2).map((p) => (
                  <div
                    key={p.slug}
                    className="pb-10 mb-10"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          className="font-serif text-foreground"
                          style={{
                            fontSize: "var(--text-card)",
                            lineHeight: "1.2",
                          }}
                        >
                          {p.name}
                        </div>
                        <div className="mt-1 text-xs tracking-wide text-muted uppercase">
                          {p.location}
                        </div>
                      </div>
                      <Link
                        href={`/projects/${p.slug}`}
                        className="btn-secondary shrink-0"
                        style={{ fontSize: "0.75rem" }}
                      >
                        Details
                      </Link>
                    </div>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      {p.milestones.slice(0, 4).map((m) => (
                        <div key={m.stage}>
                          <div className="flex items-center gap-3">
                            <div className="text-sm font-medium tracking-wide text-foreground">
                              {m.stage}
                            </div>
                            <span
                              className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5"
                              style={{
                                color: "var(--terracotta)",
                                background: "rgba(154,66,34,0.08)",
                              }}
                            >
                              {statusLabel(m.status)}
                            </span>
                          </div>
                          <div className="mt-2 text-sm text-muted">
                            Promised: {m.promisedDate}
                          </div>
                          <div className="mt-1 text-sm text-muted">
                            Actual: {m.actualDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ borderLeft: "2px solid var(--terracotta)", paddingLeft: "1.5rem" }}>
                  <div
                    className="font-serif text-foreground"
                    style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}
                  >
                    Construction progress
                  </div>
                  <div className="mt-1 text-xs tracking-wide text-muted uppercase">
                    <PendingVerificationPulse>Verification pending</PendingVerificationPulse>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted prose-constrained">
                    Project milestones and dated site photographs will appear
                    here after they have been verified and approved for publication.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. STORIES ──────────────────────────────────────────────── */}
      <section
        className="bg-background py-24 sm:py-32"
        style={{ borderTop: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between animate-fade-in-up opacity-0">
            <div className="max-w-2xl">
              {/* Section headline */}
              <h2
                className="font-serif text-foreground"
                style={{
                  fontSize: "var(--text-section)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.025em",
                }}
              >
                Stories
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">
                Real names, project and unit numbers, and documents that match
                the timeline.
              </p>
            </div>
            <Link href="/stories" className="btn-secondary pb-4">
              Explore all stories
            </Link>
          </div>

          <div className="mt-16 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStories.length === 0 ? (
              <div className="p-8 sm:col-span-2 lg:col-span-3" style={{ border: "1px solid var(--hairline)" }}>
                <div className="text-sm font-medium text-foreground">No verified stories published yet.</div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Case studies will appear after client approval and supporting
                  evidence are available.
                </p>
              </div>
            ) : featuredStories.map((s, i) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="group flex flex-col p-8 animate-fade-in-up opacity-0 hover:bg-surface"
                style={{
                  animationDelay: `${i * 120}ms`,
                  border: "1px solid var(--hairline)",
                  marginLeft: i > 0 ? "-1px" : undefined,
                  transition: "background-color 200ms ease",
                }}
              >
                <div className="w-full mb-6">
                  <PhotoPlaceholder
                    type="building"
                    label={`Handover - ${s.name}`}
                    aspectRatio="video"
                    src={s.photo ?? undefined}
                  />
                </div>
                <div
                  className="font-serif text-foreground group-hover:text-terracotta transition-colors"
                  style={{
                    fontSize: "var(--text-card)",
                    lineHeight: "1.2",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.headline}
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  {s.name} · {s.project} · {s.unit}
                </div>
                <div className="mt-6 text-sm leading-relaxed text-muted prose-constrained flex-1">
                  {s.summary}
                </div>
                <div className="mt-6 btn-secondary self-start" style={{ fontSize: "0.75rem" }}>
                  Read story
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CLOSE CTA ────────────────────────────────────────────── */}
      <section
        className="section-charcoal w-full py-28 sm:py-36"
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 text-center animate-fade-in-up opacity-0">
          {/* Section-scale headline on dark — dramatic, editorial */}
          <h2
            className="font-serif"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
              color: "var(--sand)",
            }}
          >
            Verify the proof,
            <br />
            then book a visit.
          </h2>
          <p
            className="mt-8 text-lg leading-relaxed mx-auto prose-constrained"
            style={{ color: "var(--charcoal-muted)", maxWidth: "var(--max-prose)" }}
          >
            We&apos;ll share RERA registration, approvals, cost sheets, and the
            latest dated progress photos for the project you&apos;re considering —
            before you ever set foot on site.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a site visit
            </Link>
            <Link href="/transparency" className="btn-secondary-light">
              View transparency page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Data ────────────────────────────────────────────────────────────
──────────────────────────────────────────────────────────────────── */
const pillars = [
  {
    num: "01",
    title: "Proof of existence",
    body: "Dated site photographs and construction records are published with verified project information.",
    evidence: "Site records · dated imagery",
    thumbnailType: "building",
    image: "/images/trust-pillars/proof-of-existence.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
    ),
  },
  {
    num: "02",
    title: "Proof of delivery",
    body: "Completed-project records and handover evidence are published after verification.",
    evidence: "Handover records · completion evidence",
    thumbnailType: "building",
    image: "/images/trust-pillars/proof-of-delivery.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
    ),
  },
  {
    num: "03",
    title: "Proof of legitimacy",
    body: "Company identifiers and approvals are shown when supported by published records.",
    evidence: "Regulatory records · approvals",
    thumbnailType: "document",
    image: "/images/trust-pillars/proof-of-legitimacy.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M20 13c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3 8 3v8z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
  },
  {
    num: "04",
    title: "Proof of transparency",
    body: "Pricing, floor plans, cost sheets and agreements are published when approved documents are available.",
    evidence: "Project documents · commercial records",
    thumbnailType: "document",
    image: "/images/trust-pillars/proof-of-transparency.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
    ),
  },
  {
    num: "05",
    title: "Proof of people",
    body: "People accountable for design and delivery are presented with approved professional information.",
    evidence: "Profiles · professional records",
    thumbnailType: "portrait",
    image: "/images/trust-pillars/proof-of-people.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
];

function statusLabel(status: string) {
  if (status === "done") return "Done";
  if (status === "in_progress") return "In progress";
  if (status === "delayed") return "Delayed";
  return "Planned";
}
