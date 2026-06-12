import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { categories, firstContentClusterGuides, getCategory, guidesByCategory, toolsByCategory } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return buildPageMetadata({
    title: category ? `${category.titleZh}指南与工具` : "加拿大生活分类",
    description: category ? `${category.description} 查看加拿大${category.titleZh}相关指南、工具和实用清单。` : "加拿大生活工具箱分类页面，汇总实用生活指南和工具。",
    path: `/categories/${slug}`,
  });
}
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug) ?? categories[4];
  const guides = guidesByCategory(category.slug);
  const tools = toolsByCategory(category.slug);
  const related = categories.filter((item) => item.slug !== category.slug).slice(0, 3);
  const contentCluster = firstContentClusterGuides();
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "分类" }, { label: category.titleZh }]} />
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8">
        <p className="text-5xl" aria-hidden>{category.icon}</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-950">{category.titleZh}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">{category.description} 本页面汇总相关指南、工具和延伸主题，方便按场景查找信息。</p>
      </section>
      {category.slug === "cost-of-living" ? (
        <section className="mt-10 rounded-[2rem] border border-teal-100 bg-teal-50 p-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">推荐阅读路径</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">先读生活成本 + 租房 + 第一个月专题</h2>
            <p className="mt-3 leading-7 text-slate-600">如果你刚开始规划加拿大生活预算，建议按顺序阅读这些页面：先估算第一月现金需求，再比较城市生活成本，最后确认租房付款、看房和合同细节。</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">{contentCluster.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
        </section>
      ) : null}
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">指南</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}{guides.length === 0 ? <p className="text-slate-600">该分类的指南正在整理中。可先查看 <Link className="text-teal-700 underline" href="/guides/newcomer-monthly-cost-canada">生活成本指南</Link>。</p> : null}</div></section>
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">工具</h2><div className="mt-5 grid gap-5 md:grid-cols-2">{(tools.length ? tools : []).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}{tools.length === 0 ? <p className="rounded-3xl border border-slate-200 p-5 text-slate-600">该分类暂时没有工具，可查看月生活成本计算器或新移民清单。</p> : null}</div></section>
      <section className="mt-10"><h2 className="text-2xl font-bold text-slate-950">相关分类</h2><div className="mt-5 grid gap-5 md:grid-cols-3">{related.map((item) => <CategoryCard key={item.slug} category={item} />)}</div></section>
    </main>
  );
}
