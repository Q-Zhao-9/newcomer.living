import type { MetadataRoute } from "next";
import { categories, guides, site, tools } from "@/lib/content";
import { schoolGuides } from "@/lib/school";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/contact", "/disclaimer", "/privacy-policy", "/tools", "/school", "/school/ontario"];
  const categoryRoutes = categories.map((category) => `/categories/${category.slug}`);
  const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
  const schoolGuideRoutes = schoolGuides.map((guide) => `/school/ontario/${guide.slug}`);
  const toolRoutes = tools.map((tool) => `/tools/${tool.slug}`);

  return [...staticRoutes, ...categoryRoutes, ...guideRoutes, ...schoolGuideRoutes, ...toolRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));
}
