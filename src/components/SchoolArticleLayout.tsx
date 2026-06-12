import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { ChecklistBox, OfficialSourceList, RelatedGuides, RelatedTools, StepByStepBox, WarningBox } from "@/components/school";
import type { SchoolGuide } from "@/lib/school";
import { site } from "@/lib/content";

export function SchoolArticleLayout({ guide }: { guide: SchoolGuide }) {
  const steps = [
    "先确认家庭住址对应的教育局和学校范围。",
    "准备身份、住址、免疫和过往学校材料。",
    "向教育局或学校核对最新注册流程。",
    "保留官方页面、邮件回复和提交确认记录。",
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "孩子上学", href: "/school" }, { label: "安省指南", href: "/school/ontario" }, { label: guide.title }]} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Ontario School Guide</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{guide.title}</h1>
          <p className="mt-4 text-sm text-slate-500">更新日期：{guide.updatedAt} · 阅读时间：{guide.readingTime}</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{guide.description}</p>

          <section className="mt-8 rounded-3xl border border-teal-100 bg-teal-50 p-6">
            <h2 className="text-lg font-bold text-slate-950">快速摘要</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {guide.summary.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <div className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24 prose-h2:text-2xl prose-p:leading-8">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>

          {guide.checklist ? <div className="mt-8"><ChecklistBox items={guide.checklist} /></div> : null}
          {guide.warnings ? <div className="mt-8"><WarningBox items={guide.warnings} /></div> : null}
          <div className="mt-8"><StepByStepBox steps={steps} /></div>
          <div className="mt-8"><OfficialSourceList sources={guide.sources ?? []} /></div>
          <div className="mt-8"><RelatedGuides slugs={guide.relatedGuides} /></div>
          <div className="mt-8"><RelatedTools slugs={guide.relatedTools} /></div>
          <DisclaimerBox title="阅读前请注意" variant="school" />
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">安省学校专题</h2>
            <Link className="mt-3 block text-sm text-teal-700 hover:underline" href="/school/ontario/school-system">安省学校体系基础</Link>
            <Link className="mt-2 block text-sm text-teal-700 hover:underline" href="/school/ontario/registration-documents">学校注册文件</Link>
            <Link className="mt-2 block text-sm text-teal-700 hover:underline" href="/school/ontario/study-permit-for-children">学签/工签家庭孩子上学</Link>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="font-bold text-slate-950">常用工具</h2>
            <Link className="mt-3 block text-sm text-teal-700 hover:underline" href="/tools/ontario-grade-estimator">安省年级估算器</Link>
            <Link className="mt-2 block text-sm text-teal-700 hover:underline" href="/tools/ontario-school-registration-checklist">安省学校注册清单</Link>
          </div>
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.description,
            datePublished: guide.updatedAt,
            dateModified: guide.updatedAt,
            inLanguage: "zh-CN",
            mainEntityOfPage: `${site.url}/school/ontario/${guide.slug}`,
            author: { "@type": "Organization", name: site.nameZh },
            publisher: { "@type": "Organization", name: site.nameZh, url: site.url },
            about: "Ontario school registration for Chinese-speaking newcomer families",
          }),
        }}
      />
    </main>
  );
}
