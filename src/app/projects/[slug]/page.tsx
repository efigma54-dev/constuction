import Link from "next/link";
import { notFound } from "next/navigation";
import FloorPlanStatus from "@/components/FloorPlanStatus";
import { getProject, projects } from "@/lib/projects";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Image from "next/image";
import { getProjectMedia } from "@/lib/media";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: `Project details, progress timeline, and proof artifacts for ${project.name}.`,
    openGraph: {
      title: project.name,
      description: `Construction progress, documents, and timelines for ${project.name}.`,
      images: [project.heroImage ?? "/posters/hero-tower-poster.svg"],
    },
  };
}

function statusColor(status: string): string {
  if (status === "done") return "var(--foreground)";
  if (status === "in_progress") return "var(--terracotta)";
  if (status === "delayed") return "var(--muted)";
  return "var(--sand-strong)";
}

function statusLabel(status: string) {
  if (status === "done") return "Done";
  if (status === "in_progress") return "In progress";
  if (status === "delayed") return "Delayed";
  return "Planned";
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const proof = project.proof ?? {
    existence: [],
    delivery: [],
    legitimacy: [],
    transparency: [],
    people: [],
  };

  const milestones = project.milestones ?? [];
  const projectMedia = getProjectMedia(project.slug);

  return (
    <main className="flex-1 bg-background">
      {/* Hero — project header */}
      <div
        className="bg-surface"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                Project
              </p>
              <h1
                className="mt-3 font-serif text-foreground"
                style={{
                  fontSize: "var(--text-section)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.025em",
                }}
              >
                {project.name}
              </h1>
              <p className="mt-2 text-base text-muted">{project.location}</p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link href="/contact" className="btn-primary" style={{ height: "2.75rem" }}>
                Book a site visit
              </Link>
              <Link href="/construction-progress" className="btn-secondary" style={{ alignSelf: "center" }}>
                View progress
              </Link>
            </div>
          </div>

          {/* Key stats — hairline-bordered, no cards */}
          <div
            className="mt-10 grid grid-cols-3"
            style={{ borderTop: "1px solid var(--hairline)" }}
          >
            {[
              { label: "Handover", value: project.handover },
              { label: "Pricing", value: project.priceBand },
              { label: "RERA", value: project.rera },
            ].map((s, i) => (
              <div
                key={s.label}
                className="pt-6 pr-6"
                style={{
                  borderRight: i < 2 ? "1px solid var(--hairline)" : "none",
                }}
              >
                <div className="text-xs text-muted uppercase tracking-wide">{s.label}</div>
                <div className="mt-2 text-sm font-semibold text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <PhotoPlaceholder
          type="building"
          label={`${project.name} - architectural study`}
          aspectRatio="video"
          className="mb-12 min-h-90 md:min-h-130"
          src={project.heroImage ?? "/images/generated/aakar-heights-hero.svg"}
        />

        <section className="grid gap-8 border-b border-hairline pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Project overview</p>
            <p className="mt-4 max-w-prose text-base leading-7 text-muted">{project.description}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Highlights</p>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="border-b border-hairline pb-3">{highlight}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 border-b border-hairline pb-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Visual record</p>
              <h2 className="mt-2 font-serif text-foreground" style={{ fontSize: "var(--text-card)" }}>
                Project imagery
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Reference and approved media are labelled separately so visual
              context is never confused with construction evidence.
            </p>
          </div>
          <div className="mt-8 grid gap-0 md:grid-cols-2">
            {projectMedia.map((item, index) => (
              <figure key={item.title} className="relative" style={{ border: "1px solid var(--hairline)", marginLeft: index > 0 ? "-1px" : undefined }}>
                {item.src ? (
                  <Image src={item.src} alt={item.alt} width={1200} height={800} className="aspect-[3/2] w-full object-cover" />
                ) : (
                  <div className="aspect-[3/2] bg-surface-muted" />
                )}
                <figcaption className="p-4">
                  <div className="text-sm font-medium text-foreground">{item.title}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted">
                    {item.verified ? "Verified media" : "Non-evidence reference"}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Proof artifacts */}
        <section>
          <h2
            className="font-serif text-foreground"
            style={{
              fontSize: "var(--text-card)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            Proof artifacts
          </h2>
          <p className="mt-3 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Everything here should eventually point to verifiable documents,
            dated photos, and delivery records.
          </p>

          <div className="mt-8 grid gap-0 md:grid-cols-2 lg:grid-cols-5">
            <ProofCard title="Existence" type="building" items={proof.existence} />
            <ProofCard title="Delivery" type="building" items={proof.delivery} />
            <ProofCard title="Legitimacy" type="document" items={proof.legitimacy} />
            <ProofCard title="Transparency" type="document" items={proof.transparency} />
            <ProofCard title="People" type="portrait" items={proof.people} />
          </div>
        </section>

        {/* Floor plan */}
        <div
          className="mt-12 pt-12"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <FloorPlanStatus
            title={project.floorPlan.title}
            verifiedPlan={Boolean(project.floorPlan.image)}
            unitDataAvailable={project.floorPlan.units.length > 0}
            imageSrc={project.floorPlan.image}
          />
        </div>

        {/* Promised vs delivered timeline */}
        <section
          className="mt-12 pt-12"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <h2
            className="font-serif text-foreground"
            style={{
              fontSize: "var(--text-card)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            {milestones.length > 0 ? "Promised vs delivered timeline" : "Construction progress record"}
          </h2>
          <p className="mt-3 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Milestone dates and actual completions are published here when
            construction records and dated photos have been verified.
          </p>

          {milestones.length === 0 ? (
            <div
              className="mt-8 grid gap-4 sm:grid-cols-5"
              style={{ border: "1px solid var(--hairline)" }}
            >
              {["Excavation", "Foundation", "Structure", "Finishing", "Handover"].map((stage) => (
                <div key={stage} className="p-4" style={{ borderRight: stage === "Handover" ? "none" : "1px solid var(--hairline)" }}>
                  <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">{stage}</div>
                  <div className="mt-3 text-sm text-foreground">Not published</div>
                  <div className="mt-1 text-xs leading-5 text-muted">Verified stage media and dates will appear here.</div>
                </div>
              ))}
            </div>
          ) : (
            <ol className="mt-8 space-y-0">
              {milestones.map((m) => (
                <li
                  key={m.stage}
                  className="grid sm:grid-cols-[1fr_auto] gap-8 py-8"
                  style={{ borderTop: "1px solid var(--hairline)" }}
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    {/* Published milestone media appears here when verified. */}
                    <div className="w-full sm:w-44 shrink-0">
                      <PhotoPlaceholder
                        type="building"
                        label={`${m.stage} status`}
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
                      {m.detail ? (
                        <div className="mt-2 text-sm text-muted pl-4.5">
                          {m.detail}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <dl className="grid gap-2 text-sm sm:text-right shrink-0">
                    <div>
                      <dt className="text-muted text-xs uppercase tracking-wide">Promised</dt>
                      <dd className="font-semibold text-foreground">{m.promisedDate}</dd>
                    </div>
                    <div>
                      <dt className="text-muted text-xs uppercase tracking-wide">Actual</dt>
                      <dd className="font-semibold text-foreground">{m.actualDate}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ol>
          )}
        </section>

        <section className="mt-12 grid gap-8 border-t border-hairline pt-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Project documents</p>
            <h2 className="mt-2 font-serif text-foreground" style={{ fontSize: "var(--text-card)" }}>
              Verification records
            </h2>
            <p className="mt-3 max-w-prose text-sm leading-6 text-muted">
              Project-specific approvals, floor plans, pricing, and legal records
              will be listed here when the approved files are available.
            </p>
          </div>
          <Link href="/transparency" className="btn-secondary justify-self-start lg:justify-self-end">
            View transparency records
          </Link>
        </section>

        <section className="mt-12 border-t border-hairline pt-12">
          <div className="bg-surface p-8 sm:p-10" style={{ border: "1px solid var(--hairline)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Site visit</p>
            <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-serif text-foreground" style={{ fontSize: "var(--text-card)" }}>
                  See the project in context
                </h2>
                <p className="mt-3 max-w-prose text-sm leading-6 text-muted">
                  Request a site visit for the latest verified information and
                  current availability.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Book a site visit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ProofCard({ title, type, items }: { title: string; type: "building" | "document" | "portrait"; items: string[] }) {
  return (
    <div
      className="p-5 flex flex-col justify-between"
      style={{ border: "1px solid var(--hairline)", marginLeft: "-1px" }}
    >
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">
          {title}
        </div>
        {items.length === 0 ? (
          <p className="mt-3 text-sm text-muted">No proof added yet.</p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--hairline)" }}>
        <PhotoPlaceholder type={type} label={`${title} verification`} aspectRatio="video" />
      </div>
    </div>
  );
}
