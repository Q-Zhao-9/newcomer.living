import type { MetadataRoute } from "next";
import { categories, guides, site, tools } from "@/lib/content";
import { schoolGuides } from "@/lib/school";

const launchDate = "2026-06-12";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/disclaimer", "/privacy-policy", "/tools", "/school", "/school/ontario"];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: launchDate,
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${site.url}/categories/${category.slug}`,
    lastModified: launchDate,
  }));

  const guideEntries = guides.map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
    lastModified: guide.updated,
  }));

  const schoolGuideEntries = schoolGuides.map((guide) => ({
    url: `${site.url}/school/ontario/${guide.slug}`,
    lastModified: guide.updatedAt,
  }));

  const toolEntries = tools.map((tool) => ({
    url: `${site.url}/tools/${tool.slug}`,
    lastModified: launchDate,
  }));

  return [...staticEntries, ...categoryEntries, ...guideEntries, ...schoolGuideEntries, ...toolEntries];
}
