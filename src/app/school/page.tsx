import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { ParentQuestionCard, SchoolStageCard, RelatedTools } from "@/components/school";
import { buildPageMetadata } from "@/lib/seo";
import { parentQuestions, schoolGuides, schoolProvinces, schoolStageCards, schoolTools } from "@/lib/school";

export const metadata: Metadata = buildPageMetadata({
  title: "孩子在加拿大上学：家长指南",
  description: "面向中文新移民家庭的加拿大孩子上学指南入口，按学前、幼儿园、小学、高中和常见家长问题整理安省学校专题。",
  path: "/school",
});

const schoolFaqs = [
  {
    question: "孩子刚到加拿大，可以马上注册学校吗？",
    answer: "通常情况下，家长需要先确认居住地址对应的 school board，再按教育局要求提交身份证明、住址证明、监护人信息和免疫记录等材料。不同省份和教育局流程可能不同，建议以本地 school board 官方页面为准。",
  },
  {
    question: "孩子英文不好，会不会影响入学？",
    answer: "多数公立学校会接收需要英语支持的新生，并可能安排英语水平评估、ESL/ELL 支持或 newcomer support。具体支持方式由学校或教育局决定，注册时可以主动询问。",
  },
  {
    question: "加拿大年级能不能直接按中国年级换算？",
    answer: "不建议直接套用。学校通常会参考出生日期、目标入学年份、过往成绩、英语能力和适应情况。本站的年级估算器只能帮助家长做初步准备，最终安排仍以学校或教育局为准。",
  },
  {
    question: "父母是学签或工签，孩子一定可以免费上学吗？",
    answer: "这个问题与家庭身份、居住地、孩子情况和本地教育局规则有关，不能简单保证。涉及 study permit、国际学生费用或入学资格时，建议同时核对 IRCC 与 school board 官方说明。",
  },
  {
    question: "现在只有安省内容，其他省份怎么办？",
    answer: "本站目前优先把 Ontario 学校专题做完整。BC、Alberta、Manitoba 等省份的流程可能不同，家长可以先用本页理解加拿大中小学常见概念，再查看所在省份和本地教育局的官方资料。",
  },
];

export default function SchoolPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs currentPath="/school" items={[{ label: "孩子上学" }]} />
      <section className="rounded-[2rem] bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">School Guide</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">孩子在加拿大上学：家长指南</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">为中国家庭、新移民父母、留学生家庭和工签家庭整理加拿大孩子上学的基础问题：年级怎么判断、注册要什么文件、英语不好怎么办、安省高中课程怎么看。内容会尽量把教育局、学校沟通和官方信息核对步骤讲清楚，帮助家长更稳妥地做准备。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800" href="/school/ontario">进入安省孩子上学指南</Link>
          <Link className="rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50" href="/tools/ontario-grade-estimator">估算孩子年级</Link>
        </div>
      </section>

      <section className="mt-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Browse by province</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">按省份浏览</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(schoolProvinces).map(([slug, province]) => province.active && province.href ? (
            <Link key={slug} href={province.href} className="rounded-3xl border border-teal-100 bg-teal-50 p-5 shadow-sm hover:bg-teal-100/70">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">Available now</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-950">{province.name} / {province.nameZh}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">当前已建立安省学校专题，包含注册、身份、年级和工具页面。</p>
            </Link>
          ) : (
            <div key={slug} className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-500">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">后续省份</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-700">{province.name} / {province.nameZh}</h3>
              <p className="mt-3 text-sm leading-6">本站会优先保持安省内容完整；其他省份将在资料充分核对后再整理。</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Browse by stage</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">按上学阶段浏览</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schoolStageCards.map((stage) => <SchoolStageCard key={stage.title} {...stage} />)}
        </div>
      </section>

      <section className="mt-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Parent questions</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">按家长问题浏览</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {parentQuestions.map((item) => <ParentQuestionCard key={item.question} {...item} />)}
        </div>
      </section>

      <section className="mt-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Ontario guides</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">安省重点指南</h2>
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

      <section className="mt-12 rounded-[2rem] border border-teal-100 bg-teal-50/60 p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">常见问题</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">以下回答为一般信息参考，适合家长在联系本地教育局或学校前先建立基本框架。</p>
        <div className="mt-6 space-y-3">
          {schoolFaqs.map((item) => (
            <details key={item.question} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-lg font-semibold text-slate-950 marker:hidden">
                <span>{item.question}</span>
                <span className="mt-1 text-2xl leading-none text-teal-700 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12"><RelatedTools slugs={schoolTools.map((tool) => tool.slug)} /></section>
      <section className="mt-10"><DisclaimerBox variant="school" /></section>
    </main>
  );
}
