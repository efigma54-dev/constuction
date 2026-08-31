import Link from "next/link";
import { stories } from "@/lib/stories";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata = {
  title: "Stories",
  description:
    "Full case studies, with real names and unit numbers. No generic quotes.",
  openGraph: {
    title: "Stories · Aakar Developers",
    description:
      "Full case studies, with real names and unit numbers. No generic quotes.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories · Aakar Developers",
    description:
      "Full case studies, with real names and unit numbers. No generic quotes.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function StoriesPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Customer evidence</p>
          <h1 className="mt-4 font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
            Stories
          </h1>
          <p className="mt-5 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Approved project case studies are published only after client consent and supporting evidence are available.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {stories.length === 0 ? (
          <div className="relative overflow-hidden border border-[var(--hairline)] bg-surface p-8 sm:p-12">
            <div className="absolute inset-y-0 left-0 w-1 bg-[var(--terracotta)]" />
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Stories on hold</p>
              <h2 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">Evidence before publication.</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                No customer story is currently published. This keeps names, photographs, quotations, and project details off the site until the required consent and supporting records are ready.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/transparency" className="btn-secondary">See verification standards</Link>
                <Link href="/contact" className="btn-primary">Ask about a project</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="group flex flex-col p-8 transition-colors hover:bg-surface"
                style={{
                  border: "1px solid var(--hairline)",
                  marginLeft: i % 3 > 0 ? "-1px" : undefined,
                  marginTop: i >= 3 ? "-1px" : undefined,
                }}
              >
                <div className="mb-6 w-full">
                  <PhotoPlaceholder type="building" label={`Handover - ${s.name}`} aspectRatio="video" src={s.photo ?? undefined} />
                </div>
                <div className="font-serif text-foreground group-hover:text-terracotta transition-colors" style={{ fontSize: "var(--text-card)", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                  {s.headline}
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">{s.name} · {s.project} · {s.unit}</div>
                <div className="mt-6 flex-1 text-sm leading-relaxed text-muted" style={{ maxWidth: "var(--max-prose)" }}>{s.summary}</div>
                <div className="mt-6 btn-secondary self-start" style={{ fontSize: "0.75rem" }}>Read story</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
