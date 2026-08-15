import ContactForm from "@/components/ContactForm";
import { company, verificationPending } from "@/lib/company";

export const metadata = {
  title: "Contact",
  description:
    "Book a site visit or request a call-back. Direct access to project records, site coordinates, and team inquiries.",
  openGraph: {
    title: "Contact · Aakar Developers",
    description:
      "Book a site visit or request a call-back. Direct access to project records, site coordinates, and team inquiries.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact · Aakar Developers",
    description:
      "Book a site visit or request a call-back. Direct access to project records, site coordinates, and team inquiries.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function ContactPage() {
  const phoneClean = company.phone ? company.phone.replace(/[^\d+]/g, "") : "";
  const whatsappClean = company.whatsapp ? company.whatsapp.replace(/[^\d]/g, "") : "";

  return (
    <main className="flex-1 bg-background">
      {/* Page header */}
      <div
        className="bg-surface relative overflow-hidden"
        style={{ borderBottom: "1px solid var(--hairline)" }}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">
            Site Visits & Direct Inquiries
          </div>
          <h1
            className="font-serif text-foreground"
            style={{
              fontSize: "var(--text-section)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
          >
            Get in touch
          </h1>
          <p className="mt-4 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Book an on-site visit or request a callback. Every inquiry is received directly by our team and followed up with verified project records.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-0 lg:grid-cols-3">
          {/* Main Form Container */}
          <div
            className="p-8 sm:p-10 lg:col-span-2 flex flex-col justify-between"
            style={{ border: "1px solid var(--hairline)", backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-8" style={{ borderBottom: "1px solid var(--hairline)" }}>
                <div>
                  <h2 className="font-serif text-xl text-foreground">Schedule a visit or inquiry</h2>
                  <p className="text-xs text-muted mt-1">Select your preferred date and specify your project requirements.</p>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-terracotta uppercase tracking-wider bg-terracotta/10 px-2.5 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
                    Direct Team Access
                  </span>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Contact Details Aside */}
          <aside
            className="flex flex-col min-w-0"
            style={{ border: "1px solid var(--hairline)", borderLeft: "none" }}
          >
            {/* Direct Channels */}
            <div className="p-6 sm:p-8" style={{ borderBottom: "1px solid var(--hairline)" }}>
              <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
                Direct Contact
              </div>
              <div className="space-y-6">
                {/* Phone */}
                <div className="group">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted mb-1 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.584-6.584l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Phone
                  </div>
                  {company.phone ? (
                    <a
                      href={`tel:${phoneClean}`}
                      className="text-base font-serif text-foreground hover:text-terracotta transition-colors block"
                    >
                      {company.phone}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{verificationPending}</span>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="group">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted mb-1 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12c0 1.558.432 3.015 1.185 4.26L3.75 20.25l3.99-1.185A8.204 8.204 0 0012 20.25z" />
                    </svg>
                    WhatsApp
                  </div>
                  {company.whatsapp ? (
                    <a
                      href={`https://wa.me/${whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-serif text-foreground hover:text-terracotta transition-colors block"
                    >
                      {company.whatsapp}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{verificationPending}</span>
                  )}
                </div>

                {/* Email */}
                <div className="group">
                  <div className="text-[11px] font-medium uppercase tracking-wider text-muted mb-1 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-terracotta" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Email
                  </div>
                  {company.email ? (
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm font-medium text-foreground hover:text-terracotta transition-colors block truncate"
                    >
                      {company.email}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{verificationPending}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Location & Office Hours */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
                  Registered Office
                </div>
                <div className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-terracotta shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <address className="text-sm text-foreground not-italic leading-relaxed">
                    {company.registeredOffice ?? `${company.city}, ${company.state}`}
                  </address>
                </div>
              </div>

              <div className="p-4 rounded-sm bg-surface" style={{ border: "1px solid var(--hairline)" }}>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground mb-1">
                  Site Visit Hours
                </div>
                <div className="text-xs text-muted space-y-1">
                  <div>Mon – Sat: 9:00 AM – 7:00 PM</div>
                  <div>Sun: By prior appointment</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
