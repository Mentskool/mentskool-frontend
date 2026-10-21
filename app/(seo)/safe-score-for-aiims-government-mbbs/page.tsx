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
  HeartPulse,
  Award,
  Building2,
  Scale,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Safe Score for AIIMS & Top Government Medical Colleges: Category-Wise Cutoffs",
  description:
    "Authoritative guide to safe marks and All India Ranks for AIIMS New Delhi, peripheral AIIMS (Bhopal, Jodhpur, Rishikesh), and top State Government Medical Colleges (MAMC, KGMU, Seth GS). Category-wise analysis for General, OBC, EWS, SC, and ST.",
  keywords: [
    "safe score for aiims delhi",
    "marks needed for government medical college",
    "neet safe score for mbbs",
    "aiims bhopal neet cutoff",
    "safe marks for mamc delhi",
    "neet category wise safe score",
    "minimum marks for aiims",
  ],
  alternates: {
    canonical: "https://mentskool.com/safe-score-for-aiims-government-mbbs",
  },
  openGraph: {
    title: "Safe Score for AIIMS & Top Government Medical Colleges Decoded",
    description:
      "Find out exactly what score guarantees an MBBS seat in AIIMS New Delhi, premier central institutes, and state medical colleges across India.",
    url: "https://mentskool.com/safe-score-for-aiims-government-mbbs",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Safe Score for AIIMS MBBS - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the safe score required for AIIMS New Delhi for a General category student?",
    answer:
      "For General/UR category candidates, securing an MBBS seat at AIIMS New Delhi requires an All India Rank within the top 50. In the current testing landscape, this necessitates a near-flawless score of 710 to 715+ marks out of 720 (allowing at most 1 or 2 minor errors on the entire paper).",
  },
  {
    question: "What score is required for top peripheral AIIMS (such as AIIMS Bhopal, Jodhpur, or Bhubaneswar)?",
    answer:
      "For top-tier established AIIMS campuses (Bhopal, Jodhpur, Bhubaneswar, and Rishikesh), an unreserved candidate requires an All India Rank within the top 800 to 1,500. This corresponds to a safe score between 685 and 695 marks.",
  },
  {
    question: "What is the absolute safe score for ANY Government Medical College under the 15% All India Quota?",
    answer:
      "In the post-2024 stabilized environment, an unreserved (General/UR) candidate requires a minimum of 655+ marks (AIR within ~22,000) for a guaranteed MBBS seat through AIQ. For OBC and EWS candidates, the safe baseline is 650–652 marks; for SC candidates, 550+ marks; and for ST candidates, 510+ marks.",
  },
  {
    question: "How do tie-breaking rules work if two candidates achieve the exact same NEET score?",
    answer:
      "NTA uses a strict hierarchical tie-breaking protocol: 1) Higher marks in Biology (Botany + Zoology), 2) Higher marks in Chemistry, 3) Higher marks in Physics, 4) Lower proportion of incorrect answers across all subjects, 5) Lower proportion of incorrect answers in Biology, followed by Chemistry, then Physics.",
  },
  {
    question: "Why is aiming for a 20-mark safety buffer crucial in NEET?",
    answer:
      "Cutoffs can fluctuate from year to year depending on applicant counts and slight paper difficulty shifts. If last year's cutoff for your state GMC was 642 marks, targeting exactly 642 is risky; targeting 665+ ensures that unexpected rank inflation will not cost you an admission seat.",
  },
];

export default function SafeScoreForAiimsGovernmentMbbsPage() {
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
        headline: "Safe Score for AIIMS & Top Government Medical Colleges: Category-Wise Cutoffs",
        description:
          "Authoritative analysis of score benchmarks for premier Indian medical institutions, AIIMS campuses, state GMCs, and category quotas.",
        url: "https://mentskool.com/safe-score-for-aiims-government-mbbs",
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
                label: "Safe Score for AIIMS & GMCs",
                href: "/safe-score-for-aiims-government-mbbs",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              Medical Admissions & MCC Seat Allocation Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Safe Score for AIIMS & Top GMCs:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Category-Wise Cutoffs & Target Framework
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              With medical college cutoffs experiencing significant score compression, aiming for bare minimum thresholds leaves you vulnerable during counseling rounds. Discover the exact score buffers required for AIIMS New Delhi, premier central medical institutions, and top state government colleges.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-300 mb-2">
                  Summary: The Target Thresholds by Institution Tier
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  For <strong className="text-white">AIIMS New Delhi</strong>, target <strong className="text-emerald-300">710+ Marks (Top 50 AIR)</strong>. For <strong className="text-white">Top AIIMS & Premier GMCs (MAMC, JIPMER, AIIMS Bhopal)</strong>, aim for <strong className="text-teal-300">685+ to 700 Marks (Top 1,500 AIR)</strong>. For a guaranteed <strong className="text-white">Government Medical College Seat (AIQ 15%)</strong>, an unreserved candidate should target a safe baseline of <strong className="text-white">655+ Marks</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Top Medical Colleges Benchmark Table */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Building2 className="w-7 h-7 text-emerald-400" />
              NEET Cutoff Benchmarks: Premier Medical Colleges in India
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Medical Institution</th>
                    <th className="p-4">Location / Type</th>
                    <th className="p-4">Closing General AIR</th>
                    <th className="p-4">Safe Score Threshold</th>
                    <th className="p-4">Annual Tuition Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">AIIMS New Delhi</td>
                    <td className="p-4 text-xs text-emerald-400">Apex National Institute</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">Top 55 AIR</td>
                    <td className="p-4 font-bold text-white">710 - 715+ Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹1,628 / year</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">MAMC (Maulana Azad)</td>
                    <td className="p-4 text-xs text-emerald-400">New Delhi (AIQ)</td>
                    <td className="p-4 font-mono font-bold text-emerald-300">Top 100 AIR</td>
                    <td className="p-4 font-bold text-white">705 - 710 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹3,000 / year</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">JIPMER Puducherry</td>
                    <td className="p-4 text-xs text-teal-400">Central Institute</td>
                    <td className="p-4 font-mono text-teal-300">Top 350 AIR</td>
                    <td className="p-4 font-bold text-white">695 - 702 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹12,000 / year</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">AIIMS Bhopal / Jodhpur</td>
                    <td className="p-4 text-xs text-teal-400">Established AIIMS</td>
                    <td className="p-4 font-mono text-teal-300">Top 900 AIR</td>
                    <td className="p-4 font-bold text-white">688 - 696 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹5,856 total course</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Seth GS Medical College</td>
                    <td className="p-4 text-xs text-cyan-400">Mumbai (KEM Hospital)</td>
                    <td className="p-4 font-mono text-cyan-300">Top 1,200 AIR</td>
                    <td className="p-4 font-bold text-white">682 - 690 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹1.3 Lakhs / year</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Any Peripheral AIIMS</td>
                    <td className="p-4 text-xs text-blue-400">AIIMS Deoghar, Jammu, etc.</td>
                    <td className="p-4 font-mono text-blue-300">Top 5,500 AIR</td>
                    <td className="p-4 font-bold text-white">668 - 675 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">~₹5,856 total course</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Last AIQ Government Seat</td>
                    <td className="p-4 text-xs text-slate-400">Any State GMC</td>
                    <td className="p-4 font-mono text-slate-300">Top 22,000 AIR</td>
                    <td className="p-4 font-bold text-emerald-300">655 Marks</td>
                    <td className="p-4 font-mono text-emerald-400">Subsidized (~₹50k-90k)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Category-Wise Threshold Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-emerald-400" />
              Category-Wise Safe Score Breakdown for Government MBBS (AIQ)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-white font-bold text-lg">General / UR Category</div>
                <div className="text-2xl font-extrabold text-emerald-400">655+ Marks</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Requires 164+ correct answers with fewer than 4 errors. Top 22,000 AIR closing bracket under All India Quota.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-white font-bold text-lg">OBC-NCL & Gen-EWS</div>
                <div className="text-2xl font-extrabold text-teal-400">650 - 652+ Marks</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Very close to General thresholds due to high applicant density. Closing rank typically falls around AIR 23,500.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-white font-bold text-lg">SC & ST Categories</div>
                <div className="text-2xl font-extrabold text-cyan-400">545+ (SC) / 510+ (ST)</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safe score for SC candidates is 545+ (AIR ~1,15,000); safe score for ST candidates is 510+ (AIR ~1,45,000).
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The 3-Round Strategy for Scoring 680+ */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-400" />
              The 680+ Strategy to Build an Impenetrable Score Buffer
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                By targeting 680+ marks, you eliminate the risk of marginal cutoff misses. Here is the realistic performance breakdown across subjects:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-emerald-400 block mb-1">Biology: 355 / 360</strong>
                  89 Correct, 1 Error. NCERT lines, summary boxes, and tables mastered completely.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-teal-400 block mb-1">Chemistry: 165 / 180</strong>
                  42 Correct, 3 Errors. Inorganic pure memory, Organic mechanisms, and balanced Physical numericals.
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <strong className="text-cyan-400 block mb-1">Physics: 162 / 180</strong>
                  41 Correct, 2 Errors, 2 Skipped. Focus on formula accuracy; leave 2 overly complex questions safely.
                </div>
              </div>
              <div className="text-center font-mono font-bold text-emerald-300 text-lg pt-2">
                Total: 355 + 165 + 162 = 682 Marks $\to$ Top 2,500 AIR (Premier Medical College Guaranteed)
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Secure Your AIIMS / Government MBBS Seat With Top Rankers"
            subtitle="Build a personalized preparation plan designed to hit 680+ marks. Connect with AIIMS and top GMC ranker mentors for weekly 1-on-1 strategy sessions."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: Safe Scores for AIIMS & GMCs
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear answers regarding tie-breaking rules, AIQ counseling, and safe score buffers.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Turn Your Medical College Goal Into Reality"
            subtitle="Connect with dedicated AIIMS mentors who will help you audit your mock exams, eliminate negative marks, and hit your 680+ target."
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
