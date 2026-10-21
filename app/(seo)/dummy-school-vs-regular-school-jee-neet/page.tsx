import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Scale,
  School,
  Clock,
  Award,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Dummy School vs Regular School for JEE & NEET: CBSE 75% Attendance Rules & Strategy",
  description:
    "An objective, in-depth guide on Dummy (Non-Attending) vs Regular Schooling for JEE and NEET. Explore CBSE's strict 75% attendance audits, the 75% board eligibility criteria for IIT/NIT, daily schedules, and time management.",
  keywords: [
    "dummy school vs regular school",
    "is dummy school good for jee",
    "dummy school attendance rules cbse",
    "cbse 75 percent attendance crackdown",
    "can i crack jee with regular school",
    "dummy school pros and cons neet",
    "managing board exam with jee preparation",
  ],
  alternates: {
    canonical: "https://mentskool.com/dummy-school-vs-regular-school-jee-neet",
  },
  openGraph: {
    title: "Dummy School vs Regular School for JEE & NEET: The Definitive Guide",
    description:
      "Is non-attending dummy schooling worth the risk after CBSE's 75% attendance crackdowns? Compare schedules, board score preservation, and mental discipline for JEE & NEET.",
    url: "https://mentskool.com/dummy-school-vs-regular-school-jee-neet",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Dummy vs Regular School - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is a 'Dummy School' in the context of JEE and NEET preparation?",
    answer:
      "A 'Dummy School' (also known as a non-attending or tie-up school) is a formal secondary school where a student enrolls on paper to fulfill Board examination registration requirements, but is unofficially excused from attending daily classes, assemblies, or practicals. This frees up 6 to 8 hours daily for dedicated competitive exam coaching.",
  },
  {
    question: "Is dummy schooling legally safe following CBSE's recent attendance crackdowns?",
    answer:
      "CBSE has significantly increased surprise on-site inspections of affiliated schools. Institutions discovered operating as non-attending dummy fronts have faced immediate cancellation of affiliation, disbarment of students from board examinations, and legal scrutiny. Aspirants choosing this path must ensure their school maintains valid documentation and minimal regulatory risk.",
  },
  {
    question: "Can an aspirant achieve a top rank in JEE or NEET while attending a regular school?",
    answer:
      "Yes, absolutely. A significant portion of top 500 rankers every year attend regular schools. Regular schooling enforces daily wake-up discipline, ensures steady board exam syllabus preparation, and provides social balance that guards against burnout. The key is strict time management: protecting 4 focused hours on weekdays and 10 to 12 hours on weekends.",
  },
  {
    question: "What happens if a student cracks JEE Advanced but scores below 75% in Class 12 Boards?",
    answer:
      "Under JoSAA counseling criteria, candidates must secure at least 75% aggregate marks in their Class 12 Board examination (65% for SC/ST candidates) or be in the top 20 percentile of their respective qualifying board to be eligible for admission to IITs, NITs, and IIITs. Every year, several high-percentile students are disqualified because they neglected Board preparation.",
  },
  {
    question: "What is the biggest psychological risk associated with dummy schooling?",
    answer:
      "Without the daily structure of school, many 16- and 17-year-olds struggle with severe procrastination, irregular sleep schedules (studying till 4:00 AM and sleeping till noon), isolation, and smartphone addiction. Having 14 hours of free time daily can paradoxically lead to less productive study without strict personal accountability.",
  },
];

export default function DummySchoolVsRegularSchoolJeeNeetPage() {
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
        headline: "Dummy School vs Regular School for JEE & NEET: CBSE 75% Attendance Rules & Strategy",
        description:
          "Authoritative analysis of dummy schooling versus regular schooling, CBSE attendance compliance, 75% board eligibility criteria, and daily scheduling.",
        url: "https://mentskool.com/dummy-school-vs-regular-school-jee-neet",
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
                label: "Dummy vs Regular School",
                href: "/dummy-school-vs-regular-school-jee-neet",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <School className="w-4 h-4" />
              Academic Path &amp; Board Compliance Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Dummy School vs Regular School:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-cyan-400">
                CBSE 75% Attendance Rules &amp; Real Strategy
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Deciding between a non-attending dummy school and regular schooling is one of the most consequential choices facing Class 10 graduates. With CBSE enforcing stricter attendance audits and IITs strictly upholding the 75% board cutoff, evaluate the operational trade-offs of both pathways.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Decision Framework Summarized
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Dummy Schooling</strong> offers 6 to 8 extra hours daily for competitive coaching, but requires high personal discipline and carries regulatory risks under CBSE attendance audits. <strong className="text-brand-300">Regular Schooling</strong> provides structured routine, board exam security, and emotional balance, but demands strict time management on evenings and weekends. Both paths can produce top ranks when paired with strong accountability.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Detailed Head-to-Head Comparison */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-brand-400" />
              Head-to-Head Architectural Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Decision Parameter</th>
                    <th className="p-4">Dummy / Non-Attending School</th>
                    <th className="p-4">Regular Schooling Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Daily Available Self-Study Hours</td>
                    <td className="p-4 text-emerald-400 font-bold">10 to 12 Hours available daily</td>
                    <td className="p-4 text-amber-300">4 to 5 Hours on weekdays; 10+ on weekends</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">CBSE Attendance Regulatory Risk</td>
                    <td className="p-4 text-red-400 font-bold">High (Subject to surprise inspections &amp; de-affiliation)</td>
                    <td className="p-4 text-emerald-400 font-bold">Zero Risk (100% compliant with 75% attendance rule)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Board Exam Preparation Level</td>
                    <td className="p-4 text-amber-300">Often neglected; last-minute rush in January/February</td>
                    <td className="p-4 text-emerald-400">Continuous pre-board practice; 75%+ score protected</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Daily Routine &amp; Sleep Hygiene</td>
                    <td className="p-4 text-red-400">High risk of circadian rhythm disruption and screen fatigue</td>
                    <td className="p-4 text-emerald-400">Enforced morning wake-up and structured social rhythm</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Annual Tuition / School Cost</td>
                    <td className="p-4 text-slate-300">₹40,000 to ₹1,20,000 extra dummy fee</td>
                    <td className="p-4 text-slate-300">Standard school tuition fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: CBSE 75% Attendance Enforcement */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-amber-400" />
              The CBSE 75% Attendance Rule Crackdown
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Central Board of Secondary Education (CBSE) regulations mandate a minimum of <strong className="text-white">75% physical attendance</strong> to be eligible to sit for Class 10 and 12 Board examinations. In recent sessions, CBSE has conducted surprise on-site verification drives across multiple states:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-red-400 block text-sm">Regulatory Consequences</strong>
                  <p>Schools found falsifying attendance registers have had their affiliations revoked or downgraded. In severe cases, admit cards of non-attending students were withheld shortly before examinations.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1.5">
                  <strong className="text-emerald-400 block text-sm">Safe Compliance Approaches</strong>
                  <p>If opting for a flexible attendance arrangement, ensure the school maintains transparent attendance logs, requires participation in mandatory practical labs, and holds formal pre-board examinations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Time Management for Regular Schoolers */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Clock className="w-7 h-7 text-emerald-400" />
              The Regular Schooler&apos;s 4-Hour Daily Blueprint
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Attending regular school does not prevent you from scoring 99 percentile in JEE or 680+ in NEET. Here is the daily timetable top rankers follow:
              </p>
              <div className="space-y-3 pt-1 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-brand-300 block mb-0.5">3:30 PM – 4:30 PM: Decompression &amp; Meal</strong>
                  Return from school, take a brief rest, and prepare mentally for competitive study.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-emerald-300 block mb-0.5">4:30 PM – 7:30 PM: Block 1 (Concept &amp; Timed Problem Solving)</strong>
                  3 hours of dedicated problem-solving in Physics and Chemistry aligned with current topics.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-cyan-300 block mb-0.5">8:30 PM – 10:30 PM: Block 2 (Mathematics / Biology + Error Log)</strong>
                  2 hours dedicated to high-yield problems, updating your Error Book, and 30 minutes of school homework review.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-teal-300 block mb-0.5">Weekends (Saturday &amp; Sunday): 10-Hour Deep Dives</strong>
                  Use school-free weekends for full-length mock tests, backlog clearing, and long revision blocks.
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Balance School &amp; Competitive Prep With Top Ranker Mentors"
            subtitle="Whether you attend regular school or a dummy school, build a sustainable study routine. Work 1-on-1 with an IITian or AIIMS mentor to balance board exams and competitive goals."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Dummy vs Regular School
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Clear answers regarding board eligibility, attendance rules, and time allocation.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Design a Balanced Study Timetable"
            subtitle="Connect with mentors who will help you optimize your study hours, safeguard your board exam scores, and prepare effectively for JEE or NEET."
            primaryBtnText="Claim Free Mentorship Call"
            primaryBtnHref="/free-mentorship-session"
            secondaryBtnText="Explore Top Mentors"
            secondaryBtnHref="/mentors"
          />
        </div>
      </main>
    </div>
  );
}
