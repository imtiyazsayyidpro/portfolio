import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Stamped once per build; used as the sitemap's lastModified date
    BUILD_TIME: new Date().toISOString(),
  },
  experimental: {
    agentFeedback: true,
  },
  images: {
    // 75 is the default; 90 is for the About portrait, where faces and
    // fine shirt stripes look soft at 75 on large, sharp screens.
    qualities: [75, 90],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
