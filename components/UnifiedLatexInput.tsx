"use client";

import React, { useRef, useState } from "react";
import { MathText } from "./MathText";
import { Sparkles, Eye, Code2 } from "lucide-react";

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
  placeholder = "Type question statement. E.g. Find the acceleration $a = \\frac{F}{m}$ given force $F = 20\\text{ N}$ and mass $m = 4\\text{ kg}$.",
  rows = 4,
  helperText,
  required,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [activeTab, setActiveTab] = useState<"split" | "editor" | "preview">("split");

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

  const handleAutoFormatLatex = () => {
    if (!value.trim()) return;

    let formatted = value;
    // Replace \[ ... \] with $$ ... $$
    formatted = formatted.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => `$$${math.trim()}$$`);
    // Replace \( ... \) with $ ... $
    formatted = formatted.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => `$${math.trim()}$`);

    // If completely unwrapped with typical formula macros, wrap entire formula or commands in $
    if (!formatted.includes("$")) {
      const isPureFormula =
        /\\(frac|sqrt|int|sum|vec)\b/.test(formatted) && formatted.trim().split(/\s+/).length <= 15;
      if (isPureFormula) {
        formatted = `$$${formatted.trim()}$$`;
      } else {
        formatted = formatted.replace(
          /(\\(?:frac\{[^{}]*\}\{[^{}]*\}|sqrt\{[^{}]*\}|vec\{[^{}]*\}|text\{[^{}]*\}|[a-zA-Z]+)(?:_\{[^{}]*\}|\^[^{}]*|_[a-zA-Z0-9]|\^[a-zA-Z0-9])*(?:\s*[=+\-*/<>]\s*[^$\s,]+)?)/g,
          (macro) => `$${macro}$`
        );
      }
    }

    onChange(formatted);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        {label && (
          <label className="text-xs font-semibold text-ink uppercase tracking-wider">
            {label} {required && <span className="text-rose-500">*</span>}
          </label>
        )}

        <div className="flex items-center gap-2">
          {/* View mode buttons on small screens */}
          <div className="inline-flex rounded-lg border border-mist p-0.5 bg-slate-50 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("split")}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                activeTab === "split"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Split View
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("editor")}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors sm:hidden ${
                activeTab === "editor"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors sm:hidden ${
                activeTab === "preview"
                  ? "bg-white text-ink shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAutoFormatLatex}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-medium transition-colors"
            title="Auto-wrap LaTeX formulas in $ delimiters"
          >
            <Sparkles className="w-3 h-3 text-sky-600" />
            Auto-Format Math
          </button>
        </div>
      </div>

      {/* Math Quick Helper Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] text-ink-muted py-1">
        <span className="text-ink-faint text-[10px] hidden sm:inline whitespace-nowrap">
          Quick Insert:
        </span>
        <button
          type="button"
          onClick={() => insertSnippet("$x$")}
          className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-mono transition-colors shrink-0"
          title="Inline Math: $...$"
        >
          {"$x$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$$\\frac{a}{b}$$")}
          className="px-1.5 py-0.5 rounded bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 font-mono transition-colors shrink-0"
          title="Centered Fraction: $$\frac{a}{b}$$"
        >
          {"$$\\frac{a}{b}$$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\sqrt{x}$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\sqrt{x}$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$x^2$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$x^2$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\int_a^b f(x) dx$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\int$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\sum_{i=1}^n$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\sum$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\pm$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\pm$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\theta$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\theta$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\Delta$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\Delta$"}
        </button>
        <button
          type="button"
          onClick={() => insertSnippet("$\\vec{F}$")}
          className="px-1.5 py-0.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-mono transition-colors shrink-0"
        >
          {"$\\vec{F}$"}
        </button>
      </div>

      {/* Editor & Preview Panels */}
      <div
        className={`grid gap-3 ${
          activeTab === "split"
            ? "grid-cols-1 md:grid-cols-2"
            : activeTab === "editor"
            ? "grid-cols-1"
            : "grid-cols-1"
        }`}
      >
        {/* Input Textarea */}
        <div className={`flex flex-col ${activeTab === "preview" ? "hidden md:flex" : ""}`}>
          <textarea
            ref={textareaRef}
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full min-h-[120px] p-3 text-sm text-ink bg-white border border-mist rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors placeholder:text-ink-faint resize-y"
          />
        </div>

        {/* Live KaTeX Preview Panel */}
        <div
          className={`flex flex-col rounded-xl border border-sky-100 bg-gradient-to-b from-sky-50/30 to-white p-3 min-h-[120px] overflow-y-auto ${
            activeTab === "editor" ? "hidden md:flex" : ""
          }`}
        >
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-sky-100/60 text-[11px] font-semibold text-sky-800 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              Live KaTeX Preview
            </span>
            <span className="text-[10px] text-ink-faint font-normal lowercase">instant render</span>
          </div>

          <div className="flex-1 text-sm text-ink">
            {value.trim() ? (
              <MathText text={value} />
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-ink-faint italic text-center py-4">
                Equations enclosed in $...$ (inline), $$...$$ (centered), or pasted LaTeX formulas will render live here.
              </div>
            )}
          </div>
        </div>
      </div>

      {helperText && <p className="text-xs text-ink-faint">{helperText}</p>}
    </div>
  );
};
