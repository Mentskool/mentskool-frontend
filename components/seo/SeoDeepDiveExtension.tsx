import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Layers,
  Target,
} from "lucide-react";

export interface DeepDiveArticleBlock {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  keyTakeaways?: { label: string; detail: string }[];
}

export interface DeepDiveTableRow {
  col1: string;
  col2: string;
  col3: string;
  highlight?: boolean;
}

export interface SeoDeepDiveExtensionProps {
  articleBlocks: DeepDiveArticleBlock[];
  matrixTitle: string;
  matrixSubtitle: string;
  matrixHeaders: [string, string, string];
  matrixRows: DeepDiveTableRow[];
  checklistTitle: string;
  checklistItems: { title: string; detail: string }[];
  relatedLinks: { label: string; href: string }[];
}

export function SeoDeepDiveExtension({
  articleBlocks,
  matrixTitle,
  matrixSubtitle,
  matrixHeaders,
  matrixRows,
  checklistTitle,
  checklistItems,
  relatedLinks,
}: SeoDeepDiveExtensionProps) {
  return (
    <div className="space-y-14 my-14">
      {/* Structured Topic Deep-Dive Sections */}
      {articleBlocks.map((block, idx) => (
        <section
          key={idx}
          className="p-6 sm:p-9 rounded-3xl bg-slate-900/65 border border-slate-800/90 shadow-lg"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>In-Depth Analysis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {block.heading}
          </h2>
          {block.subheading && (
            <p className="text-sm sm:text-base text-slate-400 mb-4">
              {block.subheading}
            </p>
          )}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mt-4">
            {block.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>

          {block.keyTakeaways && block.keyTakeaways.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {block.keyTakeaways.map((item, kIdx) => (
                <div
                  key={kIdx}
                  className="p-4 rounded-2xl bg-slate-950/75 border border-slate-800 flex items-start gap-3"
                >
                  <Target className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="font-bold text-white block mb-0.5">
                      {item.label}
                    </span>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* Structured Data / Comparison Matrix */}
      <section className="my-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Actionable Framework</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {matrixTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            {matrixSubtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-950/90 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-4 px-4 sm:px-6">{matrixHeaders[0]}</th>
                <th className="py-4 px-4 sm:px-6">{matrixHeaders[1]}</th>
                <th className="py-4 px-4 sm:px-6 text-emerald-400">
                  {matrixHeaders[2]}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {matrixRows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={
                    row.highlight
                      ? "bg-emerald-950/20 hover:bg-emerald-950/30"
                      : "hover:bg-slate-800/30"
                  }
                >
                  <td className="py-4 px-4 sm:px-6 font-bold text-white">
                    {row.col1}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-slate-300">
                    {row.col2}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-emerald-300 font-semibold">
                    {row.col3}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Execution Checklist */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/75 border border-slate-800">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-5">
          {checklistTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checklistItems.map((item, cIdx) => (
            <div
              key={cIdx}
              className="p-4 rounded-2xl bg-slate-950/75 border border-slate-800/90 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-sky-400 mt-1 shrink-0" />
              <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">{item.title}</strong>
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides Internal Links */}
      <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-4">
          <Compass className="w-4 h-4" />
          <span>Recommended Next Guides on Mentskool</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {relatedLinks.map((lnk, lIdx) => (
            <Link
              key={lIdx}
              href={lnk.href}
              className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all flex items-center justify-between gap-2 group"
            >
              <span>{lnk.label}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
