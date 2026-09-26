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
  | "INDIGO"
  | "DRAFT"
  | "SCHEDULED"
  | "PUBLISHED"
  | "ARCHIVED"
  | "IN_PROGRESS"
  | "SUBMITTED";

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
    APPROVED: "bg-blue-50 text-blue-700 border border-blue-200/80",
    REJECTED: "bg-[#F4F5F6] text-ink-faint border border-mist",
    ACTIVE: "bg-sky-50 text-sky-700 border border-sky-200/80",
    EXPIRED: "bg-[#F4F5F6] text-ink-faint border border-mist",
    CANCELLED: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    LATE: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    DEFAULT: "bg-[#F4F5F6] text-ink border border-mist",
    MOSS: "bg-blue-50 text-blue-700 border border-blue-200/80",
    MINT: "bg-sky-50 text-sky-700 border border-sky-200/80",
    AMBER: "bg-[#E8A33D]/10 text-amber border border-[#E8A33D]/30",
    INDIGO: "bg-[#2B3A67]/10 text-brand border border-[#2B3A67]/30",
    DRAFT: "bg-slate-100 text-slate-700 border border-slate-200",
    SCHEDULED: "bg-amber-50 text-amber-800 border border-amber-200",
    PUBLISHED: "bg-blue-50 text-blue-700 border border-blue-200",
    ARCHIVED: "bg-zinc-100 text-zinc-500 border border-zinc-200",
    IN_PROGRESS: "bg-blue-50 text-blue-700 border border-blue-200",
    SUBMITTED: "bg-purple-50 text-purple-700 border border-purple-200",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
