import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, stories } from "@/lib/stories";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};

  return {
    title: `${story.name} · ${story.project}`,
    description: story.summary,
    openGraph: {
      title: `${story.name} · ${story.project}`,
      description: story.summary,
      images: ["/posters/hero-tower-poster.svg"],
    },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const proof = story.proof ?? [];

  return (
    <main className="flex-1 bg-background">
      {/* Page header */}
      <div
        className="bg-surface"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Link
            href="/stories"
            className="text-xs font-semibold uppercase tracking-widest text-terracotta hover:text-terracotta-strong transition-colors"
          >
            ← Back to stories
          </Link>
          <h1
            className="mt-6 font-serif text-foreground"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
          >
            {story.headline}
          </h1>
          <p className="mt-4 text-base text-muted">
            {story.name} · {story.project} · {story.unit}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-3">
          {/* Main content body */}
          <div
            className="p-8 lg:col-span-2 flex flex-col justify-between"
            style={{ border: "1px solid var(--hairline)" }}
          >
            <div>
              <h2
                className="font-serif text-foreground"
                style={{
                  fontSize: "var(--text-card)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}
              >
                What was promised vs delivered
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted" style={{ maxWidth: "var(--max-prose)" }}>
                {story.summary}
              </p>
              <div
                className="mt-8 p-6"
                style={{ border: "1px solid var(--hairline)", background: "var(--surface-muted)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
                  Timeline verification
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Timeline details will be published after the client story and supporting documents have been verified.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <PhotoPlaceholder
                type="building"
                label="Handover day ceremony photo"
                aspectRatio="video"
              />
            </div>
          </div>

          {/* Proof sidebar */}
          <aside
            className="p-8 flex flex-col justify-between"
            style={{ border: "1px solid var(--hairline)", borderLeft: "none" }}
          >
            <div>
              <h2
                className="font-serif text-foreground"
                style={{
                  fontSize: "var(--text-card)",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}
              >
                Verification Proof
              </h2>
              {proof.length === 0 ? (
                <p className="mt-4 text-sm text-muted">No proof documents referenced yet.</p>
              ) : (
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {proof.map((p) => (
                    <li
                      key={p}
                      className="pb-2"
                      style={{ borderBottom: "1px solid var(--hairline)" }}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-8">
              <PhotoPlaceholder type="document" label="Registered Sale Deed Registry Preview" aspectRatio="portrait" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
