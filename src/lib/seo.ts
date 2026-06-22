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


const homeSeoTitle = "加拿大新移民指南｜加拿大生活成本 & Canada Newcomer Guide";
const homeSeoDescription = "Newcomer Living 是中文加拿大新移民指南，提供加拿大生活指南、加拿大生活成本计算、租房、孩子上学、买车和冬季驾驶内容，帮助 newcomers plan Cost of living in Canada and daily life.";
const homeKeywords = [
  "加拿大新移民指南",
  "加拿大生活指南",
  "加拿大生活成本",
  "Canada newcomer guide",
  "Cost of living in Canada",
  "加拿大租房指南",
  "加拿大留学生生活",
  "加拿大孩子上学",
  "加拿大冬季驾驶",
];

export const homePageMetadata: Metadata = {
  title: homeSeoTitle,
  description: homeSeoDescription,
  keywords: homeKeywords,
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: homeSeoTitle,
    description: homeSeoDescription,
    url: site.url,
    siteName: siteTitle,
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_CA"],
    images: [
      {
        url: defaultImage,
        width: 512,
        height: 512,
        alt: "Newcomer Living 加拿大新移民指南与加拿大生活成本工具",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: homeSeoTitle,
    description: homeSeoDescription,
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const homePageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.nameZh,
      url: site.url,
      logo: `${site.url}${defaultImage}`,
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      alternateName: [site.nameZh, "Canada newcomer guide", "加拿大新移民指南"],
      url: site.url,
      inLanguage: ["zh-CN", "en-CA"],
      description: homeSeoDescription,
      keywords: homeKeywords.join(", "),
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: homeSeoTitle,
      description: homeSeoDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: [
        { "@type": "Thing", name: "加拿大新移民指南" },
        { "@type": "Thing", name: "加拿大生活指南" },
        { "@type": "Thing", name: "加拿大生活成本" },
        { "@type": "Thing", name: "Canada newcomer guide" },
        { "@type": "Thing", name: "Cost of living in Canada" },
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Chinese-speaking newcomers, international students, and families in Canada",
      },
      primaryImageOfPage: `${site.url}${defaultImage}`,
      inLanguage: "zh-CN",
    },
  ],
} as const;

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
