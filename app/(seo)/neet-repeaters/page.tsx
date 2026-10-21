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
  HeartPulse,
  Dna,
  RefreshCw,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "NEET Repeaters & Droppers Mentorship Program — 680+ Turnaround Guide",
  description:
    "Taking a drop year for NEET? Don't repeat the same mistakes. Get 1-on-1 mentorship from verified AIIMS New Delhi and premier GMC rankers who conquered the medical drop year. 11.5-hour daily timetable, NCERT active recall, and mock test post-mortems.",
  keywords: [
    "NEET repeater mentorship",
    "NEET dropper mentorship program",
    "how to clear NEET in drop year",
    "NEET repeater timetable",
    "NEET dropper strategy 680 marks",
    "AIIMS mentor for NEET repeaters",
    "best mentorship for NEET droppers",
  ],
  alternates: {
    canonical: "https://mentskool.com/neet-repeaters",
  },
  openGraph: {
    title: "NEET Repeaters Mentorship: Turn Your Drop Year into a 680+ GMC Seat",
    description:
      "Overcoming drop-year isolation, fixing negative marking, and mastering NCERT with verified AIIMS doctors.",
    url: "https://mentskool.com/neet-repeaters",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "NEET Repeaters Mentorship - Mentskool",
      },
    ],
  },
};

const repeaterFaqs: FaqItem[] = [
  {
    question: "Why do so many NEET repeaters score the exact same marks in their drop year?",
    answer:
      "Because they repeat the same passive study habits. Most droppers re-enroll in coaching and spend 6 hours every day watching teachers re-explain the same basic theory they already studied in Class 11 and 12. By evening, they are mentally exhausted and solve zero self-directed problems. In a drop year, your focus must be 80% problem solving and test post-mortems, and only 20% targeted theory revision.",
  },
  {
    question: "How does having an AIIMS doctor mentor help during a drop year?",
    answer:
      "A drop year is psychologically brutal: friends have moved to college, social isolation sets in, and parents' expectations create intense anxiety. An AIIMS mentor who personally navigated and conquered this pressure provides continuous emotional reassurance, weekly timetable accountability, and forensic audits of your mock test mistakes.",
  },
  {
    question: "How many questions should a NEET repeater solve every day?",
    answer:
      "We mandate between 110 and 140 self-solved questions daily across Biology (50–60), Chemistry (35–40), and Physics (30–35). Solving targeted PYQs under timed conditions builds the rapid cognitive reflex needed inside the exam hall.",
  },
  {
    question: "Can a dropper who scored 480 marks last year reach 660+ in one year?",
    answer:
      "Yes. A score of 480 means you already have foundational awareness of the syllabus. You lost 180+ marks due to negative marking, weak Physics numericals, and lack of NCERT active recall. With structured 1:1 error elimination, score jumps of 150 to 180 marks in a drop year are standard across Mentskool mentees.",
  },
  {
    question: "How does Mentskool support NEET repeaters compared to offline dropper batches?",
    answer:
      "Offline dropper batches crowd 150+ repeaters into a single room with zero individualized feedback. At Mentskool, every repeater gets an assigned 1:1 AIIMS mentor who audits their rough sheets, sets customized daily task quotas on our web dashboard, and ensures they never feel alone in their journey.",
  },
];

export default function NeetRepeatersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's premier 1-on-1 mentorship platform for medical entrance repeaters and droppers.",
      },
      {
        "@type": "Course",
        name: "NEET Repeaters & Droppers 680+ Turnaround Program",
        description:
          "Comprehensive 1-on-1 drop-year coaching program with AIIMS doctors, 11.5-hour timetables, and weekly mock post-mortems.",
        provider: {
          "@type": "Organization",
          name: "Mentskool",
          sameAs: "https://mentskool.com",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: repeaterFaqs.map((faq) => ({
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
                label: "NEET Repeaters",
                href: "/neet-repeaters",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-4">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Dedicated Drop-Year Medical Turnaround Engine</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              NEET Repeaters Mentorship: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Turn Your Drop Year into a 680+ GMC Seat</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              A drop year is your second chance, not a punishment. Stop repeating the same passive lecture habits. Work 1-on-1 with an <strong>AIIMS New Delhi ranker</strong> who turns your drop year into a high-discipline, 680+ score masterclass.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Find Your Drop-Year AIIMS Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Drop-Year Audit
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Executive Summary: The Mentskool Drop-Year Turnaround Strategy</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool NEET Repeaters Mentorship Program</strong> is engineered specifically for droppers aiming to leap from 480–540 marks to 660+ Government Medical College seats:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>The 80/20 Problem-Solving Rule:</strong> Shift from passive 6-hour lecture watching to 80% daily timed question drills and mistake log auditing.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Isolation &amp; Mental Stamina Shield:</strong> Weekly 1:1 strategy calls with an AIIMS senior who conquered drop-year depression and anxiety.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>Forensic Mock Test Post-Mortems:</strong> Inspect rough work and OMR sheets to systematically eliminate 40+ careless negative marks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span><strong>94% Daily Task Accountability:</strong> Submit daily problem quotas across Physics, Chemistry, and Biology on our web dashboard every evening.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The 4 Stages of a Medical Drop Year */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  <HeartPulse className="w-6 h-6 text-rose-400" />
                  The 4 Psychological Stages of a Medical Drop Year
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  Surviving and winning a drop year requires navigating predictable emotional traps that cause 70% of repeaters to falter:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-emerald-400 font-bold text-sm uppercase mb-1">Months 1–3: High Energy &amp; Determination</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    You feel energized to prove everyone wrong. You buy new notebooks and resolve to study 14 hours every day. Your mentor channels this energy into rapid backlog elimination and high-yield chapter lockdowns.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-amber-400 font-bold text-sm uppercase mb-1">Months 4–6: The Isolation Valley &amp; Fatigue</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Social media shows friends enjoying college life. Festive seasons arrive, and doubt creeps in. Your AIIMS mentor acts as your psychological anchor, maintaining daily routine momentum.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-rose-400 font-bold text-sm uppercase mb-1">Months 7–9: The Mock Score Plateau Panic</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Scores plateau around 550 marks. Panic sets in: &quot;What if I fail again?&quot; Your mentor conducts rough-sheet post-mortems, eliminating negative marks to unlock the jump past 640+.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-sky-400 font-bold text-sm uppercase mb-1">Final 60 Days: Peak Performance &amp; Calm</div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Full-length test conditioning matching exact 2:00 PM to 5:20 PM exam hours. Flawless OMR execution and supreme confidence inside the exam hall.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Section 2: Battle-Tested Repeater Daily Timetable */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 11.5-Hour Medical Repeater Daily Schedule
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Designed by AIIMS toppers to balance deep problem solving, active NCERT revision, and essential mental recovery:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-emerald-400 uppercase">Morning Sprints</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li><strong>06:00 - 06:30:</strong> Wake up, light yoga/fresh air, Botany flashcard review.</li>
                  <li><strong>06:30 - 09:30:</strong> <strong>Slot 1 (Physics Deep Work):</strong> 40 numericals with timer; rough sheet tracking.</li>
                  <li><strong>09:30 - 10:30:</strong> Healthy breakfast, sunlight exposure.</li>
                  <li><strong>10:30 - 01:30:</strong> <strong>Slot 2 (Biology NCERT Forensic Pass):</strong> 2 chapters in-depth + 100 line-by-line MCQs.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-base font-bold text-teal-400 uppercase">Afternoon &amp; Evening Sprints</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <li><strong>01:30 - 03:00:</strong> Lunch, 30-min power nap (restores cognitive focus).</li>
                  <li><strong>03:00 - 06:00:</strong> <strong>Slot 3 (Chemistry Mastery):</strong> Physical chemistry numerics + Organic mechanism flowcharts.</li>
                  <li><strong>06:00 - 07:00:</strong> Exercise, fresh air, evening tea.</li>
                  <li><strong>07:00 - 09:30:</strong> <strong>Slot 4 (Mistake Book &amp; Backlog Slot):</strong> Updating error logs and re-attempting missed questions.</li>
                  <li><strong>09:30 - 10:30:</strong> Dinner + log daily metrics on Mentskool dashboard; lights out.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={repeaterFaqs}
              title="Frequently Asked Questions: NEET Repeaters Mentorship"
              subtitle="Everything you need to know about drop-year strategy, score turnaround, and 1:1 doctor guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Turn Your Drop Year into an AIIMS / GMC Success Story"
              description="Get paired 1-on-1 with an AIIMS doctor who will build your daily timetable, audit your NCERT lines, and guide your mock tests every single week."
              primaryButtonText="Find Your Medical Repeater Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
