import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Compass,
  Layers,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Video,
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

      {/* Direct Funnel & Mentorship Gateway */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-blue-500/30 shadow-elevated">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Direct 1:1 Mentorship Gateway
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
              Ready to Talk 1-on-1 with a Senior IITian or AIIMS Doctor?
            </h3>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1.5 shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Verified Credentials • Zero Lock-Ins</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <Link
            href="/free-mentorship-session"
            className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-900/40 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  100% Free
                </span>
                <span className="text-[11px] font-semibold text-slate-400 line-through">₹499</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Claim Free Diagnostic Call (₹0)
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                30-minute private video diagnostic to audit your mistake patterns, test papers, and routine.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-800/40 flex items-center justify-between text-xs font-bold text-emerald-300">
              <span>Reserve ₹0 Slot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/book-call"
            className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/40 hover:border-blue-400 hover:bg-blue-900/40 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Personal Consultation
                </span>
                <span className="text-[11px] font-semibold text-blue-300">From ₹499</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                Book 1:1 Video Strategy Session
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Pick your date, time, and mentor for intensive doubt solving, backlog surgery, and a 30-day plan.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between text-xs font-bold text-blue-300">
              <span>Choose Time Slot</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/mentors"
            className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all flex flex-col justify-between group shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Full Directory
                </span>
                <span className="text-[11px] font-semibold text-slate-400">50+ Rankers</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                Browse All Verified Mentors
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Filter by AIR rank, target college (IIT Bombay, Delhi, AIIMS New Delhi), specialty, and fees.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-sky-300">
              <span>View All Profiles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Recommended Next Guides Internal Links */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
              <Compass className="w-4 h-4" />
              <span>Recommended Next Guides on Mentskool</span>
            </div>
            <span className="text-[11px] text-slate-400">Curated preparation pathways</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedLinks.map((lnk, lIdx) => (
              <Link
                key={lIdx}
                href={lnk.href}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-sky-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 transition-all flex items-center justify-between gap-2 group"
              >
                <span className="line-clamp-1">{lnk.label}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all ml-2" />
              </Link>
            ))}
          </div>

          {/* Diagnostic Calculators & Self-Audit Tools */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                Free Interactive Score &amp; Rank Tools
              </h4>
              <span className="text-[11px] text-slate-400">Instant calculations</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              <Link
                href="/tools/jee-main-marks-vs-percentile-calculator"
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
              >
                <span>JEE Marks vs Percentile</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
              </Link>
              <Link
                href="/tools/neet-marks-vs-rank-calculator"
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
              >
                <span>NEET Marks vs Rank</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
              </Link>
              <Link
                href="/tools/jee-neet-backlog-clearance-calculator"
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
              >
                <span>Backlog Clearance Plan</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
              </Link>
              <Link
                href="/tools/jee-neet-daily-study-hour-calculator"
                className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/30 text-[11px] font-medium text-slate-300 hover:text-emerald-300 transition-colors flex items-center justify-between group"
              >
                <span>Daily Study Planner</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-1.5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
