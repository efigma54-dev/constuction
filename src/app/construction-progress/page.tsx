import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Construction Progress",
  description: "Aakar Developers publishes construction milestones only after the supporting records and dates have been verified.",
  openGraph: {
    title: "Construction Progress · Aakar Developers",
    description: "Verified construction milestones and project records from Aakar Developers.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Progress · Aakar Developers",
    description: "Verified construction milestones and project records from Aakar Developers.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

const stages = [
  ["01", "Site & excavation"],
  ["02", "Foundation"],
  ["03", "Structure"],
  ["04", "Finishing"],
  ["05", "Handover"],
] as const;

export default function ConstructionProgressPage() {
  const liveProjects = projects.filter((p) => p.status === "under_construction" && p.milestones.length > 0);
  const completedRecords = projects.filter((p) => p.status === "completed" && p.milestones.length > 0);

  return (
    <main className="flex-1 bg-background">
      <header className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Construction records</p>
            <h1 className="mt-4 font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
              Construction progress
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted prose-constrained">
              Progress is published milestone by milestone. Each date, photograph, approval, and handover record should be traceable before it is presented as a project fact.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {liveProjects.length > 0 ? (
          <div className="space-y-16">
            {liveProjects.map((project) => (
              <section key={project.slug} className="border-t border-[var(--hairline)] pt-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Active project</p>
                    <h2 className="mt-3 font-serif text-foreground text-3xl">{project.name}</h2>
                    <p className="mt-2 text-sm text-muted">{project.location}</p>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="btn-secondary self-start sm:self-auto">View project</Link>
                </div>
                <div className="mt-10 space-y-0">
                  {project.milestones.map((milestone, index) => (
                    <div key={milestone.stage} className="grid gap-6 border-t border-[var(--hairline)] py-7 sm:grid-cols-[72px_1fr_auto] sm:items-start">
                      <div className="font-serif text-2xl text-terracotta">{String(index + 1).padStart(2, "0")}</div>
                      <div>
                        <h3 className="font-medium text-foreground">{milestone.stage}</h3>
                        <p className="mt-2 text-sm leading-6 text-muted">{milestone.detail}</p>
                      </div>
                      <div className="text-sm sm:text-right">
                        <div className="text-xs uppercase tracking-widest text-muted">Status</div>
                        <div className="mt-1 font-medium text-foreground">{milestone.status === "done" ? "Verified" : "Pending verification"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : null}

        {completedRecords.length > 0 ? (
          <section className={liveProjects.length > 0 ? "mt-20 border-t border-[var(--hairline)] pt-12" : ""}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Completed project records</p>
                <h2 className="mt-3 font-serif text-3xl text-foreground">Published historical milestones</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  These records describe completed projects and historical dates. They are not presented as a live construction schedule.
                </p>
              </div>
            </div>
            <div className="mt-10 space-y-10">
              {completedRecords.map((project) => (
                <article key={project.slug} className="border border-[var(--hairline)] bg-surface p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-terracotta">Completed · public record</p>
                      <h3 className="mt-2 font-serif text-2xl text-foreground">{project.name}</h3>
                      <p className="mt-1 text-sm text-muted">{project.location}</p>
                    </div>
                    <Link href={`/projects/${project.slug}`} className="btn-secondary self-start">View evidence</Link>
                  </div>
                  <div className="mt-8 grid gap-0 border-t border-[var(--hairline)] sm:grid-cols-2">
                    {project.milestones.map((milestone) => (
                      <div key={milestone.stage} className="border-b border-[var(--hairline)] p-5 sm:[&:nth-child(odd)]:border-r">
                        <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">{milestone.stage}</div>
                        <div className="mt-3 grid gap-1 text-sm">
                          <div className="text-foreground">Recorded: {milestone.actualDate}</div>
                          <div className="text-muted">Public record date: {milestone.promisedDate}</div>
                        </div>
                        <p className="mt-3 text-xs leading-5 text-muted">{milestone.detail}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {liveProjects.length === 0 && completedRecords.length === 0 ? (
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-px overflow-hidden border border-[var(--hairline)] bg-[var(--hairline)] sm:grid-cols-5">
              {stages.map(([number, title]) => (
                <div key={number} className="bg-background p-6 sm:min-h-52 sm:p-7">
                  <div className="font-serif text-2xl text-terracotta">{number}</div>
                  <div className="mt-12 font-serif text-xl text-foreground">{title}</div>
                  <div className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">Pending verification</div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-2 border-[var(--terracotta)] bg-surface px-6 py-7 sm:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">No published timeline yet</p>
              <h2 className="mt-3 font-serif text-2xl text-foreground">Verified construction records are pending.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                We are not displaying invented dates, progress percentages, site photographs, or regulatory claims. Once the supporting records are verified, this page will show the project timeline here.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/transparency" className="btn-secondary">View transparency</Link>
                <Link href="/contact" className="btn-primary">Request project information</Link>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
