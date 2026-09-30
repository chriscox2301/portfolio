import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server for the Docker image (see Dockerfile).
  output: "standalone",
  experimental: {
    // The root layout lives under app/[lang], so unmatched URLs need their own 404 page.
    globalNotFound: true,
  },
  // Dutch is the default language and is served at `/`; English lives at `/en`.
  async redirects() {
    return [{ source: "/nl", destination: "/", permanent: true }];
  },
  async rewrites() {
    return [{ source: "/", destination: "/nl" }];
  },
};

export default nextConfig;
