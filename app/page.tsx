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
    <div className="py-12 md:py-20 flex flex-col items-start max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mist bg-white text-xs font-medium text-ink-muted mb-6">
        <span className="w-2 h-2 rounded-full bg-moss" />
        Mentorship Accountability Platform
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold font-display text-ink leading-[1.1] mb-6 tracking-tight">
        Structured weekly progress, verified by your mentor.
      </h1>

      <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-2xl">
        Mentskool connects students with experienced industry mentors. Mentors assign
        targeted weekly tasks, students mark completion, and single-click reviews feed
        into a verified, real-time accountability efficiency score.
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-16">
        <Link href="/mentors">
          <Button size="lg" variant="primary">
            Explore Mentors
          </Button>
        </Link>
        <Link href="/signup">
          <Button size="lg" variant="secondary">
            Join as Student or Mentor
          </Button>
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-mist">
        <Card variant="subtle" className="p-5">
          <span className="text-xs font-semibold text-ink-faint uppercase tracking-wider">
            Step 1
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1">
            Subscribe to a Cohort
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Browse verified mentors, reserve limited seats with real-time atomic locking,
            and join dedicated cohorts.
          </p>
        </Card>

        <Card variant="subtle" className="p-5">
          <span className="text-xs font-semibold text-ink-faint uppercase tracking-wider">
            Step 2
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1">
            Weekly Accountability
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Tackle clear weekly objectives. Mark tasks complete with on-time or late
            tracking against scheduled deadlines.
          </p>
        </Card>

        <Card variant="subtle" className="p-5">
          <span className="text-xs font-semibold text-ink-faint uppercase tracking-wider">
            Step 3
          </span>
          <h3 className="text-base font-bold font-display text-ink mt-2 mb-1">
            Efficiency Scoring
          </h3>
          <p className="text-xs text-ink-muted leading-relaxed">
            Mentors review and approve submissions, dynamically generating your
            accountability score.
          </p>
        </Card>
      </div>
    </div>
  );
}
