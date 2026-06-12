export function DisclaimerBox({ title = "重要提醒" }: { title?: string }) {
  return (
    <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
      <h2 className="text-base font-bold">{title}</h2>
      <p className="mt-2">本站不是政府网站。内容仅供一般信息参考，不构成法律、财务、移民、税务、医疗或其他专业建议。重要事项请以加拿大官方机构、学校、雇主、持牌专业人士或相关服务商的最新信息为准。</p>
    </aside>
  );
}
