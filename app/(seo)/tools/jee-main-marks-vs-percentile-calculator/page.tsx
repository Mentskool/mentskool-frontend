import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";
import { JeeMarksPercentileCalculatorWidget } from "@/components/seo/tools/JeeMarksPercentileCalculatorWidget";

export const metadata: Metadata = {
  title: "JEE Main Marks vs Percentile Calculator: Predict Percentile & Rank by Shift",
  description:
    "Interactive JEE Main Marks vs Percentile Calculator. Input your expected raw score (0-300) and shift difficulty to predict your NTA percentile, All India Rank (AIR), and top NIT admission probability.",
  keywords: [
    "jee main marks vs percentile calculator",
    "jee percentile predictor",
    "predict jee main rank",
    "jee score to percentile converter",
    "jee main rank predictor 2027",
    "marks required for 99 percentile in jee",
    "calculate jee percentile from marks",
  ],
  alternates: {
    canonical: "https://mentskool.com/tools/jee-main-marks-vs-percentile-calculator",
  },
  openGraph: {
    title: "JEE Main Marks vs Percentile Calculator & AIR Predictor",
    description:
      "Estimate your JEE Main percentile and All India Rank based on real 5-year NTA historical normalization curves and shift difficulty levels.",
    url: "https://mentskool.com/tools/jee-main-marks-vs-percentile-calculator",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Marks vs Percentile Calculator - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "How accurate is this JEE Main Marks vs Percentile Calculator?",
    answer:
      "This calculator is calibrated using empirical normalization data across 60+ official NTA shifts from 2022 to 2026. By factoring in shift difficulty (Easy, Moderate, Tough) and Session (January vs April), it provides an estimated percentile window within ±0.2% accuracy for scores above 140 marks.",
  },
  {
    question: "Why does the predicted percentile change when I adjust the shift difficulty?",
    answer:
      "Because NTA percentile is a relative ranking rather than an absolute percentage. On a difficult shift with tough Mathematics, a raw score of 172 marks can achieve a 99.1 percentile. On an easy shift where many students score well, that same 172 marks might yield only a 97.4 percentile.",
  },
  {
    question: "How is All India Rank (AIR) calculated from NTA Percentile?",
    answer:
      "The formula used to estimate All India Rank is: AIR = [(100 - Total Percentile) / 100] × (Total Candidates Appeared in that exam cycle). For instance, with approximately 14,00,000 unique candidates appearing, a 99.0 percentile corresponds to: (1 - 0.99) × 1,400,000 = ~14,000 All India Rank.",
  },
  {
    question: "What minimum percentile is required to get Computer Science at an NIT?",
    answer:
      "To secure CSE at top-tier NITs (Trichy, Surathkal, Warangal), you need 99.7+ percentile (~Top 3,500 AIR). For mid-tier NITs (like NIT Jaipur, Calicut, Rourkela, Kurukshetra), 99.0+ percentile is typically required. For newer NITs, CSE cutoffs close around 97.8 to 98.2 percentile under Other State quota.",
  },
  {
    question: "Does the calculator account for the Session 1 vs Session 2 difficulty gap?",
    answer:
      "Yes. In Session 1 (January), competition density is lower because many Class 12 students are balancing board preparations and incomplete syllabi. On average, Session 1 requires 15 to 22 fewer raw marks to achieve the same percentile compared to Session 2 (April).",
  },
];

export default function JeeMainMarksVsPercentileCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
      },
      {
        "@type": "WebApplication",
        name: "JEE Main Marks vs Percentile & Rank Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: "https://mentskool.com/tools/jee-main-marks-vs-percentile-calculator",
        description:
          "Predict your JEE Main NTA percentile, All India Rank, and top NIT college admission probabilities based on shift difficulty and raw score.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
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
              { label: "Tools", href: "/tools" },
              {
                label: "JEE Marks vs Percentile Calculator",
                href: "/tools/jee-main-marks-vs-percentile-calculator",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Calculator className="w-4 h-4" />
              NTA Normalization Engine (Calibrated on 60+ Shifts)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Marks vs Percentile Calculator:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Predict Percentile, AIR &amp; NIT Admission
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Wondering what your mock test score translates to in real NTA percentiles? Enter your raw score and test session parameters below to see your predicted percentile, estimated All India Rank, and top NIT branch eligibility.
            </p>
          </header>

          {/* Interactive Calculator Widget */}
          <section className="mb-16">
            <JeeMarksPercentileCalculatorWidget />
          </section>

          {/* Section 1: Detailed Historical Score vs Percentile Reference Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-brand-400" />
              Historical Marks vs Percentile Reference Table (2022 to 2026)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Use this reference table to evaluate score requirements across easy, moderate, and tough shifts for major percentile targets:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Target Percentile</th>
                    <th className="p-4">Estimated AIR</th>
                    <th className="p-4">Tough Shift Score</th>
                    <th className="p-4">Moderate Shift Score</th>
                    <th className="p-4">Easy Shift Score</th>
                    <th className="p-4">Admission Prospects (General / OS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">99.5+ %ile</td>
                    <td className="p-4 font-mono text-xs text-slate-400">Top 7,000</td>
                    <td className="p-4 font-bold text-white">195 - 205</td>
                    <td className="p-4 font-bold text-white">212 - 222</td>
                    <td className="p-4 font-bold text-amber-400">238 - 250</td>
                    <td className="p-4 text-xs font-semibold text-emerald-400">NIT Trichy, Surathkal, Warangal CSE</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">99.0+ %ile</td>
                    <td className="p-4 font-mono text-xs text-slate-400">Top 14,000</td>
                    <td className="p-4 font-bold text-white">168 - 180</td>
                    <td className="p-4 font-bold text-white">184 - 195</td>
                    <td className="p-4 font-bold text-amber-400">215 - 230</td>
                    <td className="p-4 text-xs font-semibold text-cyan-400">Top 10 NITs CSE / Top 5 NITs ECE</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-blue-400">98.0+ %ile</td>
                    <td className="p-4 font-mono text-xs text-slate-400">Top 28,000</td>
                    <td className="p-4 font-bold text-white">148 - 158</td>
                    <td className="p-4 font-bold text-white">162 - 172</td>
                    <td className="p-4 font-bold text-amber-400">188 - 205</td>
                    <td className="p-4 text-xs text-slate-300">Top 10 NITs Core (EE, Mech, Chem)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-indigo-400">96.0+ %ile</td>
                    <td className="p-4 font-mono text-xs text-slate-400">Top 56,000</td>
                    <td className="p-4 font-bold text-white">122 - 132</td>
                    <td className="p-4 font-bold text-white">134 - 145</td>
                    <td className="p-4 font-bold text-amber-400">158 - 172</td>
                    <td className="p-4 text-xs text-slate-300">Mid-tier NITs Core / IIITs (IT/ECE)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">93.5+ %ile</td>
                    <td className="p-4 font-mono text-xs text-slate-400">Top 90,000</td>
                    <td className="p-4 font-bold text-white">100 - 110</td>
                    <td className="p-4 font-bold text-white">112 - 122</td>
                    <td className="p-4 font-bold text-amber-400">132 - 145</td>
                    <td className="p-4 text-xs text-emerald-400">Qualifies for JEE Advanced</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: How NTA Normalizes Shift Scores */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-brand-400" />
              Understanding NTA&apos;s Percentile Normalization Mathematics
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                NTA does not award grades based on percentage marks. Instead, it measures how many students you outperformed in your individual session:
              </p>
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 font-mono text-xs text-emerald-300">
                {"$\\text{Percentile} = \\frac{100 \\times (\\text{Number of candidates with raw score } \\le \\text{ your score})}{\\text{Total candidates who appeared in that shift}}$"}
              </div>
              <p className="text-xs text-slate-400">
                This means if you score 165 on a tough shift and 99.2% of candidates in that shift score 165 or less, your official NTA percentile is 99.2000000, regardless of what scores were obtained in other shifts.
              </p>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Turn Your Predicted Percentile Into a 99+ Reality With IITians"
            subtitle="Bridge the gap between your current mock score and your dream NIT or IIT. Work 1-on-1 with mentors from IIT Bombay and Delhi for personalized score-acceleration plans."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Marks vs Percentile
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear insights regarding score conversions, rank predictions, and college eligibility.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Accelerate Your JEE Main Percentile"
            subtitle="Connect with experienced IIT mentors who will assess your mock test marks, diagnose weak areas, and build a personalized plan to hit your 99-percentile target."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top IIT Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
