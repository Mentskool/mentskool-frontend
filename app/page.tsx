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
  Zap,
  Star,
  Lock,
  CheckCircle2,
  Calendar,
  Flame,
  Award,
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

  return (
    <div className="relative overflow-hidden pb-16">
      {/* Ambient Animated Radiant Glows & Delicate Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
        {/* Soft floating radiant blur orbs with enriched jewel tones */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[580px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-44 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-emerald-400/25 via-teal-500/10 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-60 -right-32 w-[650px] h-[650px] bg-gradient-to-bl from-amber-400/25 via-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse-subtle" />

        {/* Delicate architectural dot matrix */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Concentric subtle geometric orbital rings */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] border border-indigo-200/40 rounded-full opacity-35 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1250px] h-[1250px] border border-emerald-200/30 rounded-full opacity-25 pointer-events-none" />

        {/* Elegant Non-Distractive Flowing Ambient Waves in Hero First-Half */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[580px] opacity-[0.25] pointer-events-none"
          viewBox="0 0 1400 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 240C250 320 420 160 700 220C980 280 1150 180 1400 240"
            stroke="url(#gradient-wave-1)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M0 290C280 200 450 340 700 270C950 200 1120 310 1400 260"
            stroke="url(#gradient-wave-2)"
            strokeWidth="2"
          />
          <path
            d="M0 350C220 390 480 250 700 320C920 390 1180 280 1400 330"
            stroke="url(#gradient-wave-1)"
            strokeWidth="1.2"
          />
          <defs>
            <linearGradient id="gradient-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient-wave-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Peripheral Frosted Emblems in Left & Right Margins (Non-distracting) */}
        <div className="absolute top-24 left-[5%] w-16 h-16 rounded-2xl border border-indigo-200/50 bg-white/40 backdrop-blur-[2px] opacity-40 rotate-12 flex items-center justify-center animate-float-slow pointer-events-none hidden lg:flex shadow-soft">
          <span className="text-xl opacity-75">⚛️</span>
        </div>
        <div className="absolute top-64 left-[10%] w-12 h-12 rounded-full border border-emerald-200/60 bg-white/30 backdrop-blur-[2px] opacity-35 -rotate-6 flex items-center justify-center animate-float-reverse pointer-events-none hidden xl:flex shadow-soft">
          <span className="text-sm opacity-75">🎯</span>
        </div>

        <div className="absolute top-20 right-[6%] w-16 h-16 rounded-2xl border border-amber-200/50 bg-white/40 backdrop-blur-[2px] opacity-40 -rotate-12 flex items-center justify-center animate-float-reverse pointer-events-none hidden lg:flex shadow-soft">
          <span className="text-xl opacity-75">🏆</span>
        </div>
        <div className="absolute top-60 right-[11%] w-12 h-12 rounded-full border border-purple-200/60 bg-white/30 backdrop-blur-[2px] opacity-35 rotate-6 flex items-center justify-center animate-float-slow pointer-events-none hidden xl:flex shadow-soft">
          <span className="text-sm opacity-75">⚡</span>
        </div>

        {/* Subtle gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />
      </div>

      <div className="py-14 md:py-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
        {/* Top Tag Pill with glowing jewel border & live ping beacon */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-200/80 bg-gradient-to-r from-indigo-50/90 via-white to-emerald-50/90 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-indigo-900 mb-8 shadow-soft transition-all hover:shadow-card hover:border-indigo-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold tracking-wider flex items-center gap-1.5">
            Next-Generation Mentorship
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
          </span>
        </div>

        {/* Main Centered Hero Heading - Rich Multi-Stop Gradient on 'Perfect Mentor' */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black font-display text-ink tracking-tight leading-[1.03] mb-6">
          Find Your <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-flow">
            Perfect Mentor
          </span>
        </h1>

        {/* Centered Subtitle */}
        <p className="text-lg sm:text-xl text-ink-muted leading-relaxed mb-8 max-w-2xl font-normal">
          Connect with expert mentors from top organizations. <br className="hidden sm:inline" />
          Personalized guidance for your career success.
        </p>

        {/* Quick Domain Tags with vibrant jewel badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <Link href="/mentors" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-semibold text-blue-700 shadow-soft hover:bg-blue-100/90 hover:scale-105 transition-all">
            <span>⚛️</span>
            <span>JEE Prep</span>
          </Link>
          <Link href="/mentors" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-xs font-semibold text-emerald-700 shadow-soft hover:bg-emerald-100/90 hover:scale-105 transition-all">
            <span>🧬</span>
            <span>NEET Medical</span>
          </Link>
          <Link href="/mentors" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-200/80 text-xs font-semibold text-purple-700 shadow-soft hover:bg-purple-100/90 hover:scale-105 transition-all">
            <span>💻</span>
            <span>GATE / PSU</span>
          </Link>
          <Link href="/mentors" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/80 text-xs font-semibold text-amber-800 shadow-soft hover:bg-amber-100/90 hover:scale-105 transition-all">
            <span>🎯</span>
            <span>1:1 Accountability</span>
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50/90 border border-rose-200/80 text-xs font-semibold text-rose-700 shadow-soft">
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-400" />
            <span>Top 1% Rankers</span>
          </span>
        </div>

        {/* Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Link href="/mentors">
            <Button
              size="lg"
              variant="primary"
              className="px-8 py-3.5 rounded-full text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-brand via-[#3b5998] to-[#1e294b] hover:from-[#212d52] hover:to-[#161f38] text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
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

        {/* Social Proof Avatar Cluster with Star Rating */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 text-xs text-ink-muted">
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white shadow-soft">
              AK
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white shadow-soft">
              PR
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white shadow-soft">
              SM
            </div>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-bold text-[10px] flex items-center justify-center ring-2 ring-white shadow-soft">
              NV
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-semibold text-ink">
            <div className="flex text-amber-500">
              {"★".repeat(5)}
            </div>
            <span>4.9 / 5.0 Rating</span>
          </div>
          <span className="text-ink-faint hidden sm:inline">•</span>
          <span className="text-ink-muted font-medium">Trusted by 2,400+ Aspirants from Top IITs & AIIMS</span>
        </div>

        {/* Interactive UI Mockup Card Showcase */}
        <div className="w-full max-w-4xl relative mb-20 group">
          {/* Multi-color ambient gradient aura */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500/25 via-purple-500/20 via-pink-500/20 to-emerald-500/25 rounded-card blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

          {/* Main Floating Mockup Container */}
          <Card className="bg-white/95 backdrop-blur-md border border-mist shadow-elevated rounded-card text-left overflow-hidden">
            {/* Top Multi-Color Ribbon */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 via-pink-500 to-emerald-500" />

            <div className="p-4 sm:p-7 space-y-6">
              {/* Window header with simulated controls */}
              <div className="flex items-center justify-between border-b border-mist/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block shadow-soft" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-soft" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-soft" />
                  <span className="ml-3 text-xs font-mono text-ink-faint">
                    mentskool.com/cohort/jee-prep
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    Atomic Redis Locking Active
                  </span>
                </div>
              </div>

              {/* Split Showcase Inside the Mockup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left: Mentor Cohort Preview */}
                <div className="p-5 rounded-control bg-gradient-to-br from-white to-[#FAFAF9] border border-mist shadow-soft space-y-3.5 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-base flex items-center justify-center shadow-card ring-2 ring-white">
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
                    <div className="flex items-center gap-1 text-amber-600 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Live Seat Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-ink">8 / 10 Seats Filled</span>
                      <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        2 Seats Left
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-mist rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-full w-[80%]" />
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
                <div className="p-5 rounded-control bg-gradient-to-br from-white to-[#FAFAF9] border border-mist shadow-soft space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                        Real-Time Accountability Score
                      </span>
                      <div className="flex items-baseline gap-2 mt-0.5">
                        <span className="text-3xl font-black font-display bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          94%
                        </span>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          Exceptional Tier
                        </span>
                      </div>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-card">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Milestone Deliverable snippet */}
                  <div className="bg-white p-3.5 rounded-control border border-mist space-y-1 shadow-soft">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-ink">
                        Mechanics Mock Test Analysis
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-0.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
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
              color: "text-emerald-600",
              border: "border-emerald-200/80",
              bg: "bg-emerald-50/50",
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
                Subscribe to a Cohort
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                Browse verified mentors, reserve limited seats with real-time atomic locking,
                and join dedicated cohorts tailored to your goals.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist border-t-4 border-t-emerald-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                  Step 2
                </span>
                <div className="w-10 h-10 rounded-control bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <CheckSquare className="w-5 h-5" />
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
            <Card className="p-7 bg-white/95 backdrop-blur-sm border border-mist border-t-4 border-t-purple-500 shadow-card hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-widest bg-purple-50 border border-purple-200/60 px-3 py-1 rounded-full">
                  Step 3
                </span>
                <div className="w-10 h-10 rounded-control bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
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

        {/* Bottom Call to Action Card with Rich Gradient Flare */}
        <div className="w-full mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 rounded-card blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <Card className="p-8 sm:p-10 bg-gradient-to-r from-[#1E294B] via-[#2B3A67] to-[#1E1B4B] text-white rounded-card shadow-elevated text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-transparent">
            <div className="space-y-2">
              <h3 className="text-2xl font-black font-display tracking-tight text-white flex items-center gap-2 justify-center sm:justify-start">
                Ready to find your mentor?
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-sm text-white/80 max-w-lg">
                Join a high-accountability cohort today. Seats are strictly limited per mentor to ensure personalized guidance.
              </p>
            </div>
            <Link href="/mentors" className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-white text-brand hover:bg-white/90 font-bold px-7 py-3.5 rounded-full text-sm shadow-card hover:-translate-y-0.5 transition-all"
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
