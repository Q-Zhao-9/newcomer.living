import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "免责声明", description: "加拿大生活工具箱网站免责声明。" };

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "免责声明" }]} />
      <h1 className="text-4xl font-bold text-slate-950">免责声明</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
        <p>Canada Life Toolkit / 加拿大生活工具箱不是加拿大政府网站，也不代表任何政府机构、学校、银行、保险公司或专业服务机构。</p>
        <p>本站内容仅供一般信息参考，不构成法律、财务、移民、税务、医疗、保险或其他专业建议。</p>
        <p>由于政策、价格、资格要求和服务条款可能随时变化，用户在做重要决定前，应查看官方来源，或咨询合格专业人士。</p>
        <p>使用本站工具得到的计算结果和清单仅为估算与提醒，不保证适用于所有个人或家庭情况。</p>
      </div>
    </main>
  );
}
