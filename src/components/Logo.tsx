import Image from "next/image";

export function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const isHeader = size === "header";

  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <Image
        src="/logo-square.svg"
        alt="Newcomer Living 加拿大生活工具箱 logo"
        width={isHeader ? 48 : 44}
        height={isHeader ? 48 : 44}
        className={isHeader ? "h-10 w-10 shrink-0 sm:h-12 sm:w-12" : "h-11 w-11 shrink-0"}
        priority={isHeader}
      />
      <div className="min-w-0 leading-tight">
        <span
          className={
            isHeader
              ? "block truncate text-lg font-extrabold tracking-[-0.035em] text-slate-950 sm:text-[1.35rem]"
              : "block text-xl font-extrabold tracking-[-0.035em] text-slate-950"
          }
        >
          Newcomer Living
        </span>
        <span
          className={
            isHeader
              ? "mt-1 block truncate text-xs font-bold tracking-[0.03em] text-teal-700 sm:text-sm"
              : "mt-1 block text-sm font-bold tracking-[0.03em] text-teal-700"
          }
        >
          加拿大生活工具箱
        </span>
      </div>
    </div>
  );
}
