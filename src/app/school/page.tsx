import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { ParentQuestionCard, SchoolStageCard, RelatedTools } from "@/components/school";
import { buildPageMetadata } from "@/lib/seo";
import { parentQuestions, schoolGuides, schoolStageCards, schoolTools } from "@/lib/school";

export const metadata: Metadata = buildPageMetadata({
  title: "孩子在加拿大上学：家长指南",
  description: "面向中文新移民家庭的加拿大孩子上学指南入口，按学前、幼儿园、小学、高中和常见家长问题整理安省学校专题。",
  path: "/school",
});

export default function SchoolPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "孩子上学" }]} />
      <section className="rounded-[2rem] bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">School Guide</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">孩子在加拿大上学：家长指南</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">为中国家庭、新移民父母、留学生家庭和工签家庭整理加拿大孩子上学的基础问题：年级怎么判断、注册要什么文件、英语不好怎么办、安省高中课程怎么看。当前重点先搭建 Ontario / 安省专题。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800" href="/school/ontario">进入安省孩子上学指南</Link>
          <Link className="rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50" href="/tools/ontario-grade-estimator">估算孩子年级</Link>
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

      <section className="mt-12"><RelatedTools slugs={schoolTools.map((tool) => tool.slug)} /></section>
      <section className="mt-10"><DisclaimerBox variant="school" /></section>
    </main>
  );
}
