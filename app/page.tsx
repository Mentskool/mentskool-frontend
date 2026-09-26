"use client";

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
  Zap,
  Star,
  Lock,
  CheckCircle2,
  Calendar,
  Award,
  Trophy,
  RefreshCw,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { HeroPlatformEngine } from "@/components/HeroPlatformEngine";

export default function HomePage() {
  const { user, isAuthenticated } = useAuthStore();

  return (
    <div className="relative overflow-hidden bg-[#EBF3FB]">
      {/* 1. Luminous Soft Sky-Blue Gradient with Architectural Square Grid Pattern */}
      <HeroGridBackground />

      {/* 2. Top Hero Section - 2-Column Desktop Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-sky-300/80 bg-white/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-sky-950 mb-6 shadow-soft transition-all hover:shadow-card hover:border-sky-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="font-bold tracking-wider flex items-center gap-1.5">
                1:1 Mentorship for JEE &amp; NEET Aspirants
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black font-display text-ink tracking-tight leading-[1.05] mb-6 select-none">
              Find Your <br />
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Perfect Mentor
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-6 max-w-xl font-normal">
              Guided by rankers from top <strong className="text-blue-700 font-semibold">IITs &amp; AIIMS</strong> who mastered your exact exam. Tailored weekly roadmaps for <span className="font-semibold text-ink">Droppers</span>, <span className="font-semibold text-ink">Class 12th Board + Entrance</span>, and <span className="font-semibold text-ink">Class 11th</span>.
            </p>

            {/* Stage Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8">
              <Link
                href="/mentors"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-soft hover:bg-blue-50 hover:border-blue-300 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <span>⚛️</span>
                <span>JEE Advanced &amp; Mains</span>
              </Link>
              <Link
                href="/mentors"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-cyan-200/80 text-xs font-semibold text-cyan-900 shadow-soft hover:bg-cyan-50 hover:border-cyan-300 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <span>🧬</span>
                <span>NEET-UG (AIIMS &amp; GMCs)</span>
              </Link>
              <Link
                href="/mentors"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-amber-200/80 text-xs font-semibold text-amber-800 shadow-soft hover:bg-amber-50 hover:border-amber-300 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <span>🎯</span>
                <span>Dropper Strategy</span>
              </Link>
              <Link
                href="/mentors"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-sm border border-indigo-200/80 text-xs font-semibold text-indigo-800 shadow-soft hover:bg-indigo-50 hover:border-indigo-300 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <span>📚</span>
                <span>Class 11 &amp; 12 Foundation</span>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
              <Link href={isAuthenticated ? (user?.role === "MENTOR" ? "/mentor/students" : "/dashboard/tasks") : "/mentors"}>
                <Button
                  size="lg"
                  variant="primary"
                  className="px-7 py-3 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:shadow-card hover:-translate-y-0.5 transition-all group"
                >
                  <span>{isAuthenticated ? "Go to Dashboard" : "Find Your Mentor"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={isAuthenticated ? "/mentors" : "/signup?role=MENTOR"}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-6 py-3 rounded-xl text-base font-semibold bg-white/90 hover:bg-white border-blue-200/80 text-ink shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all"
                >
                  {isAuthenticated ? "Explore Mentors" : "Become a Mentor"}
                </Button>
              </Link>
            </div>

            {/* Social Proof Rating */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-4 py-2 rounded-xl bg-white/85 backdrop-blur-sm border border-blue-100 shadow-soft text-xs text-ink-muted">
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white shadow-soft">AK</div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white shadow-soft">PR</div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-[9px] flex items-center justify-center ring-2 ring-white shadow-soft">SM</div>
              </div>
              <div className="flex items-center gap-1 font-semibold text-ink">
                <div className="flex text-amber-500 text-[11px]">{"★".repeat(5)}</div>
                <span>4.9 / 5.0 Rating</span>
              </div>
              <span className="text-ink-faint hidden sm:inline">•</span>
              <span className="text-ink-muted font-medium text-[11px]">Mentors from IIT Bombay &amp; AIIMS New Delhi</span>
            </div>
          </div>

          {/* Right Column: 3D Isometric Mentorship Platform Engine */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroPlatformEngine />
          </div>
        </div>
      </div>

      {/* 3. Curved White Base Container */}
      <div className="w-full bg-white rounded-t-[40px] sm:rounded-t-[54px] border-t border-blue-900/5 shadow-[0_-16px_40px_rgba(0,0,0,0.03)] pt-14 pb-20 px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-lg shadow-soft inline-block">
              — LIVE PLATFORM WORKSPACE PREVIEW —
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-ink tracking-tight mt-3">
              Personalized Cohort &amp; Real-Time Accountability
            </h2>
            <p className="text-sm text-ink-muted mt-1">
              Experience 1:1 mentorship backed by verified milestone reviews and dynamic efficiency scoring.
            </p>
          </div>

          {/* Interactive UI Mockup Card Showcase */}
        <div className="w-full max-w-4xl relative mb-20 group">
          {/* Subtle luminous blue ambient gradient aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-indigo-500/20 rounded-card blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          {/* Main Floating Mockup Container */}
          <Card className="bg-white/95 backdrop-blur-md border border-mist shadow-elevated rounded-card text-left overflow-hidden">
            {/* Top Multi-Color Ribbon */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />

            <div className="p-4 sm:p-7 space-y-6">
              {/* Window header with simulated controls */}
              <div className="flex items-center justify-between border-b border-mist/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block shadow-soft" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-soft" />
                  <span className="w-3 h-3 rounded-full bg-blue-500 inline-block shadow-soft" />
                  <span className="ml-3 text-xs font-mono text-ink-faint">
                    mentskool.com/cohort/jee-prep
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                    <Lock className="w-3 h-3 text-blue-600" />
                    Atomic Redis Locking Active
                  </span>
                </div>
              </div>

              {/* Split Showcase Inside the Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left: Mentor Cohort Preview */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white to-[#FAFAF9] border border-mist shadow-soft space-y-3.5 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-base flex items-center justify-center shadow-card ring-2 ring-white">
                        RS
                      </div>
                      <div>
                        <h4 className="font-bold font-display text-sm text-ink flex items-center gap-1.5">
                          Rahul Sharma
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded">AIR 42</span>
                        </h4>
                        <p className="text-xs text-ink-muted">
                          IIT Bombay Physics • Mentor
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Live Seat Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-ink">8 / 10 Seats Filled</span>
                      <span className="text-blue-700 font-bold text-[11px] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                        2 Seats Left
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-mist rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-full w-[80%]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs text-ink-muted">
                    <span className="flex items-center gap-1 font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400" /> High Momentum
                    </span>
                    <span className="font-bold text-brand text-sm">₹4,999 / month</span>
                  </div>
                </div>

                {/* Right: Real-Time Student Accountability & Score */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-white to-[#FAFAF9] border border-mist shadow-soft space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                        Real-Time Accountability Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-3xl font-black font-display bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                          94%
                        </span>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
                          Exceptional Tier
                        </span>
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-sky-600 text-white flex items-center justify-center shadow-card">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Milestone Deliverable snippet */}
                  <div className="bg-white p-3.5 rounded-control border border-mist space-y-1 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-ink">
                        Mechanics Mock Test Analysis
                      </span>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        Verified
                      </span>
                    </div>
                    <p className="text-[11px] text-ink-muted">
                      Submitted 14h before deadline. Mentor reviewed with feedback.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-ink-faint">
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Next 1:1 Session: <strong className="text-ink">Tomorrow, 7:00 PM</strong></span>
                  </div>
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
              color: "text-blue-600",
              border: "border-blue-200/80",
              bg: "bg-blue-50/50",
            },
            {
              value: "10 Max",
              label: "Students Per Cohort",
              desc: "Personalized 1:1 attention",
              color: "text-indigo-600",
              border: "border-indigo-200/80",
              bg: "bg-indigo-50/50",
            },
            {
              value: "Atomic",
              label: "Redis Seat Locking",
              desc: "Zero overbooking guarantee",
              color: "text-purple-600",
              border: "border-purple-200/80",
              bg: "bg-purple-50/50",
            },
            {
              value: "< 24h",
              label: "Review Turnaround",
              desc: "Direct mentor feedback",
              color: "text-amber-600",
              border: "border-amber-200/80",
              bg: "bg-amber-50/50",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className={`p-5 bg-white/95 backdrop-blur-sm border border-mist shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all text-left relative overflow-hidden`}
            >
              <div className={`text-2xl sm:text-3xl font-black font-display tracking-tight ${stat.color}`}>
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

        {/* 3-Step Process Section with Color Themed Headers */}
        <div className="w-full space-y-6 text-left">
          <div>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full">
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
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist border-t-4 border-t-indigo-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full">
                  Step 1
                </span>
                <div className="w-10 h-10 rounded-control bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                Match by Preparation Stage
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Connect with a mentor who walked your exact shoes — whether you&apos;re a repeater/dropper boosting score, managing Class 12 boards + entrance, or building class 11 fundamentals.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist border-t-4 border-t-sky-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-widest bg-sky-50 border border-sky-200/60 px-3 py-1 rounded-lg">
                  Step 2
                </span>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <CheckSquare className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                Weekly Goals &amp; Accountability
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Tackle focused weekly problem sheets, revision milestones, and mock tests. Stay on track with on-time delivery tracking and verified mentor review.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist border-t-4 border-t-purple-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-lg">
                  Step 3
                </span>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-ink mb-2">
                1:1 Strategy &amp; Efficiency Scoring
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Analyze mock test errors, eliminate negative marking habits, and calibrate your daily study efficiency in private 1:1 strategy calls with your mentor.
              </p>
            </Card>
          </div>
        </div>

        {/* Why Serious Aspirants Choose Mentskool - Full Conviction & Marketing Feature Matrix */}
        <div className="w-full space-y-8 text-left mt-20">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 border border-blue-200/60 px-3.5 py-1 rounded-lg shadow-soft">
              Why Serious Aspirants Choose Mentskool
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-ink tracking-tight pt-1">
              Everything You Need to Crack Your Exam — With 100% Freedom
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Unlike crowded coaching factories where you are just a roll number, Mentskool gives you personal accountability from real rankers with zero lock-in risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {/* Feature 1: Quizzes & Tasks */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-blue-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-control bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    Mentor-Assigned Quizzes &amp; Tasks
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Your mentor assigns chapter-wise problem sets and weekly diagnostic quizzes tailored to your weak topics. No more guessing what to solve next.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-control p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-ink flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Rotational Motion Quiz
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                    Weekly Due
                  </span>
                </div>
                <div className="text-[11px] text-ink-muted flex items-center justify-between pt-0.5">
                  <span>25 Questions • 45m</span>
                  <span className="text-blue-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> Reviewed
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified feedback on every submission</span>
                </span>
              </div>
            </Card>

            {/* Feature 2: Efficiency & Cohort Ranks */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-blue-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    Efficiency Score &amp; Cohort Ranks
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Stay on track with our dynamic accountability score based on on-time delivery and accuracy. Benchmark your rank among the 10 peers in your dedicated cohort.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-lg p-3 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-ink-muted">
                  <span className="font-bold text-ink">Cohort Leaderboard</span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">Live Week 4</span>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center justify-between p-1 px-2 rounded bg-white border border-mist text-[11px] font-medium text-ink-muted">
                    <span>🥇 #1 Aryan K.</span>
                    <span className="font-bold text-ink">96%</span>
                  </div>
                  <div className="flex items-center justify-between p-1 px-2 rounded bg-blue-50 border border-blue-200 text-[11px] font-bold text-blue-900">
                    <span>🥈 #2 You</span>
                    <span>94%</span>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-lg border border-blue-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Healthy peer motivation, zero anonymity</span>
                </span>
              </div>
            </Card>

            {/* Feature 3: 1:1 Strategy & Cohort Discussions */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-purple-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-control bg-purple-50 text-purple-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    1:1 Strategy Calls &amp; Cohort Meets
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Schedule private 1:1 calls to analyze mock test mistakes, eliminate negative marking, and discuss tricky questions in your private cohort group.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-control p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-ink flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    Upcoming 1:1 Strategy Call
                  </span>
                  <span className="text-[10px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-1.5 py-0.5 rounded">
                    Tomorrow 7 PM
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted leading-tight pt-0.5">
                  Agenda: Fixing Negative Marking in Organic Chemistry Mocks
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-purple-700 bg-purple-50/90 px-3 py-1 rounded-full border border-purple-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Personalized roadmap every fortnight</span>
                </span>
              </div>
            </Card>

            {/* Feature 4: Switch Mentors Anytime */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-amber-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-control bg-amber-50 text-amber-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    Switch Mentors Anytime — Zero Risk
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    If your mentor&apos;s guidance style doesn&apos;t click, switch to any other mentor cohort or leave at the end of the month. You are never locked into long annual contracts.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-control p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    1-Click Cohort Transfer
                  </span>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted leading-tight pt-0.5">
                  Change mentor anytime with full credit rollover. Zero cancellation penalty.
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50/90 px-3 py-1 rounded-full border border-amber-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>100% student choice guarantee</span>
                </span>
              </div>
            </Card>

            {/* Feature 5: End-of-Month Reviews */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-rose-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-control bg-rose-50 text-rose-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    Monthly Reviews &amp; Transparency
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Submit honest reviews and ratings for your mentor at the end of every month. This ensures only truly dedicated, high-impact rankers mentor on Mentskool.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-control p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-amber-500 font-bold text-[11px]">
                    {"★".repeat(5)} <span className="text-ink font-semibold ml-1">5.0 / 5.0</span>
                  </div>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded">
                    Month-End Review
                  </span>
                </div>
                <p className="text-[11px] text-ink-muted italic border-l-2 border-rose-400 pl-2 leading-tight pt-0.5">
                  &ldquo;His mock analysis helped me jump from 120 to 185 in Physics.&rdquo;
                </p>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50/90 px-3 py-1 rounded-full border border-rose-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <Award className="w-3.5 h-3.5" />
                  <span>Community-verified mentor track records</span>
                </span>
              </div>
            </Card>

            {/* Feature 6: Best Mentors at Fraction of Cost */}
            <Card className="p-6 bg-white border border-mist border-t-4 border-t-indigo-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-control bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base font-display text-ink">
                    Top Rankers, Low Cost, Max 10 Seats
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed mt-1">
                    Get direct access to AIR 1–500 IIT &amp; AIIMS rankers for ₹2,999 – ₹4,999/mo instead of paying ₹1.5+ Lakhs at coaching factories where you get no personal guidance.
                  </p>
                </div>
              </div>

              {/* Micro-UI Preview Widget */}
              <div className="bg-[#F8FAFC] border border-mist/80 rounded-control p-3 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-ink flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-indigo-600" />
                    Atomic Seat Locking
                  </span>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded">
                    Max 10 / Cohort
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-xs pt-0.5">
                  <span className="font-bold text-brand text-sm">₹3,499 / mo</span>
                  <span className="text-[10px] text-ink-faint line-through">₹1,50,000 Coaching Fees</span>
                </div>
              </div>

              <div className="pt-1">
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50/90 px-3 py-1 rounded-full border border-indigo-200/70 inline-flex items-center gap-1.5 shadow-soft">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Strict 10-seat atomic locking</span>
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Call to Action Card with Rich Gradient Flare */}
        <div className="w-full mt-20 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 rounded-card blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <Card className="p-8 sm:p-10 bg-gradient-to-r from-[#1E294B] via-[#2B3A67] to-[#1E1B4B] text-white rounded-card shadow-elevated text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-transparent">
            <div className="space-y-2">
              <h3 className="text-2xl font-black font-display tracking-tight text-white flex items-center gap-2 justify-center sm:justify-start">
                Ready to crack JEE or NEET with a proven ranker?
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-sm text-white/80 max-w-lg">
                Connect with an IITian or AIIMS doctor who walked your exact shoes. Limited to 10 students per cohort for true 1:1 attention.
              </p>
            </div>
            <Link href="/mentors" className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 font-bold px-7 py-3 rounded-xl text-sm shadow-card hover:-translate-y-0.5 transition-all"
              >
                Find a Mentor →
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  </div>
  );
}
