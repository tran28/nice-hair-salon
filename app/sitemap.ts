import type { MetadataRoute } from "next";
import { data } from "@/app/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${data.siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${data.siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${data.siteUrl}/store`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
