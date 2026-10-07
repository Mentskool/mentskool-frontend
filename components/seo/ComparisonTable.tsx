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
    <div className="w-full my-12 overflow-hidden rounded-3xl border border-mist bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-mist bg-slate-50/70">
              <th className="p-4 sm:p-6 text-xs font-bold uppercase tracking-wider text-ink-muted w-1/2">
                Preparation Dimension
              </th>
              <th className="p-4 sm:p-6 text-center w-1/4 bg-blue-50/60 border-x border-blue-100">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                  <Award className="w-3.5 h-3.5" />
                  <span>Mentskool</span>
                </div>
              </th>
              <th className="p-4 sm:p-6 text-center text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                <span>{competitorName}</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mist text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="p-4 sm:p-6 align-top">
                  <div className="font-bold text-ink font-display text-sm sm:text-base">
                    {row.feature}
                  </div>
                  <div className="text-ink-muted text-xs mt-0.5 leading-relaxed">
                    {row.description}
                  </div>
                </td>
                <td className="p-4 sm:p-6 text-center align-middle bg-blue-50/30 border-x border-blue-100 font-semibold text-blue-900">
                  {typeof row.mentskool === "boolean" ? (
                    row.mentskool ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 mx-auto">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-rose-700 mx-auto">
                        <X className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    )
                  ) : (
                    <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-lg inline-block">
                      {row.mentskool}
                    </span>
                  )}
                </td>
                <td className="p-4 sm:p-6 text-center align-middle text-slate-500 font-medium">
                  {typeof row.competitor === "boolean" ? (
                    row.competitor ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 mx-auto">
                        <Check className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 text-slate-400 mx-auto">
                        <X className="w-4 h-4" />
                      </span>
                    )
                  ) : (
                    <span className="text-xs text-slate-600">
                      {row.competitor}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-slate-50 border-t border-mist flex items-center justify-between text-xs text-ink-muted">
        <span className="flex items-center gap-1.5 text-slate-500">
          <ShieldAlert className="w-3.5 h-3.5 text-blue-600" />
          <span>Objective comparison based on publicly verifiable platform architecture and features.</span>
        </span>
      </div>
    </div>
  );
}
