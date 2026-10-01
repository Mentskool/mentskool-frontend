"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Normalizes different LaTeX notations into standard $ and $$ delimiters:
 * - \[ ... \] -> $$ ... $$
 * - \( ... \) -> $ ... $
 * - \begin{env} ... \end{env} -> $$ ... $$
 * - Raw unescaped LaTeX commands without $ delimiters (e.g. \frac, \sqrt, \int)
 */
function normalizeLatexDelimiters(rawText: string): string {
  if (!rawText) return "";

  let result = rawText;

  // 1. Convert \[ ... \] to $$ ... $$
  result = result.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => `$$${math}$$`);

  // 2. Convert \( ... \) to $ ... $
  result = result.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => `$${math}$`);

  // 3. Auto-wrap common LaTeX math environments if not enclosed in $
  const envRegex =
    /(?<!\$)(?:\\begin\{(matrix|pmatrix|bmatrix|vmatrix|cases|align|aligned|gather|equation)\*?\}[\s\S]*?\\end\{\1\*?\})(?!\$)/g;
  result = result.replace(envRegex, (match) => `$$${match}$$`);

  // 4. If the string contains NO $ delimiters, detect if the user pasted raw LaTeX:
  if (!result.includes("$")) {
    const hasLatexMacros =
      /\\(frac|sqrt|int|sum|prod|lim|alpha|beta|gamma|theta|lambda|pi|mu|sigma|omega|Delta|Omega|pm|times|div|leq|geq|neq|approx|in|subset|cup|cap|partial|nabla|infty|to|rightarrow|vec|hat|bar|text|mathbf|mathrm|sin|cos|tan|log|ln)\b/.test(
        result
      );

    if (hasLatexMacros) {
      const trimmed = result.trim();
      // If the entire string is primarily an equation (starts with backslash or has math symbols without much plain text prose)
      const words = trimmed.split(/\s+/);
      const isShortEquation =
        words.length <= 20 &&
        (trimmed.startsWith("\\") ||
          trimmed.includes("=") ||
          trimmed.includes("^") ||
          trimmed.includes("_"));

      if (isShortEquation) {
        return `$$${trimmed}$$`;
      }

      // If mixed text without $, wrap individual LaTeX commands and their arguments
      result = result.replace(
        /(\\(?:frac\{[^{}]*\}\{[^{}]*\}|sqrt\{[^{}]*\}|vec\{[^{}]*\}|text\{[^{}]*\}|[a-zA-Z]+)(?:_\{[^{}]*\}|\^[^{}]*|_[a-zA-Z0-9]|\^[a-zA-Z0-9])*(?:\s*[=+\-*/<>]\s*[^$\s,]+)?)/g,
        (macro) => `$${macro}$`
      );
    }
  }

  return result;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = "" }) => {
  const renderedElements = useMemo(() => {
    if (!text) return null;

    const normalized = normalizeLatexDelimiters(text);

    // Pattern to split by block math $$...$$ and inline math $...$
    const tokens: Array<{
      type: "text" | "inline-math" | "block-math";
      value: string;
    }> = [];

    // Match $$...$$ first (non-greedy), then $...$ (non-greedy, allowing newlines)
    const regex = /\$\$([\s\S]*?)\$\$|\$([\s\S]+?)\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(normalized)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: "text",
          value: normalized.slice(lastIndex, match.index),
        });
      }

      if (match[1] !== undefined) {
        // Block math $$...$$
        tokens.push({
          type: "block-math",
          value: match[1].trim(),
        });
      } else if (match[2] !== undefined) {
        // Inline math $...$
        tokens.push({
          type: "inline-math",
          value: match[2].trim(),
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < normalized.length) {
      tokens.push({
        type: "text",
        value: normalized.slice(lastIndex),
      });
    }

    return tokens.map((token, index) => {
      if (token.type === "text") {
        return (
          <span key={index} className="whitespace-pre-wrap">
            {token.value}
          </span>
        );
      }

      const isBlock = token.type === "block-math";
      try {
        const html = katex.renderToString(token.value, {
          displayMode: isBlock,
          throwOnError: false,
          output: "htmlAndMathml",
        });

        if (isBlock) {
          return (
            <div
              key={index}
              className="my-3 overflow-x-auto py-1 text-center font-normal"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        return (
          <span
            key={index}
            className="inline-block px-0.5 align-baseline font-normal"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return (
          <span
            key={index}
            className="font-mono text-rose-600 bg-rose-50 px-1 py-0.5 rounded text-xs"
            title="KaTeX parse error"
          >
            {isBlock ? `$$${token.value}$$` : `$${token.value}$`}
          </span>
        );
      }
    });
  }, [text]);

  return <div className={`leading-relaxed ${className}`}>{renderedElements}</div>;
};
