import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "关于加拿大生活工具箱",
  description: "了解加拿大生活工具箱的使命：为中文用户提供实用加拿大生活指南、清单和工具。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "关于本站" }]} />
      <h1 className="text-4xl font-bold text-slate-950">关于加拿大生活工具箱</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
        <p>加拿大生活工具箱希望帮助中文用户更快理解加拿大日常生活中的常见问题：租房、找工作、孩子上学、交通、冬季准备、文件办理和生活成本。</p>
        <p>本站定位为实用生活工具箱，不只是文章列表，而是把指南、清单和计算工具结合起来，帮助留学生、新移民和华人家庭按场景完成准备。</p>
        <p>我们的编辑目标是把复杂流程拆成清晰步骤，并在涉及政策、费用或资格要求时提醒用户进一步核对官方信息。</p>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">作者与编辑说明</h2>
          <p className="mt-3">本站内容由加拿大生活工具箱编辑整理，面向中文使用者提供一般生活信息。我们会优先使用谨慎、清晰、可核对的表达，并持续根据用户反馈更新内容。</p>
          <p className="mt-3">如果你发现信息过期或需要更正，请通过 <a className="font-semibold text-teal-700 underline" href="mailto:service50183816@gmail.com">service50183816@gmail.com</a> 联系我们。</p>
        </section>
        <p>涉及政府政策、学校要求、移民、税务、法律、医疗或财务事项时，用户仍应以官方信息和专业人士意见为准。</p>
      </div>
    </main>
  );
}
