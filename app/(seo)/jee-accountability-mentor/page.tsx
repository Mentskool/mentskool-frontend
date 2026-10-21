import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  BarChart3,
  BookOpen,
  Award,
  AlertTriangle,
  TrendingUp,
  CheckSquare,
  Activity,
  Zap,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Accountability Mentor — Stop Procrastination & Build Daily Study Discipline",
  description:
    "Struggling with phone addiction, inconsistency, and procrastination in JEE prep? Partner with an IITian accountability mentor. Daily problem quotas, 94% verified efficiency dashboard, and weekly 1:1 strategy check-ins.",
  keywords: [
    "JEE accountability mentor",
    "study accountability partner for JEE",
    "stop procrastination in JEE prep",
    "daily study discipline for IIT JEE",
    "JEE habit tracking mentor",
    "best accountability coach for JEE Advanced",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-accountability-mentor",
  },
  openGraph: {
    title: "JEE Accountability Mentor: Daily Discipline with IITians",
    description:
      "Motivation fades; accountability lasts. Track your daily problem solving with verified IIT Bombay & Delhi rankers.",
    url: "https://mentskool.com/jee-accountability-mentor",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Accountability Mentor - Mentskool",
      },
    ],
  },
};

const accountabilityFaqs: FaqItem[] = [
  {
    question: "Why do motivation videos fail to create long-term study consistency?",
    answer:
      "Because motivation is a temporary chemical emotion that lasts 30 minutes, whereas cracking JEE requires 700+ consecutive days of disciplined execution. When you rely on motivation, you study 12 hours on Monday, get tired on Tuesday, waste Wednesday on YouTube shorts, and feel guilty on Thursday. An accountability mentor replaces emotional motivation with external human verification: knowing that an IITian senior will inspect your solved question count every evening completely destroys the impulse to procrastinate.",
  },
  {
    question: "How does the Mentskool 94% Efficiency Dashboard work?",
    answer:
      "Every evening, you log your completed study sessions: chapters reviewed, self-solved problem count in Physics, Chemistry, and Math, and test scores. The platform computes an objective Efficiency Score based on completion rate and punctuality. Your mentor reviews your score daily and flags any slipping trends immediately.",
  },
  {
    question: "How does my mentor help with digital distractions and phone addiction?",
    answer:
      "Your mentor establishes environmental boundaries: app blockers during deep-work slots, phone-free morning study blocks, and the 'Pomodoro Sprint Protocol' (50 minutes deep solving, 10 minutes walk). Knowing you must show your rough sheets during weekly video calls creates positive pressure to stay off social media.",
  },
  {
    question: "What happens if I have a bad day and fail to study?",
    answer:
      "Life happens. Rather than scolding you, your mentor diagnoses why your routine broke down: Was it exhaustion? Poor sleep? A confusing chapter? They immediately recalibrate your schedule for the next 48 hours to prevent a bad day from turning into a wasted week.",
  },
  {
    question: "Is there any long contract?",
    answer:
      "No. Mentskool operates on transparent month-to-month subscriptions with the freedom to pause, cancel, or switch mentors anytime.",
  },
];

export default function JeeAccountabilityMentorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 accountability mentorship platform for JEE Main & Advanced aspirants.",
      },
      {
        "@type": "Course",
        name: "JEE Daily Accountability & Consistency Program",
        description:
          "Daily problem tracking, habit formation, and weekly 1:1 strategy audits with verified IIT rankers.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: accountabilityFaqs.map((faq) => ({
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
                label: "Accountability Mentor",
                href: "/jee-accountability-mentor",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-semibold mb-4">
              <Activity className="w-3.5 h-3.5" />
              <span>Uncompromising Daily Discipline &amp; Task Auditing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Accountability Mentor: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-sky-300 to-indigo-400">Stop Procrastination &amp; Build Daily Habit</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Motivation is cheap; consistency is rare. Partner with an <strong>IIT Bombay or Delhi ranker</strong> who audits your daily solved question quotas, keeps phone addiction at bay, and ensures you hit 94%+ efficiency every week.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Accountability Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Habit Audit Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-brand-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-400 mb-3">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Executive Summary: What Is A JEE Accountability Mentor?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool Accountability Mentorship Engine</strong> replaces sporadic motivation with a daily execution system built on four structural pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Daily Problem Quota Logging:</strong> Submit exact solved question counts across Physics, Chemistry, and Math on the web dashboard every night.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Efficiency Score:</strong> Dynamic algorithm scoring your daily task punctuality and accuracy to maintain consistent momentum.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Weekly Rough Sheet Video Audits:</strong> Your mentor reviews photos of your scratch paper on Google Meet to verify you solved questions without looking at solutions.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Digital Detox &amp; Burnout Recovery:</strong> Practical rules to conquer phone addiction and recover quickly from bad study days.</span>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={accountabilityFaqs}
              title="Frequently Asked Questions: JEE Accountability Mentorship"
              subtitle="Everything you need to know about habit tracking, dashboard metrics, and 1:1 IITian discipline."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Build Ironclad JEE Study Discipline Starting Today"
              description="Get paired 1-on-1 with an IITian who will track your daily question quotas, audit your rough sheets, and eliminate procrastination on a flexible monthly plan."
              primaryButtonText="Find Your Accountability Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
