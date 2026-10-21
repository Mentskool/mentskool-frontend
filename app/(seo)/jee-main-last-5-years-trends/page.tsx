import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  BarChart3,
  Scale,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Main Last 5 Years Trends: Marks vs 99 Percentile & Shift Normalization Analysis",
  description:
    "Comprehensive 5-year historical analysis of JEE Main (2022-2026). Discover marks vs percentile trends, shift difficulty variance (165 vs 236 marks for 99%ile), NTA normalization formula, and Session 1 vs Session 2 dynamics.",
  keywords: [
    "jee main last 5 years trends",
    "jee main marks vs percentile 5 years",
    "jee main 99 percentile marks trend",
    "jee main shift difficulty analysis",
    "nta normalization formula explained",
    "jee main january vs april marks required",
    "historical cutoff trends jee main",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-main-last-5-years-trends",
  },
  openGraph: {
    title: "JEE Main Last 5 Years Trends: Marks vs 99 Percentile Decoded",
    description:
      "Historical data breakdown of JEE Main marks vs percentiles from 2022 to 2026. Understand shift-wise score variance, NTA normalization math, and why Session 1 is your highest-ROI opportunity.",
    url: "https://mentskool.com/jee-main-last-5-years-trends",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Main Last 5 Years Trends - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the average score required to achieve 99 percentile in JEE Main?",
    answer:
      "Over the last five years, the raw score required to secure a 99 percentile has ranged from 165 marks on exceptionally difficult or mathematically rigorous shifts to as high as 236 marks on easy shifts with high candidate density (such as the infamous 27 Jan 2024 Shift 1). On an average, balanced paper, a score between 180 and 195 marks reliably secures the 99 percentile milestone.",
  },
  {
    question: "Why does the score required for 99 percentile differ so drastically between shifts?",
    answer:
      "NTA conducts JEE Main across 10 to 12 distinct shifts. Although question papers are balanced, the exact difficulty distribution of questions and the statistical competence of students allocated to each shift vary. An easier paper raises the score threshold because more students score high marks, while a tougher paper compresses scores downward.",
  },
  {
    question: "How does NTA's percentile normalization formula work?",
    answer:
      "NTA normalizes raw scores using a relative percentile rank formula: Percentile = (100 × Number of candidates in the shift who scored equal to or less than your raw score) ÷ (Total number of candidates who appeared in that shift). Percentile is calculated up to 7 decimal places to prevent ties and reflect true relative standing.",
  },
  {
    question: "Why does January Session 1 require lower marks than April Session 2 for the same percentile?",
    answer:
      "In Session 1 (January), many Class 12 candidates have not finished their full syllabus or are focused on board practicals and pre-boards. By Session 2 (April), students have had two extra months of revision, completed board exams, and analyzed the January papers. Consequently, Session 2 requires on average 15 to 25 more marks to secure the same percentile.",
  },
  {
    question: "What was the qualifying cutoff percentile for JEE Advanced over the last 5 years?",
    answer:
      "For the General/UR category, the JEE Advanced qualifying cutoff has steadily climbed: 88.4% in 2022, 90.77% in 2023, 93.23% in 2024, and ~93.4% in 2025/2026, driven by higher applicant numbers (surpassing 14.5 lakh registrations).",
  },
];

export default function JeeMainLast5YearsTrendsPage() {
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
        "@type": "Article",
        headline: "JEE Main Last 5 Years Trends: Marks vs 99 Percentile & Shift Normalization Analysis",
        description:
          "Authoritative analysis of JEE Main historical score trends from 2022 to 2026, normalization mechanics, and shift difficulty variance.",
        url: "https://mentskool.com/jee-main-last-5-years-trends",
        author: {
          "@type": "Organization",
          name: "Mentskool Academic Research Cell",
        },
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
              { label: "JEE Mentorship", href: "/jee-mentorship" },
              {
                label: "JEE Main 5-Year Trends",
                href: "/jee-main-last-5-years-trends",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <BarChart3 className="w-4 h-4" />
              Comprehensive 5-Year Historical Intelligence (2022–2026)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              JEE Main Last 5 Years Trends:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Marks vs 99 Percentile & Shift Variance Decoded
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Analyzing historical percentile data across 60+ shifts over the last five years reveals why raw marks alone do not define success. Understand how shift normalization works, why January Session 1 is your biggest competitive advantage, and how to target realistic score benchmarks.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  Key Findings: 5-Year Score vs Percentile Benchmarks
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Across 2022 to 2026, securing a <strong className="text-white">99 Percentile</strong> (top ~14,000 All India Rank) has required an average score of <strong className="text-brand-300">182 to 194 marks</strong> on moderate shifts, <strong className="text-emerald-400">165 to 175 marks</strong> on tough shifts, and over <strong className="text-amber-400">220 marks</strong> on unusually easy shifts. Furthermore, January Session 1 consistently requires <strong className="text-white">15 to 22 fewer marks</strong> than April Session 2 to hit identical percentile targets.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: 5-Year Historical Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-brand-400" />
              Year-by-Year Marks vs Percentile Evolution (2022 to 2026)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Below is the comprehensive historical trajectory of average raw marks required to attain major percentile milestones in JEE Main (reflecting moderate difficulty shifts):
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Target Percentile</th>
                    <th className="p-4">Approx. AIR Range</th>
                    <th className="p-4">2022 Avg</th>
                    <th className="p-4">2023 Avg</th>
                    <th className="p-4">2024 Avg (Shift Variance)</th>
                    <th className="p-4">2025/2026 Stabilized</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">99.5 %ile</td>
                    <td className="p-4 text-xs text-slate-400">Top 7,000 AIR</td>
                    <td className="p-4">202 - 210</td>
                    <td className="p-4">208 - 215</td>
                    <td className="p-4 font-bold text-amber-400">215 - 245</td>
                    <td className="p-4 font-bold text-white">205 - 218</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">99.0 %ile</td>
                    <td className="p-4 text-xs text-slate-400">Top 14,000 AIR</td>
                    <td className="p-4">178 - 188</td>
                    <td className="p-4">182 - 192</td>
                    <td className="p-4 font-bold text-amber-400">188 - 236</td>
                    <td className="p-4 font-bold text-white">182 - 195</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-blue-400">98.0 %ile</td>
                    <td className="p-4 text-xs text-slate-400">Top 28,000 AIR</td>
                    <td className="p-4">155 - 165</td>
                    <td className="p-4">160 - 170</td>
                    <td className="p-4 font-bold text-amber-400">165 - 205</td>
                    <td className="p-4 font-bold text-white">160 - 172</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-indigo-400">97.0 %ile</td>
                    <td className="p-4 text-xs text-slate-400">Top 42,000 AIR</td>
                    <td className="p-4">138 - 148</td>
                    <td className="p-4">142 - 152</td>
                    <td className="p-4 font-bold text-amber-400">145 - 185</td>
                    <td className="p-4 font-bold text-white">142 - 155</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-300">95.0 %ile</td>
                    <td className="p-4 text-xs text-slate-400">Top 70,000 AIR</td>
                    <td className="p-4">112 - 122</td>
                    <td className="p-4">118 - 128</td>
                    <td className="p-4 font-bold text-amber-400">122 - 155</td>
                    <td className="p-4 font-bold text-white">118 - 130</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">JEE Adv. Cutoff (General)</td>
                    <td className="p-4 text-xs text-slate-400">Top ~2,50,000</td>
                    <td className="p-4 text-emerald-400">88.41 %ile</td>
                    <td className="p-4 text-emerald-400">90.77 %ile</td>
                    <td className="p-4 text-amber-400 font-bold">93.23 %ile</td>
                    <td className="p-4 text-emerald-400 font-bold">~93.4 %ile</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Shift Difficulty Analysis (The January 27 Lesson) */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The Shift Variance Phenomenon: Why Marks Alone Are Misleading
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                In JEE Main 2024 Session 1, a historic shift anomaly highlighted how paper difficulty and candidate allocation impact scoring:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-amber-400 block mb-1">Easy Shift (e.g., 27 Jan Shift 1)</strong>
                  A student scoring <strong className="text-white">200 marks</strong> achieved only a <strong className="text-amber-300">96.8 percentile</strong>, because the paper was straightforward and featured a high concentration of test-takers who scored very well.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-emerald-400 block mb-1">Tough Shift (e.g., 31 Jan Shift 2)</strong>
                  A student scoring <strong className="text-white">168 marks</strong> secured a stellar <strong className="text-emerald-300">99.1 percentile</strong>, because challenging Mathematics problems pulled down scores across the board.
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-2">
                Takeaway: Never fixate on an absolute score target during the exam. If the paper feels difficult, it is difficult for everyone. Prioritize accuracy over reckless attempts.
              </p>
            </div>
          </section>

          {/* Section 3: Why January Session 1 is Your Highest-ROI Target */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-brand-400" />
              The Strategic January Session 1 Advantage
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  Lower Competition Density in January
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Roughly 60% of Class 12 candidates enter the January session with incomplete syllabi or split attention due to school pre-boards. Serious aspirants who complete their primary syllabus by November can secure a 99 percentile with 15 to 25 fewer raw marks than in the April session.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-400" />
                  Mental Freedom for JEE Advanced
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Locking in a 99.2+ percentile in January frees you from worrying about April. You can dedicate February through May exclusively to solving multi-concept, Olympiad-level JEE Advanced problem sets while others are still grinding for JEE Main cutoffs.
                </p>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Benchmark Your Score Trajectory With IITian Mentors"
            subtitle="Analyze your mock test marks against historical shift difficulty curves. Get 1-on-1 guidance from top IIT Bombay/Delhi mentors to optimize your strategy for Session 1."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: JEE Main 5-Year Trends
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed insights on normalization formulas, percentile cutoffs, and performance benchmarks.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Maximize Your Score-to-Percentile Efficiency"
            subtitle="Work with IITian mentors who understand shift dynamics and test-taking strategies to secure your top percentile in Session 1."
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
