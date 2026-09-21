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
    ASSIGNED: "bg-surface-hover text-ink-muted border border-hairline",
    MARKED_COMPLETE: "bg-[#E8A23D]/10 text-amber border border-[#E8A23D]/30",
    APPROVED: "bg-[#10C47C]/10 text-mint border border-[#10C47C]/30",
    REJECTED: "bg-surface text-ink-faint border border-hairline",
    ACTIVE: "bg-[#10C47C]/10 text-mint border border-[#10C47C]/30",
    EXPIRED: "bg-surface text-ink-faint border border-hairline",
    CANCELLED: "bg-[#E8A23D]/10 text-amber border border-[#E8A23D]/30",
    LATE: "bg-[#E8A23D]/10 text-amber border border-[#E8A23D]/30",
    DEFAULT: "bg-surface-hover text-white border border-hairline",
    MOSS: "bg-[#10C47C]/10 text-mint border border-[#10C47C]/30",
    MINT: "bg-[#10C47C]/10 text-mint border border-[#10C47C]/30",
    AMBER: "bg-[#E8A23D]/10 text-amber border border-[#E8A23D]/30",
    INDIGO: "bg-[#10C47C]/10 text-mint border border-[#10C47C]/30",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
