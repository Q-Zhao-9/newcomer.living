import Link from "next/link";
import type { Category } from "@/lib/content";

export function CategoryCard({ category }: { category: Category }) {
  const href = category.href ?? `/categories/${category.slug}`;

  return (
    <Link href={href} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
      <div className="text-3xl" aria-hidden>{category.icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-slate-950">{category.titleZh}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
    </Link>
  );
}
