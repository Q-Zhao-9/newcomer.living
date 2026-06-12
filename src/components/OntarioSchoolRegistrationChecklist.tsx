"use client";

import { useEffect, useState } from "react";

const checklist = [
  { title: "孩子身份与基本信息", items: ["护照或出生证明", "孩子在加拿大身份文件或相关批准信", "英文姓名、生日、紧急联系人信息"] },
  { title: "父母/监护人文件", items: ["父母或监护人身份证明", "学签、工签、PR 卡或其他身份文件", "监护关系或 custody 文件（如适用）"] },
  { title: "住址证明", items: ["租约、房产文件或教育局接受的住址证明", "近期账单、银行信或政府信件（如教育局接受）", "确认住址对应 school board 和学校范围"] },
  { title: "健康与学校记录", items: ["免疫记录或疫苗本", "过往成绩单或在读证明", "必要翻译件或清晰扫描件"] },
  { title: "联系学校前", items: ["查看教育局注册页面", "确认是否需要线上注册账号", "写下要问学校/教育局的问题"] },
];

const storageKey = "ontario-school-registration-checklist";

export function OntarioSchoolRegistrationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(window.localStorage.getItem(storageKey) ?? "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked]);

  const allItems = checklist.flatMap((section) => section.items);
  const done = allItems.filter((item) => checked[item]).length;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Interactive checklist</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">已完成 {done} / {allItems.length}</h2>
        </div>
        <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" type="button" onClick={() => setChecked({})}>清空勾选</button>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {checklist.map((section) => (
          <div key={section.title} className="rounded-3xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-950">{section.title}</h3>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <label key={item} className="flex cursor-pointer gap-3 text-sm leading-6 text-slate-700">
                  <input className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700" type="checkbox" checked={Boolean(checked[item])} onChange={(event) => setChecked((prev) => ({ ...prev, [item]: event.target.checked }))} />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
