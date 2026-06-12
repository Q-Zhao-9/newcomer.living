import Link from "next/link";
import type { Guide } from "@/lib/content";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <Link href={`/guides/${guide.slug}`}>
        <h3 className="text-lg font-semibold leading-7 text-slate-950 hover:text-teal-700">{guide.title}</h3>
      </Link>
      <p className="mt-2 text-sm text-slate-500">更新日期：{guide.updated} · {guide.readingTime}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{guide.excerpt}</p>
    </article>
  );
}
