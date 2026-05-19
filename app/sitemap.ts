import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://outpost.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/book`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE}/trust`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/legal/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/legal/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
