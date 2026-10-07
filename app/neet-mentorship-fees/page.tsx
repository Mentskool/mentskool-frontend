import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Banknote,
  TrendingDown,
  HelpCircle,
  Award,
  CheckSquare,
  AlertCircle,
  HeartPulse,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Mentorship Fees & Pricing Guide (2026/2027) — Affordable AIIMS Guidance",
  description:
    "How much does 1-on-1 NEET mentorship cost? Compare Mentskool's transparent monthly subscriptions vs ₹3 Lakh offline coaching hubs and ₹1 Crore private medical college fees. 100% verified AIIMS doctors, zero lock-ins.",
  keywords: [
    "NEET mentorship fees",
    "cost of NEET mentorship",
    "AIIMS doctor personal mentor pricing",
    "is NEET mentorship worth it",
    "compare NEET coaching fees vs mentorship",
    "affordable NEET mentorship online",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mentorship-fees",
  },
  openGraph: {
    title: "NEET Mentorship Fees: The Transparent 2026/2027 Medical ROI Guide",
    description:
      "Save lakhs of rupees and secure a Government Medical College seat. Discover transparent month-to-month plans with verified AIIMS doctors.",
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

const neetFeesFaqs: FaqItem[] = [
  {
    question: "What is the typical cost of 1-on-1 NEET mentorship in India?",
    answer:
      "Most specialized NEET mentorship programs either charge high hourly consultant rates (₹800 to ₹1,500/hour) or bundle non-refundable fees exceeding ₹75,000 inside large coaching courses. Mentskool offers transparent, affordable month-to-month plans (averaging ₹3,999 to ₹6,999/month). There are zero multi-year contracts, and you can pause or switch mentors anytime.",
  },
  {
    question: "How does the cost of mentorship compare to private medical college fees?",
    answer:
      "Private medical college MBBS fees in India currently range from ₹80 Lakhs to ₹1.5 Crores. Securing an MBBS seat in a premier Government Medical College (AIIMS, JIPMER, or state GMC) costs as little as ₹5,000 to ₹60,000 in total tuition. Investing in disciplined, month-to-month 1:1 mentorship from an AIIMS doctor to push your score past the 650+ government threshold is the highest-leverage decision a medical family can make.",
  },
  {
    question: "What exactly is included in the Mentskool monthly NEET fee?",
    answer:
      "Every subscription includes: 1) Assigned dedicated mentor from AIIMS New Delhi or top Government Medical Colleges; 2) Weekly private 1:1 video calls on Google Meet for timetable auditing and test error breakdowns; 3) Access to small-cohort medical problem drills (capped strictly at 30 students); 4) Daily task verification on our 94% efficiency web dashboard; 5) Free mentor switching whenever needed.",
  },
  {
    question: "Can I try a mentorship session before making any payment?",
    answer:
      "Yes. We offer a completely free, 1-on-1 strategy and NCERT audit session with an AIIMS doctor. You can assess your current syllabus completion, identify negative mark patterns, and receive a customized 30-day study blueprint with zero financial commitment.",
  },
  {
    question: "What is Mentskool's refund policy?",
    answer:
      "If within the first 7 days of your monthly subscription you feel the mentor match is not accelerating your preparation, you can request a 100% refund with no hassle and no hidden deductions.",
  },
];

export default function NeetMentorshipFeesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Transparent, affordable 1-on-1 mentorship for NEET-UG aspirants with verified AIIMS doctors.",
      },
      {
        "@type": "FAQPage",
        mainEntity: neetFeesFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-brand-500/30 selection:text-brand-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeoBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "NEET Mentorship", href: "/neet-mentorship" },
              {
                label: "Fees & Pricing",
                href: "/neet-mentorship-fees",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Banknote className="w-3.5 h-3.5" />
              <span>Transparent Medical Guidance Economics (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Mentorship Fees: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">The Honest Cost &amp; GMC ROI Guide</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Before locking yourself into rigid coaching fees or contemplating crores for private medical seats, understand how targeted 1:1 mentorship from an <strong>AIIMS doctor</strong> secures a Government Medical College seat on an affordable, month-to-month budget.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>View Medical Mentors</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Medical Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Summary: How Much Does NEET Mentorship Cost at Mentskool?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Fee Model</strong> gives medical aspirants elite AIIMS guidance without multi-year financial lock-in:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Affordable Month-to-Month Billing:</strong> Pay month-by-month as you prepare. Cancel or pause anytime with one click.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Direct AIIMS &amp; GMC Doctors:</strong> 100% of your mentorship is delivered by verified doctors and top rankers who personally scored 680+ in NEET.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>No Rigid Bundling:</strong> We do not force you to buy expensive proprietary books or tablets you do not need; your mentor works with NCERT and your existing materials.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Complete 360 Ecosystem:</strong> Weekly 1:1 strategy calls, daily 94% task tracking, and weekly mock test post-mortems included.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Medical Cost Comparison Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive NEET Preparation Cost Comparison
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Evaluate fees, individual attention, and real medical outcome ROI across preparation channels.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Model</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Annual Cost</th>
                    <th className="py-4 px-4 sm:px-6 text-white">NCERT Line Audit</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Test Error Post-Mortems</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Commitment Terms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">
                      Offline Medical Institutes (Kota / Sikar / Aakash)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400 font-semibold">
                      ₹1,80,000 – ₹3,20,000
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Generic mass lectures (120+ batch)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Automated answer keys only</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">100% upfront non-refundable fee</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">
                      Online Video Subscriptions (PW / Unacademy)
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">
                      ₹4,000 – ₹25,000
                    </td>
                    <td className="py-4 px-4 sm:px-6">Recorded lectures (zero personal check)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Zero rough sheet review</td>
                    <td className="py-4 px-4 sm:px-6">Annual payment upfront</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-emerald-500/10 border-l-4 border-emerald-500">
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-white">
                      Mentskool 1-on-1 AIIMS Doctor Mentorship
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-extrabold">
                      Affordable Month-to-Month
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">
                      Personal 1:1 active recall inspection
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">
                      Weekly rough sheet &amp; OMR error breakdown
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">
                      Month-to-month, cancel or switch anytime
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: GMC Seat Economics */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The ₹1 Crore Financial Decision: GMC vs Private Medical College
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Understanding the massive life-altering financial difference of crossing the 650+ mark threshold:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-950 border border-rose-900/40 space-y-3">
                <div className="text-rose-400 font-bold text-sm uppercase">Missing the GMC Cutoff</div>
                <h3 className="text-lg font-bold text-white">Private MBBS: ₹80,00,000 – ₹1.5 Crores</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Scoring 530 marks forces families into crippling bank loans, mortgaged properties, or abandoning the doctor dream altogether for an alternative degree.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-900/40 space-y-3">
                <div className="text-emerald-400 font-bold text-sm uppercase">Securing a GMC Seat (650+)</div>
                <h3 className="text-lg font-bold text-white">Government MBBS: ₹15,000 – ₹60,000 Total</h3>
                <p className="text-xs text-emerald-300 leading-relaxed">
                  Government medical colleges provide virtually free education, superior patient clinical exposure, and prestigious residency placements across India.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neetFeesFaqs}
              title="Frequently Asked Questions: NEET Mentorship Fees"
              subtitle="Everything you need to know about pricing, refund terms, and monthly flexibility."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Experience 1:1 Medical Mentorship with Zero Risk"
              description="Book a free 1-on-1 strategy session with an AIIMS doctor. Discover how month-to-month mentorship accelerates your preparation into a Government Medical College seat."
              primaryButtonText="Claim Free 1:1 Medical Audit"
              primaryButtonHref="/free-mentorship-session"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
