import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCard } from "@/components/CategoryCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { categories, firstContentClusterGuides, guides, site, tools } from "@/lib/content";
import { schoolGuides, schoolTools } from "@/lib/school";
import { homePageJsonLd, homePageMetadata } from "@/lib/seo";

export const metadata: Metadata = homePageMetadata;

const homepageGuideSections = [
  {
    title: "Introduction",
    body: "Newcomer Living 是面向新移民、留学生和中文家庭的加拿大新移民指南，也可以作为一份 Canada newcomer guide 使用。首页内容不是广告或承诺，而是把刚到加拿大常见的生活问题按主题整理：住在哪里、每月预算如何估算、孩子怎样上学、需要办理哪些文件、是否需要买车，以及遇到不确定规则时如何找到官方来源。对于第一次来加拿大的人，最实用的做法不是一次解决所有问题，而是先建立清单、确认城市、省份和身份，再按优先级逐项处理。",
  },
  {
    title: "Cost of Living",
    body: "加拿大生活成本因城市、家庭人数、住房方式、交通选择和季节差异很大。做预算时建议把房租、食品、手机网络、交通、保险、孩子支出、冬季用品和一次性安置成本分开。Toronto、Vancouver 等大城市房租和通勤成本通常更高，小城市可能房租低一些，但买车、冬胎和车险可能变成主要支出。本站的 Cost of living in Canada 内容强调用真实报价更新预算，而不是直接套用网络平均数。",
  },
  {
    title: "Housing",
    body: "加拿大租房通常是落地后的第一件大事。新人需要同时看月租、押金或末月房租、租期、水电暖网、洗衣、停车、通勤和冬季取暖。没有本地信用记录时，可以准备录取信、工作信、资金证明、推荐信或担保信息，但应保护 SIN、护照号码和完整银行账号。看房时建议白天实地查看，确认门窗、水压、取暖、安全、交通和周边环境，并把房东承诺写入租约或邮件。涉及押金和租客权利时，应查看所在省份的官方规则。",
  },
  {
    title: "Employment",
    body: "加拿大找工作需要同时考虑身份、可工作时间、简历、面试和基础劳动权益。留学生应先确认学习许可上的工作条件，新移民或工签持有人应确认雇主、岗位和工时要求是否符合自己的身份。兼职简历通常一页即可，重点写清联系方式、可工作时间、服务经验、语言能力和可靠性。求职时不要向陌生人随意提供 SIN、银行信息或缴纳不明费用；收到 offer 后也应保存书面记录，并了解工资、班次、培训、试用期和请假规则。",
  },
  {
    title: "Education",
    body: "加拿大孩子上学的规则由省份和教育局管理。加拿大孩子上学通常要先确认居住地址对应的 school board 或学校，再准备孩子身份证明、住址证明、监护人信息、免疫记录和移民身份相关文件。安省等省份可能根据出生年份安排年级，但过往学习记录、语言支持和特殊需求也会影响学校安排。留学生家庭、工签家庭和访问身份家庭的学费或入学资格可能不同，建议在注册前联系当地教育局，并以官方说明为准。",
  },
  {
    title: "Government Documents",
    body: "政府文件是加拿大生活指南中最容易被低估的一部分。新人通常需要按顺序处理 SIN、银行账户、手机号、住址证明、健康卡或省级医疗保险、驾照、学校注册材料和税务相关文件。不同身份和省份要求不同，重要事项不要只看经验帖。建议把护照、移民纸、学习许可、工作许可、租约、账单、学校信、雇主信和收据保存为电子版与纸质备份。SIN 属于敏感号码，只应在工作、报税、银行利息等必要场景提供。",
  },
  {
    title: "Transportation",
    body: "交通选择会直接影响预算和生活半径。大城市可以先比较公交、地铁、通勤火车、骑行和步行；小城市或带孩子家庭可能更依赖汽车。准备开车的人需要了解本省驾照系统、外国驾照可使用期限、翻译要求、保险报价、车辆登记、冬胎和事故处理。中国驾照持有人在 Ontario 通常不能直接换 G 牌，但如果能证明足够海外驾驶经验，可能在通过 G1 后获得直接尝试 G road test 的机会。买车前应先询问保险报价，再决定新车、二手车、租车或暂时不买车。",
  },
  {
    title: "Useful Tools",
    body: "本站工具的目标是帮助你把信息变成可执行步骤。月生活成本计算器可以把加拿大生活成本拆成房租、食品、交通、手机、保险和其他支出，适合出发前或换城市前做预算。新移民第一个月清单适合整理抵达前、第一周和第一个月的事项。孩子上学相关工具可帮助家庭估算安省年级、准备注册文件。工具结果只作为一般参考，最终决定仍应结合官方信息、真实报价、学校或教育局回复、保险公司说明和个人家庭情况。",
  },
] as const;

export default function Home() {
  const contentCluster = firstContentClusterGuides();

  return (
    <main>
      <section className="bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Newcomer Living · 加拿大生活工具箱</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Canada Newcomer Living Guide</h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">为留学生、新移民和华人家庭准备的加拿大新移民指南，覆盖加拿大生活成本、加拿大租房、加拿大找工作、加拿大孩子上学、文件办理和交通驾驶。</p>
            <p className="mt-3 text-slate-600">{site.englishTagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/tools/monthly-cost-calculator" className="rounded-2xl bg-teal-700 px-5 py-3 text-center font-semibold text-white shadow-sm hover:bg-teal-800">使用生活成本计算器</Link>
              <Link href="/tools/newcomer-checklist" className="rounded-2xl border border-teal-200 bg-white px-5 py-3 text-center font-semibold text-teal-800 shadow-sm hover:border-teal-300 hover:bg-teal-50">查看新移民第一个月清单</Link>
              <Link href="/guides/renting-without-credit-history" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center font-semibold text-slate-700 shadow-sm hover:border-teal-200 hover:text-teal-800">阅读租房指南</Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-950">从实用工具开始</h2>
            <div className="mt-5 grid gap-4">
              {tools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Homepage Guide</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">加拿大生活指南：从预算、住房到孩子上学</h2>
          <p className="mt-4 leading-7 text-slate-600">以下首页内容按新移民最常遇到的问题排列，帮助你先建立整体路线，再进入对应指南和工具。所有建议均为一般参考，涉及身份、法律、保险、学校或政府文件时，请以官方信息为准。</p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {homepageGuideSections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-950">{section.title}</h2>
              <p className="mt-4 leading-8 text-slate-700">{section.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/categories/cost-of-living" className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-100">阅读生活成本指南</Link>
          <Link href="/categories/renting" className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50">查看租房内容</Link>
          <Link href="/school" className="rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50">进入孩子上学专题</Link>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">生活分类</p><h2 className="mt-2 text-3xl font-bold text-slate-950">主要生活主题</h2></div></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{categories.map((category) => <CategoryCard key={category.slug} category={category} />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Ontario School Guide</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">安省孩子上学指南</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">为新移民、留学生和工签家庭准备的 Ontario 孩子上学实用指南。先从学校体系、注册文件、身份问题、年级估算和注册清单开始。</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/school" className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800">进入孩子上学专题</Link>
                <Link href="/school/ontario" className="rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50">查看安省指南</Link>
              </div>
            </div>
            <div className="grid gap-3">
              {schoolGuides.slice(0, 2).map((guide) => (
                <Link key={guide.slug} href={`/school/ontario/${guide.slug}`} className="rounded-2xl border border-slate-200 bg-white p-4 hover:border-teal-200 hover:shadow-sm">
                  <h3 className="font-semibold text-slate-950">{guide.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{guide.description}</p>
                </Link>
              ))}
              {schoolTools.slice(0, 1).map((tool) => (
                <Link key={tool.slug} href={tool.href} className="rounded-2xl border border-teal-100 bg-teal-50 p-4 hover:bg-teal-100/70">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">实用工具</p>
                  <h3 className="mt-1 font-semibold text-slate-950">{tool.titleZh}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">首个内容专题</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">生活成本、租房与新移民第一个月</h2>
            <p className="mt-3 leading-7 text-slate-600">先围绕最常见的落地问题建立完整路径：大概需要多少钱、不同城市怎么估算、如何找房看房、押金和租约要注意什么。</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{contentCluster.slice(0, 6).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/categories/cost-of-living" className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">查看生活成本分类</Link>
            <Link href="/tools/monthly-cost-calculator" className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800 hover:bg-teal-50">使用生活成本计算器</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950">最新指南</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{guides.slice(0, 6).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8"><DisclaimerBox /></section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageJsonLd),
        }}
      />
    </main>
  );
}

