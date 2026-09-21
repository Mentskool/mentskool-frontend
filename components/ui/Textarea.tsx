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
            className="text-xs font-semibold text-ink-muted select-none"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`w-full px-3.5 py-2 bg-white text-ink text-sm rounded-control border border-mist placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors disabled:bg-[#F4F5F6] disabled:text-ink-faint disabled:cursor-not-allowed resize-y ${
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
