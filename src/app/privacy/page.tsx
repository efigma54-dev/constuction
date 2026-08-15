export const metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Aakar Developers website enquiries.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-widest text-terracotta">Legal</p>
        <h1 className="mt-3 font-serif text-foreground" style={{ fontSize: "var(--text-section)" }}>
          Privacy policy
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">
          Enquiry details submitted through this website are used only to respond
          to your request and coordinate follow-up. A detailed policy will be
          published here after the company’s legal review.
        </p>
      </div>
    </main>
  );
}
