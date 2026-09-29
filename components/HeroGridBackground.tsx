"use client";

import React from "react";

export const HeroGridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Base Luminous Soft Sky-Blue Atmospheric Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3FB] via-[#F2F7FD] to-[#E6F0F9]" />

      {/* 2. Soft Ambient Radial Light Glows (Sky Blue, Soft Indigo, Cyan) */}
      <div
        className="absolute -top-32 right-1/4 w-[750px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.28) 0%, rgba(14, 165, 233, 0.12) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-20 -left-20 w-[600px] h-[550px] rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(59, 130, 246, 0.10) 50%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-48 right-10 w-[500px] h-[450px] rounded-full blur-3xl opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.18) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 75%)",
        }}
      />

      {/* 3. Crisp Faded Light Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_30%,#000_60%,transparent_100%)] opacity-35"
        aria-hidden="true"
      />

      {/* 4. Subtle Ambient Diagonal Horizon Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
    </div>
  );
};
