import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://helpinghandsdfw.org";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/donate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/support`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
