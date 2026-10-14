"use client";

import React from "react";

interface HeroGridBackgroundProps {
  variant?: "light" | "dark";
}

export const HeroGridBackground: React.FC<HeroGridBackgroundProps> = ({
  variant = "dark",
}) => {
  if (variant === "light") {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* 1. Base Luminous Soft Sky-Blue Atmospheric Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3FB] via-[#F2F7FD] to-[#E6F0F9]" />

        {/* 2. Soft Ambient Radial Light Glows */}
        <div
          className="absolute -top-24 right-1/4 w-[750px] h-[500px] rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-16 -left-20 w-[600px] h-[550px] rounded-full blur-3xl opacity-35 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(59, 130, 246, 0.10) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-40 right-10 w-[500px] h-[450px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)",
          }}
        />

        {/* 3. Grid Lines */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(71, 85, 105, 0.095) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71, 85, 105, 0.095) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 650px at 50% 60px, black 30%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 650px at 50% 60px, black 30%, transparent 90%)",
          }}
        />
      </div>
    );
  }

  // Dark variant (Default for SEO and dark pages)
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none bg-slate-950"
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Slate Base */}
      <div className="absolute inset-0 bg-[#070A12]" />

      {/* 2. Rich Deep Atmospheric Glows */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-80 -left-24 w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[800px] -right-24 w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* 3. Subtle Technical Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 800px at 50% 100px, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 800px at 50% 100px, black 40%, transparent 95%)",
        }}
      />
    </div>
  );
};
