import type { Metadata } from "next";
import "./globals.css";
import "./verification.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyInquiryRail from "@/components/StickyInquiryRail";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://constuction-eosin.vercel.app";
const socialPreview = "/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aakar Developers",
    template: "%s · Aakar Developers",
  },
  description:
    "Aakar Developers, Pune. Explore publicly documented project records, construction history, and verification material before you book.",
  openGraph: {
    type: "website",
    siteName: "Aakar Developers",
    title: "Aakar Developers · Pune",
    description:
      "Aakar Developers, Pune. Explore publicly documented project records, construction history, and verification material before you book.",
    images: [
      {
        url: socialPreview,
        width: 1200,
        height: 630,
        alt: "Aakar Developers · Built on trust. Delivered with proof.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Developers · Pune",
    description:
      "Aakar Developers, Pune. Explore publicly documented project records, construction history, and verification material before you book.",
    images: [socialPreview],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <StickyInquiryRail />
      </body>
    </html>
  );
}
