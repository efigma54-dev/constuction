import Link from "next/link";
import { stories } from "@/lib/stories";
import StoriesShowcase from "@/components/StoriesShowcase";

const socialImage = "/images/generated/Modern_residential_apartment_bui…_2K_202608151424.jpeg";

export const metadata = {
  title: "Stories",
  description:
    "Public-source stories from Aakar Developers projects, presented with source context, real illustrative photography, and multilingual editions.",
  openGraph: {
    title: "Stories · Aakar Developers",
    description:
      "Public-source project stories with source context and multilingual editions.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories · Aakar Developers",
    description:
      "Public-source project stories with source context and multilingual editions.",
    images: [socialImage],
  },
};

export default function StoriesPage() {
  return (
    <main className="flex-1 bg-background">
      <div className="bg-surface" style={{ borderBottom: "1px solid var(--hairline)" }}>
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Customer evidence</p>
          <h1 className="mt-4 font-serif text-foreground" style={{ fontSize: "var(--text-section)", lineHeight: "1.05", letterSpacing: "-0.025em" }}>
            Stories
          </h1>
          <p className="mt-5 text-base leading-7 text-muted" style={{ maxWidth: "var(--max-prose)" }}>
            Seven language editions of public-source project stories. We separate sourced observations from client testimonials, and we never present an illustrative photograph as a customer or project photograph.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <StoriesShowcase stories={stories} />

        <div className="mt-12 flex flex-col gap-5 border border-[var(--hairline)] bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta">Want a verified customer story?</div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              We can publish a named customer story only after written consent, a usable photograph, and supporting project records are available.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">Submit a story</Link>
        </div>
      </div>
    </main>
  );
}
