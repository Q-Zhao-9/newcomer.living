import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = { title: "隐私政策", description: "加拿大生活工具箱隐私政策，说明访问数据、Cookie、第三方服务和信息保护原则。" };

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "隐私政策" }]} />
      <h1 className="text-4xl font-bold text-slate-950">隐私政策</h1>
      <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
        <p>加拿大生活工具箱重视用户隐私。本政策说明本站在提供加拿大生活指南、清单和计算工具时，可能如何处理与网站访问相关的信息。</p>
        <h2 className="text-2xl font-bold text-slate-950">我们可能收集的信息</h2>
        <p>本站主要提供公开内容和本地工具。通常情况下，用户无需注册账户即可浏览页面。为了改善网站体验，我们可能通过服务器日志或分析工具了解页面访问量、设备类型、浏览器类型、大致地区和访问来源等基础信息。</p>
        <h2 className="text-2xl font-bold text-slate-950">本地工具数据</h2>
        <p>月生活成本计算器的输入主要在浏览器中即时计算。新移民清单的勾选状态会保存在用户自己的浏览器 localStorage 中，用于下次访问时继续显示进度。本站不会要求用户输入 SIN、银行密码、完整证件号码等高度敏感信息。</p>
        <h2 className="text-2xl font-bold text-slate-950">Cookie 与第三方服务</h2>
        <p>未来如接入访问分析、广告或安全防护服务，第三方服务可能使用 Cookie 或类似技术，用于统计访问、展示相关广告、衡量效果或防止滥用。用户可以通过浏览器设置管理或删除 Cookie。</p>
        <h2 className="text-2xl font-bold text-slate-950">广告说明</h2>
        <p>本站可能在未来接入 Google AdSense 或其他广告服务。广告服务商可能根据其政策使用 Cookie 或类似技术。具体广告服务上线后，本政策会根据实际使用情况继续更新。</p>
        <h2 className="text-2xl font-bold text-slate-950">信息保护</h2>
        <p>我们会尽量减少不必要的数据收集，并采取合理方式保护网站和访问数据。互联网传输和存储无法保证绝对安全，用户在使用任何网站时都应避免提交不必要的敏感个人信息。</p>
        <h2 className="text-2xl font-bold text-slate-950">政策更新</h2>
        <p>本站可能根据功能、法规或第三方服务变化更新本政策。更新后的内容会发布在本页面。</p>
      </div>
    </main>
  );
}
