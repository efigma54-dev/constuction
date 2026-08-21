import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { stories } from "@/lib/stories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://constuction-eosin.vercel.app";

  const staticDate = new Date("2024-05-01T00:00:00Z");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: staticDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/projects`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/construction-progress`, lastModified: staticDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/transparency`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/stories`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/about`, lastModified: staticDate, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: staticDate, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: staticDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const storyRoutes: MetadataRoute.Sitemap = stories.map((s) => ({
    url: `${base}/stories/${s.slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...storyRoutes];
}

