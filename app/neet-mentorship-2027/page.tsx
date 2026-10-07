import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  BookOpen,
  HeartPulse,
  Award,
  AlertTriangle,
  Flame,
  CheckSquare,
  BarChart3,
  Dna,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET 2027 Mentorship Program — Roadmap to 680+ & AIIMS Doctor Guidance",
  description:
    "Targeting NEET-UG 2027? Get dedicated 1-on-1 mentorship from top AIIMS & premier GMC rankers. Month-by-month NCERT blueprint, high-yield chapter matrix, daily time-blocking timetables, and 680+ score strategy.",
  keywords: [
    "NEET 2027 mentorship",
    "NEET 2027 study plan with mentor",
    "NEET 2027 roadmap to 680",
    "NEET 2027 high weightage chapters",
    "NEET dropper mentorship 2027",
    "1 on 1 NEET personal mentor",
    "AIIMS doctor mentorship for NEET",
    "best mentor for NEET 2027",
    "NEET 2027 timetable for repeaters",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-mentorship-2027",
  },
  openGraph: {
    title: "NEET 2027 Mentorship Program: Roadmap to 680+ & AIIMS 1:1 Guidance",
    description:
      "Master NCERT line-by-line, eliminate Physics numerical anxiety, and systematically target a Government Medical College seat with dedicated AIIMS mentors.",
    url: "https://mentskool.com/neet-mentorship-2027",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET 2027 Mentorship - Mentskool",
      },
    ],
  },
};

const neet2027Faqs: FaqItem[] = [
  {
    question: "When is NEET-UG 2027 scheduled by NTA?",
    answer:
      "NTA conducts the National Eligibility cum Entrance Test (NEET-UG) annually on the first Sunday of May (tentatively May 2–3, 2027). While official notification is released around February, medical aspirants who secure top Government Medical College (GMC) seats start structured revision and full-syllabus mock testing at least 6 months prior to the exam date.",
  },
  {
    question: "How can I score 350+ out of 360 in NEET Biology with a mentor?",
    answer:
      "Scoring 350+ in Biology requires moving past passive reading of NCERT. Your AIIMS mentor enforces our '3-Pass NCERT Active Recall' protocol: Pass 1 maps every diagram, scientist preamble, and footnote; Pass 2 builds fill-in-the-blank flashcards for tricky numerical data (e.g., cell cycle durations, gene numbers); Pass 3 drills assertion-reason and statement-based questions under strict 40-minute timed conditions.",
  },
  {
    question: "How do Mentskool mentors help with NEET Physics anxiety?",
    answer:
      "Physics is the deciding rank maker for medical students. Most aspirants struggle because they attempt advanced multiconcept questions before mastering formula applications. Your mentor isolates the 14 high-yield NEET Physics chapters (Modern Physics, Current Electricity, Optics, Thermal Physics) and trains you on structured problem templates so you solve 40+ Physics questions with zero panic.",
  },
  {
    question: "Can NEET repeaters / droppers target 680+ within one year?",
    answer:
      "Absolutely. Over 68% of candidates in premier GMCs are repeaters. In a drop year, your primary challenge is not learning theory from scratch; it is eliminating recurring silly mistakes, negative marking, and psychological burnout. A dedicated AIIMS mentor conducts weekly test post-mortems to systematically convert your 500-mark score into 660+.",
  },
  {
    question: "How many hours of self-study are necessary for NEET 2027?",
    answer:
      "For droppers, 10 to 12 disciplined hours daily (broken into four 2.5-hour deep work slots) is the golden standard. For regular school-going Class 12 students, 5.5 to 6.5 focused self-study hours daily alongside coaching lectures guarantees complete syllabus coverage without compromising CBSE board examinations.",
  },
  {
    question: "Does Mentskool assist with NEET test series error analysis?",
    answer:
      "Yes. Taking mock tests without auditing errors is pointless. After every test (Allen, Aakash, PW, or New Light), your mentor inspects your OMR rough work, categorizing lost marks into factual slips, calculation errors, or misread questions. We build a personalized correction drill for your next weekly cycle.",
  },
  {
    question: "How often will I interact 1-on-1 with my AIIMS doctor mentor?",
    answer:
      "You receive weekly private 1-on-1 Google Meet strategy and audit calls. In addition, you log daily chapter tasks and question counts on the Mentskool student dashboard, where your mentor checks your progress and verifies your 94% efficiency rating every evening.",
  },
  {
    question: "What is Mentskool's policy on mentor switching and fees?",
    answer:
      "Mentskool operates on completely transparent monthly subscriptions with zero multi-year lock-in fees. If you ever feel your mentor's teaching temperament does not align with your study rhythm, you can request an instant mentor re-match with zero penalties.",
  },
];

export default function NeetMentorship2027Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for NEET-UG aspirants paired with verified AIIMS and top Government Medical College rankers.",
      },
      {
        "@type": "Course",
        name: "NEET 2027 1-on-1 Mentorship & 680+ Score Blueprint",
        description:
          "Comprehensive medical entrance coaching program with AIIMS mentors, 3-Pass NCERT mastery, Physics numerical rescue, and weekly mock test post-mortems.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: neet2027Faqs.map((faq) => ({
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
                label: "NEET 2027 Mentorship",
                href: "/neet-mentorship-2027",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <Dna className="w-3.5 h-3.5" />
              <span>Target NEET-UG 2027 Cohort — The Definitive Medical Roadmap</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET 2027 Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">The 680+ Blueprint with AIIMS Rankers</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              With competition skyrocketing past 23 lakh medical aspirants, mere rote memorization will not secure a Government Medical College seat. Learn the exact 1-on-1 strategy used by <strong>AIIMS New Delhi &amp; top GMC doctors</strong> to master NCERT, conquer Physics, and eliminate negative marks.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free 1:1 Medical Strategy Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: What Is The Mentskool NEET 2027 Strategy?</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET 2027 Mentorship Program</strong> is an end-to-end guidance engine connecting aspirants directly with doctors and toppers from AIIMS New Delhi, JIPMER, and top Government Medical Colleges. The program is built on 4 pillars designed specifically for medical cutoffs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 3-Pass NCERT Active Recall:</strong> Systematic mastery of line-by-line Biology and Inorganic Chemistry without passive rereading.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Physics Numerical Confidence Engine:</strong> Step-by-step formula mapping and template problem solving across 14 high-scoring chapters.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>OMR &amp; Negative Marking Eradication:</strong> Dissecting every mock test mistake to eradicate the 40+ marks typically lost to silly misreads.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Verified Daily Accountability:</strong> Dedicated web dashboard tracking daily question quotas with strict 30-student cohort caps per mentor.</span>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 1: The Cutoff Reality & Target Scores */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <HeartPulse className="w-6 h-6 text-rose-400" />
                  1. The NEET 2027 Reality: Why You Need 650+ For a Government Medical Seat
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  In previous years, a score of 580 was sufficient to secure a state quota GMC seat. Today, due to massive competition and standardized NCERT papers, general category cutoffs in premier states (Delhi, Rajasthan, UP, Bihar, Kerala) consistently hover between 645 and 665 marks.
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                  Here is the exact mark distribution your AIIMS mentor helps you engineer:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-emerald-400 mb-1">350 - 360 / 360</div>
                  <div className="text-sm font-semibold text-white">Biology (Botany + Zoology)</div>
                  <p className="text-xs text-slate-400 mt-2">
                    Must be finished in 40–45 minutes during the exam. Full NCERT mastery is non-negotiable; zero conceptual mistakes allowed.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-sky-400 mb-1">160 - 170 / 180</div>
                  <div className="text-sm font-semibold text-white">Chemistry (Physical, Organic, Inorganic)</div>
                  <p className="text-xs text-slate-400 mt-2">
                    Inorganic from NCERT tables; Organic via named mechanisms; Physical through high-speed formula substitution drills.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <div className="text-2xl font-black text-amber-400 mb-1">150 - 165 / 180</div>
                  <div className="text-sm font-semibold text-white">Physics (The Rank Decider)</div>
                  <p className="text-xs text-slate-400 mt-2">
                    Conquering 38–42 questions without negative marking guarantees an All India Rank well within top 3,000 nationwide.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Deep Guide Section 2: High-Yield Chapter Matrix */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                NEET 2027 Subject Priority &amp; Chapter Matrix
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Prioritize the chapters that guarantee the bulk of your 720 marks. Your mentor structures your weekly study sheets based on this triage.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Subject</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">High-Yield Core (Must Score 100%)</th>
                    <th className="py-4 px-4 sm:px-6 text-sky-400">Moderate Yield (High Consistency)</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Tricky / Negative Mark Traps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Biology</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Genetics &amp; Evolution (12–15 Qs)</li>
                        <li>Human Physiology (10–12 Qs)</li>
                        <li>Ecology &amp; Environment (8–10 Qs)</li>
                        <li>Biotechnology &amp; Applications (6–8 Qs)</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Cell Biology &amp; Cell Division</li>
                        <li>Plant Physiology (Photosynthesis, Respiration)</li>
                        <li>Reproduction in Organisms &amp; Humans</li>
                        <li>Microbes in Human Welfare</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Plant Kingdom (Complex taxonomy examples)</li>
                        <li>Animal Kingdom (Tricky phylum features)</li>
                        <li>Morphology of Flowering Plants (Family diagrams)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Chemistry</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Coordination Compounds &amp; Bonding</li>
                        <li>GOC, Hydrocarbons &amp; Biomolecules</li>
                        <li>Solutions &amp; Chemical Kinetics</li>
                        <li>Periodic Table &amp; d/f-Block Elements</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Aldehydes, Ketones &amp; Carboxylic Acids</li>
                        <li>Electrochemistry &amp; Thermodynamics</li>
                        <li>Equilibrium (Chemical + simple Ionic)</li>
                        <li>Atomic Structure &amp; Mole Concept</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Complex Ionic Equilibrium buffer calculations</li>
                        <li>Multi-step Organic synthesis with minor products</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Physics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Modern Physics (Dual Nature, Atoms, Nuclei)</li>
                        <li>Current Electricity &amp; Semiconductors</li>
                        <li>Thermal Physics (Heat transfer, Thermodynamics)</li>
                        <li>Units, Dimensions &amp; Gravitation</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Ray Optics &amp; Wave Optics</li>
                        <li>Electrostatics &amp; Capacitors</li>
                        <li>Work, Energy, Power &amp; Kinematics</li>
                        <li>Magnetic Effects of Current</li>
                      </ul>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Rotational Motion (Complex inertia &amp; rolling)</li>
                        <li>Fluid Mechanics &amp; Wave motion equations</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep Guide Section 3: The 3-Pass NCERT Methodology */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 3-Pass NCERT Active Recall System
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Developed by AIIMS New Delhi toppers to eliminate &quot;illusion of competence&quot; caused by passive highlighting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Pass 1: Line Audit
                </div>
                <h3 className="text-lg font-bold text-white">Deep Forensic Read</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Read every page actively. Pay intense attention to summary sections, diagram labels, scientist biographies at unit beginnings, and footnotes where NTA frequently conceals twist questions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  Pass 2: Active Recall
                </div>
                <h3 className="text-lg font-bold text-white">Closed-Book Verification</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Close the textbook. Recreate the diagram pathways, enzyme names, and cycle phases onto blank paper. Your mentor verifies your handwritten recall sheets during your weekly 1:1 call.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  Pass 3: Assertion-Reason Drills
                </div>
                <h3 className="text-lg font-bold text-white">Statement-Based Pressure</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Solve 100+ statement-based questions per chapter. Learn the precise distinction between &quot;both statements are correct&quot; vs &quot;Statement II is the correct explanation of Statement I&quot;.
                </p>
              </div>
            </div>
          </section>

          {/* Deep Guide Section 4: Daily Timetables for Repeaters & Class 12 */}
          <section className="my-16">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Battle-Tested Daily Timetables for NEET 2027
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Designed to maintain optimal mental endurance and consistent 3-subject daily rotation without burnout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Repeater Schedule */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>NEET Repeater / Full-Time Drop Year (11.5 Study Hours)</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">The AIIMS Ranker Dropper Routine</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">06:00 - 06:30</span>
                    <span>Wake up, light stretching, review Botany flashcards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">06:30 - 09:30</span>
                    <span><strong>Slot 1 (Physics Problem Solving):</strong> 40 numericals with countdown timer; rough sheet tracking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">09:30 - 10:30</span>
                    <span>Healthy breakfast, walk in morning sun.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">10:30 - 01:30</span>
                    <span><strong>Slot 2 (Biology NCERT Forensic Pass):</strong> 2 chapters in-depth + 100 line-by-line MCQs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">01:30 - 03:00</span>
                    <span>Lunch, 30-minute cognitive recharge power nap.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">03:00 - 06:00</span>
                    <span><strong>Slot 3 (Chemistry Deep Work):</strong> Organic reaction charts or Physical chemistry numerical sets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">06:00 - 07:00</span>
                    <span>Exercise, fresh air, evening tea.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">07:00 - 09:30</span>
                    <span><strong>Slot 4 (Mock Test Post-Mortem / Backlog Slot):</strong> Updating Mistake Book and re-solving missed questions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-emerald-400 font-bold w-24 shrink-0">09:30 - 10:30</span>
                    <span>Dinner + log daily metrics on Mentskool dashboard; mentor review.</span>
                  </li>
                </ul>
              </div>

              {/* Class 12 Schedule */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Class 12 School + Coaching Routine (6.5 Self-Study Hours)</span>
                </div>
                <h3 className="text-xl font-extrabold text-white">The School &amp; Board-Synchronized Schedule</h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">06:00 - 07:30</span>
                    <span><strong>Morning Memory Slot:</strong> Inorganic Chemistry tables or Biology NCERT summary read.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">08:00 - 02:00</span>
                    <span>School (use library periods to complete board NCERT back exercises).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">02:30 - 04:00</span>
                    <span>Lunch, short rest, travel/setup for coaching classes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">04:00 - 07:30</span>
                    <span>Coaching lectures (Allen, Aakash, PW).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">07:30 - 08:15</span>
                    <span>Recharge, light dinner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">08:15 - 10:45</span>
                    <span><strong>Self-Study Practice Slot:</strong> Solve 50 MCQs directly related to today&apos;s coaching topics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">10:45 - 11:45</span>
                    <span><strong>Class 11 Revision Slot:</strong> Solve 20 questions of Class 11 Biology/Physics assigned by mentor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-mono text-teal-400 font-bold w-24 shrink-0">11:45 - 12:00</span>
                    <span>Submit daily problem count on Mentskool dashboard; sleep.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={neet2027Faqs}
              title="Frequently Asked Questions: NEET 2027 Mentorship"
              subtitle="Everything you need to know about exam dates, 680+ scoring strategies, and 1:1 AIIMS guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Claim Your Government Medical College Seat in NEET 2027"
              description="Work 1-on-1 with an AIIMS doctor who will build your daily timetable, audit your NCERT lines, and guide your mock tests. Flexible month-to-month plan."
              primaryButtonText="Browse Verified Medical Mentors"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
