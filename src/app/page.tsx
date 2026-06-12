import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { categories, guides, site, tools } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Canada Life Toolkit / 加拿大生活工具箱</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">为留学生、新移民和华人家庭准备的加拿大生活工具箱</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">{site.tagline}</p>
            <p className="mt-3 text-slate-600">{site.englishTagline}</p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <label className="sr-only" htmlFor="guide-search">查找指南</label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input id="guide-search" className="min-h-12 flex-1 rounded-2xl border border-slate-200 px-4 outline-none focus:border-teal-500" placeholder="搜索：租房、生活成本、SIN、冬季开车..." />
                <Link href="/categories/cost-of-living" className="rounded-2xl bg-teal-700 px-5 py-3 text-center font-semibold text-white hover:bg-teal-800">查找指南</Link>
              </div>
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
          <h2 className="text-3xl font-bold text-slate-950">最新指南</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.slice(0, 6).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><DisclaimerBox /></section>
    </main>
  );
}
