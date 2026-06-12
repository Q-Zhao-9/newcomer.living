export type DisclaimerVariant = "general" | "calculator" | "school" | "documents" | "driving" | "customs";

const disclaimerCopy: Record<DisclaimerVariant, { title: string; body: string }> = {
  general: {
    title: "重要提醒",
    body: "本页面仅供一般信息参考，不构成法律、移民、税务、财务、医疗、保险或其他专业建议。加拿大各省、市和个人身份情况可能不同，重要决定请以官方信息或专业人士意见为准。",
  },
  calculator: {
    title: "计算结果仅供估算",
    body: "计算结果仅为一般估算，实际生活成本会因城市、住房、家庭情况、交通方式、保险、季节和个人消费习惯而不同。做重要预算前，建议进一步核对真实报价和官方信息。",
  },
  school: {
    title: "学校信息提醒",
    body: "学校注册、文件要求、学区和入学流程可能因省份、城市和教育局不同而变化。本页面仅供一般参考，具体要求请以当地教育局、学校或官方渠道为准。",
  },
  documents: {
    title: "文件办理提醒",
    body: "证件、号码、银行、税务或移民相关流程可能因个人身份和政策更新而不同。本页面不构成专业建议，办理前请核对政府、学校、银行或相关机构的最新要求。",
  },
  driving: {
    title: "驾驶与保险提醒",
    body: "驾驶、车辆、保险、冬胎和道路规则可能因省份、天气和个人情况而不同。本页面仅供一般信息参考，实际操作请以省级交通部门、保险机构和专业人士意见为准。",
  },
  customs: {
    title: "入境与旅行提醒",
    body: "入境申报、携带物品、药品、食品和现金规则可能更新。本页面不构成法律或海关建议，出发前请以 CBSA、航空公司和相关官方信息为准。",
  },
};

export function DisclaimerBox({ title, variant = "general" }: { title?: string; variant?: DisclaimerVariant }) {
  const copy = disclaimerCopy[variant];
  return (
    <aside className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <h2 className="text-base font-bold">{title ?? copy.title}</h2>
      <p className="mt-2">{copy.body}</p>
    </aside>
  );
}
