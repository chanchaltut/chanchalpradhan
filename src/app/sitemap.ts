import type { MetadataRoute } from "next";
import { projects, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${site.url}/avatar.jpg`, ...projects.filter((p) => p.image).map((p) => `${site.url}${p.image}`)],
    },
    { url: `${site.url}/llms.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/llms-full.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}${site.resume}`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
