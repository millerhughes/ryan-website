import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Single-page site: one canonical entry. Add more if pages are ever split out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
