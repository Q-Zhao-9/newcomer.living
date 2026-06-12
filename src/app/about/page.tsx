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
        <p>本站定位为实用生活工具箱，不只是文章列表，而是把指南、清单和计算工具结合起来，让留学生、新移民和华人家庭可以按场景完成准备。</p>
        <p>内容会尽量使用谨慎、清晰、可核对的表达。涉及政府政策、学校要求、移民、税务、法律、医疗或财务事项时，用户仍应以官方和专业人士信息为准。</p>
      </div>
    </main>
  );
}
