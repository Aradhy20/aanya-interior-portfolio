import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE_CONFIG } from "@/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${baseUrl}/images/aanya-jain-interior-designer-agra-portrait.webp`]
    }
  ];

  // Individual Project Case Studies
  PROJECTS.forEach((project) => {
    routes.push({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      images: [`${baseUrl}${project.seoImage}`]
    });
  });

  return routes;
}
