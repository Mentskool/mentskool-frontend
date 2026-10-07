import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Layers,
  BookOpen,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Backlog Management & Recovery — Systematic Plan with IITian Mentors",
  description:
    "Overwhelmed by JEE backlogs? Clear Class 11 and Class 12 backlogs without falling behind on current coaching. Learn the 3-Box Backlog Elimination Framework guided 1-on-1 by top IITians.",
  keywords: [
    "JEE backlog management",
    "how to clear JEE backlogs",
    "JEE backlog recovery plan",
    "clear Class 11 backlogs in Class 12 JEE",
    "JEE dropper backlog strategy",
    "IIT JEE backlog mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-backlog-management",
  },
  openGraph: {
    title: "JEE Backlog Management: The 3-Box Recovery Framework with IITian Mentors",
    description:
      "Eliminate JEE backlogs without destroying your ongoing coaching syllabus. Step-by-step priority mapping and daily accountability with an IITian mentor.",
    url: "https://mentskool.com/jee-backlog-management",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Backlog Management - Mentskool",
      },
    ],
  },
};

const backlogFaqs: FaqItem[] = [
  {
    question: "What is the biggest mistake students make when trying to clear JEE backlogs?",
    answer:
      "The fatal mistake is pausing current coaching classes to clear past backlogs. This creates a vicious cycle: by the time you finish the old chapter, your coaching has covered two new chapters, creating an even bigger backlog. The Mentskool framework keeps ongoing classes running at full pace while dedicating a protected 2-hour daily slot strictly for backlog recovery.",
  },
  {
    question: "How does the 3-Box Backlog Elimination Framework work?",
    answer:
      "Your mentor segregates all pending chapters into 3 boxes: Box 1 (Core Prerequisites needed for current class topics, e.g., Vectors, Periodic Table, Basic Calculus); Box 2 (High-Yield Independent Chapters that give instant marks, e.g., Modern Physics, Matrices); Box 3 (Low-Yield Standalone Topics to be covered later). You only tackle Box 1 and Box 2 first.",
  },
  {
    question: "How long does it typically take to recover from heavy JEE backlogs?",
    answer:
      "With disciplined 2-hour daily slots and weekly mentor accountability, students typically clear 60–70% of high-yield backlogs within 45 to 60 days without hurting their ongoing performance.",
  },
];

export default function JeeBacklogManagementPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "JEE Backlog Management",
                href: "/jee-backlog-management",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-4">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Backlog Elimination &amp; Syllabus Recovery Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Backlog Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-rose-400">The 3-Box Recovery Blueprint</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Stop panicking over missed Class 11 and Class 12 chapters. Learn the battle-tested system used by <strong>IIT Bombay and Delhi rankers</strong> to recover backlogs without dropping behind on current coaching.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Clear My Backlogs with a Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Get Free Backlog Diagnosis
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Quick Answer: How Do You Systematically Clear JEE Backlogs?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Backlog Elimination Method</strong> stops backlog snowballing by decoupling past deficits from current coaching lectures through a 4-step framework:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Box Prioritization:</strong> Classify backlogs into fatal prerequisites, high-yield standalone units, and low-yield chapters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The Protected 2-Hour Window:</strong> Never skip ongoing classes; dedicate a fixed daily 2-hour sprint strictly to backlog topics.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Theory vs Problem Solving Split:</strong> 30% time on high-yield concept review, 70% time solving 2021–2026 PYQs directly.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Mentor Verification:</strong> Your IITian mentor tests chapter retention before signing off on completed backlog units.</span>
              </div>
            </div>
          </div>

          {/* 3-Box Breakdown */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
              The 3-Box Backlog Segregation Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-red-500/30 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/30">
                  Box 1: Urgent
                </div>
                <h3 className="text-lg font-bold text-white">Fatal Prerequisites</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Topics without which you cannot understand current coaching lectures (e.g. Vectors &amp; Kinematics, Chemical Bonding, Basic Calculus). Cleared first.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-amber-500/30 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Box 2: High Yield
                </div>
                <h3 className="text-lg font-bold text-white">Independent Scorers</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Chapters that carry guaranteed JEE questions but do not depend on massive past theory (e.g. Modern Physics, Matrices, Semiconductors, Surface Chemistry).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-700 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-slate-800 text-slate-400 border border-slate-700">
                  Box 3: Low Yield
                </div>
                <h3 className="text-lg font-bold text-white">Time-Consuming Deep Topics</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Heavy chapters with low ROI (e.g. Complex Numbers, Rotation). Scheduled strategically during holiday sprints to prevent early burnout.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={backlogFaqs}
              title="Frequently Asked Questions: JEE Backlog Clearance"
              subtitle="Everything you need to know about prioritizing chapters, balancing coaching, and mentor guidance."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Clear Your Backlogs Before It Is Too Late"
              description="Get a dedicated IITian mentor who will categorize your pending chapters and keep you strictly accountable every single day."
              primaryButtonText="Find An IITian Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
