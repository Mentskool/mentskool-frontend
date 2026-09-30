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

      {/* 3. Crisp Faded Graded Grid Lines Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 90% 750px at 50% 100px, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 750px at 50% 100px, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
};
