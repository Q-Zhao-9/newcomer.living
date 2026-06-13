import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "隐私政策",
  description: "加拿大生活工具箱隐私政策，说明访问数据、localStorage、Cookie、未来分析工具、广告和第三方链接。",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "我们可能收集的信息",
    body: [
      "通常情况下，用户无需注册账户即可浏览本站内容。本站目前主要提供公开指南、清单和计算工具，不主动要求用户提交 SIN、银行密码、完整证件号码、税务账号或医疗记录等高度敏感信息。",
      "为了了解网站是否正常运行、哪些页面更有帮助，以及改进内容质量，我们可能通过服务器日志、托管服务或未来接入的分析工具收集一般访问数据，例如浏览器类型、设备类型、访问页面、访问时间、停留或互动情况、推荐来源、语言设置和大致地区。大致地区通常基于网络信息估算，不等同于精确住址。",
    ],
  },
  {
    title: "我们如何使用这些信息",
    body: [
      "我们可能使用一般访问数据来维护网站安全、发现技术问题、了解常用内容、改进页面结构、评估工具使用体验，以及规划后续指南和工具。",
      "如果未来接入分析或广告服务，我们也可能根据第三方服务提供的汇总报告了解页面表现。本站不会把工具中的预算数字或清单勾选状态用于人工审核个人情况。",
    ],
  },
  {
    title: "本地工具与 localStorage",
    body: [
      "月生活成本计算器的输入主要在用户浏览器中即时计算，用于显示估算结果。新移民第一个月清单会使用浏览器 localStorage 保存勾选进度，方便用户下次访问时继续查看。",
      "localStorage 是保存在用户自己设备浏览器中的本地存储。清除浏览器数据、更换设备或使用无痕模式，可能导致这些勾选记录消失。建议不要在任何网站工具中输入不必要的敏感个人信息。",
    ],
  },
  {
    title: "Cookie 和类似技术",
    body: [
      "Cookie 是网站或第三方服务保存在浏览器中的小型数据文件，常用于记住偏好、统计访问、维持安全、防止滥用或衡量广告效果。类似技术还可能包括 localStorage、像素标签或浏览器标识。",
      "本站当前以内容和本地工具为主；未来如果接入分析、广告或安全服务，相关服务可能根据自己的政策使用 Cookie 或类似技术。用户可以在浏览器设置中删除 Cookie、限制第三方 Cookie，或使用隐私相关浏览器功能。部分功能在禁用 Cookie 或清除本地数据后可能无法保存偏好或进度。",
    ],
  },
  {
    title: "分析工具",
    body: [
      "本站未来可能接入 Google Analytics、Google Search Console、隐私友好型分析工具或托管平台自带统计功能，用于了解页面访问量、流量来源、设备类型和内容表现。",
      "如果接入这类服务，我们会尽量使用汇总数据来改进内容和网站体验，而不是识别具体个人。不同分析服务的数据处理方式可能不同，用户可查看对应服务商的隐私说明。",
    ],
  },
  {
    title: "广告与 Google AdSense",
    body: [
      "本站未来可能接入 Google AdSense 或其他第三方广告服务。广告服务商可能使用 Cookie 或类似技术来展示广告、限制重复展示、衡量广告效果，或根据用户访问的网站和大致兴趣展示相关广告。",
      "本站尚未在本政策中承诺永不使用广告或跟踪技术，因为网站长期计划包括内容变现。实际广告服务上线后，本政策会根据当时使用的服务继续更新。用户也可以通过浏览器设置、广告偏好设置或相关服务商提供的工具管理个性化广告体验。",
    ],
  },
  {
    title: "第三方链接",
    body: [
      "本站文章可能链接到加拿大政府、学校、交通机构、银行、电信公司、第三方工具或其他网站。点击这些链接后，用户将进入第三方网站。第三方网站的隐私政策、Cookie 使用和数据处理方式不由本站控制。",
      "访问重要官方信息时，建议确认网站域名和页面日期，避免在无法核实的网站输入敏感资料。",
    ],
  },
  {
    title: "信息保护与数据最小化",
    body: [
      "我们会尽量减少不必要的数据收集，并采取合理方式维护网站安全和访问数据安全。但互联网传输和存储无法保证绝对安全，用户在使用任何网站时都应避免提交不必要的敏感个人信息。",
      "如果未来新增账户、表单、邮件订阅或其他会收集个人信息的功能，本政策应在相关功能上线前进一步更新。",
    ],
  },
  {
    title: "政策更新",
    body: [
      "本站可能根据网站功能、法律要求、托管服务、分析工具或广告服务变化更新本政策。更新后的内容会发布在本页面。",
      "如某项第三方服务正式上线，建议用户重新查看本页面，了解最新的数据使用说明。",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "隐私政策" }]} />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Privacy Policy</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">隐私政策</h1>
      <p className="mt-3 text-sm text-slate-500">最近更新：2026-06-13</p>
      <p className="mt-6 text-lg leading-8 text-slate-700">
        加拿大生活工具箱重视用户隐私。本政策说明本站在提供加拿大生活指南、清单和计算工具时，可能如何处理与网站访问、浏览器本地存储、Cookie、未来分析工具和未来广告相关的信息。
      </p>
      <div className="mt-8 space-y-8 text-lg leading-8 text-slate-700">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
            <div className="mt-3 space-y-4">
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <section className="rounded-3xl border border-teal-100 bg-teal-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">隐私问题联系</h2>
          <p className="mt-3">如果你对本隐私政策、localStorage、Cookie、未来分析工具或广告说明有问题，可以通过本站联系页面发送反馈。</p>
          <Link className="mt-4 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800" href="/contact">联系本站</Link>
        </section>
      </div>
    </main>
  );
}
