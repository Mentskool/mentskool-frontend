import React, { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = "", id, rows = 3, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-medium text-ink-muted select-none"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`w-full px-3.5 py-2 bg-surface text-white text-sm rounded-control border border-hairline placeholder:text-ink-faint focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-colors disabled:bg-surface-hover disabled:cursor-not-allowed resize-y ${
            error ? "border-amber focus:border-amber focus:ring-amber" : ""
          } ${className}`}
          {...props}
        />
        {error ? (
          <p className="text-xs text-amber font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-ink-faint">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
