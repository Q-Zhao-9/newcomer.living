import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系加拿大生活工具箱，反馈过期信息、提出内容建议或报告网站问题。",
  alternates: { canonical: "/contact" },
};

const contactEmail = "service50183816@gmail.com";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "联系我们" }]} />
      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-50 to-white p-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Contact / 联系我们</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">联系我们</h1>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          加拿大生活工具箱提供一般信息、生活指南、清单和计算工具。如果你发现内容可能过期、不准确，或希望建议新的主题，欢迎联系我们。
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">联系邮箱</h2>
          <p className="mt-3 leading-7 text-slate-700">请发送邮件至：</p>
          <a className="mt-3 inline-block font-semibold text-teal-700 underline" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            为了方便核对，请尽量附上相关页面链接、你看到的问题、以及建议参考的官方来源。
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">内容更正与更新请求</h2>
          <p className="mt-3 leading-7 text-slate-700">
            加拿大生活信息、费用范围、学校或政府流程可能会变化。如果你发现页面内容需要更新，可以通过邮件提交更正请求。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>页面标题或链接</li>
            <li>需要更正的具体文字</li>
            <li>建议参考的官方或可信来源</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-2xl font-bold text-slate-950">重要提醒</h2>
        <p className="mt-3 leading-7 text-slate-700">
          本站不提供法律、移民、税务、财务、医疗、保险或其他专业建议。涉及重要决定时，请以官方信息为准，或咨询合格专业人士。
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          如需了解本站信息边界，请阅读 <Link className="font-semibold text-teal-700 underline" href="/disclaimer">免责声明</Link>。
        </p>
      </section>
    </main>
  );
}
