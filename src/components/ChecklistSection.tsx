"use client";

import { useEffect, useState } from "react";

type Section = { title: string; items: string[] };
const sections: Section[] = [
  { title: "抵达前", items: ["确认护照、签证或许可文件", "准备临时住宿地址", "备份重要文件电子版", "查询抵达城市天气"] },
  { title: "第一周", items: ["办理或确认 SIN", "开通加拿大手机号", "开设银行账户", "熟悉附近超市和交通"] },
  { title: "第一个月", items: ["确定长期住房", "建立月度预算", "了解医疗卡或保险安排", "保存重要收据和合同"] },
  { title: "住房", items: ["检查租约关键信息", "拍照记录入住状态", "确认水电暖和网络是否包含", "了解垃圾分类和停车规则"] },
  { title: "银行", items: ["比较新移民或学生账户", "设置手机银行", "了解信用卡还款日", "避免不必要的月费"] },
  { title: "电话与网络", items: ["比较预付费和月付套餐", "确认覆盖和流量", "记录合同或促销到期日"] },
  { title: "孩子上学", items: ["查找当地教育局", "准备住址证明", "整理疫苗记录", "联系学校确认注册流程"] },
  { title: "冬季准备", items: ["购买合适冬衣和防滑鞋", "准备雪刷和手套", "关注天气预警", "开车前了解冬胎和保险"] },
  { title: "找工作", items: ["准备英文简历", "确认可工作条件", "建立求职邮箱和 LinkedIn", "记录申请和面试时间"] },
];

export function ChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    if (typeof window === "undefined") return {};
    const saved = window.localStorage.getItem("newcomer-checklist");
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    window.localStorage.setItem("newcomer-checklist", JSON.stringify(checked));
  }, [checked]);
  const total = sections.reduce((sum, section) => sum + section.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div className="mb-6 rounded-3xl border border-teal-100 bg-teal-50 p-5">
        <p className="font-semibold text-slate-950">完成进度</p>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-teal-600" style={{ width: `${Math.round((done / total) * 100)}%` }} />
        </div>
        <p className="mt-2 text-sm text-slate-600">已完成 {done} / {total} 项。勾选结果会保存在本机浏览器。</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-slate-950">{section.title}</h2>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => {
                const id = `${section.title}-${item}`;
                return (
                  <label key={id} className="flex cursor-pointer gap-3 rounded-2xl p-2 hover:bg-slate-50">
                    <input className="mt-1 h-5 w-5 accent-teal-600" type="checkbox" checked={Boolean(checked[id])} onChange={(event) => setChecked((current) => ({ ...current, [id]: event.target.checked }))} />
                    <span className={checked[id] ? "text-slate-400 line-through" : "text-slate-700"}>{item}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
