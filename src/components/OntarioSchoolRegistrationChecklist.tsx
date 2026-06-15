"use client";

import { useEffect, useMemo, useState } from "react";

const checklist = [
  {
    title: "Before registration / 注册前",
    items: [
      "Confirm home address / 确认 Ontario 居住地址",
      "Find local school board / 查找本地 school board",
      "Check school boundary if applicable / 如适用，确认学校边界",
      "Check registration process on official school board website / 查看教育局官方注册流程",
    ],
  },
  {
    title: "Child documents / 孩子文件",
    items: [
      "Child identity document / 孩子身份证明",
      "Proof of date of birth / 出生日期证明",
      "Passport or other ID if applicable / 护照或其他身份证件，如适用",
      "Previous school records if available / 过往学校记录，如有",
      "Immunization records if required / 疫苗记录，如本地要求",
    ],
  },
  {
    title: "Parent/guardian documents / 家长或监护人文件",
    items: [
      "Parent/guardian ID / 家长或监护人身份证明",
      "Proof of Ontario address / Ontario 住址证明",
      "Immigration/status documents if applicable / 移民或身份文件，如适用",
    ],
  },
  {
    title: "Status-related questions / 身份相关问题",
    items: [
      "Check whether child needs study permit / 确认孩子是否需要 study permit",
      "Check whether fees apply / 确认是否可能涉及费用",
      "Contact school board if unsure / 不确定时联系 school board",
    ],
  },
  {
    title: "After registration / 注册后",
    items: [
      "Confirm start date / 确认开始上学日期",
      "Ask about ESL/ELL support / 询问 ESL/ELL 支持",
      "Ask about school bus/transportation if relevant / 如相关，询问校车或交通",
      "Prepare school supplies / 准备学习用品",
      "Learn school communication tools / 了解学校沟通平台",
    ],
  },
];

const storageKey = "ontario-school-registration-checklist";

export function OntarioSchoolRegistrationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked]);

  const allItems = useMemo(() => checklist.flatMap((section) => section.items), []);
  const done = allItems.filter((item) => checked[item]).length;
  const percent = allItems.length ? Math.round((done / allItems.length) * 100) : 0;

  const toggle = (item: string, value: boolean) => {
    setChecked((prev) => ({ ...prev, [item]: value }));
  };

  const reset = () => {
    setChecked({});
  };

  const printChecklist = () => {
    window.print();
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm print:border-0 print:shadow-none">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Interactive checklist</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">已完成 {done} / {allItems.length}</h2>
          <p className="mt-2 text-sm text-slate-600">完成度：{percent}% · 勾选进度会保存在本机浏览器 localStorage 中。</p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" type="button" onClick={printChecklist}>打印清单</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" type="button" onClick={reset}>重置 / Reset</button>
        </div>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100" aria-label={`完成度 ${percent}%`}>
        <div className="h-full rounded-full bg-teal-600 transition-all" style={{ width: `${percent}%` }} />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 print:grid-cols-1">
        {checklist.map((section) => {
          const sectionDone = section.items.filter((item) => checked[item]).length;
          return (
            <div key={section.title} className="rounded-3xl bg-slate-50 p-5 print:border print:border-slate-200 print:bg-white">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-slate-950">{section.title}</h3>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 print:border print:border-slate-200">{sectionDone}/{section.items.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <label key={item} className="flex min-h-11 cursor-pointer gap-3 rounded-2xl bg-white p-3 text-sm leading-6 text-slate-700 ring-1 ring-slate-100 hover:ring-teal-200 print:ring-slate-200">
                    <input className="mt-1 h-5 w-5 rounded border-slate-300 text-teal-700 focus:ring-teal-600" type="checkbox" checked={Boolean(checked[item])} onChange={(event) => toggle(item, event.target.checked)} />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">本清单仅供一般准备参考。Ontario 各 school board 的注册流程和文件要求可能不同，孩子是否符合入学资格、是否需要 study permit、是否需要缴纳费用，应以 IRCC 和本地 school board 官方信息为准。</p>
    </section>
  );
}
