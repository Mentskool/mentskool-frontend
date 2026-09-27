"use client";

import React from "react";

export const FocusBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50/60 via-white to-sky-50/40 rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center justify-between gap-4 overflow-hidden relative">
      {/* Motivational quote */}
      <div className="space-y-1 z-10">
        <p className="text-xs italic font-serif text-slate-700 font-medium">
          &ldquo;Small steps
        </p>
        <p className="text-xs italic font-serif text-slate-700 font-medium">
          every week,
        </p>
        <p className="text-xs font-serif italic text-blue-700 font-bold">
          big results.&rdquo;
        </p>
      </div>

      {/* Elegant minimalist mountain summit vector graphic */}
      <div className="relative w-36 h-20 flex-shrink-0">
        <svg
          viewBox="0 0 160 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Background hills */}
          <path
            d="M5 90 L40 52 L75 90 Z"
            fill="#A7F3D0"
            fillOpacity="0.7"
          />
          <path
            d="M35 90 L85 35 L135 90 Z"
            fill="#38BDF8"
            fillOpacity="0.8"
          />
          {/* Highest mountain peak */}
          <path
            d="M80 90 L125 15 L160 90 Z"
            fill="#2563EB"
          />
          {/* Mountain snow peak accent */}
          <path
            d="M125 15 L115 32 L125 28 L135 32 Z"
            fill="#EFF6FF"
          />
          {/* Flagpole on top */}
          <line
            x1="125"
            y1="15"
            x2="125"
            y2="3"
            stroke="#1E293B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Red/crimson summit flag */}
          <path
            d="M125 3 L142 8 L125 13 Z"
            fill="#EF4444"
          />
          {/* Milestone shine dot */}
          <circle cx="100" cy="28" r="2.5" fill="#10B981" />
        </svg>
      </div>
    </div>
  );
};
