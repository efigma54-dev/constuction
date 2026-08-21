import DocumentCard from "@/components/DocumentCard";
import { documents } from "@/lib/documents";
import { company } from "@/lib/company";

export const metadata = {
  title: "Transparency",
  description: "Company registration, project RERA records, and published source material for Aakar Developers.",
};

export default function TransparencyPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Records & evidence</div>
          <h1 className="font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
            Transparency
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Company registration data, project registration records, and source material are shown with clear boundaries between published facts and information still awaiting a primary document.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <section className="grid gap-0 lg:grid-cols-2" aria-labelledby="company-record-heading">
          <div className="p-8" style={{ border: "1px solid var(--hairline)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Company registration</div>
            <h2 id="company-record-heading" className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>
              AAKAR DEVELOPERS
            </h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <Row label="Constitution" value={company.entityType} />
              <Row label="GSTIN" value={company.identifiers.gstin} />
              <Row label="GST registration" value={company.gstRegistrationDate} />
              <Row label="Principal place of business" value={company.principalPlaceOfBusiness} />
              <Row label="State" value={`${company.state} · ${company.city}`} />
            </dl>
          </div>

          <div className="p-8" style={{ border: "1px solid var(--hairline)", marginLeft: "-1px" }}>
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Project registration</div>
            <h2 className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>
              Balaji Empire · MahaRERA
            </h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <Row label="RERA number" value={company.identifiers.rera} />
              <Row label="Promoter" value={company.legalName} />
              <Row label="Project type" value="Residential / Group Housing" />
              <Row label="Registration date" value="29 July 2017" />
              <Row label="Proposed completion" value="31 December 2018" />
            </dl>
          </div>
        </section>

        <section className="mt-0 p-8" style={{ border: "1px solid var(--hairline)", borderTop: "none" }}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-2">Evidence library</div>
              <h2 className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>Published records</h2>
            </div>
            <div className="text-xs text-muted">No document is presented as verified unless its source is available.</div>
          </div>
          <ul className="mt-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </ul>
        </section>

        <section className="mt-10 p-6" style={{ border: "1px solid var(--hairline)" }}>
          <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">Source note</div>
          <p className="mt-2 text-sm leading-6 text-muted">
            Company identity data is based on publicly available GST and property records. Project registration details are based on the public Balaji Empire RERA record. Primary government documents should remain the final authority for legal or purchase decisions.
          </p>
        </section>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 pb-4" style={{ borderBottom: "1px solid var(--hairline)" }}>
      <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted">{label}</dt>
      <dd className="text-foreground font-medium leading-6 break-words">{value}</dd>
    </div>
  );
}
