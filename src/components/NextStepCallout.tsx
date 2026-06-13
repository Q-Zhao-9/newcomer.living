import Link from "next/link";

export function NextStepCallout({
  eyebrow = "下一步",
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <section className="mt-10 rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-3 max-w-2xl leading-7 text-slate-700">{description}</p>
      <Link href={href} className="mt-5 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800">
        {linkLabel}
      </Link>
    </section>
  );
}
