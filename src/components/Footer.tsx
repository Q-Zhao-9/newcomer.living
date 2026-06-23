import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/content";

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.438H7.078v-3.489h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.491 0-1.955.931-1.955 1.887v2.263h3.328l-.532 3.489h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo size="footer" />
          <p className="mt-3 text-sm leading-6 text-slate-600">{site.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-950 hover:border-teal-200 hover:text-teal-700"
              href="https://x.com/newcomerliving"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Newcomer Living on X"
            >
              <XIcon />
              <span>X</span>
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[#1877F2] hover:border-teal-200 hover:text-teal-700"
              href="https://www.facebook.com/profile.php?id=61591382335212"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Newcomer Living on Facebook"
            >
              <FacebookIcon />
              <span>Facebook</span>
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold text-slate-900">常用工具</p>
          <Link className="mt-3 block text-sm text-slate-600 hover:text-teal-700" href="/tools/monthly-cost-calculator">加拿大月生活成本计算器</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/tools/newcomer-checklist">加拿大新移民第一个月清单</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/tools/ontario-grade-estimator">安省年级估算器</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/tools/ontario-school-registration-checklist">安省学校注册清单</Link>
        </div>
        <div>
          <p className="font-semibold text-slate-900">重要链接</p>
          <Link className="mt-3 block text-sm text-slate-600 hover:text-teal-700" href="/school">孩子上学指南</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/about">关于本站</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/contact">联系我们</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/disclaimer">免责声明</Link>
          <Link className="mt-2 block text-sm text-slate-600 hover:text-teal-700" href="/privacy-policy">隐私政策</Link>
        </div>
      </div>
    </footer>
  );
}
