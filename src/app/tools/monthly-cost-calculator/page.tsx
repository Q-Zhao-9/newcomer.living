import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorForm } from "@/components/CalculatorForm";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { NextStepCallout } from "@/components/NextStepCallout";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "加拿大月生活成本计算器",
  description: "估算加拿大每月房租、食品、交通、车险、电话、第一月安置成本和应急预算，适合留学生、新移民和家庭做生活预算。",
  path: "/tools/monthly-cost-calculator",
});
export default function MonthlyCostCalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "工具", href: "/tools" }, { label: "月生活成本计算器" }]} />
      <section className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">计算器</p><h1 className="mt-3 text-4xl font-bold text-slate-950">加拿大月生活成本计算器</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">输入常见生活支出项目，快速估算每月和每年预算。以下为一般参考，不代表任何城市或家庭的实际支出。</p></section>
      <CalculatorForm />
      <NextStepCallout title="下一步：对照第一个月清单检查现金需求" description="生活成本估算完成后，建议继续检查抵达前、第一周和第一个月的文件、住房、银行、电话、学校和冬季准备事项。" href="/tools/newcomer-checklist" linkLabel="打开新移民第一个月清单" />
      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">相关指南和分类</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/guides/newcomer-monthly-cost-canada">第一个月生活成本指南</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/guides/grocery-saving-canada">超市购物省钱指南</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/categories/cost-of-living">生活成本分类</Link>
          <Link className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100" href="/disclaimer">查看免责声明</Link>
        </div>
      </section>
      <DisclaimerBox variant="calculator" />
    </main>
  );
}
