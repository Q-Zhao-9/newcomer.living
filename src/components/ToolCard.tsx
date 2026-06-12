import Link from "next/link";
import type { Tool } from "@/lib/content";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="block rounded-3xl border border-teal-100 bg-teal-50/70 p-5 shadow-sm transition hover:bg-teal-50 hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">实用工具</p>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{tool.titleZh}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
    </Link>
  );
}
