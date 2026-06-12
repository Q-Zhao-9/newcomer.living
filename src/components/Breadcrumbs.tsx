import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li><Link className="hover:text-teal-700" href="/">首页</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? <Link className="hover:text-teal-700" href={item.href}>{item.label}</Link> : <span className="text-slate-700">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
