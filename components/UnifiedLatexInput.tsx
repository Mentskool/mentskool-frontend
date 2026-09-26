"use client";

import React, { useRef } from "react";
import { MathText } from "./MathText";

interface UnifiedLatexInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
  helperText?: string;
  required?: boolean;
}

export const UnifiedLatexInput: React.FC<UnifiedLatexInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "Type your question or statement. Wrap math equations in $...$ (inline) or $$...$$ (centered block).",
  rows = 4,
  helperText,
  required,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertSnippet = (snippet: string) => {
    const textarea = textareaRef.current;
    if (!textarea) {
      onChange(value + snippet);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = value.substring(0, start);
    const after = value.substring(end);
    const selected = value.substring(start, end);

    let insertion = snippet;
    if (snippet === "$$" && selected) {
      insertion = `$$${selected}$$`;
    } else if (snippet === "$" && selected) {
      insertion = `$${selected}$`;
    }

    const nextVal = before + insertion + after;
    onChange(nextVal);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + insertion.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 10);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {label && (
          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        )}
        {/* Math Quick Helper Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] text-ink-muted">
          <span className="text-ink-faint text-[10px] hidden sm:inline">Insert Math:</span>
          <button
            type="button"
            onClick={() => insertSnippet("$x$")}
            className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-mono transition-colors"
            title="Inline Math: $...$"
          >
            {"$x$"}
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("$$\\frac{a}{b}$$")}
            className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-mono transition-colors"
            title="Centered Equation: $$...$$"
          >
            {"$$\\frac{a}{b}$$"}
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("$\\sqrt{x}$")}
            className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors"
          >
            {"$\\sqrt{x}$"}
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("$\\int_a^b$")}
            className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors"
          >
            {"$\\int$"}
          </button>
          <button
            type="button"
            onClick={() => insertSnippet("$\\Delta$")}
            className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors"
          >
            {"$\\Delta$"}
          </button>
        </div>
      </div>

      {/* Side-by-side or stacked container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Input Textarea */}
        <div className="flex flex-col">
          <textarea
            ref={textareaRef}
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full min-h-[110px] p-3 text-sm text-ink bg-white border border-mist rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors placeholder:text-ink-faint resize-y"
          />
        </div>

        {/* Live KaTeX Preview Panel */}
        <div className="flex flex-col rounded-xl border border-sky-100 bg-gradient-to-b from-sky-50/30 to-white p-3 min-h-[110px] overflow-y-auto">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-sky-100/60 text-[11px] font-semibold text-sky-800 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              Live KaTeX Preview
            </span>
            <span className="text-[10px] text-ink-faint font-normal lowercase">real-time</span>
          </div>

          <div className="flex-1 text-sm text-ink">
            {value.trim() ? (
              <MathText text={value} />
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-ink-faint italic text-center py-4">
                Equations enclosed in $...$ or $$...$$ will be rendered live here alongside plain text.
              </div>
            )}
          </div>
        </div>
      </div>

      {helperText && <p className="text-xs text-ink-faint">{helperText}</p>}
    </div>
  );
};
