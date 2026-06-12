import Image from "next/image";

export function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const isHeader = size === "header";

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo-square.svg"
        alt=""
        width={isHeader ? 48 : 44}
        height={isHeader ? 48 : 44}
        className="shrink-0"
        priority={isHeader}
        aria-hidden="true"
      />
      <div className="leading-tight">
        <span
          className={
            isHeader
              ? "block text-[1.35rem] font-extrabold tracking-[-0.035em] text-slate-950"
              : "block text-xl font-extrabold tracking-[-0.035em] text-slate-950"
          }
        >
          Canada Life Toolkit
        </span>
        <span
          className={
            isHeader
              ? "mt-1 block text-sm font-bold tracking-[0.03em] text-teal-700"
              : "mt-1 block text-sm font-bold tracking-[0.03em] text-teal-700"
          }
        >
          加拿大生活工具箱
        </span>
      </div>
    </div>
  );
}
