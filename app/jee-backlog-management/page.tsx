import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  AlertOctagon,
  BookOpen,
  TrendingUp,
  AlertTriangle,
  Flame,
  BarChart2,
  ListOrdered,
  Calendar,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "JEE Backlog Management & Elimination Guide — The 3-Box Framework",
  description:
    "Struggling with huge backlogs in JEE Main & Advanced? Learn the proven 3-Box Backlog Framework used by IIT Bombay & Delhi rankers. Clear Class 11 and 12 backlogs without dropping ongoing coaching classes.",
  keywords: [
    "JEE backlog management",
    "how to clear backlog in JEE",
    "class 11 backlog in class 12 JEE",
    "clear JEE backlogs with mentor",
    "best way to cover backlog for JEE Mains",
    "JEE dependency chapters",
    "JEE backlog elimination strategy",
  ],
  alternates: {
    canonical: "https://mentskool.com/jee-backlog-management",
  },
  openGraph: {
    title: "JEE Backlog Management: The 3-Box Framework for IIT Aspirants",
    description:
      "Stop the panic. Discover how to isolate prerequisites, protect ongoing lectures, and systematically recover Class 11 & 12 backlogs with 1-on-1 IITian guidance.",
    url: "https://mentskool.com/jee-backlog-management",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Backlog Management - Mentskool",
      },
    ],
  },
};

const backlogFaqs: FaqItem[] = [
  {
    question: "What is the biggest mistake students make when trying to clear JEE backlogs?",
    answer:
      "The fatal mistake is what IITians call the 'Fresh Start Fallacy': students stop attending ongoing coaching lectures for 2–3 weeks believing they will first finish all past backlogs. In reality, while they try to clear 3 old chapters, coaching covers 4 new chapters, transforming a manageable backlog into an unrecoverable snowball. The golden rule is: never sacrifice today's class for yesterday's backlog.",
  },
  {
    question: "What is the 3-Box Backlog Elimination Framework?",
    answer:
      "Our mentors categorize your pending chapters into 3 distinct operational boxes: Box 1 (Strict Prerequisites) chapters needed to understand ongoing lectures (e.g., Vectors, Mole Concept, Basic Trigonometry); Box 2 (High-Yield Standalone) chapters worth 8–16 guaranteed marks that don't depend on other topics (e.g., Modern Physics, Matrices, Coordination Compounds); Box 3 (Low-Yield Quarantined) lengthy chapters that consume 30+ hours for barely 4 marks (e.g., Fluids, complex Inorganic metallurgy) which are quarantined until revision month.",
  },
  {
    question: "How much time should I allocate daily to backlog clearance?",
    answer:
      "We enforce the 75/25 Rule. 75% of your daily self-study time must strictly belong to today's coaching homework and problem practice. The remaining 25% (typically a dedicated 90-to-120-minute daily slot) is cordoned off exclusively for your assigned backlog target.",
  },
  {
    question: "Should I watch 8-hour one-shot YouTube lectures for backlog chapters?",
    answer:
      "No. Passive 8-hour video marathons provide an illusion of productivity but produce zero problem-solving ability. In JEE Mains and Advanced, rank comes from solving questions yourself. Under our mentorship, you read concise mentor summary notes, review 10 solved illustrations, and immediately attempt 25–30 PYQs with a timer.",
  },
  {
    question: "How do I clear massive Class 11 backlogs while in Class 12?",
    answer:
      "In Class 12, mentors map the exact dependency bridge: only complete the Class 11 chapters that directly feed into Class 12 (e.g., Mechanics basics for Electrostatics, Chemical Bonding and GOC for 12th Organic, Functions and Limits for Calculus). Purely standalone Class 11 topics (like Thermal Physics, Waves, or Conic Sections) are scheduled in dedicated weekend sprints.",
  },
  {
    question: "How does a Mentskool mentor track my backlog recovery?",
    answer:
      "Your mentor gives you a granular weekly Backlog Roadmap sheet. Every evening, you log solved problem counts and chapter checkpoints into your Mentskool dashboard. On your weekly 1:1 Google Meet call, your mentor tests your conceptual grasp on completed backlog chapters before unlocking the next set.",
  },
  {
    question: "Can I still score 99 percentile in JEE if I have 40% backlog right now?",
    answer:
      "Yes. JEE Main only requires scoring around 180 out of 300 marks for 99 percentile. That means you do not need 100% syllabus perfection; you need 80% syllabus with 90% accuracy. By eliminating low-yield topics and mastering high-yield chapters through our 3-Box framework, students routinely jump from 90 marks to 190+ marks.",
  },
  {
    question: "Can I switch mentors if my backlog pace isn't matching my expectations?",
    answer:
      "Yes. Mentskool has zero lock-ins and provides unlimited mentor re-matching. If you need a mentor with a different pedagogical pace or specialized focus on droppers, you can switch with a single click.",
  },
];

export default function JeeBacklogManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        name: "Mentskool Technologies",
        url: "https://mentskool.com",
        logo: "https://mentskool.com/logo.png",
        description:
          "India's leading 1-on-1 mentorship platform for JEE and NEET students, helping aspirants clear backlogs and master exam execution.",
      },
      {
        "@type": "HowTo",
        name: "How to Clear JEE Backlogs Using the 3-Box Framework",
        description:
          "Step-by-step methodology created by IITians to recover Class 11 and Class 12 backlogs without sacrificing ongoing coaching lectures.",
        step: [
          {
            "@type": "HowToStep",
            name: "Audit & Categorize into 3 Boxes",
            text: "List every pending chapter and divide into Prerequisites, High-Yield Standalone, and Quarantined chapters.",
          },
          {
            "@type": "HowToStep",
            name: "Lock 75% for Current Syllabus",
            text: "Never skip ongoing lectures or current homework; protect today's classes to stop generating fresh backlogs.",
          },
          {
            "@type": "HowToStep",
            name: "Execute Daily 90-Minute Backlog Sprints",
            text: "Use concise summary notes and immediately solve 25-30 PYQs under timed constraints.",
          },
          {
            "@type": "HowToStep",
            name: "Audit Progress in Weekly 1:1 Calls",
            text: "Verify conceptual retention with your IITian mentor before advancing to new backlog topics.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: backlogFaqs.map((faq) => ({
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
                label: "Backlog Management",
                href: "/jee-backlog-management",
              },
            ]}
          />

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mt-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold mb-4">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>The Definitive JEE Backlog Elimination Manual</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE Backlog Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-brand-400">The 3-Box Elimination Framework</span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Having 10, 15, or even 25 pending chapters does not mean your IIT dream is over. Learn how verified <strong>IIT Bombay &amp; Delhi rankers</strong> triage chapters, protect ongoing classes, and eliminate backlogs in disciplined 90-minute daily sprints.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/mentors"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Get a 1:1 Backlog Recovery Mentor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/free-mentorship-session"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Claim Free Backlog Audit Call
              </Link>
            </div>
          </div>

          {/* Direct Answer Box for AI Overviews & Search Snippets */}
          <section className="my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-rose-500/40 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-400 mb-3">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>Core Summary: How To Eradicate JEE Backlogs Scientifically</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium mb-5">
              The <strong>Mentskool 3-Box Backlog Elimination Framework</strong> is designed to solve the psychological paralysis and time shortage that causes 80% of JEE aspirants to quit when lagging behind:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Step 1: Never Stop Current Classes:</strong> Protect today&apos;s lectures and homework with 75% of your daily time. If you pause ongoing classes, you generate 2 new backlogs for every 1 you clear.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Step 2: Box 1 (Prerequisite Bridge):</strong> Only finish chapters strictly required to understand current topics (e.g., Vectors, Mole Concept, GOC, Functions).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Step 3: Box 2 (High-Yield Standalones):</strong> Master high-ROI topics with zero prerequisites (Modern Physics, Matrices, Coordination Chemistry, 3D Geometry).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                <span><strong>Step 4: Box 3 (Low-ROI Quarantined):</strong> Quarantine 40-hour low-yield time-traps (Fluids, Complex Inorganics) until full syllabus revision phase.</span>
              </div>
            </div>
          </section>

          {/* Section 1: The Psychology of Backlog Panic */}
          <article className="my-16 prose prose-invert max-w-none">
            <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                1. The Backlog Trap: Why Watching 10-Hour YouTube Marathons Fails
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When students realize they have 15 backlogs, panic triggers a predictable, destructive pattern:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-rose-400 font-bold text-sm uppercase mb-2">Stage 1: The YouTube Binge</div>
                  <p className="text-xs text-slate-300">
                    The student searches &quot;Rotational Motion One Shot 10 Hours&quot; and passively watches videos on 1.5x speed. They take beautiful notes, feeling a false dopamine rush of accomplishment.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-amber-400 font-bold text-sm uppercase mb-2">Stage 2: The Mock Test Shock</div>
                  <p className="text-xs text-slate-300">
                    In the next mock test, when confronted with an actual numerical requiring application, their mind goes blank because passive watching creates zero neurological problem-solving circuits.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-brand-400 font-bold text-sm uppercase mb-2">Stage 3: Deep Guilt &amp; Burnout</div>
                  <p className="text-xs text-slate-300">
                    Depressed by low marks and the realization that ongoing coaching has now covered 3 more chapters, the student stops studying altogether for 4 days, worsening the crisis.
                  </p>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong>The IITian Solution:</strong> Backlogs are cleared through *targeted problem sets*, not passive lecture consumption. Your mentor hands you high-yield summary sheets and sets a strict rule: 30 minutes of theory review followed immediately by 25 solved PYQs.
              </p>
            </div>
          </article>

          {/* Section 2: The 3-Box Triage Table */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The JEE Backlog Dependency Matrix
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Use this exact blueprint to classify your pending chapters before you touch a single book.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead className="bg-slate-950/80 text-white font-bold uppercase text-[11px] tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Category</th>
                    <th className="py-4 px-4 sm:px-6 text-rose-400">Box 1: Must Clear Immediately (Bridge Topics)</th>
                    <th className="py-4 px-4 sm:px-6 text-emerald-400">Box 2: High Yield Standalone (High Marks/Zero Prereq)</th>
                    <th className="py-4 px-4 sm:px-6 text-slate-400">Box 3: Quarantined (Low ROI / Time Traps)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Physics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Vectors, Kinematics, Newton&apos;s Laws</p>
                      <span className="text-xs text-slate-400">Needed for Electrostatics, Magnetism, and Work-Energy.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Modern Physics, Current Electricity, Thermal Physics, Gravitation</p>
                      <span className="text-xs text-slate-400">Guaranteed 28–36 marks in JEE Mains; almost zero dependence on mechanics.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Rigid Body Dynamics (Rotation), Fluids</p>
                      <span className="text-xs text-slate-400">Takes 40 hours to master for 1 question. Quarantine until final phase.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Chemistry</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Mole Concept, Chemical Bonding, GOC (General Organic)</p>
                      <span className="text-xs text-slate-400">Without GOC, 12th Organic Chemistry is 100% incomprehensible.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Coordination Compounds, Kinetics, Solutions, Biomolecules</p>
                      <span className="text-xs text-slate-400">High question density, direct formula application, easy scoring.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Complex Ionic Equilibrium, Deep Metallurgy</p>
                      <span className="text-xs text-slate-400">Heavy memorization or lengthy calculation; low questions-per-hour ratio.</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-4 px-4 sm:px-6 font-bold text-white">Mathematics</td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Sets, Relations &amp; Functions, Trigonometry Basics</p>
                      <span className="text-xs text-slate-400">Foundational for all of Differential &amp; Integral Calculus.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Vectors &amp; 3D Geometry, Matrices &amp; Determinants, Statistics</p>
                      <span className="text-xs text-slate-400">Worth 24–32 marks. Can be mastered completely independently of calculus.</span>
                    </td>
                    <td className="py-4 px-4 sm:px-6">
                      <p className="font-semibold text-white mb-1">Complex Numbers Geometry, Advanced Conic Sections</p>
                      <span className="text-xs text-slate-400">Often mathematically brutal; master standard shapes first.</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: The 75/25 Daily Time-Blocking Rule */}
          <section className="my-16 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The 75/25 Daily Time-Blocking Rule
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                How our students clear 1 full backlog chapter every 4 days while maintaining a 94% completion score on current coaching assignments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-brand-400 font-bold text-sm uppercase">
                  <Clock className="w-4 h-4" />
                  <span>The 75% Current Pacing Slot (4.5 – 6 Hours)</span>
                </div>
                <h3 className="text-lg font-bold text-white">Protecting Today&apos;s Lecture Flow</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every afternoon and evening, complete the problem sheets and module homework assigned by your coaching teachers today. Solve at least 35–45 questions on today&apos;s topics so you never create another backlog.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase">
                  <Flame className="w-4 h-4" />
                  <span>The 25% Backlog Strike Slot (90 – 120 Minutes)</span>
                </div>
                <h3 className="text-lg font-bold text-white">Isolated Backlog Sprints</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Every night from 10:00 PM to 11:30 PM (or early morning before school), enter deep work mode. Zero social media, zero coaching homework. Solve strictly the 25 questions assigned by your Mentskool mentor from Box 1 or Box 2.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mt-16">
            <SeoFaqAccordion
              faqs={backlogFaqs}
              title="Frequently Asked Questions: JEE Backlog Elimination"
              subtitle="Everything you need to know about prioritizing chapters, managing time, and getting 1:1 guidance."
            />
          </section>

          {/* CTA Banner */}
          <section className="mt-16">
            <SeoCtaBanner
              title="Stop Drowning in Backlogs. Get an IITian Blueprint."
              description="Pair up 1-on-1 with a verified mentor who will map your exact pending chapters, set daily 90-minute tasks, and keep you accountable until Session 1."
              primaryButtonText="Find Your Backlog Recovery Mentor"
              primaryButtonHref="/mentors"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
