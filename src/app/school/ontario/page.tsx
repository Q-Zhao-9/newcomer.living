import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { OfficialSourceList, ParentQuestionCard, RelatedTools, SchoolStageCard, StepByStepBox } from "@/components/school";
import { buildPageMetadata } from "@/lib/seo";
import { ontarioSchoolSources, parentQuestions, schoolGuides, schoolStageCards, schoolTools } from "@/lib/school";

export const metadata: Metadata = buildPageMetadata({
  title: "Ontario School Guide / 安省孩子上学指南",
  description: "安省孩子上学指南入口，帮助中文新移民家长了解 Ontario school system、学校注册、学签工签家庭问题、年级估算和注册清单。",
  path: "/school/ontario",
});

const sections = [
  { title: "Ontario school system", text: "先了解 school board、home school、年级、学期、高中学分和 ESL/ELL 支持。", href: "/school/ontario/school-system" },
  { title: "Registration", text: "整理注册学校常见文件、住址证明、免疫记录和过往学校材料。", href: "/school/ontario/registration-documents" },
  { title: "Study permit/status questions", text: "父母是学签、工签或其他身份时，孩子上学问题需要同时核对 IRCC 与教育局。", href: "/school/ontario/study-permit-for-children" },
  { title: "Kindergarten", text: "了解 JK/SK、年龄、注册时间和教育局安排的一般概念。", href: "/school/ontario/school-system" },
  { title: "Elementary school", text: "关注学校范围、英语支持、家校沟通、午餐和日常适应。", href: "/school/ontario/registration-documents" },
  { title: "High school", text: "关注学分、课程代码、毕业要求和 guidance counsellor。", href: "/school/ontario/school-system" },
  { title: "Grade 9 course selection", text: "选课会影响后续 Grade 11/12 路径，新家庭建议尽早咨询学校。", href: "/school/ontario/school-system" },
];

export default function OntarioSchoolPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "孩子上学", href: "/school" }, { label: "安省指南" }]} />
      <section className="rounded-[2rem] bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Ontario School Guide</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Ontario School Guide / 安省孩子上学指南</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">这个专题为中文新移民家长建立安省上学问题的基础结构：先理解学校体系，再准备注册文件，最后核对身份、年级和选课问题。内容为一般参考，具体安排以 Ontario.ca、教育局和学校信息为准。</p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-950">专题结构</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Link key={section.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:border-teal-200 hover:bg-teal-50/50" href={section.href}>
              <h3 className="font-semibold text-slate-950">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{section.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-950">按阶段浏览</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolStageCards.map((stage) => <SchoolStageCard key={stage.title} {...stage} />)}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-950">Featured guides / 重点指南</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {schoolGuides.map((guide) => (
            <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <Link href={`/school/ontario/${guide.slug}`}><h3 className="text-lg font-semibold leading-7 text-slate-950 hover:text-teal-700">{guide.title}</h3></Link>
              <p className="mt-2 text-sm text-slate-500">更新日期：{guide.updatedAt} · {guide.readingTime}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-slate-950">家长常见问题入口</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {parentQuestions.map((item) => <ParentQuestionCard key={item.question} {...item} />)}
        </div>
      </section>

      <section className="mt-12"><RelatedTools slugs={schoolTools.map((tool) => tool.slug)} /></section>
      <section className="mt-12"><StepByStepBox title="建议先这样使用本专题" steps={["先阅读安省学校体系基础，建立 school board、年级和高中学分概念。", "用学校注册文件指南准备材料，再打开注册清单逐项勾选。", "如果家庭身份涉及学签、工签或陪读，单独阅读身份相关指南并核对官方页面。", "在最终注册前，向所在教育局或学校确认最新要求。"]} /></section>
      <section className="mt-12"><OfficialSourceList sources={ontarioSchoolSources} /></section>
      <section className="mt-10"><DisclaimerBox variant="school" /></section>
    </main>
  );
}
