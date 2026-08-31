import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { company, companySources } from "@/lib/company";
import { team } from "@/lib/team";

const BALAJI_EMPIRE_IMAGE =
  "https://is1-3.housingcdn.com/4f2250e8/529671ac2127f19f26f860e2f281bfb5/v0/fs/aakar_balaji_empire-vikas_nagar_2-pune-aakar_developers.jpeg";

export const metadata = {
  title: "About",
  description:
    "Aakar Developers company profile, public credentials, project history, and verification records.",
  openGraph: {
    title: "About · Aakar Developers",
    description:
      "Aakar Developers company profile, public credentials, project history, and verification records.",
    images: [{ url: BALAJI_EMPIRE_IMAGE, width: 1200, height: 630, alt: "Balaji Empire, Aakar Developers, Vikas Nagar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About · Aakar Developers",
    description:
      "Aakar Developers company profile, public credentials, project history, and verification records.",
    images: [BALAJI_EMPIRE_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Company profile · Pune</div>
          <h1 className="font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>Aakar Developers</h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>A Pune-based partnership with a public residential project record. This profile separates published records from information that still needs primary-source confirmation.</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <section className="grid min-w-0 gap-0 lg:grid-cols-3" aria-labelledby="company-record-heading">
          <div className="min-w-0 p-8 lg:col-span-2" style={{ border: "1px solid var(--hairline)" }}>
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Public company record</div>
            <h2 id="company-record-heading" className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2", letterSpacing: "-0.01em" }}>A long-running Pune practice, documented project by project</h2>
            <p className="mt-5 text-sm leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>Public property records list Aakar Developers as a Pune developer established in 2010. The company is also associated with a Maharashtra GST registration as a partnership, registered on 01 July 2017. Its public project record includes completed residential developments in the Pimpri-Chinchwad area.</p>
            <p className="mt-4 text-sm leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>We use the same standard throughout this site: a project is presented with the registration number, location, dates, unit data, and supporting record whenever those details are available.</p>
          </div>
          <div className="p-8" style={{ border: "1px solid var(--hairline)", marginLeft: "-1px" }}>
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-5">At a glance</div>
            <dl className="space-y-4 text-sm">
              <Stat label="Established" value={`${company.establishedYear}`} />
              <Stat label="Entity" value={company.entityType} />
              <Stat label="Location" value={`${company.city}, ${company.state}`} />
              <Stat label="Public portfolio" value={`${company.publicPortfolioCount}+ listed projects`} />
              <Stat label="GST registration" value={company.gstRegistrationDate} />
            </dl>
          </div>
        </section>
        <section className="mt-0 p-8" style={{ border: "1px solid var(--hairline)", borderTop: "none" }} aria-labelledby="credentials-heading">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">Credentials</div>
              <h2 id="credentials-heading" className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>Identity & registration</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <Stat label="Legal / trade name" value={company.legalName} />
                <Stat label="Constitution" value={company.entityType} />
                <Stat label="GSTIN" value={company.identifiers.gstin} />
                <Stat label="GST registration" value={company.gstRegistrationDate} />
                <Stat label="Principal place of business" value={company.principalPlaceOfBusiness} />
                <Stat label="CIN" value="Not applicable / not independently verified" />
              </dl>
            </div>
            <div>
              <PhotoPlaceholder type="document" label="Company registration reference" caption="Reference visual · source records linked below" aspectRatio="video" src="/images/about/about-credentials-document.jpg" />
              <div className="mt-5 space-y-3">{companySources.map((source) => <a key={source.label} href={source.href} target="_blank" rel="noopener noreferrer" className="block p-4 hover:bg-surface" style={{ border: "1px solid var(--hairline)" }}><div className="text-xs font-semibold uppercase tracking-wider text-terracotta">{source.label}</div><div className="mt-1 text-sm text-muted leading-6">{source.detail}</div></a>)}</div>
            </div>
          </div>
        </section>
        <section className="mt-0 p-8" style={{ border: "1px solid var(--hairline)", borderTop: "none" }} aria-labelledby="people-heading">
          <h2 id="people-heading" className="font-serif text-foreground" style={{ fontSize: "var(--text-card)", lineHeight: "1.2" }}>People</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Individual partner and professional records are shown only where a project record supports them. Biographies and portraits are kept separate from public registration data.</p>
          <div className="mt-8 grid min-w-0 gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {team.length === 0 ? <div className="p-6 sm:col-span-2 lg:col-span-3" style={{ border: "1px solid var(--hairline)" }}><div className="text-sm font-medium text-foreground">Professional profiles pending publication.</div><p className="mt-2 text-sm leading-6 text-muted">Project-specific partner names are available on the Balaji Empire record; biographies and photographs have not been published without supporting material.</p></div> : team.map((p, i) => <div key={p.role} className="min-w-0 p-6" style={{ border: "1px solid var(--hairline)", marginLeft: i % 3 > 0 ? "-1px" : undefined }}><PhotoPlaceholder type="portrait" label={`${p.name} - ${p.role}`} aspectRatio="square" src={p.photo ?? undefined} /><div className="mt-5 text-xs font-semibold uppercase tracking-widest text-terracotta">{p.role}</div><div className="mt-2 font-serif text-foreground" style={{ fontSize: "1.125rem" }}>{p.name}</div><div className="mt-3 text-sm text-muted leading-relaxed">{p.bio}</div></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return <div className="pb-4" style={{ borderBottom: "1px solid var(--hairline)" }}><dt className="text-[10px] font-semibold uppercase tracking-widest text-muted">{label}</dt><dd className="mt-1 text-sm leading-6 text-foreground font-medium break-words">{value}</dd></div>;
}
