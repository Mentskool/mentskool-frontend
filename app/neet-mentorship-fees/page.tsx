import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Coins,
  Stethoscope,
  Scale,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Mentorship Fees & Pricing (2026/2027) — Transparent Plans vs Offline Coaching",
  description:
    "How much does a 1-on-1 NEET mentor cost? Compare Mentskool's transparent monthly mentorship fees against ₹1.5 Lakh offline coaching institutes. Verified AIIMS doctors, zero annual lock-ins.",
  keywords: [
    "NEET mentorship fees",
    "cost of 1 on 1 NEET mentor",
    "personal NEET doctor coach price",
    "NEET mentorship cost comparison",
    "affordable NEET mentorship",
    "Mentskool NEET pricing",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mentorship-fees",
  },
  openGraph: {
    title: "NEET Mentorship Fees & Pricing: Honest Comparison Guide (2026/2027)",
    description:
      "Compare medical mentorship costs in India. Flexible month-to-month plans with AIIMS doctors vs ₹1,50,000+ non-refundable offline tuition.",
    url: "https://mentskool.com/neet-mentorship-fees",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Mentorship Fees - Mentskool",
      },
    ],
  },
};

const neetFeeFaqs: FaqItem[] = [
  {
    question: "What does 1-on-1 NEET mentorship typically cost in India?",
    answer:
      "Most offline medical institutes charge between ₹1,20,000 and ₹2,00,000 annually with non-refundable policies. Hourly marketplace apps charge ₹1,000 to ₹3,000 per single call without daily follow-ups. Mentskool offers transparent month-to-month plans with verified AIIMS doctors, weekly strategy calls, daily dashboard tracking, and mock test audits.",
  },
  {
    question: "Is there any long-term financial lock-in?",
    answer:
      "No. You pay month-to-month. If you ever feel your study routine is self-sustaining or want to switch mentors, you can do so instantly with zero penalties.",
  },
  {
    question: "Can I try a consultation before paying?",
    answer:
      "Yes! You can claim a free 1-on-1 strategy consultation on Mentskool to diagnose your mock test leaks and syllabus backlogs before committing.",
  },
];

export default function NeetMentorshipFeesPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "NEET Mentorship Fees",
                href: "/neet-mentorship-fees",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-semibold mb-4">
              <Coins className="w-3.5 h-3.5" />
              <span>Medical Mentorship Economics &amp; Pricing (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Mentorship Fees: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">The Honest Value Comparison</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How much does a personal AIIMS doctor mentor cost? Compare the return on investment of 1:1 medical guidance versus <strong>₹1.5 Lakh non-refundable coaching batches</strong> and single-session call apps.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>View Doctor Mentor Plans</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Strategy Call
              </Link>
            </div>
          </div>

          {/* Quick Answer */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-teal-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Quick Answer: What Does NEET Mentorship Cost on Mentskool?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              Instead of forcing parents into expensive annual contracts with non-refundable terms, <strong>Mentskool delivers 1:1 doctor mentorship with total monthly freedom</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Transparent Month-to-Month:</strong> Complete flexibility. Pause, cancel, or switch mentors with 1 click at any time.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Verified AIIMS Doctors &amp; GMC Rankers:</strong> All-inclusive weekly video calls + daily task tracking + mock audits included.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Atomic 30 Cap Protection:</strong> Mentors are strictly capped at 30 students to protect personal focus and attention.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Try Free First:</strong> Experience a free 1-on-1 mock diagnosis and study plan session before paying anything.</span>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetFeeFaqs}
              title="Frequently Asked Questions: NEET Mentorship Pricing"
              subtitle="Clear details on subscription flexibility, doctor mentors, and refund policies."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Get Premium Medical Mentorship Without Predatory Fees"
              description="Start with our free 1-on-1 strategy call or choose a flexible monthly plan with verified AIIMS doctors."
              primaryButtonText="Find AIIMS Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
