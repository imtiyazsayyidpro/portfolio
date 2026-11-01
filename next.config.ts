import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Stamped once per build; used as the sitemap's lastModified date
    BUILD_TIME: new Date().toISOString(),
  },
  experimental: {
    agentFeedback: true,
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
