import Link from "next/link";
import { projects } from "@/lib/projects";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata = {
  title: "Construction Progress",
  description:
    "Milestones are shown with promised vs actual dates. Each stage should eventually include dated site photos and documents you can verify.",
  openGraph: {
    title: "Construction Progress · Aakar Developers",
    description:
      "Milestones are shown with promised vs actual dates. Each stage should eventually include dated site photos and documents you can verify.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Progress · Aakar Developers",
    description:
      "Milestones are shown with promised vs actual dates. Each stage should eventually include dated site photos and documents you can verify.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

function statusLabel(status: string) {
  if (status === "done") return "Done";
  if (status === "in_progress") return "In progress";
  if (status === "delayed") return "Delayed";
  return "Planned";
}

function statusColor(status: string): string {
  if (status === "done") return "var(--foreground)";
  if (status === "in_progress") return "var(--terracotta)";
  if (status === "delayed") return "var(--muted)";
  return "var(--sand-strong)";
}

export default function ConstructionProgressPage() {
  const active = projects.filter((p) => p.status === "under_construction");

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
            Construction progress
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Milestones are shown with promised vs actual dates. Dated site
            photos and documents belong next to every stage — you can verify
            progress before stepping on site.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wide uppercase text-muted">
          <span className="font-bold text-foreground">Legend</span>
          {[
            { label: "Planned", color: "var(--sand-strong)" },
            { label: "In progress", color: "var(--terracotta)" },
            { label: "Done", color: "var(--foreground)" },
            { label: "Delayed", color: "var(--muted)" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: item.color,
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {item.label}
            </span>
          ))}
        </div>

        {active.length === 0 ? (
          <div
            className="mt-10 p-8"
            style={{ border: "1px solid var(--hairline)" }}
          >
            <div className="text-sm font-medium text-foreground">
              No active projects listed yet.
            </div>
            <p className="mt-2 text-sm leading-6 text-muted">
              Add under-construction projects and milestone dates in{" "}
              <code>src/lib/projects.ts</code> to populate this section with
              live progress data.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-0">
            {active.map((p) => (
              <section
                key={p.slug}
                className="py-10"
                style={{ borderBottom: "1px solid var(--hairline)" }}
              >
                {/* Project header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    {p.milestones.length > 0 &&
                    p.milestones.every((m) => m.status === "done") ? (
                      <div
                        className="mb-4 inline-flex items-center gap-2 text-xs font-medium"
                        style={{
                          border: "1px solid var(--hairline)",
                          padding: "0.375rem 0.75rem",
                        }}
                      >
                        Handed over
                        <span className="text-muted">All milestones complete.</span>
                      </div>
                    ) : null}
                    <div
                      className="font-serif text-foreground"
                      style={{
                        fontSize: "var(--text-card)",
                        lineHeight: "1.2",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm text-muted">{p.location}</div>
                    <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
                      <span>Handover: {p.handover}</span>
                      <span
                        style={{
                          paddingLeft: "1rem",
                          borderLeft: "1px solid var(--hairline)",
                        }}
                      >
                        RERA: {p.rera}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:justify-end shrink-0">
                    <Link href={`/projects/${p.slug}`} className="btn-primary" style={{ height: "2.75rem" }}>
                      View project
                    </Link>
                    <Link href="/contact" className="btn-secondary" style={{ alignSelf: "center" }}>
                      Book a visit
                    </Link>
                  </div>
                </div>

                {/* Milestones timeline */}
                {p.milestones.length === 0 ? (
                  <div className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
                    {["Excavation", "Foundation", "Structure", "Finishing", "Handover"].map((stage, index) => (
                      <div key={stage} className="p-5" style={{ border: "1px solid var(--hairline)", marginLeft: index > 0 ? "-1px" : undefined }}>
                        <div className="flex aspect-[4/3] items-center justify-center bg-surface-muted" style={{ border: "1px solid var(--hairline)" }}>
                          <span className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted">Media<br />not published</span>
                        </div>
                        <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-terracotta">{stage}</div>
                        <div className="mt-2 text-sm font-medium text-foreground">Verification pending</div>
                        <p className="mt-2 text-xs leading-5 text-muted">Dates and stage photography will be added when approved.</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ol className="mt-10 space-y-0">
                    {p.milestones.map((m, mi) => (
                      <li
                        key={m.stage}
                        className="grid sm:grid-cols-[1fr_auto] gap-8 py-8"
                        style={{
                          borderTop: mi === 0 ? "1px solid var(--hairline)" : "1px solid var(--hairline)",
                        }}
                      >
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                          {/* Published milestone media appears here when verified. */}
                          <div className="w-full sm:w-44 shrink-0">
                            <PhotoPlaceholder
                              type="building"
                              label={`${p.name} - ${m.stage}`}
                              aspectRatio="video"
                              src={m.photos?.[0] ?? undefined}
                            />
                          </div>

                          <div>
                            <div className="flex items-center gap-3">
                              <span
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: statusColor(m.status),
                                  display: "inline-block",
                                  flexShrink: 0,
                                }}
                                aria-hidden="true"
                              />
                              <div className="text-sm font-semibold text-foreground">
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
                            <div className="mt-2 text-sm text-muted pl-4.5">
                              {m.detail}
                            </div>
                          </div>
                        </div>

                        <dl className="grid gap-2 text-sm sm:text-right shrink-0">
                          <div>
                            <dt className="text-muted text-xs uppercase tracking-wide">Promised</dt>
                            <dd className="font-semibold text-foreground">
                              {m.promisedDate}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-muted text-xs uppercase tracking-wide">Actual</dt>
                            <dd className="font-semibold text-foreground">
                              {m.actualDate}
                            </dd>
                          </div>
                        </dl>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
