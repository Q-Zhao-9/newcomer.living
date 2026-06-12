import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SchoolArticleLayout } from "@/components/SchoolArticleLayout";
import { buildPageMetadata } from "@/lib/seo";
import { getSchoolGuide, schoolGuides } from "@/lib/school";

export function generateStaticParams() {
  return schoolGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSchoolGuide(slug);
  return buildPageMetadata({
    title: guide?.title ?? "安省孩子上学指南",
    description: guide?.description ?? "面向中文新移民家长的 Ontario School Guide。",
    path: `/school/ontario/${slug}`,
    type: "article",
    modifiedTime: guide?.updatedAt,
  });
}

export default async function OntarioSchoolGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getSchoolGuide(slug);
  if (!guide) notFound();
  return <SchoolArticleLayout guide={guide} />;
}
