export const metadata = {
  title: "Terms of Service",
  description: "Terms of use for the Aakar Developers website.",
};

export default function TermsPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Legal</p>
        <h1 className="mt-3 font-serif text-foreground" style={{ fontSize: "var(--text-section)" }}>
          Terms of service
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">
          Website content is provided for information and is not a commercial
          offer. Project details, availability, dates, and documents are subject
          to verification and formal agreements.
        </p>
      </div>
    </main>
  );
}
