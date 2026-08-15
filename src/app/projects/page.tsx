import Link from "next/link";
import { projects } from "@/lib/projects";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata = {
  title: "Projects",
  description:
    "Pricing, handover timelines, and proof artifacts are surfaced per project. No hidden claims.",
  openGraph: {
    title: "Projects · Aakar Developers",
    description:
      "Pricing, handover timelines, and proof artifacts are surfaced per project. No hidden claims.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Aakar Developers",
    description:
      "Pricing, handover timelines, and proof artifacts are surfaced per project. No hidden claims.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

type Props = {
  searchParams: Promise<{ status?: string }>;
};

function statusLabel(status: string) {
  if (status === "under_construction") return "Under construction";
  if (status === "completed") return "Completed";
  if (status === "upcoming") return "Upcoming";
  return status;
}

function statusHref(status: string | null) {
  if (!status) return "/projects";
  return `/projects?status=${encodeURIComponent(status)}`;
}

export default async function ProjectsPage({ searchParams }: Props) {
  const { status } = await searchParams;
  const normalized =
    status === "under_construction" || status === "completed" || status === "upcoming"
      ? status
      : null;

  const filtered = normalized
    ? projects.filter((p) => p.status === normalized)
    : projects;

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
            Projects
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Pricing, handover timelines, and proof artifacts are surfaced per
            project. No hidden claims.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-0" style={{ borderBottom: "1px solid var(--hairline)" }}>
          {[
            { key: null, label: "All" },
            { key: "under_construction", label: "Under construction" },
            { key: "completed", label: "Completed" },
            { key: "upcoming", label: "Upcoming" },
          ].map((t) => {
            const active = (t.key ?? null) === normalized;
            return (
              <Link
                key={t.label}
                href={statusHref(t.key)}
                className="px-5 py-3 text-sm font-medium tracking-wide transition-colors"
                style={{
                  color: active ? "var(--terracotta)" : "var(--muted)",
                  borderBottom: active
                    ? "2px solid var(--terracotta)"
                    : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {t.label}
              </Link>
            );
          })}
        </div>

        {/* Dynamic Project Spotlight (Single Project or Grid fallback) */}
        <div className="mt-12">
          {filtered.length === 0 ? (
            <div
              className="p-8 text-center"
              style={{ border: "1px solid var(--hairline)" }}
            >
              <div className="text-sm font-medium text-foreground">
                No projects found matching the filter.
              </div>
              <p className="mt-2 text-sm text-muted">
                Try a different status filter or check back soon.
              </p>
            </div>
          ) : filtered.length === 1 ? (
            // Single project spotlight layout (50/50 split)
            (() => {
              const p = filtered[0];
              return (
                <div
                  className="grid md:grid-cols-2 gap-0"
                  style={{ border: "1px solid var(--hairline)", background: "var(--surface)" }}
                >
                  {/* Existing approved visual asset; replace with a project still when supplied. */}
                  <PhotoPlaceholder
                    type="building"
                    label={`${p.name} - architectural study`}
                    aspectRatio="auto"
                    className="h-full min-h-80 md:min-h-115 border-none!"
                    src={p.heroImage ?? "/images/generated/aakar-heights-hero.svg"}
                  />

                  {/* Right: Project details and actions */}
                  <div className="flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className="text-[10px] font-semibold uppercase tracking-widest text-terracotta"
                            style={{
                              background: "rgba(154,66,34,0.08)",
                              padding: "0.25rem 0.625rem",
                            }}
                          >
                            {statusLabel(p.status)}
                          </span>
                          <h2
                            className="mt-3 font-serif text-foreground"
                            style={{
                              fontSize: "var(--text-card)",
                              lineHeight: "1.2",
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {p.name}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-muted">{p.location}</p>
                      <p className="mt-5 max-w-prose text-sm leading-6 text-muted">{p.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.highlights.map((highlight) => (
                          <li key={highlight} className="border border-hairline px-3 py-2 text-xs text-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <dl
                        className="mt-8 grid gap-4 text-sm"
                        style={{ borderTop: "1px solid var(--hairline)", paddingTop: "1.5rem" }}
                      >
                        <div className="flex justify-between gap-6 pb-2.5" style={{ borderBottom: "1px solid var(--hairline)" }}>
                          <dt className="text-muted">Expected handover</dt>
                          <dd className="text-foreground font-semibold">{p.handover}</dd>
                        </div>
                        <div className="flex justify-between gap-6 pb-2.5" style={{ borderBottom: "1px solid var(--hairline)" }}>
                          <dt className="text-muted">Pricing</dt>
                          <dd className="text-foreground font-semibold">{p.priceBand}</dd>
                        </div>
                        <div className="flex justify-between gap-6">
                          <dt className="text-muted">MahaRERA ID</dt>
                          <dd className="text-foreground font-semibold">{p.rera}</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-8 pt-6 flex flex-wrap gap-4" style={{ borderTop: "1px solid var(--hairline)" }}>
                      <Link href={`/projects/${p.slug}`} className="btn-primary">
                        View project details
                      </Link>
                      <Link href="/contact" className="btn-secondary" style={{ alignSelf: "center" }}>
                        Book a site visit
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            // Grid layout fallback (for when there are multiple projects)
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex flex-col p-8 transition-colors hover:bg-surface"
                  style={{
                    border: "1px solid var(--hairline)",
                    marginLeft: i % 3 > 0 ? "-1px" : undefined,
                  }}
                >
                  <div className="w-full mb-6">
                    <PhotoPlaceholder type="building" label={`${p.name} Render`} aspectRatio="video" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="font-serif text-foreground group-hover:text-terracotta transition-colors"
                      style={{
                        fontSize: "var(--text-card)",
                        lineHeight: "1.2",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.name}
                    </div>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-widest text-terracotta shrink-0"
                      style={{
                        background: "rgba(154,66,34,0.08)",
                        padding: "0.25rem 0.625rem",
                      }}
                    >
                      {statusLabel(p.status)}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted">{p.location}</div>

                  <dl
                    className="mt-8 grid gap-3 text-sm flex-1"
                    style={{ borderTop: "1px solid var(--hairline)", paddingTop: "1.25rem" }}
                  >
                    <div className="flex justify-between">
                      <dt className="text-muted">Handover</dt>
                      <dd className="text-foreground font-semibold">{p.handover}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted">Pricing</dt>
                      <dd className="text-foreground font-semibold">{p.priceBand}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 btn-secondary self-start" style={{ fontSize: "0.75rem" }}>
                    View project
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
