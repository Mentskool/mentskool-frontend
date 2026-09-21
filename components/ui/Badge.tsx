import React from "react";
import { SubscriptionStatus, TaskStatus } from "@/lib/types";

export type BadgeVariant =
  | TaskStatus
  | SubscriptionStatus
  | "LATE"
  | "DEFAULT"
  | "MOSS"
  | "MINT"
  | "AMBER"
  | "INDIGO";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "DEFAULT",
  children,
  className = "",
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    ASSIGNED: "bg-[#F4F5F6] text-ink-muted border border-mist",
    MARKED_COMPLETE: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    APPROVED: "bg-[#3C9D6B]/10 text-moss border border-[#3C9D6B]/30",
    REJECTED: "bg-[#F4F5F6] text-ink-faint border border-mist",
    ACTIVE: "bg-[#3C9D6B]/10 text-moss border border-[#3C9D6B]/30",
    EXPIRED: "bg-[#F4F5F6] text-ink-faint border border-mist",
    CANCELLED: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    LATE: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    DEFAULT: "bg-[#F4F5F6] text-ink border border-mist",
    MOSS: "bg-[#3C9D6B]/10 text-moss border border-[#3C9D6B]/30",
    MINT: "bg-[#3C9D6B]/10 text-moss border border-[#3C9D6B]/30",
    AMBER: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    INDIGO: "bg-[#2B3A67]/10 text-brand border border-[#2B3A67]/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
