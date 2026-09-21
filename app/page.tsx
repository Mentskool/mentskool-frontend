"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  const router = useRouter();
  const { user, isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && isAuthenticated && user) {
      if (user.role === "MENTOR") {
        router.replace("/mentor/students");
      } else {
        router.replace("/dashboard/tasks");
      }
    }
  }, [user, isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="py-24 flex items-center justify-center">
        <div className="animate-pulse text-sm text-ink-faint">Loading Mentskool...</div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      {/* Top Tag Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mist bg-white text-xs font-semibold uppercase tracking-wider text-ink-muted mb-8 shadow-none">
        <svg
          className="w-3.5 h-3.5 text-moss"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
        </svg>
        <span>Next-Generation Mentorship</span>
      </div>

      {/* Main Centered Hero Heading */}
      <h1 className="text-5xl sm:text-7xl font-extrabold font-display text-ink tracking-tight leading-[1.08] mb-6">
        Find Your <br />
        <span className="text-ink">Perfect Mentor.</span>
      </h1>

      {/* Centered Subtitle */}
      <p className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-10 max-w-2xl">
        Connect with expert mentors from top organizations. <br className="hidden sm:inline" />
        Personalized guidance for your career success.
      </p>

      {/* Hero Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
        <Link href="/mentors">
          <Button size="lg" variant="primary" className="px-8 py-3 rounded-full text-base font-semibold flex items-center gap-2">
            <span>Find a Mentor</span>
            <span>→</span>
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="lg" variant="secondary" className="px-8 py-3 rounded-full text-base font-semibold">
            Become a Mentor
          </Button>
        </Link>
      </div>

      {/* 3 Step Process Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-mist text-left">
        <Card className="p-6 bg-white hover:border-brand/40 transition-colors">
          <span className="text-xs font-bold text-moss uppercase tracking-wider">
            Step 1
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1.5">
            Subscribe to a Cohort
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Browse verified mentors, reserve limited seats with real-time atomic locking,
            and join dedicated cohorts.
          </p>
        </Card>

        <Card className="p-6 bg-white hover:border-brand/40 transition-colors">
          <span className="text-xs font-bold text-moss uppercase tracking-wider">
            Step 2
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1.5">
            Weekly Accountability
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Tackle clear weekly objectives. Mark tasks complete with on-time or late
            tracking against scheduled deadlines.
          </p>
        </Card>

        <Card className="p-6 bg-white hover:border-brand/40 transition-colors">
          <span className="text-xs font-bold text-moss uppercase tracking-wider">
            Step 3
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1.5">
            Efficiency Scoring
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Mentors review and approve submissions, dynamically generating your
            accountability efficiency score.
          </p>
        </Card>
      </div>
    </div>
  );
}
