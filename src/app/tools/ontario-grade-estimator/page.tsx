import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { OntarioGradeEstimator } from "@/components/OntarioGradeEstimator";
import { StepByStepBox, WarningBox } from "@/components/school";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Ontario Grade Estimator / 安省年级估算器",
  description: "根据孩子出生年份和目标入学年份，粗略估算 Ontario 可能对应的幼儿园或小学高中年级，并提醒家长以教育局安排为准。",
  path: "/tools/ontario-grade-estimator",
});

export default function OntarioGradeEstimatorPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "孩子上学", href: "/school" }, { label: "安省指南", href: "/school/ontario" }, { label: "年级估算器" }]} />
      <section className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">School tool</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">Ontario Grade Estimator / 安省年级估算器</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">输入孩子出生年份和计划入学年份，快速获得一个大致年级参考。这个工具只做一般估算，不能替代学校或教育局的最终分班决定。</p>
      </section>
      <OntarioGradeEstimator />
      <section className="mt-8"><StepByStepBox title="估算后建议做什么" steps={["把估算结果作为准备材料的起点，不要当作最终分班。", "准备孩子过往成绩单、在读证明和必要翻译件。", "联系住址对应教育局，确认注册流程和年级评估方式。", "如果孩子接近年龄分界线，向学校说明完整教育经历。"]} /></section>
      <section className="mt-8"><WarningBox items={["安省实际年级安排可能考虑具体出生日期，而不仅是出生年份。", "学校可能根据英语能力、过往课程和学生适应情况调整安排。"]} /></section>
      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-950">相关指南</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/school/ontario/school-system">安省学校体系基础</Link>
          <Link className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href="/school/ontario/registration-documents">学校注册文件</Link>
        </div>
      </section>
      <section className="mt-10"><DisclaimerBox variant="school" /></section>
    </main>
  );
}
