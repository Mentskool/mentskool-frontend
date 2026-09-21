"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { EmptyState } from "@/components/ui/EmptyState";

export default function QuizzesPage() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-display text-white tracking-tight">
          Adaptive Weekly Quizzes
        </h1>
        <p className="text-sm text-ink-muted mt-1">
          Exam-calibrated speed drills and diagnostic problem sets for JEE, NEET, and GATE cohorts.
        </p>
      </div>

      <EmptyState
        icon={
          <svg
            className="w-12 h-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
        title="Weekly Exam Quizzes — Coming Soon"
        description="We are integrating standardized timed tests and automatic grading into your mentor's weekly workflow. Check back soon!"
        actionLabel="Explore Mentors"
        onAction={() => router.push("/mentors")}
      />
    </div>
  );
}
