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
    "Aakar Developers, Pune. Explore published project records, construction information, and company documentation.",
  openGraph: {
    title: "Aakar Developers · Pune",
    description:
      "Explore published project records, construction information, and company documentation.",
    images: [
      {
        url: "https://housing-images.n7net.in/4a8b08e8/0f3f0b2a0b4f4c2b8a7d5c2e1f4d8a6b_640_480.jpg",
        width: 1200,
        height: 630,
        alt: "Balaji Empire, Aakar Developers, Vikas Nagar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Developers · Pune",
    description:
      "Explore published project records, construction information, and company documentation.",
    images: [
      "https://housing-images.n7net.in/4a8b08e8/0f3f0b2a0b4f4c2b8a7d5c2e1f4d8a6b_640_480.jpg",
    ],
  },
};

export default function Home() {
  const featured = projects[0] ?? null;
  const active = projects.filter((p) => p.status === "under_construction");
  const publishedProgress = active.filter((p) => p.milestones.length > 0);
  const featuredStories = stories.slice(0, 3);

  return (
    <main className="flex-1">
      <Hero />

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase mb-4 animate-fade-in-up opacity-0" style={{ color: "var(--terracotta)", opacity: 0.8 }}>
            Transparency by design
          </div>
          <div className="max-w-2xl animate-fade-in-up opacity-0" style={{ animationDelay: "100ms" }}>
            <h2 className="font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
              Five pillars of trust
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">
              Every commitment is supported by a record you can inspect. Five principles shape how Aakar presents projects, progress, people, and proof.
            </p>
          </div>

          <div className="mt-16 sm:mt-24 relative flex flex-col gap-4 sm:gap-6">
            {pillars.map((p, i) => (
              <div key={p.title} className="group relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 p-6 sm:p-8 animate-fade-in-up opacity-0 transition-all duration-300 ease-out bg-surface hover:bg-[rgba(0,0,0,0.015)]" style={{ animationDelay: `${(i + 2) * 100}ms`, border: "1px solid var(--hairline)", borderRadius: "2px" }}>
                {i !== pillars.length - 1 && <div className="hidden sm:flex absolute left-13 -bottom-6 w-px h-6 items-center justify-center" style={{ background: "var(--hairline)", zIndex: 0 }}><div className="w-1.5 h-1.5 rounded-full opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" style={{ backgroundColor: "var(--terracotta)" }} /></div>}
                <div className="relative shrink-0 flex items-center justify-center w-10 sm:h-14 bg-surface" style={{ zIndex: 2 }}><div className="font-serif transition-colors duration-300 group-hover:text-terracotta" style={{ fontSize: "1.75rem", lineHeight: "1", color: "var(--terracotta)", opacity: 0.6 }}>{p.num}</div></div>
                <div className="shrink-0 flex items-center justify-center transition-all duration-300 ease-out sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5" style={{ width: "56px", height: "56px", border: "1px solid var(--hairline)", color: "var(--terracotta)", backgroundColor: "rgba(255,255,255,0.4)" }}><FivePillarsIconAccent>{p.icon}</FivePillarsIconAccent></div>
                <div className="flex-1 transition-transform duration-300 ease-out sm:group-hover:translate-x-1">
                  <h3 className="font-serif text-foreground transition-colors duration-300" style={{ fontSize: "1.35rem", lineHeight: "1.2", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted prose-constrained max-w-lg">{p.body}</p>
                </div>
                <div className="sm:w-48 shrink-0 mt-6 sm:mt-0 flex flex-col transition-opacity duration-300 sm:opacity-70 sm:group-hover:opacity-100 w-full">
                  <div className="mb-5 w-full h-24"><PhotoPlaceholder type={p.thumbnailType as "building" | "document" | "portrait"} label={p.evidence} className="w-full h-full" aspectRatio="auto" src={p.image} /></div>
                  <div className="text-[0.6rem] font-semibold tracking-widest uppercase mb-1.5" style={{ color: "var(--terracotta)" }}>Evidence</div>
                  <div className="text-[0.75rem] text-muted leading-tight" style={{ borderTop: "1px solid var(--hairline)", paddingTop: "0.5rem" }}>{p.evidence}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: "700ms", border: "1px solid var(--hairline)", borderLeft: "2px solid var(--terracotta)", backgroundColor: "rgba(255,255,255,0.4)", borderRadius: "2px" }}>
            <div><h3 className="font-serif text-[1.35rem] text-foreground mb-2">Built around proof.</h3><p className="text-sm text-muted max-w-md leading-relaxed">Explore the records, documents, project information and people behind every published claim.</p></div>
            <Link href="/transparency" className="group flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-terracotta shrink-0"><span className="flex flex-col text-left sm:text-right"><span className="mb-0.5">Explore transparency</span><span className="text-[0.65rem] text-muted font-normal uppercase tracking-wider group-hover:text-terracotta/70 transition-colors">View project records</span></span><span className="transition-transform group-hover:translate-x-1">→</span></Link>
          </div>
        </div>
      </section>

      <section className="section-charcoal w-full py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif animate-fade-in-up opacity-0" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.03em", color: "var(--sand)" }}>Proof, not promises.</h2>
          <p className="mt-6 text-lg leading-relaxed animate-fade-in-up opacity-0 prose-constrained" style={{ color: "var(--charcoal-muted)", animationDelay: "80ms" }}>Dated site photos, filings, milestone timelines, and handover records are published here as they are verified.</p>
          <div className="mt-16 grid grid-cols-3 animate-fade-in-up opacity-0" style={{ animationDelay: "160ms", borderTop: "1px solid rgba(200, 189, 179, 0.15)" }}>
            {[
              { label: "Established", value: "2010" },
              { label: "Public project records", value: "11" },
              { label: "Verified RERA record", value: "01" },
            ].map((s, i) => (
              <div key={s.label} className="pt-8 pr-8" style={{ borderRight: i < 2 ? "1px solid rgba(200, 189, 179, 0.1)" : "none" }}>
                <div className="font-serif" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: "1", letterSpacing: "-0.02em", color: "var(--sand)" }}>{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest" style={{ color: "var(--charcoal-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-0">
        <div className="mx-auto w-full max-w-6xl animate-fade-in-up opacity-0" style={{ borderBottom: "1px solid var(--hairline)" }}>
          <div className="grid md:grid-cols-[55%_45%]">
            <div className="relative min-h-80 md:min-h-130 overflow-hidden flex flex-col justify-end">
              <PhotoPlaceholder type="building" label={featured?.name ?? "Balaji Empire"} aspectRatio="auto" className="absolute inset-0 h-full w-full border-none!" src={featured?.heroImage ?? undefined} />
              <div className="absolute bottom-0 left-0 z-10" style={{ background: "var(--terracotta)", color: "#fff", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.5rem 1rem" }}>
                {featured?.status === "completed" ? "Completed · public record" : "Project record"}
              </div>
            </div>
            <div className="flex flex-col justify-center px-8 py-16 md:px-12 md:py-0">
              <div className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--terracotta)" }}>Featured project</div>
              <h3 className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2", letterSpacing: "-0.01em" }}>{featured ? featured.name : "Balaji Empire"}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted prose-constrained">{featured ? <>{featured.name}, {featured.location} — published project information and verified public records are available for review.</> : <>Published project information and verified public records are available for review.</>}</p>
              <div className="mt-10 flex flex-col gap-5"><Link href="/projects" className="btn-primary self-start">Explore projects</Link><Link href="/contact" className="btn-secondary self-start">Talk to us</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32" style={{ borderTop: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start animate-fade-in-up opacity-0">
            <div><h2 className="font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>Construction progress</h2><p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">Promised vs actual dates, milestone by milestone. Dated site photos belong next to every stage — you can verify progress before stepping on site.</p><div className="mt-10 flex flex-col sm:flex-row gap-5"><Link href="/construction-progress" className="btn-primary">View progress</Link><Link href="/contact" className="btn-secondary">Ask a question</Link></div></div>
            <div className="space-y-0">{publishedProgress.length > 0 ? publishedProgress.slice(0, 2).map((p) => <div key={p.slug} className="pb-10 mb-10" style={{ borderBottom: "1px solid var(--hairline)" }}><div className="text-xs uppercase tracking-widest text-terracotta">{p.name}</div><div className="mt-3 text-sm text-muted">{p.milestones.length} published milestones</div></div>) : <div className="p-8" style={{ border: "1px solid var(--hairline)" }}><div className="text-xs font-semibold uppercase tracking-widest text-terracotta"><PendingVerificationPulse>Progress records pending</PendingVerificationPulse></div><p className="mt-3 text-sm leading-6 text-muted">No active construction project currently has a published milestone timeline.</p></div>}</div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32" style={{ borderTop: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="page-header-split"><div><div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Stories</div><h2 className="mt-3 font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05" }}>Buyer stories</h2></div><Link href="/stories" className="btn-secondary">Read all stories</Link></div>
          <div className="mt-12 grid gap-0 md:grid-cols-3">{featuredStories.map((story) => <article key={story.slug} className="p-6 min-w-0" style={{ border: "1px solid var(--hairline)" }}><PhotoPlaceholder type="portrait" label={story.name} caption="Published story visual" aspectRatio="video" src={story.image} /><div className="mt-6 text-xs uppercase tracking-widest text-terracotta">{story.location}</div><h3 className="mt-2 font-serif text-xl text-foreground">{story.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{story.excerpt}</p><Link href={`/stories/${story.slug}`} className="btn-secondary mt-5">Read story</Link></article>)}</div>
        </div>
      </section>
    </main>
  );
}

const pillars = [
  { num: "01", title: "Identity", body: "Company and project identifiers are published with source records wherever available.", evidence: "Company identifiers", thumbnailType: "document", image: "/images/trust-pillars/proof-of-legitimacy.jpeg", icon: "identity" },
  { num: "02", title: "Progress", body: "Construction milestones are presented with dates and supporting records when published.", evidence: "Milestone record", thumbnailType: "building", image: "/images/trust-pillars/proof-of-existence.jpeg", icon: "progress" },
  { num: "03", title: "Delivery", body: "Published project information stays separate from claims that still require primary verification.", evidence: "Project record", thumbnailType: "building", image: "/images/trust-pillars/proof-of-delivery.jpeg", icon: "delivery" },
  { num: "04", title: "Documents", body: "The document library distinguishes available records from materials awaiting verification.", evidence: "Document library", thumbnailType: "document", image: "/images/trust-pillars/proof-of-legitimacy.jpeg", icon: "documents" },
  { num: "05", title: "Accountability", body: "People and professional information are published only when the underlying record is ready to support it.", evidence: "People & credentials", thumbnailType: "portrait", image: "/images/trust-pillars/proof-of-people.jpeg", icon: "accountability" },
];