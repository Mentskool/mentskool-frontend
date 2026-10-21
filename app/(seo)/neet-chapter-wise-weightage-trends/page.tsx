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
  Layers,
  PieChart,
  HeartPulse,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Chapter-Wise Weightage: 5-Year Trends in Biology, Chemistry & Physics",
  description:
    "Comprehensive 5-year empirical chapter weightage for NEET UG (2021-2026). Uncover the high-yield units in Botany, Zoology, Chemistry, and Physics, including the 'Golden 25 Chapters' that secure 550+ marks.",
  keywords: [
    "neet chapter wise weightage",
    "neet biology high weightage chapters",
    "genetics weightage in neet",
    "neet chemistry most important chapters",
    "neet physics high yield topics 5 years",
    "golden chapters for neet 600 plus",
    "neet topic wise questions trend",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-chapter-wise-weightage-trends",
  },
  openGraph: {
    title: "NEET Chapter-Wise Weightage Trends (5-Year Forensic Analysis)",
    description:
      "Forensic breakdown of question frequency in NEET UG. Learn how Genetics, Human Physiology, Modern Physics, and Organic Chemistry form the core of a 680+ score.",
    url: "https://mentskool.com/neet-chapter-wise-weightage-trends",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Chapter Weightage - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Which unit carries the absolute highest weightage in NEET Biology?",
    answer:
      "Genetics and Evolution (comprising 'Principles of Inheritance and Variation' and 'Molecular Basis of Inheritance') carries the highest weightage in NEET Biology, consistently generating between 18 and 22 questions (72 to 88 marks). Over 20% of your total Biology score depends directly on mastering these two chapters.",
  },
  {
    question: "What are the most scoring, formula-direct units in NEET Physics?",
    answer:
      "Modern Physics (Dual Nature, Atoms, Nuclei, and Semiconductor Electronics) and Current Electricity collectively provide 12 to 15 direct questions (48 to 60 marks). These questions feature minimal algebraic manipulation compared to complex Mechanics problems, making them the highest-ROI topics for medical aspirants.",
  },
  {
    question: "What is the 'Golden 25 Chapters' strategy for NEET?",
    answer:
      "The Golden 25 Chapters are the 25 highest-yielding topics across Biology (12 chapters), Chemistry (7 chapters), and Physics (6 chapters) that historically generate over 140 out of the 180 questions on the paper. Perfecting these 25 topics guarantees a baseline score of 550+ marks before attempting more complex or peripheral areas.",
  },
  {
    question: "How important is NCERT line-by-line reading for NEET Chemistry?",
    answer:
      "For Inorganic Chemistry (Chemical Bonding, Coordination Compounds, p-block/d-block) and Organic Chemistry, 100% of questions are derived directly from NCERT text, reaction tables, and end-of-chapter exemplar problems. External coaching study packages are largely unnecessary if NCERT is thoroughly memorized.",
  },
  {
    question: "How many questions does Human Physiology contribute in NEET?",
    answer:
      "Human Physiology (Breathing, Body Fluids, Excretion, Locomotion, and Neural/Chemical Coordination) consistently accounts for 12 to 14 questions (48 to 56 marks), making it the second most critical unit in Zoology.",
  },
];

export default function NeetChapterWiseWeightageTrendsPage() {
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
        headline: "NEET Chapter-Wise Weightage: 5-Year Trends in Biology, Chemistry & Physics",
        description:
          "Authoritative 5-year empirical analysis of question distribution in NEET UG from 2021 to 2026, revealing high-yield chapters and high-efficiency revision strategies.",
        url: "https://mentskool.com/neet-chapter-wise-weightage-trends",
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
                label: "NEET Chapter-Wise Weightage",
                href: "/neet-chapter-wise-weightage-trends",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <PieChart className="w-4 h-4" />
              5-Year NTA Question Paper Audit (2021–2026)
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              NEET Chapter-Wise Weightage:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                5-Year Trends in Biology, Chemistry & Physics
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Scoring 680+ in NEET requires tactical precision. By auditing every single question across the last five exam cycles, we have mapped the exact question yield per chapter so you can channel your revision into high-weightage topics first.
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
                  The Foundation: 4 Super-Units That Command 320+ Marks
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Four super-units—<strong className="text-white">Genetics & Biotechnology</strong> (28-32 Qs), <strong className="text-white">Human & Plant Physiology</strong> (22-26 Qs), <strong className="text-white">Organic Chemistry Functional Groups</strong> (15-18 Qs), and <strong className="text-white">Modern Physics & Electrodynamics</strong> (16-20 Qs)—account for more than <strong className="text-emerald-300">85 questions</strong> (340+ marks). Mastering these four pillars is the fastest way to build an unshakeable score foundation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Biology Chapter Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-emerald-400" />
              Biology 5-Year Weightage & Question Yield (360 Marks Total)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Unit / Domain</th>
                    <th className="p-4">Key Chapters Included</th>
                    <th className="p-4">Avg. Questions</th>
                    <th className="p-4">Marks Yield</th>
                    <th className="p-4">Priority Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Genetics & Evolution</td>
                    <td className="p-4">Principles of Inheritance + Molecular Basis of Inheritance + Evolution</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">18 - 22 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">72 - 88 Marks</td>
                    <td className="p-4 text-xs font-bold text-emerald-400">Highest Yield in Exam</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Human Physiology</td>
                    <td className="p-4">Breathing, Circulation, Excretion, Locomotion, Neural & Chemical Coordination</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">12 - 14 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">48 - 56 Marks</td>
                    <td className="p-4 text-xs font-bold text-emerald-400">Essential Clinical Core</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Ecology & Environment</td>
                    <td className="p-4">Organisms & Populations, Ecosystem, Biodiversity & Conservation</td>
                    <td className="p-4 font-mono text-cyan-300">10 - 12 Qs</td>
                    <td className="p-4 text-cyan-300">40 - 48 Marks</td>
                    <td className="p-4 text-xs text-emerald-400">High-scoring direct memory recall</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Biotechnology</td>
                    <td className="p-4">Principles and Processes + Applications in Health and Agriculture</td>
                    <td className="p-4 font-mono text-cyan-300">8 - 10 Qs</td>
                    <td className="p-4 text-cyan-300">32 - 40 Marks</td>
                    <td className="p-4 text-xs text-emerald-400">Concise chapters with very high yield</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Cell Biology & Division</td>
                    <td className="p-4">Cell: The Unit of Life + Biomolecules + Cell Cycle & Cell Division</td>
                    <td className="p-4 font-mono text-cyan-300">8 - 10 Qs</td>
                    <td className="p-4 text-cyan-300">32 - 40 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Fundamental conceptual foundation</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Plant Physiology</td>
                    <td className="p-4">Photosynthesis, Respiration in Plants, Plant Growth & Development</td>
                    <td className="p-4 font-mono text-slate-300">7 - 9 Qs</td>
                    <td className="p-4 text-slate-300">28 - 36 Marks</td>
                    <td className="p-4 text-xs text-amber-300">Requires cycle diagram mastery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Chemistry Chapter Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-teal-400" />
              Chemistry 5-Year Weightage & Question Yield (180 Marks Total)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Chemistry Branch</th>
                    <th className="p-4">High-Yield Units</th>
                    <th className="p-4">Avg. Questions</th>
                    <th className="p-4">Marks Yield</th>
                    <th className="p-4">Preparation Rule</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-emerald-400">Organic Chemistry</td>
                    <td className="p-4">Aldehydes, Ketones, Carboxylic Acids, Amines, Hydrocarbons, Biomolecules</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">16 - 18 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">64 - 72 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Name reactions, acidic strengths, reagent functions.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-cyan-400">Inorganic Chemistry</td>
                    <td className="p-4">Chemical Bonding, Coordination Compounds, Periodic Table, d & f Block</td>
                    <td className="p-4 font-mono text-cyan-300">14 - 16 Qs</td>
                    <td className="p-4 text-cyan-300">56 - 64 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Pure NCERT memorization; hybridization, CFT, isomerism.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-teal-400">Physical Chemistry</td>
                    <td className="p-4">Solutions, Electrochemistry, Chemical Kinetics, Thermodynamics, Equilibrium</td>
                    <td className="p-4 font-mono text-teal-300">13 - 15 Qs</td>
                    <td className="p-4 text-teal-300">52 - 60 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Formula substitution; Section B numericals focus.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Physics Chapter Breakdown */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="w-7 h-7 text-cyan-400" />
              Physics 5-Year Weightage & Question Yield (180 Marks Total)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Unit / Module</th>
                    <th className="p-4">Core Chapters Included</th>
                    <th className="p-4">Avg. Questions</th>
                    <th className="p-4">Marks Yield</th>
                    <th className="p-4">Strategic Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-emerald-400">Modern Physics & Semiconductors</td>
                    <td className="p-4">Dual Nature, Atoms, Nuclei, Semiconductor Diodes & Logic</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">8 - 10 Qs</td>
                    <td className="p-4 font-bold text-emerald-400">32 - 40 Marks</td>
                    <td className="p-4 text-xs text-emerald-400">Direct formula substitution with minimal calculation.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-cyan-400">Current & Magnetism</td>
                    <td className="p-4">Current Electricity, Moving Charges, Magnetism and Matter</td>
                    <td className="p-4 font-mono text-cyan-300">6 - 8 Qs</td>
                    <td className="p-4 text-cyan-300">24 - 32 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Ohm’s law, Biot-Savart, Ampere’s Law circuits.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-teal-400">Optics & Waves</td>
                    <td className="p-4">Ray Optics, Wave Optics (Interference, Diffraction)</td>
                    <td className="p-4 font-mono text-teal-300">4 - 5 Qs</td>
                    <td className="p-4 text-teal-300">16 - 20 Marks</td>
                    <td className="p-4 text-xs text-slate-300">Lens maker formula, prism angle, YDSE fringes.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-300">Thermal Physics</td>
                    <td className="p-4">Thermal Properties, Thermodynamics, Kinetic Theory</td>
                    <td className="p-4 font-mono text-slate-300">3 - 4 Qs</td>
                    <td className="p-4 text-slate-300">12 - 16 Marks</td>
                    <td className="p-4 text-xs text-slate-300">First Law, Carnot engines, heat transfer.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-slate-400">Mechanics Core</td>
                    <td className="p-4">Kinematics, Laws of Motion, Work Power Energy, Gravitation</td>
                    <td className="p-4 font-mono text-slate-400">8 - 10 Qs</td>
                    <td className="p-4 text-slate-400">32 - 40 Marks</td>
                    <td className="p-4 text-xs text-amber-300">High syllabus volume; focus on gravitation and work-energy.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="NEET"
            title="Build Your High-Yield Revision Schedule With AIIMS Mentors"
            subtitle="Prioritize the highest-yielding chapters in Biology, Chemistry, and Physics. Get 1-on-1 guidance from top medical mentors who scored 680+ to streamline your daily study plan."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-emerald-400" />
                Frequently Asked Questions: NEET Chapter Weightage
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Expert insights on high-yield chapters, syllabus prioritization, and effective revision.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Focus on High-Yield Topics and Boost Your Score"
            subtitle="Connect with dedicated AIIMS mentors who will help you design a customized revision calendar focused on high-weightage chapters."
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
