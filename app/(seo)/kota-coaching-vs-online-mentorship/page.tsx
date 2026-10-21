import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Scale,
  Award,
  Heart,
  Home,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Kota Coaching vs Online Personal Mentorship: The Honest Cost & Reality Analysis",
  description:
    "An objective, data-backed comparison between Kota offline coaching (₹3.5L+ cost, 200:1 batch ratios) and home preparation paired with 1-on-1 IITian/AIIMS mentorship for JEE & NEET.",
  keywords: [
    "kota coaching vs online mentorship",
    "is kota worth it for jee neet",
    "kota coaching fees and hostel cost",
    "kota vs home preparation",
    "batch size in kota coaching",
    "mental health in kota coaching",
    "can i crack jee from home with mentor",
  ],
  alternates: {
    canonical: "https://mentskool.com/kota-coaching-vs-online-mentorship",
  },
  openGraph: {
    title: "Kota Coaching vs Online Personal Mentorship: The Honest Comparison",
    description:
      "₹3.5 Lakh hostel expenses and 200-student batches vs personalized IITian guidance from home. Uncover the financial, academic, and psychological realities.",
    url: "https://mentskool.com/kota-coaching-vs-online-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Kota vs Online Mentorship - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "What is the true annual cost of studying in Kota for JEE or NEET?",
    answer:
      "The total annual expense of studying in Kota ranges between ₹3,00,000 and ₹5,50,000 per student. This encompasses: coaching tuition fees (₹1,40,000 to ₹2,00,000), hostel accommodation and mess food (₹1,50,000 to ₹2,50,000), study materials, laundry, commute, and medical/personal expenses. Over a two-year preparation window, families routinely spend upwards of ₹8 to ₹10 Lakhs.",
  },
  {
    question: "What is the typical student-to-teacher ratio in a Kota classroom?",
    answer:
      "Except for top 1% 'Star/Ranker batches' (who receive top faculty in batches of 40 to 60), the vast majority of regular batches contain 150 to 250 students in a single lecture theater. In such crowded environments, asking individual doubts during class is practically impossible, and personalized academic feedback is nonexistent.",
  },
  {
    question: "Can a student crack JEE or NEET from home with online resources and mentorship?",
    answer:
      "Yes. Every year, thousands of top rankers (including AIR 1s and top 100 scorers) prepare from home. With top lecture content available on platforms like YouTube and specialized test series, what students actually need is not another classroom lecture, but individual accountability, weekly doubt audits, and strategic pacing from a personal IITian or AIIMS mentor.",
  },
  {
    question: "What are the biggest challenges faced by students in Kota?",
    answer:
      "The most prevalent challenges are: 1) Substandard nutrition and digestive illnesses from commercial mess food, 2) Severe loneliness and homesickness, 3) Intimidating peer pressure and batch-shuffling anxiety, and 4) Complete lack of individual emotional support when a mock score drops.",
  },
  {
    question: "When is going to Kota actually worthwhile?",
    answer:
      "Kota can be beneficial for exceptionally disciplined, academically resilient students who have already completed foundational concepts, scored in the top 1% on coaching scholarship exams (guaranteeing placement in top ranker batches), and thrive in hyper-competitive social environments.",
  },
];

export default function KotaCoachingVsOnlineMentorshipPage() {
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
        headline: "Kota Coaching vs Online Personal Mentorship: The Honest Cost & Reality Analysis",
        description:
          "Authoritative analysis comparing Kota offline coaching ecosystems with home preparation supported by 1-on-1 ranker mentorship.",
        url: "https://mentskool.com/kota-coaching-vs-online-mentorship",
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
                label: "Kota Coaching vs Online Mentorship",
                href: "/kota-coaching-vs-online-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-4 h-4" />
              Strategic Preparation Dilemmas Decoded
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              Kota Coaching vs Online Mentorship:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-cyan-400">
                The Financial, Academic &amp; Psychological Reality
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Every year, over 2 lakh families make the emotional decision to send their teenage children to Kota, spending ₹3.5 to ₹5.5 Lakhs annually. But in an era where top-quality lectures and test series are accessible online, is moving away from home still the best path to an IIT or AIIMS admit?
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-brand-500/30 bg-brand-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 shrink-0">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-300 mb-2">
                  The Core Insight: Lectures Are a Commodity; Accountability is Rare
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Kota&apos;s primary value historically was access to exceptional teaching. Today, that exact pedagogy is available online for free or modest subscription costs. What determines selection is not sitting in a 200-student lecture hall, but <strong className="text-white">Daily Problem Solving Velocity</strong>, <strong className="text-white">Disciplined Error Audits</strong>, and <strong className="text-brand-300">Emotional Well-Being</strong>. Home study paired with 1-on-1 IITian mentorship delivers superior academic accountability at a fraction of the cost.
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
                    <th className="p-4">Key Dimension</th>
                    <th className="p-4">Traditional Kota Coaching Model</th>
                    <th className="p-4">Home Study + 1-on-1 Mentskool Mentorship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Annual Financial Cost</td>
                    <td className="p-4 text-red-400 font-bold">₹3,50,000 to ₹5,50,000 (Tuition + Hostel + Mess)</td>
                    <td className="p-4 text-emerald-400 font-bold">₹25,000 to ₹40,000 (Mentorship + Home Living)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Classroom Batch Size</td>
                    <td className="p-4 text-amber-300">150 to 250 students per lecture hall</td>
                    <td className="p-4 text-emerald-400 font-bold">1-on-1 Individual Video &amp; WhatsApp Support</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Faculty Allocation</td>
                    <td className="p-4 text-slate-400">Star faculty reserved for top 2% &apos;Star Batches&apos;</td>
                    <td className="p-4 text-emerald-400">Dedicated IIT Bombay/Delhi or AIIMS Ranker Mentor</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Doubt Resolution Speed</td>
                    <td className="p-4 text-slate-400">Wait in long doubt-counter queues after class</td>
                    <td className="p-4 text-emerald-400 font-bold">Direct async &amp; weekly live 1-on-1 doubt audits</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Nutrition &amp; Health Support</td>
                    <td className="p-4 text-red-400">Commercial mess food; frequent stomach infections</td>
                    <td className="p-4 text-emerald-400 font-bold">Hygienic home-cooked meals &amp; family care</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 font-semibold text-white">Mental Health &amp; Isolation</td>
                    <td className="p-4 text-red-400">High isolation; acute peer and test-score pressure</td>
                    <td className="p-4 text-emerald-400 font-bold">Emotional safety of home with an encouraging mentor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: The Two Realities of Kota */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Building2 className="w-7 h-7 text-amber-400" />
              The Hidden Two-Tier Batch System in Kota
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-emerald-400 font-bold text-lg">The 2% Star Batches (The Showcase)</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Students who arrive already scoring 98%+ on entrance scholarship tests are grouped into exclusive &apos;Star&apos; or &apos;Super-50&apos; batches. They receive senior HOD faculty, air-conditioned boutique classrooms, separate doubt cells, and intense grooming. These 2% generate 90% of the coaching center&apos;s marketing billboards.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-red-400 font-bold text-lg">The 98% General Batches (The Revenue Engine)</div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  The remaining 98% of fee-paying students are placed in large batches of 150 to 220 students. Classes are often taught by novice or rotating teachers. When a student falls behind by two weeks, they are shifted to lower-tier batches, eroding self-confidence and accelerating feelings of abandonment.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Modern Hybrid Model: Home + Mentorship */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Home className="w-7 h-7 text-emerald-400" />
              The Modern Winning Formula: High-Quality Online Lectures + 1-on-1 Mentorship
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Today&apos;s top rankers follow a more sustainable, high-ROI blueprint:
              </p>
              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Quality Content from Home:</strong> Learn concepts via top online courses or video libraries at your own speed (pausing, speeding up 1.5x) without losing 2 hours commuting to crowded coaching halls.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Dedicated Ranker Mentorship:</strong> Pair your self-study with a dedicated IITian or AIIMS mentor who audits your weekly problem solve count, enforces Error Book discipline, and adjusts your timetable.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Preserved Emotional Health:</strong> Healthy home-cooked meals, a peaceful private room, and constant family encouragement eliminate the isolation and anxiety that derail many students in hostel environments.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Get Kota-Level Academic Rigor From the Comfort of Home"
            subtitle="You don't need to spend ₹4 Lakhs on hostel fees to crack JEE or NEET. Work 1-on-1 with a personal IIT Bombay or AIIMS mentor for weekly strategy, doubt audits, and accountability."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-brand-400" />
                Frequently Asked Questions: Kota vs Mentorship
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Honest counsel on expenses, batch sizes, and home preparation strategies.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Experience Personal Mentorship From Home"
            subtitle="Connect with IITian and AIIMS mentors who will build a customized study roadmap tailored to your target exam and learning pace."
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
