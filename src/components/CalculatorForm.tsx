"use client";

import { useMemo, useState } from "react";

type Field = { key: string; label: string; helper: string; defaultValue: number };
const fields: Field[] = [
  { key: "rent", label: "房租", helper: "月租或合租费用", defaultValue: 1800 },
  { key: "utilities", label: "水电暖", helper: "不含在房租内时填写", defaultValue: 120 },
  { key: "phone", label: "手机套餐", helper: "个人或家庭手机费", defaultValue: 45 },
  { key: "internet", label: "家庭网络", helper: "家庭网络费用", defaultValue: 70 },
  { key: "groceries", label: "食品杂货", helper: "超市购物与基本日用品", defaultValue: 550 },
  { key: "transportation", label: "公共交通", helper: "公交、地铁、通勤票", defaultValue: 160 },
  { key: "carInsurance", label: "车险", helper: "没有车可填 0", defaultValue: 0 },
  { key: "gas", label: "油费", helper: "没有车可填 0", defaultValue: 0 },
  { key: "child", label: "孩子相关费用", helper: "托管、用品、活动等", defaultValue: 0 },
  { key: "other", label: "其他支出", helper: "衣物、药品、娱乐、订阅等", defaultValue: 250 },
];

export function CalculatorForm() {
  const [values, setValues] = useState<Record<string, number | "">>(() => Object.fromEntries(fields.map((field) => [field.key, field.defaultValue])));
  const total = useMemo(() => fields.reduce((sum, field) => sum + (Number(values[field.key]) || 0), 0), [values]);
  const yearly = total * 12;
  const level = total < 2800 ? "较低" : total < 5000 ? "中等" : "较高";
  const levelText = total < 2800 ? "适合预算较紧或合租场景" : total < 5000 ? "常见城市生活预算区间" : "支出较高，建议仔细复核各项费用";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
      <form className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="block font-semibold text-slate-900">{field.label}</span>
            <span className="mt-1 block text-sm text-slate-500">{field.helper}</span>
            <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-teal-400 focus-within:bg-white">
              <span className="text-slate-500">C$</span>
              <input
                className="w-full bg-transparent px-2 py-3 outline-none"
                type="number"
                min="0"
                inputMode="decimal"
                value={values[field.key]}
                onChange={(event) => setValues((current) => ({ ...current, [field.key]: event.target.value === "" ? "" : Math.max(0, Number(event.target.value)) }))}
              />
            </div>
          </label>
        ))}
      </form>
      <aside className="h-fit rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm lg:sticky lg:top-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">估算结果</p>
        <div className="mt-5 rounded-2xl bg-white p-5">
          <p className="text-sm text-slate-500">每月合计</p>
          <p className="mt-2 text-4xl font-bold text-slate-950">C${total.toLocaleString()}</p>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5">
          <p className="text-sm text-slate-500">每年合计</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">C${yearly.toLocaleString()}</p>
        </div>
        <div className="mt-4 rounded-2xl border border-teal-200 bg-white p-5">
          <p className="text-sm text-slate-500">预算水平</p>
          <p className="mt-2 text-xl font-bold text-teal-800">{level}预算</p>
          <p className="mt-1 text-sm text-slate-600">{levelText}</p>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">以上数字仅为估算。实际生活成本会因城市、家庭人数、住房方式、车辆使用、保险报价和个人消费习惯而变化。重要预算建议进一步确认。</p>
      </aside>
    </div>
  );
}
