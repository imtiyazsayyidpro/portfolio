import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      // Set when the site is built (see next.config.ts)
      lastModified: process.env.BUILD_TIME,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
