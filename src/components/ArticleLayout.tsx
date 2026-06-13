import Link from "next/link";
import type { Guide, Source, Tool } from "@/lib/content";
import { getCategory, getGuide, getTool, site, tools, toolsByCategory } from "@/lib/content";
import { Breadcrumbs } from "./Breadcrumbs";
import { DisclaimerBox, type DisclaimerVariant } from "./DisclaimerBox";
import { NextStepCallout } from "./NextStepCallout";

function disclaimerVariantForCategory(category: string): DisclaimerVariant {
  if (category === "school") return "school";
  if (category === "documents" || category === "student-life") return "documents";
  if (category === "car-winter-driving") return "driving";
  if (category === "customs-travel") return "customs";
  return "general";
}

function SummaryBox({ items }: { items: string[] }) {
  return (
    <section className="mt-8 rounded-3xl border border-teal-100 bg-teal-50 p-6">
      <h2 className="text-lg font-bold text-slate-950">快速摘要</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

function ArticleChecklistBox({ items }: { items: string[] }) {
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">实用清单</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => <li key={item} className="flex gap-3 text-slate-700"><span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-teal-100 text-center text-xs leading-5 text-teal-800">✓</span>{item}</li>)}
      </ul>
    </section>
  );
}

function SourceList({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-xl font-bold text-slate-950">官方与可信来源</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">重要规则可能更新，建议以官方页面和机构回复为准。本站在进行主要内容更新前，会优先重新检查这些来源。</p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href}>
            <Link className="font-semibold text-teal-700 hover:underline" href={source.href}>{source.label}</Link>
            {source.description ? <p className="mt-1 text-sm leading-6 text-slate-600">{source.description}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

function RelatedGuideLinks({ guides }: { guides: Guide[] }) {
  if (guides.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-slate-950">相关指南</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {guides.map((related) => <Link key={related.slug} className="rounded-2xl border border-slate-200 p-4 font-semibold text-slate-800 hover:border-teal-200 hover:text-teal-700" href={`/guides/${related.slug}`}>{related.title}</Link>)}
      </div>
    </section>
  );
}

function RelatedToolLinks({ tools }: { tools: Tool[] }) {
  if (tools.length === 0) return null;
  return (
    <section className="mt-10 rounded-3xl border border-teal-100 bg-teal-50 p-6">
      <h2 className="text-2xl font-bold text-slate-950">相关工具</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => <Link key={tool.slug} className="rounded-2xl bg-white p-4 font-semibold text-teal-700 shadow-sm hover:text-teal-900" href={`/tools/${tool.slug}`}>{tool.titleZh}</Link>)}
      </div>
    </section>
  );
}

export function ArticleLayout({ guide }: { guide: Guide }) {
  const category = getCategory(guide.category);
  const relatedGuides = (guide.relatedGuides ?? guide.related).map(getGuide).filter(Boolean) as Guide[];
  const configuredTools = (guide.relatedTools ?? []).map(getTool).filter(Boolean) as Tool[];
  const categoryTools = category ? toolsByCategory(category.slug) : [];
  const fallbackTools = tools.filter((tool) => tool.slug === "monthly-cost-calculator" || tool.slug === "newcomer-checklist");
  const relatedTools = Array.from(new Map([...configuredTools, ...categoryTools, ...fallbackTools].map((tool) => [tool.slug, tool])).values()).slice(0, 3);
  const nextStep = relatedTools[0]
    ? { title: "下一步：用工具把内容变成自己的清单", description: `${relatedTools[0].titleZh} 可以帮助你把本文中的一般参考转换成更贴近自己情况的估算或待办。`, href: `/tools/${relatedTools[0].slug}`, label: `打开${relatedTools[0].titleZh}` }
    : relatedGuides[0]
      ? { title: "下一步：继续阅读相关指南", description: "如果你已经了解本文基础内容，可以继续阅读下一篇相关指南，形成更完整的准备路径。", href: `/guides/${relatedGuides[0].slug}`, label: relatedGuides[0].title }
      : category
        ? { title: "下一步：回到主题分类", description: "查看同一主题下的更多指南、工具和常见问题。", href: `/categories/${category.slug}`, label: `查看${category.titleZh}分类` }
        : null;
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: category?.titleZh ?? "指南", href: category ? `/categories/${category.slug}` : undefined }, { label: guide.title }]} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">生活指南</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{guide.title}</h1>
          <p className="mt-4 text-sm text-slate-500">更新日期：{guide.updated} · 阅读时间：{guide.readingTime}</p>
          <SummaryBox items={guide.summary} />
          <div className="prose prose-slate mt-8 max-w-none prose-headings:scroll-mt-24 prose-h2:text-2xl prose-p:leading-8">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.table ? (
                  <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="min-w-full divide-y divide-slate-200 text-sm">
                      <thead className="bg-slate-50 text-left text-slate-700">
                        <tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {section.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell) => <td key={cell} className="px-4 py-3 align-top text-slate-700">{cell}</td>)}</tr>)}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {section.links ? (
                  <div className="not-prose mt-4 flex flex-wrap gap-3">
                    {section.links.map((link) => <Link key={link.href} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100" href={link.href}>{link.label}</Link>)}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
          <ArticleChecklistBox items={guide.checklist} />
          <SourceList sources={guide.sources ?? []} />
          {nextStep ? <NextStepCallout title={nextStep.title} description={nextStep.description} href={nextStep.href} linkLabel={nextStep.label} /> : null}
          <RelatedToolLinks tools={relatedTools} />
          <DisclaimerBox title="阅读前请注意" variant={disclaimerVariantForCategory(guide.category)} />
          <RelatedGuideLinks guides={relatedGuides} />
        </article>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-slate-950">常用工具</h2>
            <Link className="mt-3 block text-sm text-teal-700 hover:underline" href="/tools/monthly-cost-calculator">加拿大月生活成本计算器</Link>
            <Link className="mt-2 block text-sm text-teal-700 hover:underline" href="/tools/newcomer-checklist">新移民第一个月清单</Link>
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
            description: guide.excerpt,
            datePublished: guide.updated,
            dateModified: guide.updated,
            inLanguage: "zh-CN",
            mainEntityOfPage: `${site.url}/guides/${guide.slug}`,
            author: { "@type": "Organization", name: site.nameZh },
            publisher: { "@type": "Organization", name: site.nameZh, url: site.url },
          }),
        }}
      />
    </main>
  );
}
