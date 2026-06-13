import Link from "next/link";
import { site } from "@/lib/content";

type BreadcrumbItem = { label: string; href?: string };

function absoluteUrl(href?: string) {
  if (!href) return undefined;
  if (href.startsWith("http")) return href;
  return `${site.url}${href}`;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "首页", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(absoluteUrl(item.href) ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

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
