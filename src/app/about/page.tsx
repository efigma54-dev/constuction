import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { company } from "@/lib/company";
import { team } from "@/lib/team";

export const metadata = {
  title: "About",
  description:
    "Company credentials, founder story, and the people accountable for delivery. Built for verification, not marketing claims.",
  openGraph: {
    title: "About · Aakar Developers",
    description:
      "Company credentials, founder story, and the people accountable for delivery. Built for verification, not marketing claims.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About · Aakar Developers",
    description:
      "Company credentials, founder story, and the people accountable for delivery. Built for verification, not marketing claims.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function AboutPage() {
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
            About Aakar
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Understated, specific, and verifiable — this page is for
            credentials, track record, and the people accountable for delivery.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        {/* Founder + credentials */}
        <div className="grid min-w-0 gap-0 lg:grid-cols-2">
          <div
            className="min-w-0 p-8 flex flex-col justify-between"
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
                Founder story
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
                Aakar Developers is a Pune-focused residential development
                practice founded in {company.foundedYear}. Company history,
                completed-project records, and delivery metrics will be
                published here after they are verified.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
                The founding principle: buyers should be able to verify every
                claim before committing. That shaped everything from the
                construction tracker to the document library on this site.
              </p>
            </div>
            <div className="mt-8">
              <PhotoPlaceholder
                type="building"
                label="Company project imagery"
                aspectRatio="video"
                src="/images/about/about-founder-project.jpg"
              />
            </div>
          </div>

          <div
            className="min-w-0 p-8 flex flex-col justify-between"
            style={{ border: "1px solid var(--hairline)", marginLeft: "-1px" }}
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
                Credentials
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="pb-3"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <PhotoPlaceholder
                type="document"
                label="Company credentials"
                aspectRatio="video"
                src="/images/about/about-credentials-document.jpg"
              />
            </div>
          </div>
        </div>

        {/* People — driven by src/lib/team.ts */}
        <div
          className="mt-0 p-8"
          style={{ border: "1px solid var(--hairline)", borderTop: "none" }}
        >
          <h2
            className="font-serif text-foreground"
            style={{
              fontSize: "var(--text-card)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            People
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            People accountable for design, structural decisions, and day-to-day
            site delivery will be listed here after their profiles are verified.
          </p>
          <div className="mt-8 grid min-w-0 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {team.length === 0 ? (
              <div className="p-6 sm:col-span-2 lg:col-span-3" style={{ border: "1px solid var(--hairline)" }}>
                <div className="text-sm font-medium text-foreground">Team profiles pending verification.</div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Approved biographies and professional photographs will be
                  published here when available.
                </p>
              </div>
            ) : team.map((p, i) => (
              <div
                key={p.role}
                className="min-w-0 p-6"
                style={{
                  border: "1px solid var(--hairline)",
                  marginLeft: i % 3 > 0 ? "-1px" : undefined,
                }}
              >
                {/* Approved portraits are used when supplied. */}
                <div className="w-full mb-5">
                  <PhotoPlaceholder
                    type="portrait"
                    label={`${p.name} - ${p.role}`}
                    aspectRatio="square"
                    src={p.photo ?? undefined}
                  />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">
                  {p.role}
                </div>
                <div
                  className="mt-2 font-serif text-foreground"
                  style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
                >
                  {p.name}
                </div>
                <div className="mt-3 text-sm text-muted leading-relaxed">
                  {p.bio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const credentials = [
  "Company identifiers will be published after verification.",
  "Professional registrations will be linked to supporting records.",
  "Completed-project records will be added with client-approved evidence.",
];
