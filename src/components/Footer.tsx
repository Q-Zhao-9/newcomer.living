import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size="footer" />
          <p className="mt-3 text-sm leading-6 text-slate-600">{site.tagline}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">常用工具</p>
          <Link className="mt-3 block text-sm text-slate-600 hover:text-teal-700" href="/tools/monthly-cost-calculator">加拿大月生活成本计算器</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/tools/newcomer-checklist">加拿大新移民第一个月清单</Link>
        </div>
        <div>
          <p className="font-semibold text-slate-900">重要链接</p>
          <Link className="mt-3 block text-sm text-slate-600 hover:text-teal-700" href="/about">关于本站</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/disclaimer">免责声明</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/privacy-policy">隐私政策</Link>
        </div>
      </div>
    </footer>
  );
}
