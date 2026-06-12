import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { categories, firstContentClusterGuides, guides, site, tools } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Newcomer Living | 加拿大生活工具箱",
    description: site.description,
    path: "/",
  }),
};

export default function Home() {
  const contentCluster = firstContentClusterGuides();

  return (
    <main>
      <section className="bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Canada Life Toolkit / 加拿大生活工具箱</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">为留学生、新移民和华人家庭准备的加拿大生活工具箱</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">{site.tagline}</p>
            <p className="mt-3 text-slate-600">{site.englishTagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/tools/monthly-cost-calculator" className="rounded-2xl bg-teal-700 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-teal-800">使用生活成本计算器</Link>
              <Link href="/tools/newcomer-checklist" className="rounded-2xl border border-teal-200 bg-white px-5 py-3 text-center font-semibold text-teal-800 shadow-sm hover:border-teal-300 hover:bg-teal-50">查看新移民第一个月清单</Link>
              <Link href="/guides/renting-without-credit-history" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center font-semibold text-slate-700 shadow-sm hover:border-teal-200 hover:text-teal-800">阅读租房指南</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-950">从实用工具开始</h2>
            <div className="mt-5 grid gap-4">
              {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">生活分类</p><h2 className="mt-2 text-3xl font-bold text-slate-950">主要生活主题</h2></div></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">首个内容专题</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">生活成本、租房与新移民第一个月</h2>
            <p className="mt-3 leading-7 text-slate-600">先围绕最常见的落地问题建立完整路径：大概需要多少钱、不同城市怎么估算、如何找房看房、押金和租约要注意什么。</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{contentCluster.slice(0, 6).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/categories/cost-of-living" className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">查看生活成本分类</Link>
            <Link href="/tools/monthly-cost-calculator" className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50">使用生活成本计算器</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950">最新指南</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.slice(0, 6).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><DisclaimerBox /></section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Newcomer Living | 加拿大生活工具箱",
            alternateName: [site.name, site.nameZh],
            url: site.url,
            inLanguage: "zh-CN",
            description: site.description,
          }),
        }}
      />
    </main>
  );
}
