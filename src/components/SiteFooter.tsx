import Link from "next/link";
import { company } from "@/lib/company";

export default function SiteFooter() {
  return (
    <footer
      className="bg-background py-16 sm:py-24"
      style={{ borderTop: "1px solid var(--hairline)" }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <div
              className="font-serif tracking-tight text-foreground"
              style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}
            >
              Aakar Developers
            </div>
            <p className="text-sm leading-relaxed text-muted" style={{ maxWidth: "var(--max-prose)" }}>
              Premium homes in Pune. Built on trust. Delivered with proof. Every
              claim we make has a visible trail.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Legitimacy
            </div>
            <ul className="space-y-3 text-muted">
              {company.identifiers.rera && <li>RERA: {company.identifiers.rera}</li>}
              {company.identifiers.cin && <li>CIN: {company.identifiers.cin}</li>}
              {company.identifiers.gstin && <li>GSTIN: {company.identifiers.gstin}</li>}
              <li>Reg. Office: {company.registeredOffice ?? `${company.city}, ${company.state}`}</li>
            </ul>
          </div>

          <div className="space-y-4 text-sm">
            <div className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Contact
            </div>
            <ul className="space-y-3 text-muted">
              {company.phone && <li>{company.phone}</li>}
              {company.whatsapp && <li>WhatsApp: {company.whatsapp}</li>}
              {company.email && <li>{company.email}</li>}
              <li>
                <Link
                  href="/transparency"
                  className="hover:text-foreground transition-colors"
                  style={{ borderBottom: "1px solid var(--hairline-strong)", paddingBottom: "1px" }}
                >
                  Transparency documents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-[10.5px] text-muted/70 leading-relaxed max-w-4xl text-balance">
          Disclaimer: The images, layout plans, and specifications displayed on the website are for representation purposes only and may not reflect the actual properties accurately. They do not constitute an offer, an invitation to offer, and/or commitment of any nature. Project details are subject to verification and regulatory approvals.
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium tracking-wide text-muted"
          style={{ borderTop: "1px solid var(--hairline)" }}
        >
          <div>© {new Date().getFullYear()} Aakar Developers. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
