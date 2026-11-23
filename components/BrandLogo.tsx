"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showTagline?: boolean;
  animated?: boolean;
  href?: string;
  className?: string;
}

export function BrandLogo({
  size = "md",
  showText = true,
  showTagline = true,
  animated = true,
  href,
  className = "",
}: BrandLogoProps) {
  // Dimensions based on size
  const iconHeight = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
    xl: "h-20",
  }[size];

  const titleSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
    xl: "text-3xl",
  }[size];

  const content = (
    <div className={`group relative inline-flex items-center gap-2.5 select-none flex-shrink-0 ${className}`}>
      {/* M Symbol Icon with Subtle Clean Shadow & Animation */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        {/* Floating Animated Logo Container */}
        <div
          className={`relative z-10 flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-105 group-hover:-rotate-1 ${
            animated ? "animate-logo-float" : ""
          }`}
        >
          <img
            src="/logo.png"
            alt="Mentskool M"
            className={`${iconHeight} w-auto object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.08)] group-hover:drop-shadow-[0_3px_8px_rgba(2,132,199,0.25)] transition-all duration-300`}
          />

          {/* Shimmer Sheen Reflection across the M Ribbon */}
          {animated && (
            <div
              className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-sheen" />
            </div>
          )}
        </div>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col flex-shrink-0">
          <span
            className={`font-display font-bold text-ink tracking-tight leading-none group-hover:text-brand transition-colors ${titleSize}`}
          >
            Mentskool
          </span>
          {showTagline && (
            <span className="text-[10px] text-ink-faint font-medium tracking-wide mt-0.5 leading-none hidden sm:inline">
              Find Your Perfect Mentor
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center flex-shrink-0 focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
