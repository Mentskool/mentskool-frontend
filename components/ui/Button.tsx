import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "moss" | "subtle" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand/30 disabled:opacity-50 disabled:cursor-not-allowed rounded-control select-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base",
  };

  const variantClasses = {
    // Primary: Indigo
    primary:
      "bg-brand text-white hover:bg-brand-hover active:bg-[#1A2340] border border-transparent",
    // Secondary: Flat paper surface with 1px mist border
    secondary:
      "bg-white text-ink border border-mist hover:bg-[#F5F5F3] active:bg-[#ECECE9]",
    // Moss: Approved / Success action
    moss:
      "bg-moss text-white hover:bg-moss-hover active:bg-[#2A724C] border border-transparent",
    // Subtle: Neutral / muted reject action (not alarming red)
    subtle:
      "bg-[#F0F2F5] text-ink-muted border border-mist hover:bg-[#E5E7EB] hover:text-ink active:bg-[#DCDFE5]",
    // Ghost: transparent
    ghost:
      "bg-transparent text-ink-muted hover:text-ink hover:bg-mist/40 active:bg-mist/60 border border-transparent",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};
