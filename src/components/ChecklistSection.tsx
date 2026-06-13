"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ChecklistItem = { text: string; note?: string };
type Section = { title: string; timing: string; items: ChecklistItem[]; related?: { label: string; href: string }[] };

const storageKey = "newcomer-checklist-v2";
const sections: Section[] = [
  {
    title: "抵达前",
    timing: "出发前 2–6 周",
    items: [
      { text: "准备护照、签证/eTA、学习许可或工签批准信", note: "把纸质版和离线电子版分开保存，重要文件不要只放在托运行李。" },
      { text: "准备学校录取、雇佣、住宿或邀请相关文件" },
      { text: "确认临时住宿地址、入住时间和房东/酒店联系方式" },
      { text: "保存重要文件离线副本", note: "包括护照页、许可文件、录取信、保险、机票和紧急联系人。" },
      { text: "准备可在加拿大使用的银行卡或现金应急方案" },
      { text: "查询抵达城市天气和第一周交通方式" },
    ],
    related: [{ label: "查看入境与旅行提醒", href: "/guides/china-to-canada-customs-items" }],
  },
  {
    title: "第一周",
    timing: "抵达后 1–7 天",
    items: [
      { text: "开通加拿大手机号", note: "先确认覆盖范围、是否有合约、开通费和自动扣款。" },
      { text: "开设银行账户并设置手机银行" },
      { text: "符合条件时申请 SIN", note: "SIN 属于敏感信息，不要随意发给不可信对象。" },
      { text: "购买基础食品、清洁用品和床上用品" },
      { text: "熟悉附近超市、药店、公交站和紧急服务" },
      { text: "记录重要收据、合同和账号信息" },
    ],
    related: [
      { label: "手机套餐怎么选", href: "/guides/canada-phone-plan-guide" },
      { label: "留学生 SIN 办理参考", href: "/guides/student-sin-canada" },
    ],
  },
  {
    title: "第一个月",
    timing: "抵达后 1–30 天",
    items: [
      { text: "确定长期住房或续住安排" },
      { text: "建立月度预算并区分固定支出和一次性支出", note: "第一个月常包含押金、家具、冬衣和临时住宿等额外支出。" },
      { text: "了解医疗保险、学校保险或省健康卡资格" },
      { text: "整理租房、银行、手机、保险等合同" },
      { text: "如果需要，开始求职、校园工作或简历准备" },
      { text: "为冬季、交通或孩子上学补齐必要物品" },
    ],
    related: [
      { label: "第一个月生活成本指南", href: "/guides/newcomer-monthly-cost-canada" },
      { label: "月生活成本计算器", href: "/tools/monthly-cost-calculator" },
    ],
  },
  {
    title: "住房",
    timing: "看房和入住时",
    items: [
      { text: "阅读租约中的租金、期限、押金和退租条款" },
      { text: "确认水电暖、网络、洗衣、停车是否包含" },
      { text: "入住当天拍照记录房屋状态", note: "重点记录墙面、地板、电器、门窗和已有损坏。" },
      { text: "了解垃圾分类、访客、停车和安静时间规则" },
      { text: "保存房东联系方式和维修报修方式" },
    ],
    related: [{ label: "没有信用记录如何租房", href: "/guides/renting-without-credit-history" }],
  },
  {
    title: "银行",
    timing: "第一周优先处理",
    items: [
      { text: "比较 chequing account 和学生/新移民账户" },
      { text: "询问月费、交易次数、转账费用和优惠结束时间" },
      { text: "了解 debit card 和 credit card 的区别" },
      { text: "设置网银、自动提醒和账单到期提醒" },
      { text: "保护 PIN、密码和验证码，不要转发给他人" },
    ],
  },
  {
    title: "电话与网络",
    timing: "第一周到第二周",
    items: [
      { text: "比较预付费、月付和合约套餐" },
      { text: "确认住处和学校/工作地点的信号覆盖" },
      { text: "记录促销价结束日期和取消条件" },
      { text: "如需家庭网络，确认安装时间和设备归还规则" },
    ],
    related: [{ label: "加拿大手机套餐如何选择", href: "/guides/canada-phone-plan-guide" }],
  },
  {
    title: "孩子上学",
    timing: "有学龄儿童时",
    items: [
      { text: "查找对应教育局和学校片区" },
      { text: "准备住址证明、孩子身份证明和监护人信息" },
      { text: "整理疫苗记录或联系当地公共卫生部门确认要求" },
      { text: "联系学校确认注册流程、语言支持和开学时间" },
      { text: "准备书包、午餐盒、室内鞋和冬季户外衣物" },
    ],
    related: [{ label: "安省孩子上学注册文件", href: "/guides/ontario-school-registration-documents" }],
  },
  {
    title: "冬季准备",
    timing: "秋冬抵达尤其重要",
    items: [
      { text: "购买冬衣、雪靴、手套、帽子和保暖袜" },
      { text: "了解住处除雪、撒盐或门前维护责任" },
      { text: "关注天气预警和体感温度" },
      { text: "如果开车，准备雪刷、冬胎、玻璃水和应急毯", note: "冬季驾驶风险更高，建议提前熟悉车辆和路况。" },
    ],
    related: [{ label: "冬天第一次开车注意事项", href: "/guides/winter-driving-first-time-canada" }],
  },
  {
    title: "找工作",
    timing: "稳定住处后逐步开始",
    items: [
      { text: "准备一页英文简历" },
      { text: "确认学习许可、工签或身份条件下的工作限制" },
      { text: "建立求职邮箱、LinkedIn 和申请记录表" },
      { text: "准备可工作时间、交通方式和推荐人信息" },
      { text: "警惕要求先付款、代收款或提供敏感信息的工作" },
    ],
    related: [{ label: "兼职简历怎么写", href: "/guides/canada-part-time-resume" }],
  },
];

export function ChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const saved = window.localStorage.getItem(storageKey) ?? window.localStorage.getItem("newcomer-checklist");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked]);

  const allIds = useMemo(() => sections.flatMap((section) => section.items.map((item) => getItemId(section.title, item.text))), []);
  const total = allIds.length;
  const done = allIds.filter((id) => checked[id]).length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  function resetChecklist() {
    setChecked({});
    window.localStorage.removeItem(storageKey);
    window.localStorage.removeItem("newcomer-checklist");
  }

  return (
    <div>
      <div className="mb-6 rounded-3xl border border-teal-100 bg-teal-50 p-5 print:border-slate-200 print:bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-950">完成进度：{percent}%</p>
            <p className="mt-1 text-sm text-slate-600">已完成 {done} / {total} 项。勾选结果会保存在本机浏览器。</p>
          </div>
          <div className="flex flex-wrap gap-2 print:hidden">
            <button type="button" onClick={() => window.print()} className="min-h-11 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-teal-100">打印 / 保存 PDF</button>
            <button type="button" onClick={resetChecklist} className="min-h-11 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:text-teal-700">重置清单</button>
          </div>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white print:border print:border-slate-200">
          <div className="h-full rounded-full bg-teal-600" style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 print:grid-cols-1">
        {sections.map((section) => {
          const sectionIds = section.items.map((item) => getItemId(section.title, item.text));
          const sectionDone = sectionIds.filter((id) => checked[id]).length;
          return (
            <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm break-inside-avoid">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-teal-700">{section.timing}</p>
                  <h2 className="mt-1 text-xl font-bold text-slate-950">{section.title}</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{sectionDone}/{section.items.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => {
                  const id = getItemId(section.title, item.text);
                  return (
                    <label key={id} className="flex min-h-11 cursor-pointer gap-3 rounded-2xl p-2 hover:bg-slate-50">
                      <input className="mt-1 h-6 w-6 shrink-0 accent-teal-600" type="checkbox" checked={Boolean(checked[id])} onChange={(event) => setChecked((current) => ({ ...current, [id]: event.target.checked }))} />
                      <span>
                        <span className={checked[id] ? "block text-slate-400 line-through" : "block text-slate-700"}>{item.text}</span>
                        {item.note ? <span className="mt-1 block text-sm leading-6 text-slate-500">{item.note}</span> : null}
                      </span>
                    </label>
                  );
                })}
              </div>
              {section.related?.length ? (
                <div className="mt-4 border-t border-slate-100 pt-4 print:hidden">
                  <p className="text-sm font-semibold text-slate-900">相关指南</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {section.related.map((link) => <Link key={link.href} className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-700 hover:bg-teal-100" href={link.href}>{link.label}</Link>)}
                  </div>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      <section className="mt-8 rounded-3xl border border-amber-100 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
        <h2 className="text-lg font-bold text-amber-950">使用提醒</h2>
        <p className="mt-2">这份清单只提供一般生活信息，不能替代政府、学校、移民、税务、法律、医疗或财务建议。涉及资格、申请、学校注册、租房规则和保险事项时，请以官方信息和专业人士意见为准。</p>
      </section>
    </div>
  );
}

function getItemId(sectionTitle: string, itemText: string) {
  return `${sectionTitle}-${itemText}`;
}
