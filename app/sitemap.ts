import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

const aboutUrl = "https://about.imtiyazsayyid.in";
const lastModified = new Date("2026-05-21");

export default function sitemap(): MetadataRoute.Sitemap {
  return [siteConfig.website, aboutUrl].map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    images: [`${url}/assets/logo/logo.png`],
  }));
}
