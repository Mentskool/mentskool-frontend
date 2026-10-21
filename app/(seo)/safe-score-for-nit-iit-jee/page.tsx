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
  Award,
  Layers,
  GraduationCap,
  Building2,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Safe Score for Top NITs & IITs: Chapter Target Framework & Branch Cutoffs",
  description:
    "Authoritative guide to safe marks and percentiles for top NITs (Trichy, Surathkal, Warangal) and IITs (Bombay, Delhi, Madras). Comprehensive breakdown for CSE, Electrical, and Core engineering branches.",
  keywords: [
    "safe score for nit trichy",
    "marks required for top nits",
    "jee main safe score for cse",
    "jee advanced marks required for top iits",
    "marks for nit surathkal cse",
    "percentile required for nit cse",
    "safe marks for iit bombay",
  ],
  alternates: {
    canonical: "https://mentskool.com/safe-score-for-nit-iit-jee",
  },
  openGraph: {
    title: "Safe Score for Top NITs & IITs: Branch-Wise Target Framework",
    description:
      "Concrete score benchmarks for NIT Trichy, Surathkal, Warangal, and premier IITs. Discover what raw marks and percentiles guarantee your branch of choice.",
    url: "https://mentskool.com/safe-score-for-nit-iit-jee",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Safe Score for NITs and IITs - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What score is required for Computer Science (CSE) at NIT Trichy?",
    answer:
      "For Other State (OS) General category candidates, securing CSE at NIT Trichy requires a percentile of 99.85+ (All India Rank within top 1,500 to 2,000). On a moderate shift, this corresponds to a raw score between 225 and 240 marks out of 300.",
  },
  {
    question: "What is the minimum safe percentile to secure ANY branch in a top 10 NIT?",
    answer:
      "To secure admission to a Top 10 NIT (such as Trichy, Surathkal, Warangal, Rourkela, Calicut, or Allahabad) in core branches like Mechanical, Civil, or Chemical Engineering, a General category candidate requires a minimum percentile of 97.2% to 98.0% (AIR ~25,000 to 35,000), which corresponds to 140 to 155 raw marks.",
  },
  {
    question: "What marks percentage is required to qualify for an IIT in JEE Advanced?",
    answer:
      "In JEE Advanced, percentages rather than absolute marks dictate ranks due to fluctuating paper totals. Securing ANY seat in an older IIT requires approximately 28% to 32% of total marks (~100 to 115 marks out of 360). For Top 5 IIT CSE (Bombay, Delhi, Madras, Kanpur, Kharagpur), you generally need 65% to 75% marks (AIR within top 250 to 500).",
  },
  {
    question: "How does the Home State (HS) quota affect NIT cutoffs?",
    answer:
      "NITs reserve 50% of their seats for candidates from the home state where the institute is located. In states with high competition (like Rajasthan, Andhra Pradesh, or UP), HS and OS cutoffs are very close. In states with fewer applicants (like Goa, Delhi, or Northeast states), the HS quota can lower the required cutoff significantly.",
  },
  {
    question: "Is 95 percentile enough to get an NIT?",
    answer:
      "A 95 percentile yields an All India Rank around 70,000. Under Other State quota, General category candidates will find it difficult to get into top NITs, but may secure seats in newer NITs (such as NIT Nagaland, Mizoram, or Srinagar) in branches like Civil, Metallurgy, or Production during CSAB special rounds.",
  },
];

export default function SafeScoreForNitIitJeePage() {
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
        headline: "Safe Score for Top NITs & IITs: Chapter Target Framework & Branch Cutoffs",
        description:
          "Authoritative analysis of score targets for premier engineering colleges in India, including branch cutoffs, percentile requirements, and advanced percentage benchmarks.",
        url: "https://mentskool.com/safe-score-for-nit-iit-jee",
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
                label: "Safe Score for NITs & IITs",
                href: "/safe-score-for-nit-iit-jee",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              Target Score Intelligence & JoSAA Counseling Data
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Safe Score for Top NITs & IITs:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-cyan-400">
                Chapter Target Framework & Branch Cutoffs
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Setting vague goals like &quot;I want a good college&quot; leads to unfocused preparation. Translate your engineering aspirations into precise, actionable targets: raw marks, percentiles, and chapter masteries required for premier NITs and IITs.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  Executive Targets at a Glance (General Category / Other State)
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To secure <strong className="text-white">NIT Trichy or Surathkal CSE</strong>, target <strong className="text-brand-300">99.8+ Percentile (225+ Marks)</strong>. For a <strong className="text-white">Top 5 NIT Core Branch (ECE/EE)</strong>, target <strong className="text-cyan-300">99.0+ Percentile (185+ Marks)</strong>. For <strong className="text-white">IIT Bombay/Delhi CSE</strong> in JEE Advanced, aim for <strong className="text-emerald-400">72%+ Marks (Top 250 AIR)</strong>; and for an engineering seat in any premier older IIT, target <strong className="text-white">35%+ Marks (~Top 7,000 AIR)</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Top NITs Benchmark Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Building2 className="w-7 h-7 text-brand-400" />
              JEE Main Cutoff Benchmarks: Top NITs & IIITs (Other State Quota)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Institute</th>
                    <th className="p-4">Target Branch</th>
                    <th className="p-4">Closing Percentile</th>
                    <th className="p-4">Safe Score (Moderate Shift)</th>
                    <th className="p-4">Approx. All India Rank</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">NIT Trichy</td>
                    <td className="p-4 font-bold text-emerald-400">Computer Science (CSE)</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">99.88 %ile</td>
                    <td className="p-4 font-bold text-white">230 - 245 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~1,200</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">NIT Surathkal</td>
                    <td className="p-4 font-bold text-emerald-400">Computer Science (CSE)</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">99.82 %ile</td>
                    <td className="p-4 font-bold text-white">225 - 238 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~2,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">NIT Warangal</td>
                    <td className="p-4 font-bold text-cyan-400">Electronics & Comm. (ECE)</td>
                    <td className="p-4 font-mono text-cyan-300">99.45 %ile</td>
                    <td className="p-4 font-bold text-white">200 - 212 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~6,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">MNNIT Allahabad</td>
                    <td className="p-4 font-bold text-cyan-400">Electrical Engineering (EE)</td>
                    <td className="p-4 font-mono text-cyan-300">98.80 %ile</td>
                    <td className="p-4 font-bold text-white">175 - 188 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~14,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">NIT Rourkela</td>
                    <td className="p-4 font-bold text-blue-400">Mechanical Engineering</td>
                    <td className="p-4 font-mono text-blue-300">98.10 %ile</td>
                    <td className="p-4 font-bold text-white">160 - 172 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~22,000</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">IIIT Hyderabad</td>
                    <td className="p-4 font-bold text-emerald-400">Computer Science (CSE)</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">99.92 %ile</td>
                    <td className="p-4 font-bold text-white">245 - 260 Marks</td>
                    <td className="p-4 font-mono text-slate-400">AIR ~900</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Premier IITs Benchmark Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-brand-400" />
              JEE Advanced Cutoff Benchmarks: Premier IITs
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Target IIT Campus</th>
                    <th className="p-4">Branch Tier</th>
                    <th className="p-4">Closing All India Rank</th>
                    <th className="p-4">Safe Score Percentage</th>
                    <th className="p-4">Approx. Raw Score (Out of 360)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">IIT Bombay / IIT Delhi</td>
                    <td className="p-4 font-bold text-emerald-400">Computer Science (CSE)</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">Top 65 to 110 AIR</td>
                    <td className="p-4 font-bold text-white">75% - 82%</td>
                    <td className="p-4 font-mono text-slate-300">270 - 295 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">IIT Madras / Kanpur</td>
                    <td className="p-4 font-bold text-emerald-400">Electrical Engineering</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">Top 1,000 AIR</td>
                    <td className="p-4 font-bold text-white">58% - 64%</td>
                    <td className="p-4 font-mono text-slate-300">210 - 230 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">IIT Kharagpur / Roorkee</td>
                    <td className="p-4 font-bold text-cyan-400">Mechanical Engineering</td>
                    <td className="p-4 font-mono text-cyan-300">Top 3,500 AIR</td>
                    <td className="p-4 font-bold text-white">45% - 50%</td>
                    <td className="p-4 font-mono text-slate-300">160 - 180 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Any Older IIT (Top 7)</td>
                    <td className="p-4 font-bold text-blue-400">Any Engineering Branch</td>
                    <td className="p-4 font-mono text-blue-300">Top 7,500 AIR</td>
                    <td className="p-4 font-bold text-white">36% - 40%</td>
                    <td className="p-4 font-mono text-slate-300">130 - 145 Marks</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Any 2nd / 3rd Gen IIT</td>
                    <td className="p-4 font-bold text-slate-300">Qualifying Admission</td>
                    <td className="p-4 font-mono text-slate-400">Top 15,000 AIR</td>
                    <td className="p-4 font-bold text-white">28% - 32%</td>
                    <td className="p-4 font-mono text-slate-300">100 - 115 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: The 3-Tier Chapter Master Framework */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-brand-400" />
              The Chapter Mastery Target to Reach 200+ Marks in JEE Main
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-brand-400 font-bold text-lg">Physics (Target: 75 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Master Modern Physics, Current Electricity, Thermodynamics, Ray Optics, and Gravitation. Attempt 20 questions, achieve 19 correct, 1 error = <strong>75 Marks</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">Chemistry (Target: 80 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Master Coordination Compounds, Bonding, Carbonyls, Solutions, and Kinetics. Attempt 21 questions, achieve 20 correct, 1 error = <strong>79 Marks</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-indigo-400 font-bold text-lg">Mathematics (Target: 48 Marks)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Master Vectors & 3D, Matrices, Definite Integrals, and Sequences. Attempt 13 questions, achieve 12 correct, 1 error = <strong>47 Marks</strong>.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-brand-950/30 border border-brand-500/30 text-center font-bold text-brand-300 text-lg">
              Total Score: 75 + 79 + 47 = 201 Marks $\to$ Solid 99.2+ Percentile (Top 10 NIT CSE Secured)
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Design Your College Target Strategy With Top IITians"
            subtitle="Map your target NIT or IIT branch to a realistic daily study schedule and mock test milestones. Get 1-on-1 guidance from mentors who secured seats at IIT Bombay and Delhi."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Safe Scores for NITs & IITs
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Detailed breakdowns on cutoffs, home state reservations, and college branch selection.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Turn Your IIT / NIT Target Into a Realistic Plan"
            subtitle="Connect with experienced IIT mentors who will assess your current mock scores and build an achievable roadmap to your dream campus."
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
