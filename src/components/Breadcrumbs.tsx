import Link from "next/link";
import { buildBreadcrumbJsonLd, type BreadcrumbSchemaItem } from "@/lib/seo";

export function Breadcrumbs({ items, currentPath }: { items: BreadcrumbSchemaItem[]; currentPath?: string }) {
  const jsonLd = buildBreadcrumbJsonLd(items, currentPath);

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 break-words">
          <li className="shrink-0"><Link className="hover:text-teal-700" href="/">首页</Link></li>
          {items.map((item) => (
            <li key={`${item.label}-${item.href ?? "current"}`} className="flex min-w-0 items-center gap-2">
              <span className="shrink-0 text-slate-300">/</span>
              {item.href ? (
                <Link className="min-w-0 hover:text-teal-700" href={item.href}>{item.label}</Link>
              ) : (
                <span className="min-w-0 text-slate-700">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
