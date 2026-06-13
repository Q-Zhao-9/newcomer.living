import type { Metadata } from "next";
import { CategoryPageLayout } from "@/components/CategoryPageLayout";
import { categories, getCategory, guidesByCategory, tools, toolsByCategory } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return buildPageMetadata({
    title: category ? `${category.titleZh}指南与工具` : "加拿大生活分类",
    description: category ? `${category.intro ?? category.description} 查看加拿大${category.titleZh}相关指南、工具、FAQ 和延伸主题。` : "加拿大生活工具箱分类页面，汇总实用生活指南和工具。",
    path: `/categories/${slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug) ?? categories[4];
  const categoryGuides = guidesByCategory(category.slug);
  const categoryTools = toolsByCategory(category.slug);
  const relatedCategories = getRelatedCategories(category);
  const recommendedTools = tools.filter((tool) => ["monthly-cost-calculator", "newcomer-checklist"].includes(tool.slug));

  return (
    <CategoryPageLayout
      category={category}
      guides={categoryGuides}
      tools={categoryTools}
      relatedCategories={relatedCategories}
      recommendedTools={recommendedTools}
    />
  );
}

function getRelatedCategories(category: (typeof categories)[number]) {
  const preferred = category.relatedCategorySlugs
    ?.map((slug) => getCategory(slug))
    .filter((item): item is (typeof categories)[number] => Boolean(item)) ?? [];
  const fallback = categories.filter((item) => item.slug !== category.slug && !preferred.some((selected) => selected.slug === item.slug));
  return [...preferred, ...fallback].slice(0, 3);
}
