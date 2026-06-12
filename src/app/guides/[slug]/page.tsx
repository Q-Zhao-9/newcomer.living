import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getGuide, guides } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return buildPageMetadata({
    title: guide?.title ?? "加拿大生活指南",
    description: guide?.excerpt ?? "加拿大生活工具箱实用指南，帮助中文用户了解加拿大生活常见事项。",
    path: `/guides/${slug}`,
    type: "article",
    modifiedTime: guide?.updated,
  });
}
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug) ?? guides[0];
  return <ArticleLayout guide={guide} />;
}
