import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Coins,
  Scale,
  Award,
  HelpCircle,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Mentorship Fees & Pricing (2026/2027) — Transparent Plans vs Offline Coaching",
  description:
    "How much does a 1-on-1 JEE mentor cost? Compare Mentskool's transparent monthly mentorship pricing against ₹1.5 Lakh offline coaching and hourly marketplaces. Zero annual lock-ins.",
  keywords: [
    "JEE mentorship fees",
    "cost of 1 on 1 JEE mentor",
    "IIT JEE personal coaching price",
    "JEE mentorship cost comparison",
    "affordable JEE mentorship",
    "Mentskool pricing",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship-fees",
  },
  openGraph: {
    title: "JEE Mentorship Fees & Pricing: Honest Comparison Guide (2026/2027)",
    description:
      "Understand the true cost of JEE preparation. 1:1 ranker mentorship starting on flexible monthly plans vs ₹1,50,000+ non-refundable coaching fees.",
    url: "https://mentskool.com/jee-mentorship-fees",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Mentorship Fees - Mentskool",
      },
    ],
  },
};

const feeFaqs: FaqItem[] = [
  {
    question: "What is the typical cost of 1-on-1 JEE mentorship in India?",
    answer:
      "Across India, 1-on-1 mentorship pricing falls into three brackets: Hourly gig platforms charge ₹800 to ₹2,500 per single call; legacy coaching bundles lock students into ₹40,000 to ₹1,50,000 annual packages. Mentskool offers transparent, flexible month-to-month plans with verified IITian rankers, weekly strategy calls, daily task audits, and 94% efficiency scoring with zero long-term lock-ins.",
  },
  {
    question: "Are there any hidden admission or cancellation fees?",
    answer:
      "None. You subscribe on a month-to-month basis. You can pause, cancel, or switch mentors with 1 click at any time without penalty.",
  },
  {
    question: "How does 1:1 mentorship compare in ROI to offline Kota/city coaching?",
    answer:
      "Offline coaching requires ₹1,00,000 to ₹2,50,000 in tuition plus ₹1,50,000 in hostel/living expenses for mass classes of 100+ students. 1-on-1 mentorship provides the missing human accountability from home at a fraction of the cost, ensuring you actually execute your daily problem solving.",
  },
  {
    question: "Can I try a session before subscribing?",
    answer:
      "Yes! You can claim a free 1-on-1 strategy consultation on Mentskool to diagnose your backlogs and experience the mentorship model before committing.",
  },
];

export default function JeeMentorshipFeesPage() {
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
                label: "JEE Mentorship Fees",
                href: "/jee-mentorship-fees",
              },
            ]}
          />

          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Coins className="w-3.5 h-3.5" />
              <span>Transparent Pricing &amp; Value Guide (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Mentorship Fees: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">The Honest Value Comparison</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              How much does a personal JEE mentor actually cost? Understand the economics of 1:1 ranker accountability versus <strong>₹1.5 Lakh non-refundable coaching batches</strong> and random hourly call marketplaces.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>View Mentor Plans</span>
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

          {/* Quick Answer Box */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Quick Answer: What Does JEE Mentorship Cost on Mentskool?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              Unlike legacy institutes charging ₹1,00,000+ upfront with strict no-refund policies, <strong>Mentskool delivers high-touch 1:1 ranker mentorship on flexible month-to-month plans</strong>:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Zero Long-Term Lock-In:</strong> Transparent monthly subscriptions. Pause, cancel, or switch mentors with 1 click anytime.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>All-Inclusive Mentorship:</strong> Weekly 1:1 Google Meet strategy sessions + daily dashboard tracking + mock paper audits included.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Atomic 30 Cohort Guarantee:</strong> Mentors are strictly capped at 30 mentees to protect guidance quality.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Free Consultation First:</strong> Try a free 1-on-1 backlog &amp; mock diagnosis session before paying anything.</span>
              </div>
            </div>
          </div>

          {/* Pricing Comparison Matrix */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-8">
              Preparation Options: Fee &amp; Value Breakdown
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Traditional Offline Coaching</div>
                <div className="text-3xl font-extrabold text-white">₹1.5L – ₹2.5L <span className="text-xs text-slate-500 font-normal">/year</span></div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  100+ student batches. High upfront fees. Non-refundable. Daily commute burns 2-3 hours. Zero daily personal accountability for backlogs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-brand-500/50 relative space-y-4 shadow-elevated">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-brand-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                  Highest ROI
                </div>
                <div className="text-sm font-bold text-brand-400 uppercase tracking-wider">Mentskool 1:1 Mentorship</div>
                <div className="text-3xl font-extrabold text-white">Month-to-Month <span className="text-xs text-brand-300 font-normal">Flexibility</span></div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Personal IITian mentor from your desk. Daily question verification, 94% efficiency score, weekly 1:1 video calls, and mock error audits. Cancel anytime.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Hourly Marketplace Gigs</div>
                <div className="text-3xl font-extrabold text-white">₹1,000 – ₹2,500 <span className="text-xs text-slate-500 font-normal">/hour</span></div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pay-per-session calls. Disconnected advice. No ongoing daily accountability. Different mentor each time who has no context on past mock tests.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={feeFaqs}
              title="Frequently Asked Questions: JEE Mentorship Pricing"
              subtitle="Clear details on subscription flexibility, refund policies, and mentor commitments."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Get Premium IITian Mentorship Without the Predatory Fees"
              description="Start with our free 1-on-1 consultation or choose a flexible monthly plan with verified IIT rankers."
              primaryButtonText="Explore Verified Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
