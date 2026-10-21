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
  Award,
  HeartPulse,
  Scale,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Last 5 Years Marks vs Rank Trends: Rank Inflation & Safe GMC Cutoffs",
  description:
    "Comprehensive 5-year analysis of NEET marks vs rank trends (2021-2026). Decipher the rank inflation phenomena, the 2024 score explosion, stabilized 2025/2026 cutoffs, and safe GMC admission targets.",
  keywords: [
    "neet last 5 years marks vs rank",
    "neet rank inflation analysis",
    "neet marks vs rank trends",
    "safe score for government mbbs neet",
    "neet 650 marks rank in last 5 years",
    "neet cut off trends 2021 to 2026",
    "neet qualifying marks historical trends",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-last-5-years-marks-vs-rank-trends",
  },
  openGraph: {
    title: "NEET Last 5 Years Marks vs Rank Trends & Rank Inflation Explained",
    description:
      "Historical data on NEET UG score compression and rank inflation. Learn what score guarantees an All India Quota Government Medical College seat.",
    url: "https://mentskool.com/neet-last-5-years-marks-vs-rank-trends",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Last 5 Years Marks vs Rank Trends - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Why did NEET experience unprecedented rank inflation in 2024?",
    answer:
      "NEET 2024 saw unprecedented score compression due to several factors: 1) A straightforward, strictly NCERT-aligned paper with few complex numericals, 2) Syllabus reductions that removed difficult chapters, 3) Massive candidate volume (over 24 lakh applicants), and 4) Grace marks awarded to certain centers. As a result, 67 students achieved a perfect 720/720, and a score of 650 marks—which historically secured a top 7,000 rank—slipped to approximately rank 29,000.",
  },
  {
    question: "What is a safe score for a Government Medical College (MBBS) under All India Quota?",
    answer:
      "In the stabilized post-2024 landscape, an unreserved (General/UR) candidate requires a minimum safe score of 655+ marks (AIR within ~22,000 to 24,000) for a guaranteed Government Medical College seat through the 15% All India Quota (AIQ). For OBC and EWS candidates, the safe threshold sits around 650–652 marks.",
  },
  {
    question: "How has the cutoff for qualifying NEET changed over the last 5 years?",
    answer:
      "The qualifying cutoff (50th percentile for UR) has risen consistently: 138 in 2021, 117 in 2022, 137 in 2023, 164 in 2024, and ~158-162 in 2025/2026. However, qualifying merely grants eligibility for counseling; actual government MBBS admissions require nearly 500 marks higher than the qualifying cutoff.",
  },
  {
    question: "Why is scoring 350+ in Biology now considered a baseline requirement?",
    answer:
      "Because over 95% of questions in Botany and Zoology are drawn directly from NCERT lines, high-scoring medical aspirants routinely score between 350 and 360 out of 360. A deficit of even 15–20 marks in Biology puts immense pressure on Physics and Chemistry, often costing candidates their government medical seat.",
  },
  {
    question: "How do State Quotas (85%) compare with All India Quota (15%) cutoffs?",
    answer:
      "States with large numbers of medical colleges (e.g., Maharashtra, Karnataka, Tamil Nadu) often have state-quota cutoffs that are 20 to 35 marks lower than the All India Quota. Conversely, high-competition states like Rajasthan, Delhi, Bihar, and Uttar Pradesh feature state cutoffs that closely match or occasionally exceed AIQ thresholds.",
  },
];

export default function NeetLast5YearsMarksVsRankTrendsPage() {
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
        headline: "NEET Last 5 Years Marks vs Rank Trends: Rank Inflation & Safe GMC Cutoffs",
        description:
          "Definitive 5-year analysis of NEET score compression, rank inflation dynamics, and safe admission targets for government medical colleges.",
        url: "https://mentskool.com/neet-last-5-years-marks-vs-rank-trends",
        author: {
          "@type": "Organization",
          name: "Mentskool Medical Advisory Council",
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
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-300">
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
                label: "NEET 5-Year Marks vs Rank Trends",
                href: "/neet-last-5-years-marks-vs-rank-trends",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <HeartPulse className="w-4 h-4" />
              Historical Score Intelligence & Admission Analytics
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Last 5 Years Marks vs Rank Trends:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Rank Inflation & Safe GMC Cutoffs Decoded
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              The competition landscape of NEET UG has undergone seismic changes over the past five years. Reviewing the evolution of marks versus ranks from 2021 to 2026 highlights why targeting last year&apos;s cutoff is risky, and how top aspirants build a buffer for guaranteed government MBBS seats.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  Key Takeaway: The New Safe Score for Government MBBS is 655+
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  While a score of 600 marks comfortably earned an All India Quota Government Medical College seat in 2021, severe rank inflation has moved the safe threshold to <strong className="text-emerald-300">655+ marks</strong> for General/UR candidates. To secure an AIIMS or premier state institution (such as MAMC Delhi or KGMU Lucknow), aspirants must target <strong className="text-white">685+ to 705+ marks</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The 5-Year Comparative Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-emerald-400" />
              5-Year Comparative Marks vs Rank Table (2021 to 2026)
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Examine how the rank associated with various raw scores has evolved across the last five testing cycles:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Raw Score (Out of 720)</th>
                    <th className="p-4">2021 Rank</th>
                    <th className="p-4">2022 Rank</th>
                    <th className="p-4">2023 Rank</th>
                    <th className="p-4">2024 Rank (Inflation Peak)</th>
                    <th className="p-4">2025/2026 Stabilized</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-emerald-400">710 - 720</td>
                    <td className="p-4">AIR 1 - 10</td>
                    <td className="p-4">AIR 1 - 8</td>
                    <td className="p-4">AIR 1 - 15</td>
                    <td className="p-4 font-bold text-amber-400">AIR 1 - 350+</td>
                    <td className="p-4 font-bold text-white">AIR 1 - 45</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-teal-400">680 - 690</td>
                    <td className="p-4">~750</td>
                    <td className="p-4">~980</td>
                    <td className="p-4">~1,600</td>
                    <td className="p-4 font-bold text-amber-400">~6,500</td>
                    <td className="p-4 font-bold text-white">~2,200</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-cyan-400">650 - 660</td>
                    <td className="p-4">~3,800</td>
                    <td className="p-4">~4,500</td>
                    <td className="p-4">~7,500</td>
                    <td className="p-4 font-bold text-amber-400">~26,000</td>
                    <td className="p-4 font-bold text-white">~14,500</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-blue-400">620 - 630</td>
                    <td className="p-4">~10,500</td>
                    <td className="p-4">~12,800</td>
                    <td className="p-4">~19,000</td>
                    <td className="p-4 font-bold text-amber-400">~55,000</td>
                    <td className="p-4 font-bold text-white">~34,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-300">600 - 610</td>
                    <td className="p-4">~18,500</td>
                    <td className="p-4">~21,000</td>
                    <td className="p-4">~29,000</td>
                    <td className="p-4 font-bold text-amber-400">~80,000</td>
                    <td className="p-4 font-bold text-white">~52,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-mono font-bold text-slate-400">General AIQ GMC Cutoff</td>
                    <td className="p-4 text-emerald-400">595 Marks</td>
                    <td className="p-4 text-emerald-400">596 Marks</td>
                    <td className="p-4 text-emerald-400">610 Marks</td>
                    <td className="p-4 text-amber-400 font-bold">655 Marks</td>
                    <td className="p-4 text-emerald-300 font-bold">~650 - 655 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: What Caused the Historic Score Inflation? */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The Mechanics of Rank Inflation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">1. Predictable Question Banks</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  As questions became almost 100% textbook-bound to NCERT lines, top students with multiple revisions could solve 90 Biology questions in under 40 minutes, creating excess time to solve Physics questions with near-perfect accuracy.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">2. Rising Multi-Attempt Cohorts</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Droppers taking 2nd and 3rd attempts now comprise nearly 45% of test-takers scoring 600+. With 24–36 months of continuous mock test practice, this experienced cohort raises the score ceiling significantly.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">3. The 650-Point Compression</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Between 640 and 665 marks, hundreds of students cluster on every individual score point. A single question (+4 vs -1) can swing an aspirant by more than 1,500 ranks, determining whether they gain or lose a government seat.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Safe Subject-Wise Score Allocation for 680+ */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-400" />
              The 680+ Score Blueprint for Guaranteed Admission
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                To eliminate cutoff anxiety, medical aspirants should aim for <strong className="text-white">680+ marks</strong>. Here is the realistic subject-wise distribution:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-base mb-1">Biology: 350 - 360</div>
                  <p className="text-xs text-slate-400">
                    Max 1-2 errors allowed across 90 questions. Total focus on NCERT diagrams, summary boxes, and supplementary notes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-teal-400 font-bold text-base mb-1">Chemistry: 165 - 170</div>
                  <p className="text-xs text-slate-400">
                    Full marks in Inorganic and Organic reaction conversions; high accuracy in Physical Chemistry numerical calculations.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-cyan-400 font-bold text-base mb-1">Physics: 160 - 165</div>
                  <p className="text-xs text-slate-400">
                    Mastery of 40 formula-driven problems, leaving only 1-2 highly complex Mechanics or Electrodynamics questions unattempted.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Beat Rank Inflation With Strategic Guidance From Top AIIMS Mentors"
            subtitle="Build a preparation strategy that protects you against shifting cutoffs. Work 1-on-1 with mentors who achieved 680+ marks and secured top medical college seats."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: NEET 5-Year Trends
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear answers regarding rank inflation, score thresholds, and counseling strategies.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Secure Your Government MBBS Seat"
            subtitle="Connect with top medical mentors who will review your preparation, calibrate your mock scores, and help you target a 680+ score."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Medical Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
