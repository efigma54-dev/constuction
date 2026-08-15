import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StickyInquiryRail from "@/components/StickyInquiryRail";

const fontSans = Outfit({
  variable: "--font-aakar-sans",
  subsets: ["latin"],
});

const fontSerif = Cormorant_Garamond({
  variable: "--font-aakar-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Aakar Developers",
    template: "%s · Aakar Developers",
  },
  description:
    "Pune residential development presented with clear project records, construction updates, and verified documents.",
  openGraph: {
    type: "website",
    siteName: "Aakar Developers",
    title: "Aakar Developers",
    description:
      "Pune residential development presented with clear project records, construction updates, and verified documents.",
    images: ["/posters/hero-tower-poster.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Developers",
    description:
      "Pune residential development presented with clear project records, construction updates, and verified documents.",
    images: ["/posters/hero-tower-poster.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <div className="flex-1 flex flex-col">{children}</div>
        <SiteFooter />
        <StickyInquiryRail />
      </body>
    </html>
  );
}
