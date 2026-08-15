import DocumentCard from "@/components/DocumentCard";
import { documents } from "@/lib/documents";
import { company, verificationPending } from "@/lib/company";

export const metadata = {
  title: "Transparency",
  description:
    "Verified company information and documents are published here as they become available.",
  openGraph: {
    title: "Transparency · Aakar Developers",
    description:
      "Verified company information and documents are published here as they become available.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparency · Aakar Developers",
    description:
      "Verified company information and documents are published here as they become available.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function TransparencyPage() {
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
            Transparency
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Verified company identifiers and documents will be published here
            without presenting unverified claims.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        {/* Company identifiers + Bank partnerships */}
        <div className="grid gap-0 lg:grid-cols-2">
          <div
            className="p-8 flex flex-col justify-between"
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
                Company identifiers
              </h2>
              <dl className="mt-6 grid gap-4 text-sm">
                {[
                  { label: "RERA", value: company.identifiers.rera ?? verificationPending },
                  { label: "CIN", value: company.identifiers.cin ?? verificationPending },
                  { label: "GSTIN", value: company.identifiers.gstin ?? verificationPending },
                  { label: "Registered office", value: company.registeredOffice ?? `${company.city}, ${company.state}` },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-6 pb-4"
                    style={{ borderBottom: "1px solid var(--hairline)" }}
                  >
                    <dt className="text-muted">{item.label}</dt>
                    <dd className="text-foreground font-semibold text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-8 p-6" style={{ border: "1px solid var(--hairline)" }}>
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Document record</div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Registration preview pending verification.
              </p>
            </div>
          </div>

          <div
            className="p-8 flex flex-col justify-between"
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
                Bank partnerships
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">
                Bank partnerships will be listed after supporting approval
                letters have been verified and published.
              </p>
            </div>
            <div className="mt-8 p-6" style={{ border: "1px solid var(--hairline)" }}>
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Approval record</div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Approval letters will appear after verification.
              </p>
            </div>
          </div>
        </div>

        {/* Downloadable documents — driven by src/lib/documents.ts */}
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
            Document library
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Approved files can be previewed or downloaded here. Items awaiting
            publication remain visible as status records without download actions.
          </p>
          <ul className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
             {documents.map((document) => (
               <DocumentCard key={document.id} document={document} />
             ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
