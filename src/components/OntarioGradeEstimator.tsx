"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const currentYear = new Date().getFullYear();
const defaultBirthYear = String(currentYear - 8);
const defaultBirthMonth = "9";
const defaultSchoolYear = String(currentYear);

const gradeLabels: Record<number, string> = {
  1: "Grade 1 / 一年级",
  2: "Grade 2 / 二年级",
  3: "Grade 3 / 三年级",
  4: "Grade 4 / 四年级",
  5: "Grade 5 / 五年级",
  6: "Grade 6 / 六年级",
  7: "Grade 7 / 七年级",
  8: "Grade 8 / 八年级",
  9: "Grade 9 / 高中一年级",
  10: "Grade 10 / 高中二年级",
  11: "Grade 11 / 高中三年级",
  12: "Grade 12 / 高中毕业年级",
};

function estimateGrade(birthYear: number, birthMonth: number, schoolYear: number) {
  // Simple transparent assumption: Ontario school years start in September.
  // A child who turns 4 during the calendar year may commonly enter JK, 5 may enter SK,
  // and Grade 1 roughly starts in the calendar year the child turns 6.
  // This is an estimate only; actual placement may use exact birth date, prior schooling,
  // language assessment, school board rules, and individual circumstances.
  const ageByEndOfSchoolStartYear = schoolYear - birthYear;
  const monthNote = birthMonth >= 9
    ? "孩子生日在 9 月或之后时，家长更应向 school board 确认当地如何看待出生日期和入学年份。"
    : "孩子生日在上半年或暑假前后时，仍建议用完整出生日期向 school board 确认。";

  if (ageByEndOfSchoolStartYear < 4) {
    return {
      label: "可能还未到常规 Kindergarten 年龄",
      range: "Child care / preschool 选择可能更相关",
      explanation: `根据输入信息，孩子在 ${schoolYear} 年入学时可能还未到常规 JK 年龄。${monthNote}`,
    };
  }

  if (ageByEndOfSchoolStartYear === 4) {
    return {
      label: "Junior Kindergarten / JK 左右",
      range: "JK 或等待下一学年，视具体出生日期和教育局规则而定",
      explanation: `根据你输入的信息，孩子在 Ontario 可能对应 Junior Kindergarten 左右。${monthNote}`,
    };
  }

  if (ageByEndOfSchoolStartYear === 5) {
    return {
      label: "Senior Kindergarten / SK 左右",
      range: "SK；如过往经历特殊，需由 school board 确认",
      explanation: `根据你输入的信息，孩子在 Ontario 可能对应 Senior Kindergarten 左右。${monthNote}`,
    };
  }

  const grade = Math.min(Math.max(ageByEndOfSchoolStartYear - 5, 1), 12);
  const lower = Math.max(1, grade - 1);
  const upper = Math.min(12, grade + 1);
  return {
    label: `${gradeLabels[grade]} 左右`,
    range: lower === upper ? gradeLabels[grade] : `${gradeLabels[lower]} 到 ${gradeLabels[upper]} 之间需要确认`,
    explanation: `根据你输入的信息，孩子在 Ontario 可能对应 ${gradeLabels[grade]} 左右。这个结果仅为一般估算，实际入学年级可能由本地 school board 根据出生日期、过往学习经历、语言能力和评估结果决定。`,
  };
}

export function OntarioGradeEstimator() {
  const [birthYear, setBirthYear] = useState(defaultBirthYear);
  const [birthMonth, setBirthMonth] = useState(defaultBirthMonth);
  const [schoolYear, setSchoolYear] = useState(defaultSchoolYear);
  const [previousGrade, setPreviousGrade] = useState("");
  const [newcomer, setNewcomer] = useState("yes");

  const result = useMemo(() => {
    const by = Number(birthYear);
    const bm = Number(birthMonth);
    const sy = Number(schoolYear);
    if (!Number.isFinite(by) || !Number.isFinite(bm) || !Number.isFinite(sy) || by < 2005 || by > currentYear || bm < 1 || bm > 12 || sy < currentYear - 1 || sy > currentYear + 5) {
      return { label: "请输入合理年月", range: "需要出生年份、出生月份和目标入学年份", explanation: "出生年份和目标入学年份应使用四位数字，出生月份应为 1 到 12。" };
    }
    return estimateGrade(by, bm, sy);
  }, [birthMonth, birthYear, schoolYear]);

  const reset = () => {
    setBirthYear(defaultBirthYear);
    setBirthMonth(defaultBirthMonth);
    setSchoolYear(defaultSchoolYear);
    setPreviousGrade("");
    setNewcomer("yes");
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-3">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">孩子出生年份</span>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" inputMode="numeric" value={birthYear} onChange={(event) => setBirthYear(event.target.value)} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">孩子出生月份</span>
          <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" value={birthMonth} onChange={(event) => setBirthMonth(event.target.value)}>
            {Array.from({ length: 12 }, (_, index) => String(index + 1)).map((month) => <option key={month} value={month}>{month} 月</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">目标入学年份</span>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" inputMode="numeric" value={schoolYear} onChange={(event) => setSchoolYear(event.target.value)} />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-slate-700">之前完成的年级（可选）</span>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" placeholder="例如：中国小学三年级 / Grade 4" value={previousGrade} onChange={(event) => setPreviousGrade(event.target.value)} />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">是否刚来加拿大？</span>
          <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-950 outline-none focus:border-teal-500" value={newcomer} onChange={(event) => setNewcomer(event.target.value)}>
            <option value="yes">是 / Yes</option>
            <option value="no">否 / No</option>
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-3xl bg-teal-50 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">Estimated grade</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">{result.label}</h2>
        <p className="mt-2 font-semibold text-slate-800">估算范围：{result.range}</p>
        <p className="mt-3 leading-7 text-slate-700">{result.explanation}</p>
        {previousGrade ? <p className="mt-3 leading-7 text-slate-700">你填写的过往年级是：{previousGrade}。建议把成绩单或在读证明带给 school board，用于进一步评估。</p> : null}
        {newcomer === "yes" ? <p className="mt-3 leading-7 text-slate-700">如果孩子是 newcomer，学校还可能安排英语水平、过往学习经历或适应支持相关评估。</p> : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50" type="button" onClick={reset}>重置 / Reset</button>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-teal-700">
          <Link className="hover:underline" href="/school/ontario/registration-documents">注册文件指南</Link>
          <Link className="hover:underline" href="/school/ontario/school-system">安省学校系统</Link>
          <Link className="hover:underline" href="/tools/ontario-school-registration-checklist">注册清单</Link>
        </div>
      </div>

      <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">本工具仅根据出生年月和入学年份进行一般估算，不代表最终入学年级。实际年级安排可能由本地 school board 根据出生日期、过往学习经历、语言能力、评估结果和个别情况决定。</p>
    </section>
  );
}
