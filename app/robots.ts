import type { MetadataRoute } from "next";
import { data } from "@/app/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${data.siteUrl}/sitemap.xml`,
  };
}
