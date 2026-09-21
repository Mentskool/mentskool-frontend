import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "mint" | "moss" | "amber" | "subtle" | "ghost";
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
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed rounded-control select-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs font-semibold",
    md: "px-4 py-2 text-sm font-semibold",
    lg: "px-6 py-2.5 text-base font-semibold",
  };

  const variantClasses = {
    // Primary CTA: Brand Indigo with White Text
    primary:
      "bg-brand text-white hover:bg-brand-hover active:bg-[#1C2644] border border-transparent shadow-none",
    // Secondary: White surface with 1px hairline border
    secondary:
      "bg-white text-ink border border-mist hover:bg-[#F4F5F6] active:bg-[#EAEDF1] shadow-none",
    // Mint / Moss: Positive/verified green accent
    mint:
      "bg-moss text-white hover:bg-[#2E8B57] active:bg-[#256F46] border border-transparent shadow-none",
    moss:
      "bg-moss text-white hover:bg-[#2E8B57] active:bg-[#256F46] border border-transparent shadow-none",
    // Amber: Urgency / Pending
    amber:
      "bg-amber text-white hover:bg-[#D48F2A] border border-transparent shadow-none",
    // Subtle: Neutral soft tone
    subtle:
      "bg-[#F4F5F6] text-ink border border-mist hover:bg-[#EAECEF] shadow-none",
    // Ghost: Transparent with hover surface
    ghost:
      "bg-transparent text-ink-muted hover:text-ink hover:bg-black/5 border border-transparent shadow-none",
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
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};
