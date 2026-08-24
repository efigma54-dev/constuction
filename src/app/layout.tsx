import type { Metadata } from "next";
import "./globals.css";
import "./verification.css";
import "./production-overrides.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyInquiryRail from "@/components/StickyInquiryRail";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://constuction-eosin.vercel.app";
const featuredProjectImage =
  "https://is1-3.housingcdn.com/4f2250e8/529671ac2127f19f26f860e2f281bfb5/v0/fs/aakar_balaji_empire-vikas_nagar_2-pune-aakar_developers.jpeg";

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
    title: "Aakar Developers · Balaji Empire",
    description:
      "Aakar Developers, Pune. Explore publicly documented project records, construction history, and verification material before you book.",
    images: [
      {
        url: featuredProjectImage,
        alt: "Published Balaji Empire project photograph · source: Housing.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Developers · Balaji Empire",
    description:
      "Aakar Developers, Pune. Explore publicly documented project records, construction history, and verification material before you book.",
    images: [featuredProjectImage],
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
