import Link from "next/link";
import type { SchoolGuide, SchoolSource } from "@/lib/school";
import { getSchoolGuide, getSchoolTool } from "@/lib/school";

export function OfficialSourceList({ sources }: { sources: SchoolSource[] }) {
  if (!sources.length) return null;
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">官方与可信来源</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">以下链接用于进一步核对重要规则。政策可能更新，请以官方页面为准。</p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.url}>
            <Link className="font-semibold text-teal-700 hover:underline" href={source.url}>{source.title}</Link>
            <p className="text-sm text-slate-500">{source.publisher}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedGuides({ slugs }: { slugs?: string[] }) {
  const guides = (slugs ?? []).map(getSchoolGuide).filter(Boolean) as SchoolGuide[];
  if (!guides.length) return null;
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">相关指南</h2>
      <div className="mt-4 grid gap-3">
        {guides.map((guide) => (
          <Link key={guide.slug} className="rounded-2xl border border-slate-200 p-4 hover:border-teal-200 hover:bg-teal-50/60" href={`/school/ontario/${guide.slug}`}>
            <h3 className="font-semibold text-slate-950">{guide.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function RelatedTools({ slugs }: { slugs?: string[] }) {
  const tools = (slugs ?? []).map(getSchoolTool).filter(Boolean) as NonNullable<ReturnType<typeof getSchoolTool>>[];
  if (!tools.length) return null;
  return (
    <section className="rounded-3xl border border-teal-100 bg-teal-50/70 p-6">
      <h2 className="text-xl font-bold text-slate-950">相关工具</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.slug} className="rounded-2xl bg-white p-4 shadow-sm hover:shadow-md" href={tool.href}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">工具</p>
            <h3 className="mt-2 font-semibold text-slate-950">{tool.titleZh}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SchoolStageCard({ title, titleZh, description, href }: { title: string; titleZh: string; description: string; href: string }) {
  return (
    <Link href={href} className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">{title}</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{titleZh}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}

export function ParentQuestionCard({ question, answer, href }: { question: string; answer: string; href: string }) {
  return (
    <Link href={href} className="block rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-200 hover:bg-teal-50/50">
      <h3 className="text-lg font-semibold text-slate-950">{question}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
    </Link>
  );
}

export function ChecklistBox({ title = "家长准备清单", items }: { title?: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700"><span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-teal-100 text-center text-xs leading-5 text-teal-800">✓</span><span>{item}</span></li>
        ))}
      </ul>
    </section>
  );
}

export function StepByStepBox({ title = "建议步骤", steps }: { title?: string; steps: string[] }) {
  return (
    <section className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ol className="mt-4 space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-slate-700"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">{index + 1}</span><span className="pt-1">{step}</span></li>
        ))}
      </ol>
    </section>
  );
}

export function WarningBox({ items, title = "重要提醒" }: { title?: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
      <h2 className="text-xl font-bold text-slate-950">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
