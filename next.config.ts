import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG files served from the same origin (e.g. /posters/*.svg)
    // Required if Next.js <Image> is ever used with an SVG src.
    dangerouslyAllowSVG: true,
    // Images used in the page must remain renderable by <img>; downloads can
    // still be initiated explicitly from document links.
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
