import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const aboutUrl = "https://about.imtiyazsayyid.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${siteConfig.website}/sitemap.xml`, `${aboutUrl}/sitemap.xml`],
    host: new URL(siteConfig.website).host,
  };
}
