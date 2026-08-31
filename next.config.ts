import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/images/generated/Modern_residential_apartment_bui…_2K_202608151424.jpeg",
        destination: "/opengraph-image",
        permanent: true,
      },
    ];
  },
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
