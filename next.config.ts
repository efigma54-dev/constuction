import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG files served from the same origin (e.g. /posters/*.svg)
    // Required if Next.js <Image> is ever used with an SVG src.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "is1-3.housingcdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
