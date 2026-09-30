"use client";

import React from "react";

export const HeroGridBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Base Luminous Soft Sky-Blue Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3FB] via-[#F2F7FD] to-[#E6F0F9]" />

      {/* 2. Soft Ambient Radial Light Glows (Sky Blue, Soft Indigo, Cyan) */}
      <div
        className="absolute -top-24 right-1/4 w-[750px] h-[500px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-16 -left-20 w-[600px] h-[550px] rounded-full blur-3xl opacity-35 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(59, 130, 246, 0.10) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-40 right-10 w-[500px] h-[450px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)",
        }}
      />

      {/* 3. Clearly Visible yet Elegant Faded Graded Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(71, 85, 105, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71, 85, 105, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 90% 700px at 50% 60px, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 700px at 50% 60px, black 45%, transparent 95%)",
        }}
      />
    </div>
  );
};
