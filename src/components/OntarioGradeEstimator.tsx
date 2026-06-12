"use client";

import { useMemo, useState } from "react";

const gradeLabels: Record<number, string> = {
  0: "Kindergarten / 幼儿园阶段",
  1: "Grade 1 / 一年级",
  2: "Grade 2 / 二年级",
  3: "Grade 3 / 三年级",
  4: "Grade 4 / 四年级",
  5: "Grade 5 / 五年级",
  6: "Grade 6 / 六年级",
  7: "Grade 7 / 七年级",
  8: "Grade 8 / 八年级",
  9: "Grade 9 / 高一阶段",
  10: "Grade 10 / 高二阶段",
  11: "Grade 11 / 高三准备阶段",
  12: "Grade 12 / 毕业年级",
};

export function OntarioGradeEstimator() {
  const currentYear = new Date().getFullYear();
  const [birthYear, setBirthYear] = useState(String(currentYear - 8));
  const [schoolYear, setSchoolYear] = useState(String(currentYear));

  const result = useMemo(() => {
    const by = Number(birthYear);
    const sy = Number(schoolYear);
    if (!Number.isFinite(by) || !Number.isFinite(sy) || by < 2005 || by > currentYear || sy < currentYear - 1 || sy > currentYear + 5) {
      return { label: "请输入合理年份", note: "出生年份和目标入学年份应使用四位数字。" };
    }
    const age = sy - by;
    if (age < 4) return { label: "可能还未到常规 Kindergarten 年龄", note: "可先查看 child care 或 preschool 选择，并向教育局确认。" };
    if (age === 4) return { label: "Junior Kindergarten / JK", note: "通常情况下，4 岁可能对应 JK，但具体以出生日期和教育局规则为准。" };
    if (age === 5) return { label: "Senior Kindergarten / SK", note: "通常情况下，5 岁可能对应 SK。" };
    const grade = Math.min(Math.max(age - 5, 1), 12);
    return { label: gradeLabels[grade], note: "这是按年份做的粗略估算。实际年级会参考出生日期、过往学习记录、英语评估和学校安排。" };
  }, [birthYear, currentYear, schoolYear]);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">孩子出生年份</span>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" inputMode="numeric" value={birthYear} onChange={(event) => setBirthYear(event.target.value)} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">目标入学年份</span>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" inputMode="numeric" value={schoolYear} onChange={(event) => setSchoolYear(event.target.value)} />
        </label>
      </div>
      <div className="mt-6 rounded-3xl bg-teal-50 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Estimated grade</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">{result.label}</h2>
        <p className="mt-3 leading-7 text-slate-700">{result.note}</p>
      </div>
    </section>
  );
}
