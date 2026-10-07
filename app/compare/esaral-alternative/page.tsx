import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, CheckCircle2 } from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { ComparisonTable, ComparisonRow } from "@/components/seo/ComparisonTable";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "eSaral Mentorship Alternative & Review (2026) — Pure 1:1 Rankers vs Multi-Layer Coaching",
  description:
    "Comparing eSaral Mentorship with Mentskool? Discover why JEE & NEET aspirants choose Mentskool for direct 1-on-1 access to verified IIT & AIIMS rankers, flexible monthly plans, and zero lecture course lock-ins.",
  keywords: [
    "eSaral mentorship alternative",
    "eSaral mentorship review",
    "eSaral mentorship fees",
    "eSaral vs Mentskool",
    "best JEE mentorship by IITians",
    "1 on 1 NEET mentorship AIIMS",
    "direct mentor vs tiered coaching",
  ],
  alternates: {
    canonical: "https://mentskool.com/compare/esaral-alternative",
  },
  openGraph: {
    title: "eSaral Mentorship Alternative: Direct 1-on-1 Rankers Without Course Lock-Ins",
    description:
      "Why students prefer pure, unbundled 1:1 ranker mentorship that works alongside any coaching material over multi-layered course bundles.",
    url: "https://mentskool.com/compare/esaral-alternative",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "eSaral Mentorship Alternative - Mentskool",
      },
    ],
  },
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Mentorship Model",
    description: "Who actually speaks with and guides the student.",
    mentskool: "Direct 1:1 Video Calls with verified IITians & AIIMS Doctors",
    competitor: "Multi-layered structure (Personal mentor, progress mentor, counselors)",
  },
  {
    feature: "Study Material Independence",
    description: "Freedom to use your own books and current coaching modules.",
    mentskool: "100% Flexible — Works with Allen, PW, Resonance, or standard books",
    competitor: "Tied to eSaral proprietary video lectures and app ecosystem",
  },
  {
    feature: "Daily Accountability & Scoring",
    description: "Real-time verification of completed questions and tasks.",
    mentskool: "94% Verified Dynamic Efficiency Score tracked on daily dashboard",
    competitor: "Progress tracking via app analytics and periodic counselor calls",
  },
  {
    feature: "Cohort Size Limits",
    description: "Protection against mentor overload.",
    mentskool: "Strict 30 Max (Atomic Redis Concurrency)",
    competitor: "Large institutional mentor-student ratios",
  },
  {
    feature: "Pricing Transparency & Lock-ins",
    description: "Payment terms and refund options.",
    mentskool: "Flexible month-to-month plans; cancel or switch mentors anytime",
    competitor: "High upfront annual course packages (₹30,000–₹70,000+)",
  },
  {
    feature: "Mentor Switching",
    description: "Ability to reassign mentor if teaching style doesn't align.",
    mentskool: "One-click Mentor Switch with zero extra charge",
    competitor: "Requires administrative requests and approvals",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How is Mentskool different from eSaral Mentorship?",
    answer:
      "eSaral bundles mentorship into their video courses and test series using a tiered system of progress mentors and counselors. Mentskool is a pure, unbundled 1-on-1 mentorship engine: you work directly with a verified top IITian or AIIMS doctor on weekly strategy, daily task discipline, and mock test post-mortems while continuing to use whatever lecture series or books you already own.",
  },
  {
    question: "Can I use Mentskool if I am already enrolled in an institute like Allen, PW, or eSaral?",
    answer:
      "Yes! More than 70% of Mentskool students are already enrolled in regular coaching. They use Mentskool as their personal accountability system to manage heavy coaching homework, clear backlogs, and prevent mock test marks bleeding.",
  },
  {
    question: "Do Mentskool mentors teach lectures or provide strategy and accountability?",
    answer:
      "Mentskool mentors are strategic coaches and accountability partners. They teach you *how* to study, prioritize high-yield chapters, audit your mistake book, solve test anxiety, and review tricky problem approaches during weekly 1-on-1 video sessions.",
  },
  {
    question: "What is Mentskool's refund and cancellation policy?",
    answer:
      "Mentskool does not force students into expensive 1-year non-refundable fees. You pay month-to-month and can pause, switch mentors, or cancel at any time.",
  },
];

export default function ESaralAlternativePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Comparisons", href: "/#comparisons" },
              {
                label: "eSaral Mentorship Alternative",
                href: "/compare/esaral-alternative",
              },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Independent Feature Comparison (2026)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Looking for an <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-emerald-400">eSaral Mentorship Alternative?</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Why pay for bundled video courses and multi-tiered counselors when you can have <strong>direct 1-on-1 mentorship with a top IITian or AIIMS ranker</strong> who audits your daily preparation?
            </p>
          </div>

          <div className="my-8 p-6 rounded-2xl border border-sky-500/20 bg-sky-950/20">
            <h2 className="text-xs uppercase font-black tracking-widest text-sky-400 mb-2">
              Quick Answer: Mentskool vs eSaral Mentorship
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong>eSaral</strong> bundles mentorship into their video lecture packages with a multi-layered structure of counselors and progress trackers. <strong>Mentskool</strong> is an independent, unbundled 1:1 mentorship platform that gives you direct weekly video calls with verified IIT and AIIMS rankers, daily task auditing with a 94% efficiency score, and zero annual course lock-ins.
            </p>
          </div>

          <ComparisonTable
            competitorName="eSaral (Course-Bundled Mentorship)"
            rows={comparisonRows}
          />

          <section className="mt-16 bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              The Advantages of Unbundled 1:1 Ranker Mentorship
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">01</div>
                <h3 className="text-lg font-semibold text-white mb-2">Keep Your Favorite Teachers</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  You don't need to abandon your current coaching videos or teachers. Your Mentskool mentor builds a customized schedule that incorporates your existing classes and maximizes your output.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">02</div>
                <h3 className="text-lg font-semibold text-white mb-2">Direct Access, No Gatekeepers</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  No dealing with intermediate customer-care counselors or tiered managers. You connect face-to-face via Google Meet directly with your dedicated IIT/AIIMS mentor.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-brand-400 text-2xl font-black mb-2">03</div>
                <h3 className="text-lg font-semibold text-white mb-2">Predictable Monthly Freedom</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Never risk huge upfront payments on non-refundable annual plans. Pay affordable monthly fees and maintain full control over your mentorship experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <SeoFaqAccordion
              faqs={faqs}
              title="Frequently Asked Questions: eSaral vs Mentskool"
              subtitle="Clear comparison of mentorship structure, pricing, and independent coaching support."
            />
          </section>

          <section className="mt-16">
            <SeoCtaBanner
              title="Supercharge Your Prep with a Dedicated Ranker"
              description="Get personalized 1-on-1 strategy, daily task audits, and mock analysis tailored to your current study routine."
              primaryButtonText="Explore Verified Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
