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
      {/* Page header */}
      <div
        className="bg-surface"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h1
            className="font-serif text-foreground"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
          >
            Stories
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Approved project case studies will be published after client
            consent and verification.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {stories.length === 0 ? (
            <div
              className="p-8 sm:col-span-2 lg:col-span-3"
              style={{ border: "1px solid var(--hairline)" }}
            >
              <div className="text-sm font-medium text-foreground">
                Verified project stories
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Approved customer stories, project imagery, and supporting
                documents will appear here when available.
              </p>
            </div>
          ) : (
            stories.map((s, i) => (
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
                <div className="mt-6 text-sm leading-relaxed text-muted flex-1" style={{ maxWidth: "var(--max-prose)" }}>
                  {s.summary}
                </div>
                <div
                  className="mt-6 btn-secondary self-start"
                  style={{ fontSize: "0.75rem" }}
                >
                  Read story
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
