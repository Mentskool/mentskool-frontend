import React, { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle";
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const bgClasses = variant === "default" ? "bg-surface" : "bg-background";

  return (
    <div
      className={`${bgClasses} rounded-card border border-hairline p-6 text-left transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
