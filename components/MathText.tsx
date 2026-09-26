"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, className = "" }) => {
  const renderedElements = useMemo(() => {
    if (!text) return null;

    // Pattern to split by block math $$...$$ and inline math $...$
    // Using regex with capturing groups
    const tokens: Array<{ type: "text" | "inline-math" | "block-math"; value: string }> = [];

    // Match $$...$$ first, then $...$
    const regex = /\$\$([\s\S]*?)\$\$|\$([^\$\n]+?)\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: "text",
          value: text.slice(lastIndex, match.index),
        });
      }

      if (match[1] !== undefined) {
        // Block math $$...$$
        tokens.push({
          type: "block-math",
          value: match[1],
        });
      } else if (match[2] !== undefined) {
        // Inline math $...$
        tokens.push({
          type: "inline-math",
          value: match[2],
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      tokens.push({
        type: "text",
        value: text.slice(lastIndex),
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

      try {
        const isBlock = token.type === "block-math";
        const html = katex.renderToString(token.value, {
          displayMode: isBlock,
          throwOnError: false,
        });

        if (isBlock) {
          return (
            <div
              key={index}
              className="my-3 overflow-x-auto py-1 text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        return (
          <span
            key={index}
            className="inline-block px-0.5 align-baseline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return (
          <span key={index} className="font-mono text-red-500 text-xs">
            ${token.value}$
          </span>
        );
      }
    });
  }, [text]);

  return <div className={`leading-relaxed ${className}`}>{renderedElements}</div>;
};
