import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getGuide, guides } from "@/lib/content";

export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  return { title: guide?.title ?? "Guide", description: guide?.excerpt };
}
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug) ?? guides[0];
  return <ArticleLayout guide={guide} />;
}
