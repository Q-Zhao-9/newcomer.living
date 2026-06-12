import Link from "next/link";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Canada Life Toolkit homepage">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
          <Link className="hover:text-teal-700" href="/categories/cost-of-living">生活成本</Link>
          <Link className="hover:text-teal-700" href="/school">孩子上学</Link>
          <Link className="hover:text-teal-700" href="/tools/monthly-cost-calculator">计算器</Link>
          <Link className="hover:text-teal-700" href="/tools/newcomer-checklist">清单</Link>
          <Link className="hover:text-teal-700" href="/about">关于</Link>
          <Link className="hover:text-teal-700" href="/contact">联系</Link>
        </nav>
        <details className="md:hidden">
          <summary className="cursor-pointer rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700">菜单</summary>
          <div className="absolute right-4 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <Link className="block py-2" href="/school">孩子上学指南</Link>
            <Link className="block py-2" href="/tools/monthly-cost-calculator">月生活成本计算器</Link>
            <Link className="block py-2" href="/tools/newcomer-checklist">新移民清单</Link>
            <Link className="block py-2" href="/contact">联系我们</Link>
            {categories.slice(0, 5).map((category) => <Link key={category.slug} className="block py-2" href={`/categories/${category.slug}`}>{category.titleZh}</Link>)}
          </div>
        </details>
      </div>
    </header>
  );
}
