import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ToolCard } from "@/components/ToolCard";
import { categories, tools } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "加拿大生活工具",
  description: "加拿大生活工具箱的实用计算器和互动清单，帮助中文新移民、留学生和华人家庭规划生活成本、抵达事项和孩子上学准备。",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs currentPath="/tools" items={[{ label: "工具" }]} />
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">工具清单</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">加拿大生活工具</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
          这里汇总网站内的计算器和互动清单。工具结果仅供一般参考，涉及学校、证件、预算或重要决定时，建议进一步查看官方来源并结合个人情况确认。
        </p>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">按主题继续浏览</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link key={category.slug} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href={`/categories/${category.slug}`}>{category.titleZh}</Link>
          ))}
        </div>
      </section>
    </main>
  );
}
