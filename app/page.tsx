"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Users,
  CheckSquare,
  TrendingUp,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Video,
  Star,
  Lock,
  CheckCircle2,
  Calendar,
} from "lucide-react";

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
    <div className="relative overflow-hidden pb-16">
      {/* Ambient Animated Radiant Glows & Delicate Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Soft floating radiant blur orbs */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-brand/15 via-indigo/10 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-48 -left-36 w-[600px] h-[600px] bg-gradient-to-br from-moss/20 via-moss/5 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-64 -right-36 w-[620px] h-[620px] bg-gradient-to-bl from-amber/20 via-brand/10 to-transparent rounded-full blur-3xl animate-pulse-subtle" />

        {/* Delicate architectural dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient concentric geometric circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-mist/40 rounded-full opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-mist/30 rounded-full opacity-20 pointer-events-none" />

        {/* Subtle gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />
      </div>

      <div className="py-16 md:py-24 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
        {/* Top Pill with live pulsing emerald beacon */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-mist bg-white/95 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-ink-muted mb-8 shadow-soft transition-all hover:border-brand/40 hover:shadow-card">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-moss"></span>
          </span>
          <span className="text-ink font-bold tracking-wider flex items-center gap-1.5">
            Next-Generation Mentorship
            <Sparkles className="w-3.5 h-3.5 text-amber" />
          </span>
        </div>

        {/* Main Centered Hero Heading - Ultra-bold font-black, tight leading, no period */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black font-display text-ink tracking-tight leading-[1.03] mb-6">
          Find Your <br />
          <span className="text-ink font-black">
            Perfect Mentor
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-8 max-w-2xl font-normal">
          Connect with expert mentors from top organizations. <br className="hidden sm:inline" />
          Personalized guidance for your career success.
        </p>

        {/* Quick Domain Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { label: "JEE Prep", icon: "⚛️" },
            { label: "NEET Medical", icon: "🧬" },
            { label: "GATE / PSU", icon: "💻" },
            { label: "1:1 Accountability", icon: "🎯" },
          ].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-mist text-xs font-medium text-ink-muted shadow-soft"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </span>
          ))}
        </div>

        {/* Hero Action Buttons with Elevation */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link href="/mentors">
            <Button
              size="lg"
              variant="primary"
              className="px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2.5 bg-brand hover:bg-brand/90 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
            >
              <span>Find a Mentor</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/signup?role=MENTOR">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-3.5 rounded-full text-base font-semibold bg-white hover:bg-[#F7F8F9] border-mist text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
            >
              Become a Mentor
            </Button>
          </Link>
        </div>

        {/* Interactive UI Mockup Card Showcase */}
        <div className="w-full max-w-4xl relative mb-20 group">
          {/* Subtle surrounding ambient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 via-moss/20 to-amber/20 rounded-card blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          {/* Main Floating Mockup Container */}
          <Card className="bg-white/95 backdrop-blur-md border border-mist p-4 sm:p-7 shadow-elevated rounded-card text-left space-y-6">
            {/* Window header with simulated controls */}
            <div className="flex items-center justify-between border-b border-mist/80 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-3 text-xs font-mono text-ink-faint">
                  mentskool.com/cohort/jee-prep
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-moss bg-moss/10 px-2 py-0.5 rounded-full border border-moss/20">
                  <Lock className="w-3 h-3" />
                  Atomic Redis Locking Active
                </span>
              </div>
            </div>

            {/* Split Showcase Inside the Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left: Mentor Cohort Preview */}
              <div className="p-5 rounded-control bg-[#FAFAF9] border border-mist space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-brand text-white font-bold text-base flex items-center justify-center shadow-soft">
                      RS
                    </div>
                    <div>
                      <h4 className="font-bold font-display text-sm text-ink">
                        Rahul Sharma
                      </h4>
                      <p className="text-xs text-ink-muted">
                        AIR 42 • IIT Bombay Physics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-amber text-xs font-bold bg-amber/10 px-2 py-0.5 rounded-full border border-amber/20">
                    <Star className="w-3.5 h-3.5 fill-amber text-amber" />
                    <span>5.0</span>
                  </div>
                </div>

                {/* Live Seat Progress Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-ink">8 / 10 Seats Filled</span>
                    <span className="text-moss font-bold text-[11px] bg-moss/10 px-2 py-0.2 rounded">
                      2 Seats Left
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-mist rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand to-moss rounded-full w-[80%]" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber" /> High Momentum
                  </span>
                  <span className="font-bold text-brand">₹4,999 / month</span>
                </div>
              </div>

              {/* Right: Real-Time Student Accountability & Score */}
              <div className="p-5 rounded-control bg-[#FAFAF9] border border-mist space-y-3.5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                      Real-Time Accountability Score
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-black font-display text-ink">
                        94%
                      </span>
                      <span className="text-xs font-bold text-moss bg-moss/10 px-2 py-0.5 rounded-full">
                        Exceptional Tier
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-moss/10 text-moss flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Milestone Deliverable snippet */}
                <div className="bg-white p-3 rounded-control border border-mist space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-ink">
                      Mechanics Mock Test Analysis
                    </span>
                    <span className="text-[10px] font-bold text-moss flex items-center gap-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-muted">
                    Completed 14h before deadline. Reviewed & approved by mentor.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-ink-faint">
                  <Calendar className="w-3.5 h-3.5 text-brand" />
                  <span>Next 1:1 Checkpoint: <strong>Tomorrow, 7:00 PM</strong></span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Platform Trust & Performance Metrics Strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            {
              value: "98%",
              label: "Weekly On-Time Rate",
              desc: "Driven by verified checkpoints",
            },
            {
              value: "10 Max",
              label: "Students Per Cohort",
              desc: "Guaranteed personal attention",
            },
            {
              value: "Atomic",
              label: "Redis Seat Locking",
              desc: "Zero overbooking guarantee",
            },
            {
              value: "< 24h",
              label: "Review Turnaround",
              desc: "Actionable mentor feedback",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="p-5 bg-white/95 backdrop-blur-sm border border-mist shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all text-left"
            >
              <div className="text-2xl sm:text-3xl font-black font-display text-ink tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-ink mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-ink-muted mt-0.5 leading-snug">
                {stat.desc}
              </div>
            </Card>
          ))}
        </div>

        {/* 3-Step Process Section with Richer Depth */}
        <div className="w-full space-y-6 text-left">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-widest bg-brand/10 px-3 py-1 rounded-full">
              Platform Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight mt-3">
              How Mentskool Works
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              Three simple steps to structured preparation and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Step 1 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-moss uppercase tracking-widest bg-moss/10 px-3 py-1 rounded-full">
                  Step 1
                </span>
                <div className="w-9 h-9 rounded-control bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                Subscribe to a Cohort
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Browse verified mentors, reserve limited seats with real-time atomic locking,
                and join dedicated cohorts tailored to your goals.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-moss uppercase tracking-widest bg-moss/10 px-3 py-1 rounded-full">
                  Step 2
                </span>
                <div className="w-9 h-9 rounded-control bg-moss/10 text-moss flex items-center justify-center group-hover:bg-moss group-hover:text-white transition-colors">
                  <CheckSquare className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                Weekly Accountability
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Tackle clear weekly objectives. Mark tasks complete with on-time or late
                tracking against scheduled deadlines and 1:1 checkpoints.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-moss uppercase tracking-widest bg-moss/10 px-3 py-1 rounded-full">
                  Step 3
                </span>
                <div className="w-9 h-9 rounded-control bg-amber/15 text-amber flex items-center justify-center group-hover:bg-amber group-hover:text-white transition-colors">
                  <TrendingUp className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                Dynamic Efficiency Scoring
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Mentors review and approve submissions, dynamically generating your
                accountability efficiency score to measure sustained momentum.
              </p>
            </Card>
          </div>
        </div>

        {/* Bottom Call to Action Card */}
        <div className="w-full mt-16">
          <Card className="p-8 sm:p-10 bg-gradient-to-r from-brand to-[#1e294b] text-white rounded-card shadow-elevated text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black font-display tracking-tight text-white">
                Ready to find your mentor?
              </h3>
              <p className="text-sm text-white/80 max-w-lg">
                Join a high-accountability cohort today. Seats are strictly limited per mentor to ensure personalized guidance.
              </p>
            </div>
            <Link href="/mentors" className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 font-bold px-7 py-3 rounded-full text-sm shadow-soft hover:-translate-y-0.5 transition-all"
              >
                Browse All Cohorts →
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
