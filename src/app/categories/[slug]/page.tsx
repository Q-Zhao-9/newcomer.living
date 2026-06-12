import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { categories, getCategory, guidesByCategory, toolsByCategory } from "@/lib/content";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return {
    title: category ? `${category.titleZh}指南与工具` : "分类",
    description: category?.description,
    alternates: { canonical: `/categories/${slug}` },
  };
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug) ?? categories[4];
  const guides = guidesByCategory(category.slug);
  const tools = toolsByCategory(category.slug);
  const related = categories.filter((item) => item.slug !== category.slug).slice(0, 3);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "分类" }, { label: category.titleZh }]} />
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8">
        <p className="text-5xl" aria-hidden>{category.icon}</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">{category.titleZh}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{category.description} 本页面汇总相关指南、工具和延伸主题，方便按场景查找信息。</p>
      </section>
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">指南</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}{guides.length === 0 ? <p className="text-slate-600">该分类的指南正在整理中。可先查看 <Link className="text-teal-700 underline" href="/guides/newcomer-monthly-cost-canada">生活成本指南</Link>。</p> : null}</div></section>
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">工具</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{(tools.length ? tools : []).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}{tools.length === 0 ? <p className="rounded-3xl border border-slate-200 p-5 text-slate-600">该分类暂时没有工具，可查看月生活成本计算器或新移民清单。</p> : null}</div></section>
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">相关分类</h2><div className="mt-5 grid gap-5 md:grid-cols-3">{related.map((item) => <CategoryCard key={item.slug} category={item} />)}</div></section>
    </main>
  );
}
