import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { OntarioSchoolRegistrationChecklist } from "@/components/OntarioSchoolRegistrationChecklist";
import { OfficialSourceList, WarningBox } from "@/components/school";
import { buildPageMetadata } from "@/lib/seo";
import { ontarioSchoolSources } from "@/lib/school";

export const metadata: Metadata = buildPageMetadata({
  title: "Ontario School Registration Checklist / 安省学校注册清单",
  description: "安省孩子学校注册互动清单，帮助中文新移民家长整理身份文件、住址证明、免疫记录、成绩单和教育局沟通事项。",
  path: "/tools/ontario-school-registration-checklist",
});

export default function OntarioSchoolRegistrationChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs currentPath="/tools/ontario-school-registration-checklist" items={[{ label: "工具", href: "/tools" }, { label: "孩子上学", href: "/school" }, { label: "安省学校注册清单" }]} />
      <section className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">School checklist</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">Ontario School Registration Checklist / 安省学校注册清单</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">按照文件类别勾选孩子在安省注册学校时常见准备项。清单会保存在本机浏览器 localStorage 中，方便下次继续查看。</p>
      </section>
      <OntarioSchoolRegistrationChecklist />
      <section className="mt-8"><WarningBox items={["不同教育局接受的住址证明、身份文件和提交方式可能不同。", "如果家庭身份、监护关系或孩子过往教育经历较复杂，请提前向教育局说明并保留书面回复。"]} /></section>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">相关指南</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/school/ontario/registration-documents">注册文件详细说明</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/school/ontario/study-permit-for-children">学签/工签家庭孩子上学</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/tools/ontario-grade-estimator">安省年级估算器</Link>
        </div>
      </section>
      <section className="mt-8"><OfficialSourceList sources={ontarioSchoolSources} /></section>
      <section className="mt-10"><DisclaimerBox variant="school" /></section>
    </main>
  );
}
