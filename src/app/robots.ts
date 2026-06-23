import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Google-Extended", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: [`${site.url}/sitemap.xml`],
    host: new URL(site.url).host,
  };
}
