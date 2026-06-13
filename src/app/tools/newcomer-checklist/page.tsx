import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { NextStepCallout } from "@/components/NextStepCallout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "加拿大新移民第一个月清单",
  description: "加拿大新移民抵达前、第一周和第一个月互动清单，涵盖住房、银行、电话网络、孩子上学、冬季准备和找工作。",
  path: "/tools/newcomer-checklist",
});
export default function NewcomerChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "工具", href: "/tools" }, { label: "新移民清单" }]} />
      <section className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">清单工具</p><h1 className="mt-3 text-4xl font-bold text-slate-950">加拿大新移民第一个月清单</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">按阶段勾选常见事项。不同省份、城市、学校和家庭情况会不同，重要事项建议进一步确认官方信息。</p></section>
      <ChecklistSection />
      <NextStepCallout title="下一步：估算第一个月和长期月度预算" description="清单能帮助你确认要做什么；预算计算器可以帮助你把房租、食品、交通、车险和其他支出换算成月度现金流。" href="/tools/monthly-cost-calculator" linkLabel="打开月生活成本计算器" />
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">相关指南和分类</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/guides/newcomer-monthly-cost-canada">第一个月生活成本指南</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/guides/student-sin-canada">SIN 办理参考</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/categories/documents">文件办理分类</Link>
          <Link className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/disclaimer">查看免责声明</Link>
        </div>
      </section>
      <section className="mt-10"><DisclaimerBox variant="documents" /></section>
    </main>
  );
}
