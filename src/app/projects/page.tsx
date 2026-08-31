import Link from "next/link";
import { projects } from "@/lib/projects";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata = {
  title: "Projects",
  description:
    "Explore Aakar Developers projects with clear status, published details, and transparent verification notes.",
  openGraph: {
    title: "Projects · Aakar Developers",
    description:
      "Explore Aakar Developers projects with clear status, published details, and transparent verification notes.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects · Aakar Developers",
    description:
      "Explore Aakar Developers projects with clear status, published details, and transparent verification notes.",
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
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-terracotta">
            Aakar Developers · Pune
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1
                className="font-serif text-foreground"
                style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
              >
                Our projects
              </h1>
              <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
                A considered portfolio of residential developments, with published details and clear notes wherever independent verification is still pending.
              </p>
            </div>
            <div className="shrink-0 text-sm text-muted">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"} shown
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
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
                  borderBottom: active ? "2px solid var(--terracotta)" : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {t.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <div className="p-8 text-center" style={{ border: "1px solid var(--hairline)" }}>
              <div className="text-sm font-medium text-foreground">No projects found matching the filter.</div>
              <p className="mt-2 text-sm text-muted">Try a different status filter or check back soon.</p>
            </div>
          ) : filtered.length === 1 ? (
            (() => {
              const p = filtered[0];
              return (
                <div className="grid overflow-hidden md:grid-cols-2" style={{ border: "1px solid var(--hairline)", background: "var(--surface)" }}>
                  <PhotoPlaceholder
                    type="building"
                    label={`${p.name} · architectural reference`}
                    aspectRatio="auto"
                    className="h-full min-h-80 border-none! md:min-h-115"
                    src={p.heroImage}
                    caption="Architectural reference · not construction evidence"
                  />
                  <div className="flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <span className="bg-terracotta/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-terracotta">
                        {statusLabel(p.status)}
                      </span>
                      <h2 className="mt-3 font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>
                        {p.name}
                      </h2>
                      <p className="mt-2 text-sm text-muted">{p.location}</p>
                      <p className="mt-5 max-w-prose text-sm leading-6 text-muted">{p.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.highlights.map((highlight) => (
                          <li key={highlight} className="border border-hairline px-3 py-2 text-xs text-muted">{highlight}</li>
                        ))}
                      </ul>
                      <dl className="mt-8 grid gap-4 text-sm" style={{ borderTop: "1px solid var(--hairline)", paddingTop: "1.5rem" }}>
                        <div className="flex justify-between gap-6 pb-2.5" style={{ borderBottom: "1px solid var(--hairline)" }}>
                          <dt className="text-muted">Handover</dt>
                          <dd className="font-semibold text-foreground">{p.handover}</dd>
                        </div>
                        <div className="flex justify-between gap-6 pb-2.5" style={{ borderBottom: "1px solid var(--hairline)" }}>
                          <dt className="text-muted">Pricing</dt>
                          <dd className="text-right font-semibold text-foreground">{p.priceBand}</dd>
                        </div>
                        <div className="flex justify-between gap-6">
                          <dt className="text-muted">MahaRERA ID</dt>
                          <dd className="font-semibold text-foreground">{p.rera}</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4 border-t border-hairline pt-6">
                      <Link href={`/projects/${p.slug}`} className="btn-primary">View project details</Link>
                      <Link href="/contact" className="btn-secondary self-center">Book a site visit</Link>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex min-w-0 flex-col overflow-hidden bg-surface transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(17,35,32,0.10)]"
                  style={{ border: "1px solid var(--hairline)" }}
                >
                  <div className="relative overflow-hidden">
                    <PhotoPlaceholder
                      type="building"
                      label={`${p.name} · architectural reference`}
                      aspectRatio="video"
                      className="border-none! transition-transform duration-500 group-hover:scale-[1.015]"
                      src={p.heroImage}
                      caption="Architectural reference · not construction evidence"
                    />
                    <span className="absolute left-4 top-4 z-20 bg-charcoal/90 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-sand">
                      {statusLabel(p.status)}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h2 className="font-serif text-foreground transition-colors group-hover:text-terracotta" style={{ fontSize: "var(--text-card)", lineHeight: "1.15" }}>
                      {p.name}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted">{p.location}</p>
                    <div className="mt-5 border-t border-hairline pt-5">
                      <div className="flex items-start justify-between gap-4 text-sm">
                        <span className="text-muted">Handover</span>
                        <span className="max-w-[65%] text-right font-semibold text-foreground">{p.handover}</span>
                      </div>
                      <div className="mt-3 flex items-start justify-between gap-4 text-sm">
                        <span className="text-muted">Pricing</span>
                        <span className="max-w-[65%] text-right font-semibold text-foreground">{p.priceBand}</span>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">View project</span>
                      <span aria-hidden="true" className="text-lg text-foreground transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-4 border border-hairline bg-surface-muted p-6 md:grid-cols-[1.2fr_repeat(3,1fr)] md:p-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-terracotta">Media standard</p>
            <h3 className="mt-2 font-serif text-xl text-foreground">Clear distinction between visuals and evidence.</h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-muted">Project visuals on this page are architectural references. They are presented for visual context and are not represented as dated construction photographs.</p>
          </div>
          <div className="border-t border-hairline pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><div className="text-2xl font-serif text-foreground">{projects.length}</div><div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted">Published project records</div></div>
          <div className="border-t border-hairline pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><div className="text-2xl font-serif text-foreground">1</div><div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted">RERA record currently published</div></div>
          <div className="border-t border-hairline pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0"><div className="text-2xl font-serif text-foreground">Open</div><div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted">Verification status</div></div>
        </div>
      </div>
    </main>
  );
}
