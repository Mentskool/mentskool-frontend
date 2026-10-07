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
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Mentorship Fees & Pricing Guide (2026/2027) — Honest Cost Comparison",
  description:
    "How much does 1-on-1 JEE mentorship cost? Compare Mentskool's flexible monthly plans vs ₹2.5 Lakh offline Kota coaching and expensive hourly marketplace platforms. Zero annual lock-ins, 94% efficiency scoring.",
  keywords: [
    "JEE mentorship fees",
    "cost of JEE mentorship",
    "IIT JEE personal mentor pricing",
    "is JEE mentorship worth it",
    "compare JEE coaching fees vs mentorship",
    "best affordable JEE mentorship",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-mentorship-fees",
  },
  openGraph: {
    title: "JEE Mentorship Fees: The Honest 2026/2027 Cost & ROI Guide",
    description:
      "Why spending ₹2.5L on mass coaching fails without 1:1 execution. Discover transparent month-to-month pricing with verified IITian mentors.",
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

const feesFaqs: FaqItem[] = [
  {
    question: "How much does 1-on-1 JEE mentorship typically cost in India?",
    answer:
      "In India, JEE mentorship ranges from ₹800 to ₹1,500 per single hour on transactional consultant marketplaces (like MentorKhoj), up to ₹60,000–₹1,20,000 per year bundled inside coaching packages (like eSaral). At Mentskool, mentorship is structured on transparent, flexible monthly subscriptions (averaging ₹3,999 to ₹6,999/month), giving you weekly 1-on-1 Google Meet sessions, daily dashboard tracking, and mock test post-mortems with zero annual lock-in.",
  },
  {
    question: "Why does Mentskool avoid rigid annual contracts?",
    answer:
      "Because student needs change throughout the preparation cycle. A student might need intensive backlog elimination for 3 months, then shift to pure mock test strategy in January. By offering month-to-month plans, we keep our mentors 100% accountable to deliver maximum value every single month. If you are satisfied, you stay; if your needs change, you pause or cancel anytime with one click.",
  },
  {
    question: "Is 1-on-1 mentorship worth the additional cost if I am already paying for Allen or PW?",
    answer:
      "Yes. Offline coaching charges ₹1,50,000 to ₹2,50,000 per year but places your child in a hall with 100 to 180 other students where teachers cannot monitor individual mistakes, backlogs, or test panic. Over 70% of students in mass coaching fail not due to bad lectures, but due to lack of personal execution. Adding 1-on-1 mentorship protects your massive coaching investment by ensuring your child actually completes homework, analyzes mocks, and eliminates negative marks.",
  },
  {
    question: "What is included in the Mentskool monthly mentorship fee?",
    answer:
      "Every active subscription includes: 1) Assigned dedicated mentor from a top IIT (IIT Bombay, Delhi, Kanpur, Madras); 2) Weekly private 1:1 strategy and test-analysis video calls; 3) Access to small-cohort problem-solving drills (capped at 30 students); 4) Daily task verification on our 94% efficiency web dashboard; 5) Unlimited mentor switching at zero additional cost.",
  },
  {
    question: "Can I test the mentorship program before paying?",
    answer:
      "Yes! Mentskool offers a 100% free 1-on-1 strategy and backlog audit call with an IITian mentor. This allows you to experience our structured approach, review your syllabus bottlenecks, and receive a customized 30-day roadmap before deciding to subscribe.",
  },
  {
    question: "What is the refund policy if I want to discontinue?",
    answer:
      "Mentskool provides a hassle-free refund policy. If within the first 7 days of your monthly subscription you feel the program is not the right fit for your preparation, you can request a full refund with no questions asked.",
  },
];

export default function JeeMentorshipFeesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "Transparent, affordable 1-on-1 mentorship for JEE and NEET entrance examinations with top IITians.",
      },
      {
        "@type": "FAQPage",
        mainEntity: feesFaqs.map((faq) => ({
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
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "Fees & Pricing",
                href: "/jee-mentorship-fees",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Banknote className="w-3.5 h-3.5" />
              <span>Transparent Cost &amp; ROI Guide (2026/2027)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Mentorship Fees: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">The Honest Cost &amp; ROI Comparison</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Before spending ₹2.5 Lakhs on Kota hostels or buying rigid annual coaching bundles, understand the true economics of entrance exam preparation. Discover why flexible, month-to-month 1:1 IITian mentorship delivers 10x higher ROI.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>View Mentors &amp; Plans</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Summary: How Much Does JEE Mentorship Cost at Mentskool?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Mentorship Fee Model</strong> is built on complete transparency and zero annual entrapment:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Flexible Month-to-Month Subscriptions:</strong> Pay month-by-month as you prepare. Pause, cancel, or switch mentors anytime without cancellation penalties.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Zero ₹1,00,000+ Upfront Lock-ins:</strong> Unlike offline institutes that demand non-refundable annual fees before teaching a single class, Mentskool charges only for active months.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>Dedicated IITians (Not Junior Call Agents):</strong> 100% of your guidance comes directly from verified rankers from IIT Bombay, IIT Delhi, IIT Kanpur, and IIT Madras.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span><strong>All-Inclusive Ecosystem:</strong> Weekly 1:1 video calls, small cohort problem masterclasses (max 30), and daily 94% efficiency tracking included under one simple price.</span>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Cost Comparison Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive JEE Preparation Cost Comparison
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Evaluate fees, personal attention, and refund flexibility across every preparation medium in India.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Preparation Model</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Average Annual Cost</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Student:Mentor Ratio</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Daily Accountability</th>
                    <th className="py-4 px-4 sm:px-6 text-white">Commitment Terms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">
                      Offline Coaching Hubs (Kota / Allen / Aakash)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400 font-semibold">
                      ₹2,00,000 – ₹3,50,000 (Tuition + Hostel)
                    </td>
                    <td className="py-4 px-4 sm:px-6">150 : 1 (Mass batch)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Zero (Teacher cannot track 150 students)</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">100% Non-refundable annual fee upfront</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">
                      Hourly Consultant Apps (MentorKhoj / Wyzant)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-amber-400 font-semibold">
                      ₹800 – ₹1,500 per single hour
                    </td>
                    <td className="py-4 px-4 sm:px-6">1 : 1 (Transactional)</td>
                    <td className="py-4 px-4 sm:px-6 text-amber-400">Zero (Mentor disappears after 60 mins)</td>
                    <td className="py-4 px-4 sm:px-6">Pay-per-hour, no long-term continuity</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">
                      Mass Online Video Courses (PW / Unacademy)
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold">
                      ₹5,000 – ₹35,000 (Lectures only)
                    </td>
                    <td className="py-4 px-4 sm:px-6">5,000+ : 1 in live chat</td>
                    <td className="py-4 px-4 sm:px-6 text-rose-400">Zero personal tracking or call access</td>
                    <td className="py-4 px-4 sm:px-6">Full annual batch fee paid upfront</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 bg-brand-500/10 border-l-4 border-brand-500">
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-white">
                      Mentskool 1-on-1 IITian Mentorship
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-extrabold">
                      Affordable Month-to-Month
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-300 font-bold">
                      1 : 1 Private Calls (Max 30 cohort cap)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">
                      Daily dashboard verification (94% score)
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-emerald-400 font-bold">
                      Month-to-month, cancel or switch anytime
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Hidden Costs of Drop Years */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Real ROI: Preventing a Wasted Drop Year
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                A single wasted drop year costs an Indian family far more than tuition fees:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-rose-400 font-bold text-sm uppercase">Financial Loss</div>
                <h3 className="text-base font-bold text-white">₹3,00,000+ Direct Costs</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hostel rent, food expenses, repeat coaching tuition, and test series registrations easily consume lakhs of hard-earned family savings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-amber-400 font-bold text-sm uppercase">Career Opportunity Cost</div>
                <h3 className="text-base font-bold text-white">1 Full Year of Engineer Salary</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Delaying graduation by one year delays your first engineering salary (averaging ₹14–22 LPA from premier IITs/NITs), costing real future wealth.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-emerald-400 font-bold text-sm uppercase">Psychological Fatigue</div>
                <h3 className="text-base font-bold text-white">Zero Mental Burnout</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Working with a dedicated IITian who provides daily reassurance and objective metric tracking prevents exam depression and maintains high morale.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={feesFaqs}
              title="Frequently Asked Questions: JEE Mentorship Fees"
              subtitle="Everything you need to know about pricing, refund guarantees, and monthly flexibility."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Experience 1:1 Mentorship with Zero Financial Risk"
              description="Book a free 1-on-1 strategy call with a verified IITian. Review your study roadmap and discover how affordable, month-to-month mentorship accelerates your rank."
              primaryButtonText="Claim Free 1:1 Strategy Call"
              primaryButtonHref="/free-mentorship-session"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
