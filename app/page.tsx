"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Users, CheckSquare, TrendingUp, ArrowRight, Sparkles } from "lucide-react";

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
    <div className="relative overflow-hidden">
      {/* Ambient Animated Background Mesh & Floating Radiance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Soft floating blur orbs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-brand/10 via-brand/5 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-36 -left-28 w-[500px] h-[500px] bg-gradient-to-br from-moss/15 via-moss/5 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-52 -right-28 w-[520px] h-[520px] bg-gradient-to-bl from-amber/15 via-brand/5 to-transparent rounded-full blur-3xl animate-pulse-subtle" />

        {/* Fine architectural dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Vignette mask so edges blend into paper background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />
      </div>

      <div className="py-16 md:py-24 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4">
        {/* Top Pill with live pulsing beacon */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-mist bg-white/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-ink-muted mb-8 shadow-none transition-all hover:border-brand/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-moss"></span>
          </span>
          <span className="text-ink font-bold tracking-wider flex items-center gap-1.5">
            Next-Generation Mentorship
            <Sparkles className="w-3.5 h-3.5 text-amber" />
          </span>
        </div>

        {/* Main Centered Hero Heading - Bolder, tight leading, no full stop */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-display text-ink tracking-tight leading-[1.03] mb-6">
          Find Your <br />
          <span className="text-ink font-black">
            Perfect Mentor
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-10 max-w-2xl font-normal">
          Connect with expert mentors from top organizations. <br className="hidden sm:inline" />
          Personalized guidance for your career success.
        </p>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          <Link href="/mentors">
            <Button
              size="lg"
              variant="primary"
              className="px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2 bg-brand hover:bg-brand/90 transition-all hover:gap-3 group"
            >
              <span>Find a Mentor</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <Link href="/signup?role=MENTOR">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-3.5 rounded-full text-base font-semibold bg-white hover:bg-[#F7F8F9] border-mist text-ink transition-all"
            >
              Become a Mentor
            </Button>
          </Link>
        </div>

        {/* 3-Step Process Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-mist/80 text-left">
          {/* Step 1 */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border border-mist hover:border-brand/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-moss uppercase tracking-widest bg-moss/10 px-2.5 py-0.5 rounded-control">
                Step 1
              </span>
              <Users className="w-4 h-4 text-ink-faint group-hover:text-brand transition-colors" />
            </div>
            <h3 className="text-base font-bold font-display text-ink mt-2 mb-1.5">
              Subscribe to a Cohort
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Browse verified mentors, reserve limited seats with real-time atomic locking,
              and join dedicated cohorts.
            </p>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border border-mist hover:border-brand/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-moss uppercase tracking-widest bg-moss/10 px-2.5 py-0.5 rounded-control">
                Step 2
              </span>
              <CheckSquare className="w-4 h-4 text-ink-faint group-hover:text-brand transition-colors" />
            </div>
            <h3 className="text-base font-bold font-display text-ink mt-2 mb-1.5">
              Weekly Accountability
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Tackle clear weekly objectives. Mark tasks complete with on-time or late
              tracking against scheduled deadlines.
            </p>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 bg-white/95 backdrop-blur-sm border border-mist hover:border-brand/40 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-moss uppercase tracking-widest bg-moss/10 px-2.5 py-0.5 rounded-control">
                Step 3
              </span>
              <TrendingUp className="w-4 h-4 text-ink-faint group-hover:text-brand transition-colors" />
            </div>
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
    </div>
  );
}
