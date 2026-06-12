"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Field = { key: string; label: string; helper: string; defaultValue: number };
type ProfileKey = "student" | "family" | "carOwner";

const monthlyFields: Field[] = [
  { key: "rent", label: "房租", helper: "月租、合租或家庭住房费用；注意是否包含水电暖。", defaultValue: 1800 },
  { key: "utilities", label: "水电暖", helper: "不含在房租内时填写，冬季取暖可能更高。", defaultValue: 120 },
  { key: "phone", label: "手机套餐", helper: "个人或家庭手机费，留意开通费和合约。", defaultValue: 45 },
  { key: "internet", label: "家庭网络", helper: "如果合租已包含网络，可以填 0。", defaultValue: 70 },
  { key: "groceries", label: "食品杂货", helper: "超市购物、基础日用品和简单外食。", defaultValue: 550 },
  { key: "transportation", label: "公共交通", helper: "公交、地铁、通勤票；有车但仍通勤也可填写。", defaultValue: 160 },
  { key: "carInsurance", label: "车险", helper: "没有车可填 0；新司机或大城市报价可能较高。", defaultValue: 0 },
  { key: "gas", label: "油费", helper: "没有车可填 0；也可包含停车和简单维护预算。", defaultValue: 0 },
  { key: "child", label: "孩子相关费用", helper: "用品、活动、午餐、托管或课后项目等。", defaultValue: 0 },
  { key: "other", label: "其他支出", helper: "衣物、药品、娱乐、订阅和小额杂项。", defaultValue: 250 },
];

const setupFields: Field[] = [
  { key: "rentDeposit", label: "租房押金 / 首末月房租", helper: "按当地规则和租约填写；不同省份要求可能不同。", defaultValue: 1800 },
  { key: "furniture", label: "家具与床上用品", helper: "床垫、被子、桌椅、灯具等第一月常见采购。", defaultValue: 700 },
  { key: "winterClothes", label: "冬季衣物", helper: "冬衣、雪靴、手套、帽子；秋冬抵达建议预留。", defaultValue: 400 },
  { key: "kitchenBasics", label: "厨房与生活基础用品", helper: "锅具、餐具、清洁用品、插排和小家电。", defaultValue: 350 },
  { key: "driverCarSetup", label: "驾驶 / 车辆前期开支", helper: "没有车可填 0；可含冬胎、检查、注册或保险启动费用。", defaultValue: 0 },
  { key: "schoolSupplies", label: "学习 / 学校用品", helper: "书包、文具、电脑配件、儿童学校用品。", defaultValue: 200 },
  { key: "emergencyFund", label: "应急资金", helper: "建议保留，不一定花掉，用于找房延误或突发情况。", defaultValue: 1000 },
];

const presets: Record<ProfileKey, { label: string; values: Record<string, number>; profile: { city: string; household: string; housing: string; hasCar: boolean; hasChild: boolean } }> = {
  student: {
    label: "单人留学生",
    profile: { city: "Thunder Bay", household: "single-student", housing: "room", hasCar: false, hasChild: false },
    values: { rent: 900, utilities: 80, phone: 40, internet: 40, groceries: 420, transportation: 85, carInsurance: 0, gas: 0, child: 0, other: 180, rentDeposit: 900, furniture: 500, winterClothes: 350, kitchenBasics: 250, driverCarSetup: 0, schoolSupplies: 250, emergencyFund: 800 },
  },
  family: {
    label: "三口之家",
    profile: { city: "Ontario 小城市", household: "family-child", housing: "two-bedroom", hasCar: true, hasChild: true },
    values: { rent: 2400, utilities: 260, phone: 110, internet: 80, groceries: 1200, transportation: 120, carInsurance: 320, gas: 260, child: 450, other: 500, rentDeposit: 2400, furniture: 1800, winterClothes: 900, kitchenBasics: 700, driverCarSetup: 900, schoolSupplies: 350, emergencyFund: 2500 },
  },
  carOwner: {
    label: "有车通勤者",
    profile: { city: "Toronto/GTA", household: "single-worker", housing: "one-bedroom", hasCar: true, hasChild: false },
    values: { rent: 2300, utilities: 160, phone: 55, internet: 75, groceries: 650, transportation: 0, carInsurance: 420, gas: 280, child: 0, other: 350, rentDeposit: 2300, furniture: 900, winterClothes: 450, kitchenBasics: 350, driverCarSetup: 1200, schoolSupplies: 0, emergencyFund: 1800 },
  },
};

function sumFields(fields: Field[], values: Record<string, number | "">) {
  return fields.reduce((sum, field) => sum + (Number(values[field.key]) || 0), 0);
}

export function CalculatorForm() {
  const allFields = [...monthlyFields, ...setupFields];
  const defaultValues = Object.fromEntries(allFields.map((field) => [field.key, field.defaultValue])) as Record<string, number>;
  const [values, setValues] = useState<Record<string, number | "">>(defaultValues);
  const [city, setCity] = useState("Toronto/GTA");
  const [household, setHousehold] = useState("single-worker");
  const [housing, setHousing] = useState("one-bedroom");
  const [hasCar, setHasCar] = useState(false);
  const [hasChild, setHasChild] = useState(false);

  const monthlyTotal = useMemo(() => sumFields(monthlyFields, values), [values]);
  const setupTotal = useMemo(() => sumFields(setupFields, values), [values]);
  const yearly = monthlyTotal * 12;
  const recommendedBuffer = Math.max(Math.round(monthlyTotal * 1.5), Number(values.emergencyFund) || 0);
  const firstMonthEstimate = monthlyTotal + setupTotal;
  const level = monthlyTotal < 2800 ? "较低" : monthlyTotal < 5000 ? "中等" : "较高";
  const levelText = monthlyTotal < 2800 ? "更接近合租、学生或小城市预算；仍建议核对房租和交通。" : monthlyTotal < 5000 ? "属于许多新人家庭或单人城市生活的常见估算区间。" : "支出偏高，建议重点复核住房、车辆、保险和孩子相关费用。";
  const profileNote = hasCar
    ? "你选择了有车场景，请把保险、油费、停车、冬胎和维修都纳入长期预算。"
    : "你选择了无车或主要公共交通场景，住房位置和通勤时间会明显影响生活便利度。";
  const childNote = hasChild ? "带孩子家庭建议提前确认学校注册、课后活动、午餐和冬季用品等额外支出。" : "如果暂时没有孩子相关支出，可以把更多缓冲留给住房、交通和应急资金。";

  function updateValue(key: string, value: string) {
    setValues((current) => ({ ...current, [key]: value === "" ? "" : Math.max(0, Number(value)) }));
  }

  function applyPreset(key: ProfileKey) {
    const preset = presets[key];
    setValues(preset.values);
    setCity(preset.profile.city);
    setHousehold(preset.profile.household);
    setHousing(preset.profile.housing);
    setHasCar(preset.profile.hasCar);
    setHasChild(preset.profile.hasChild);
  }

  function resetCalculator() {
    setValues(defaultValues);
    setCity("Toronto/GTA");
    setHousehold("single-worker");
    setHousing("one-bedroom");
    setHasCar(false);
    setHasChild(false);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-950">1. 选择你的基本情况</h2>
              <p className="mt-1 text-sm text-slate-500">用于生成更贴近场景的预算提示，不会保存或上传。</p>
            </div>
            <button type="button" onClick={resetCalculator} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-200 hover:text-teal-700">重置</button>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">城市或地区</span>
              <select value={city} onChange={(event) => setCity(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-teal-400 focus:bg-white">
                <option>Thunder Bay</option>
                <option>Toronto/GTA</option>
                <option>Vancouver</option>
                <option>Calgary</option>
                <option>Ontario 小城市</option>
                <option>其他</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">家庭类型</span>
              <select value={household} onChange={(event) => setHousehold(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-teal-400 focus:bg-white">
                <option value="single-student">单人留学生</option>
                <option value="single-worker">单人工作人士</option>
                <option value="couple">夫妻 / 伴侣</option>
                <option value="family-child">有孩子家庭</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">住房类型</span>
              <select value={housing} onChange={(event) => setHousing(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-teal-400 focus:bg-white">
                <option value="room">合租房间</option>
                <option value="shared-apartment">合租公寓</option>
                <option value="one-bedroom">一居室</option>
                <option value="two-bedroom">两居室</option>
                <option value="house">House / Townhouse</option>
              </select>
            </label>
            <div className="grid gap-3 rounded-2xl bg-slate-50 p-4">
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-800"><input checked={hasCar} onChange={(event) => setHasCar(event.target.checked)} type="checkbox" className="h-4 w-4 accent-teal-600" />有车或计划买车</label>
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-800"><input checked={hasChild} onChange={(event) => setHasChild(event.target.checked)} type="checkbox" className="h-4 w-4 accent-teal-600" />有孩子相关支出</label>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(presets) as ProfileKey[]).map((key) => <button type="button" key={key} onClick={() => applyPreset(key)} className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-100">套用：{presets[key].label}</button>)}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-950">2. 每月固定支出</h2>
          <form className="mt-4 grid gap-4 sm:grid-cols-2">
            {monthlyFields.map((field) => <MoneyField key={field.key} field={field} value={values[field.key]} onChange={updateValue} />)}
          </form>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-950">3. 第一个月 / 安置成本</h2>
          <p className="mt-1 text-sm text-slate-500">这些费用不一定每月重复，但常在刚到加拿大时集中发生。</p>
          <form className="mt-4 grid gap-4 sm:grid-cols-2">
            {setupFields.map((field) => <MoneyField key={field.key} field={field} value={values[field.key]} onChange={updateValue} />)}
          </form>
        </section>
      </div>

      <aside className="h-fit rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm lg:sticky lg:top-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">估算结果</p>
        <div className="mt-5 rounded-2xl bg-white p-5">
          <p className="text-sm text-slate-500">每月固定支出</p>
          <p className="mt-2 text-4xl font-bold text-slate-950">C${monthlyTotal.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-600">每年约 C${yearly.toLocaleString()}</p>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5">
          <p className="text-sm text-slate-500">第一个月安置成本</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">C${setupTotal.toLocaleString()}</p>
          <p className="mt-2 text-sm text-slate-600">包含一次性采购、押金和应急资金等。</p>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5">
          <p className="text-sm text-slate-500">第一月可能需要准备</p>
          <p className="mt-2 text-2xl font-bold text-slate-950">C${firstMonthEstimate.toLocaleString()}</p>
        </div>
        <div className="mt-4 rounded-2xl border border-teal-200 bg-white p-5">
          <p className="text-sm text-slate-500">预算水平</p>
          <p className="mt-2 text-xl font-bold text-teal-800">{level}预算</p>
          <p className="mt-1 text-sm text-slate-600">{levelText}</p>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5 text-sm leading-6 text-slate-600">
          <p className="font-semibold text-slate-900">实用提示</p>
          <p className="mt-2">你的长期每月支出约为 C${monthlyTotal.toLocaleString()}。第一个月可能更高，因为住房安置、冬季用品、家具、厨房用品和押金会集中发生。</p>
          <p className="mt-2">建议至少准备约 C${recommendedBuffer.toLocaleString()} 的应急缓冲。{profileNote}</p>
          <p className="mt-2">{childNote}</p>
          <p className="mt-2">当前场景：{city} · {hasCar ? "有车" : "无车/公交"} · {hasChild ? "有孩子" : "无孩子支出"}</p>
        </div>
        <div className="mt-4 rounded-2xl bg-white p-5 text-sm">
          <p className="font-semibold text-slate-900">相关内容</p>
          <Link className="mt-3 block text-teal-700 hover:underline" href="/guides/newcomer-monthly-cost-canada">阅读第一个月生活成本指南</Link>
          <Link className="mt-2 block text-teal-700 hover:underline" href="/tools/newcomer-checklist">查看新移民第一个月清单</Link>
          <Link className="mt-2 block text-teal-700 hover:underline" href="/guides/renting-without-credit-history">了解无信用记录如何租房</Link>
        </div>
        <p className="mt-5 text-sm leading-6 text-slate-600">以上数字仅为估算。实际生活成本会因城市、家庭人数、住房方式、车辆使用、保险报价和个人消费习惯而变化。重要预算建议进一步确认，并以官方信息、合同和服务商报价为准。</p>
      </aside>
    </div>
  );
}

function MoneyField({ field, value, onChange }: { field: Field; value: number | ""; onChange: (key: string, value: string) => void }) {
  return (
    <label className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <span className="block font-semibold text-slate-900">{field.label}</span>
      <span className="mt-1 block text-sm text-slate-500">{field.helper}</span>
      <div className="mt-3 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-teal-400 focus-within:bg-white">
        <span className="text-slate-500">C$</span>
        <input className="w-full bg-transparent px-2 py-3 outline-none" type="number" min="0" inputMode="decimal" value={value} onChange={(event) => onChange(field.key, event.target.value)} />
      </div>
    </label>
  );
}
