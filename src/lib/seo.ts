import type { Metadata } from "next";
import { site } from "./content";

const siteTitle = "Newcomer Living | 加拿大生活工具箱";
const titleTemplate = "%s | Newcomer Living";
const defaultImage = "/icon.svg";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({ title, description, path, type = "website", publishedTime, modifiedTime }: SeoOptions): Metadata {
  const url = path.startsWith("http") ? path : `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteTitle,
      type,
      locale: "zh_CN",
      images: [{ url: defaultImage, width: 512, height: 512, alt: siteTitle }],
      ...(type === "article" ? { publishedTime: publishedTime ?? modifiedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [defaultImage],
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    applicationName: siteTitle,
    title: { default: siteTitle, template: titleTemplate },
    description: site.description,
    keywords: ["加拿大生活", "加拿大新移民", "加拿大留学生", "加拿大租房", "加拿大生活成本", "加拿大生活工具"],
    alternates: { canonical: "/" },
    openGraph: {
      title: siteTitle,
      description: site.description,
      url: site.url,
      siteName: siteTitle,
      type: "website",
      locale: "zh_CN",
      images: [{ url: defaultImage, width: 512, height: 512, alt: siteTitle }],
    },
    twitter: {
      card: "summary",
      title: siteTitle,
      description: site.description,
      images: [defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
  };
}
