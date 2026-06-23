import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CategoryCard } from "@/components/CategoryCard";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import type { Category, Guide, Tool } from "@/lib/content";

export function CategoryPageLayout({
  category,
  guides,
  tools,
  relatedCategories,
  recommendedTools,
}: {
  category: Category;
  guides: Guide[];
  tools: Tool[];
  relatedCategories: Category[];
  recommendedTools: Tool[];
}) {
  const featuredGuides = guides.slice(0, 3);
  const displayedTools = tools.length ? tools : recommendedTools.slice(0, 2);
  const startHere = category.startHere?.length
    ? category.startHere
    : [
        ...featuredGuides.slice(0, 2).map((guide) => ({
          label: guide.title,
          href: `/guides/${guide.slug}`,
          description: guide.excerpt,
        })),
        ...displayedTools.slice(0, 1).map((tool) => ({
          label: tool.titleZh,
          href: `/tools/${tool.slug}`,
          description: tool.description,
        })),
      ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs currentPath={`/categories/${category.slug}`} items={[{ label: "分类", href: "/" }, { label: category.titleZh }]} />

      <section className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-white p-6 sm:p-8">
        <p className="text-5xl" aria-hidden>{category.icon}</p>
        <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-700">{category.title}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{category.titleZh}指南与工具</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{category.intro ?? category.description}</p>
        <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
          <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
            <span className="block text-2xl font-bold text-slate-950">{guides.length}</span>
            <span>篇相关指南</span>
          </div>
          <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
            <span className="block text-2xl font-bold text-slate-950">{tools.length}</span>
            <span>{tools.length ? "个分类工具" : "个通用工具推荐"}</span>
          </div>
          <div className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm">
            <span className="block text-2xl font-bold text-slate-950">{relatedCategories.length}</span>
            <span>个延伸主题</span>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-teal-100 bg-teal-50 p-6 sm:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Start here</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">从这里开始阅读</h2>
          <p className="mt-3 leading-7 text-slate-600">如果你刚接触这个主题，建议先按下面顺序阅读或使用工具，再根据自己的城市、身份和家庭情况进一步确认。</p>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {startHere.map((item, index) => (
            <Link key={item.href} href={item.href} className="rounded-3xl border border-teal-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">{index + 1}</span>
              <h3 className="mt-4 font-semibold leading-7 text-slate-950">{item.label}</h3>
              {item.description ? <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p> : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Featured guides</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">精选指南</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">优先展示最适合新人入门的文章，帮助你快速判断下一步要准备什么。</p>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-950">该分类全部指南</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Tools</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">相关工具</h2>
          </div>
          {!tools.length ? <p className="max-w-xl text-sm leading-6 text-slate-600">该主题暂无专属工具，先推荐适合多数新人的通用清单和预算工具。</p> : null}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {displayedTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>

      {category.faqs?.length ? (
        <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">常见问题</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {category.faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl bg-slate-50 p-5">
                <h3 className="font-semibold leading-7 text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-slate-950">相关分类</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {relatedCategories.map((item) => <CategoryCard key={item.slug} category={item} />)}
        </div>
      </section>

      {category.sensitive ? <section className="mt-10"><DisclaimerBox /></section> : null}
    </main>
  );
}
