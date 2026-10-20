import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // One canonical host: www and any other alias permanently redirect to the apex domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.chanchalpradhan.com" }],
        destination: "https://chanchalpradhan.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
