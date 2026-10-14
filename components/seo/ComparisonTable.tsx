import React from "react";
import { Check, X, ShieldAlert, Award } from "lucide-react";

export interface ComparisonRow {
  feature: string;
  description: string;
  mentskool: boolean | string;
  competitor: boolean | string;
}

interface ComparisonTableProps {
  competitorName: string;
  rows: ComparisonRow[];
}

export function ComparisonTable({ competitorName, rows }: ComparisonTableProps) {
  return (
    <div className="w-full my-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/80">
              <th className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/2">
                Preparation Dimension
              </th>
              <th className="p-4 sm:p-6 text-center w-1/4 bg-brand-500/10 border-x border-slate-800">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-300 bg-brand-500/20 px-3 py-1 rounded-full border border-brand-500/30">
                  <Award className="w-3.5 h-3.5 text-brand-400" />
                  <span>Mentskool</span>
                </div>
              </th>
              <th className="p-4 sm:p-6 text-center text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                <span>{competitorName}</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-800/30 transition-colors"
              >
                <td className="p-4 sm:p-6 align-top">
                  <div className="font-bold text-white font-display text-sm sm:text-base">
                    {row.feature}
                  </div>
                  <div className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {row.description}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-center align-middle bg-brand-500/5 border-x border-slate-800 font-semibold text-brand-300">
                  {typeof row.mentskool === "boolean" ? (
                    row.mentskool ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-400 mx-auto">
                        <X className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    )
                  ) : (
                    <span className="text-xs font-bold text-brand-300 bg-brand-500/20 border border-brand-500/30 px-2.5 py-1 rounded-lg inline-block">
                      {row.mentskool}
                    </span>
                  )}
                </td>
                <td className="p-4 sm:p-6 text-center align-middle text-slate-400 font-medium">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mx-auto">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-slate-400 mx-auto">
                        <X className="w-4 h-4" />
                      </span>
                    )
                  ) : (
                    <span className="text-xs text-slate-400">
                      {row.competitor}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 text-slate-400">
          <ShieldAlert className="w-3.5 h-3.5 text-brand-400" />
          <span>Objective comparison based on publicly verifiable platform architecture and features.</span>
        </span>
      </div>
    </div>
  );
}
