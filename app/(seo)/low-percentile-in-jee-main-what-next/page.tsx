import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
  Compass,
  FileText,
  Target,
  RefreshCw,
  ExternalLink,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Low Percentile in JEE Main (Under 85): What Next? Complete Decision Roadmap & College Options",
  description:
    "Scored under 85 percentile in JEE Main? Explore your 5 strategic next steps: Session 2 turnaround plan, state entrance exams (MHT-CET, WBJEE, COMEDK), private colleges, and drop year decision framework.",
  keywords: [
    "low percentile in jee main what next",
    "scored 70 percentile in jee main what to do",
    "low marks in jee main options",
    "state entrance exams after low jee percentile",
    "should i take drop after low jee score",
    "best career options low jee main score",
  ],
  alternates: {
    canonical: "https://mentskool.com/low-percentile-in-jee-main-what-next",
  },
  openGraph: {
    title: "Low Percentile in JEE Main: Complete Next Step Roadmap",
    description:
      "A compassionate, actionable guide for students scoring under 85 percentile in JEE Main. Detailed exam alternatives, college admission options, and Session 2 recovery strategies.",
    url: "https://mentskool.com/low-percentile-in-jee-main-what-next",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Low Percentile in JEE Main Next Steps - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "Is scoring below 80 percentile in JEE Main the end of my engineering career?",
    answer:
      "Absolutely not. Over 75% of high-earning software developers, startup founders, and tech executives in India graduated from state universities, private colleges, or tier-2/3 technical institutes. While a low percentile eliminates top NITs and IITs for the current cycle, it does not dictate your skills, industry placement opportunities, or future career trajectory.",
  },
  {
    question: "Can I realistically improve from 70 percentile to 95+ percentile in JEE Main Session 2?",
    answer:
      "Yes, hundreds of students achieve this leap every year. The difference between a 70 percentile (approx 45-55 marks) and a 95 percentile (approx 115-130 marks) is roughly 14 to 16 additional correct questions. By shifting your study routine from passive lecture-watching to rigorous PyQ solving, formula retention drills, and strict mock error auditing under personal mentorship, this score gap is entirely bridgeable.",
  },
  {
    question: "Which alternative engineering entrance exams should I register for immediately?",
    answer:
      "You should urgently register for: 1) MHT CET (Maharashtra - high quality colleges like VJTI, COEP, SPIT), 2) COMEDK UGET (Karnataka - RVCE, BMSCE, MSRIT Bangalore with top placement records), 3) WBJEE (West Bengal - Jadavpur University), 4) BITSAT (Pilani, Goa, Hyderabad), and 5) MET Manipal / VITEEE.",
  },
  {
    question: "How do I decide whether to take a drop year or accept an available college?",
    answer:
      "Take a drop year if: 1) You genuinely desire an IIT or top NIT, 2) You know your low score was caused by poor strategy or late preparation rather than lack of aptitude, and 3) You are willing to follow daily accountability and structured mock analysis. Join an available college if: 1) You are already mentally exhausted by competitive exam prep, 2) You prefer to start coding and software projects right away, or 3) You have already completed one drop year.",
  },
  {
    question: "Why do most students fail to improve in their drop year?",
    answer:
      "Most droppers fail because they repeat the exact same passive pattern: buying another expensive video subscription, sitting through 8 hours of lectures daily, and postponing mock tests until the last month. Droppers succeed only when 70% of their daily hours are spent actively solving problems, analyzing weak sub-topics, and submitting daily task updates to a dedicated mentor.",
  },
];

export default function LowPercentileInJeeMainWhatNextPage() {
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
        headline: "Low Percentile in JEE Main (Under 85): What Next? Complete Decision Roadmap & College Options",
        description:
          "Authoritative, multi-path decision guide for students who received a low percentile in JEE Main.",
        url: "https://mentskool.com/low-percentile-in-jee-main-what-next",
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
                label: "Low Percentile What Next",
                href: "/low-percentile-in-jee-main-what-next",
              },
            ]}
          />

          {/* Hero Header */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Compass className="w-4 h-4" />
              Strategic Recovery &amp; Decision Protocol
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Low Percentile in JEE Main:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-brand-400">
                What Next? The 5 Clear Pathways
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              If your JEE Main percentile is below 85, panic is the worst possible reaction. Millions of successful engineers stood in your exact shoes. Explore the 5 concrete paths to turn this moment into a career-defining turnaround.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-amber-500/30 bg-amber-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-amber-300 mb-2">
                  First Principle: Stop Blaming Your Intelligence
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  A low score in JEE Main is rarely an indicator of low intellect; it is almost universally a symptom of <strong className="text-white">poor test-taking strategy, passive learning habits, and zero negative-marking discipline</strong>. Right now, you hold multiple active alternatives that lead to high-paying engineering careers without losing a single year.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: The 5 Strategic Pathways */}
          <section className="mb-16 space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Target className="w-7 h-7 text-brand-400" />
              The 5 Pathways: Choose Your Strategic Next Move
            </h2>

            <div className="space-y-6">
              {/* Pathway 1 */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-brand-400 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-brand-500/20 text-brand-300 flex items-center justify-center text-sm font-mono font-bold">1</span>
                    Launch an Intensive 60-Day Sprint for JEE Main Session 2
                  </h3>
                  <span className="px-3 py-1 rounded bg-brand-500/10 text-brand-300 text-xs font-mono font-bold">High Upside</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If this was your Session 1 attempt, remember that NTA calculates your final All India Rank using your <strong className="text-white">best of two sessions</strong>. You do not need to revise all 90 chapters. Pick the 35 highest-weightage, easiest chapters in Chemistry and Physics. Solving 15 years of PyQs on these chapters alone can catapult your score by 40 to 60 marks, elevating a 72 percentile to a 94+ percentile.
                </p>
                <div className="p-3 rounded-lg bg-slate-800/80 text-xs font-mono text-cyan-300">
                  Action Item: Build a strictly bounded 35-chapter target list. Ban theory-watching; dedicate 75% of your daily study hours to solving 2021-2025 JEE Main PyQs with a stopwatch.
                </div>
              </div>

              {/* Pathway 2 */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-sky-400 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center text-sm font-mono font-bold">2</span>
                    Pivot to High-ROI State Engineering Exams (MHT-CET, WBJEE, COMEDK)
                  </h3>
                  <span className="px-3 py-1 rounded bg-sky-500/10 text-sky-300 text-xs font-mono font-bold">Lower Competition</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  State entrance exams have substantially lower difficulty levels than JEE Main and do not have negative marking in several instances (e.g., MHT CET). Top colleges under these exams boast placement averages that rival or beat mid-tier NITs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-emerald-400 block mb-1">COMEDK UGET (Bangalore)</strong>
                    Colleges like RVCE, BMSCE, and MSRIT host top tech campus drives with average CSE packages exceeding ₹15 LPA.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-sky-400 block mb-1">MHT CET (Maharashtra)</strong>
                    Colleges like VJTI Mumbai, COEP Pune, and SPIT offer premier industry reputation at minimal tuition costs.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400 block mb-1">WBJEE (West Bengal)</strong>
                    Jadavpur University offers legendary ROI with 4-year tuition fees under ₹15,000 and ₹18+ LPA median placements.
                  </div>
                </div>
              </div>

              {/* Pathway 3 */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-teal-400 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center text-sm font-mono font-bold">3</span>
                    Take Private University Entrance Tests (BITSAT, VITEEE, MET)
                  </h3>
                  <span className="px-3 py-1 rounded bg-teal-500/10 text-teal-300 text-xs font-mono font-bold">Speed Oriented</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Exams like BITSAT, Manipal MET, and VITEEE evaluate speed, basic formula recall, and English proficiency rather than deep multi-concept problem decomposition. A student who struggled with multi-concept JEE questions often thrives on rapid single-concept speed tests.
                </p>
              </div>

              {/* Pathway 4 */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-indigo-400 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-sm font-mono font-bold">4</span>
                    Accept a Solid Tier-2/3 College for CSE and Master Skills Early
                  </h3>
                  <span className="px-3 py-1 rounded bg-indigo-500/10 text-indigo-300 text-xs font-mono font-bold">Immediate Career Focus</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Join a respected state college (IPU Delhi, AKTU, REAP, or MP DTE) in Computer Science, Information Technology, or Data Science. Spend your 4 years building open-source projects, mastering Data Structures &amp; Algorithms on LeetCode, and completing internships. Companies like Google, Microsoft, and Amazon hire thousands of off-campus candidates every year strictly based on coding ability.
                </p>
              </div>

              {/* Pathway 5 */}
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-emerald-400 flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-sm font-mono font-bold">5</span>
                    The Structured Drop Year Under 1-on-1 Mentorship
                  </h3>
                  <span className="px-3 py-1 rounded bg-emerald-500/10 text-emerald-300 text-xs font-mono font-bold">Maximum Rank Jump</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If you have a burning desire to study at an IIT or top NIT, taking a dedicated drop year is a proven pathway—provided you avoid the common coaching pitfalls. Droppers succeed when they have a daily mentor auditing their mistake notebook, tracking their mock velocity, and preventing isolation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: What to Avoid */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertOctagon className="w-7 h-7 text-red-400" />
              The 3 Fatal Mistakes to Avoid Right Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-red-400 block text-sm">1. Falling for Fake Direct Admission Scams</strong>
                <p>Never pay donations or 'management quota' deposits to agents claiming to secure government NIT or IIIT seats. Central institutes admit strictly through JoSAA/CSAB merit lists.</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-amber-400 block text-sm">2. Taking a Drop Year Without a Strategy</strong>
                <p>Do not simply enroll in a generic 100-student batch and re-watch theory. If you do not change your daily solving and mock testing routine, your score will remain identical.</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <strong className="text-cyan-400 block text-sm">3. Giving Up on Session 2 Completely</strong>
                <p>Over 35% of candidates who score under 80 percentile in Session 1 quit preparing seriously for Session 2. This mass surrender makes Session 2 easier to jump in percentile if you stay consistent.</p>
              </div>
            </div>
          </section>

          {/* Mentorship Funnel Callout */}
          <SeoMentorFunnel
            examFocus="JEE"
            title="Get an Honest 1-on-1 Profile Evaluation With IIT Mentors"
            subtitle="Don't make hasty college decisions in panic. Talk to IIT Bombay and Delhi graduates who evaluated their own options and can guide you through the optimal next step."
          />

          {/* Section 3: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Low Percentile Next Steps
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Straightforward answers to the most common dilemmas faced by aspirants after receiving low test scores.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Ready to Build Your Turnaround Action Plan?"
            subtitle="Connect with a verified IITian mentor for a 1-on-1 strategy call. Audit your weaknesses, map out alternative exams, and choose your best path forward."
            primaryBtnText="Claim Free Strategy Session"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
