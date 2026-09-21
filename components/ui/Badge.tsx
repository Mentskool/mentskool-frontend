import React from "react";
import { SubscriptionStatus, TaskStatus } from "@/lib/types";

export type BadgeVariant =
  | TaskStatus
  | SubscriptionStatus
  | "LATE"
  | "DEFAULT"
  | "MOSS"
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
    ASSIGNED: "bg-[#F3F4F6] text-ink-muted border border-mist",
    MARKED_COMPLETE: "bg-amber-light text-[#A86812] border border-[#EAC286]",
    APPROVED: "bg-moss-light text-moss border border-[#A1D6B8]",
    REJECTED: "bg-[#F0F1F4] text-[#6B7280] border border-mist",
    ACTIVE: "bg-moss-light text-moss border border-[#A1D6B8]",
    EXPIRED: "bg-[#F0F1F4] text-[#6B7280] border border-mist",
    CANCELLED: "bg-[#FDF2E9] text-[#B95000] border border-[#F4BE95]",
    LATE: "bg-[#FDF2E9] text-[#B95000] border border-[#F4BE95]",
    DEFAULT: "bg-[#F3F4F6] text-ink border border-mist",
    MOSS: "bg-moss-light text-moss border border-[#A1D6B8]",
    AMBER: "bg-amber-light text-[#A86812] border border-[#EAC286]",
    INDIGO: "bg-brand-light text-brand border border-[#C5D0EB]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
