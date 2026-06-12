import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { DisclaimerBox } from "@/components/DisclaimerBox";

export const metadata: Metadata = { title: "加拿大新移民第一个月清单", description: "加拿大新移民抵达前、第一周和第一个月生活事项互动清单。" };
export default function NewcomerChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "工具" }, { label: "新移民清单" }]} />
      <section className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">清单工具</p><h1 className="mt-3 text-4xl font-bold text-slate-950">加拿大新移民第一个月清单</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">按阶段勾选常见事项。不同省份、城市、学校和家庭情况会不同，重要事项建议进一步确认官方信息。</p></section>
      <ChecklistSection />
      <section className="mt-10"><DisclaimerBox /></section>
    </main>
  );
}
