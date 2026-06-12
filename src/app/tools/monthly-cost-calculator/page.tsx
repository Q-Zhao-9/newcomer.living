import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorForm } from "@/components/CalculatorForm";
import { DisclaimerBox } from "@/components/DisclaimerBox";

export const metadata: Metadata = { title: "加拿大月生活成本计算器", description: "估算加拿大每月房租、食品、交通、车险、电话和其他生活成本。" };
export default function MonthlyCostCalculatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "工具" }, { label: "月生活成本计算器" }]} />
      <section className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">计算器</p><h1 className="mt-3 text-4xl font-bold text-slate-950">加拿大月生活成本计算器</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">输入常见生活支出项目，快速估算每月和每年预算。以下为一般参考，不代表任何城市或家庭的实际支出。</p></section>
      <CalculatorForm />
      <DisclaimerBox />
    </main>
  );
}
