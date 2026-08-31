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
      images: story.image ? [story.image] : ["/posters/hero-tower-poster.svg"],
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
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <Link href="/stories" className="text-xs font-semibold uppercase tracking-widest text-terracotta hover:text-terracotta-strong transition-colors">
            ← Back to stories
          </Link>
          <div className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">{story.sourceLabel}</div>
          <h1 className="mt-3 font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
            {story.headline}
          </h1>
          <p className="mt-4 text-base text-muted">{story.project} · {story.unit} · {story.location}</p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-3">
          <div className="p-8 lg:col-span-2" style={{ border: "1px solid var(--hairline)" }}>
            {story.image ? (
              <PhotoPlaceholder
                type="building"
                label={story.photoAlt ?? story.headline}
                aspectRatio="video"
                src={story.image}
                caption={story.photoCredit ?? "Real photograph · illustrative visual"}
              />
            ) : null}

            <div className="mt-10">
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Public-source story</div>
              <h2 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">What the source says</h2>
              <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
                {story.summary}
              </p>
              <p className="mt-6 text-xs leading-5 text-muted">
                This page is an editorial summary of publicly available material. It is not presented as a customer testimonial. The photograph is a real Unsplash image used for visual context and is not a photograph of the customer or project.
              </p>
            </div>
          </div>

          <aside className="p-8" style={{ border: "1px solid var(--hairline)", borderLeft: "none" }}>
            <h2 className="font-serif text-2xl text-foreground">Verification trail</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {proof.map((p) => (
                <li key={p} className="border-b border-[var(--hairline)] pb-3">{p}</li>
              ))}
            </ul>

            <div className="mt-8 border-t border-[var(--hairline)] pt-6">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-terracotta">Photo provenance</div>
              <p className="mt-2 text-sm leading-6 text-muted">{story.photoCredit ?? "Real photograph · illustrative visual"}</p>
              {story.photoSource ? (
                <a href={story.photoSource} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.1em] text-foreground underline decoration-[var(--hairline)] underline-offset-4 hover:text-terracotta">
                  View photo source →
                </a>
              ) : null}
            </div>

            {story.sourceUrl ? (
              <div className="mt-8 border-t border-[var(--hairline)] pt-6">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-terracotta">Evidence source</div>
                <a href={story.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-foreground underline decoration-[var(--hairline)] underline-offset-4 hover:text-terracotta">
                  {story.sourceLabel ?? "Open source record"} →
                </a>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </main>
  );
}
