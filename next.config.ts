import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVG files served from the same origin (e.g. /posters/*.svg).
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
