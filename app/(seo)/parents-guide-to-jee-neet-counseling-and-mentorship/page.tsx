import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Users,
  Award,
  Layers,
  Scale,
} from "lucide-react";
import { SeoBreadcrumbs } from "@/components/seo/SeoBreadcrumbs";
import { SeoFaqAccordion, FaqItem } from "@/components/seo/SeoFaqAccordion";
import { SeoCtaBanner } from "@/components/seo/SeoCtaBanner";
import { SeoMentorFunnel } from "@/components/seo/SeoMentorFunnel";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "The Parent's Practical Guide to JEE & NEET: Supporting Mental Health & Mentorship",
  description:
    "An authoritative guide for parents of JEE and NEET aspirants. Discover how to recognize silent burnout, evaluate coaching promises, manage test anxiety constructively, and leverage 1-on-1 ranker mentorship.",
  keywords: [
    "parents guide for jee neet",
    "how parents can support jee aspirants",
    "handling student stress jee neet",
    "recognizing burnout in competitive exam students",
    "parent counseling for iit jee",
    "how to motivate child for neet",
    "role of parents in jee preparation",
  ],
  alternates: {
    canonical: "https://mentskool.com/parents-guide-to-jee-neet-counseling-and-mentorship",
  },
  openGraph: {
    title: "The Parent's Practical Guide to JEE & NEET Mentorship",
    description:
      "Help your child navigate JEE and NEET with confidence and emotional well-being. Learn practical ways to support without hovering and spot silent burnout early.",
    url: "https://mentskool.com/parents-guide-to-jee-neet-counseling-and-mentorship",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Parents Guide JEE NEET - Mentskool",
      },
    ],
  },
};

const faqs: FaqItem[] = [
  {
    question: "How can parents recognize early signs of silent burnout in their child?",
    answer:
      "Silent burnout rarely begins with vocal complaints. Key warning signs include: 1) Sudden reluctance to discuss mock test scores, 2) Irregular sleep patterns (insomnia or excessive daytime fatigue), 3) Pretending to study for hours while staring blankly at the same page, 4) Skipping scheduled coaching tests due to sudden headaches or stomach distress, and 5) Social withdrawal from family and friends.",
  },
  {
    question: "What is the most helpful way for parents to respond when a child scores poorly on a mock test?",
    answer:
      "Avoid emotional reactions (e.g., 'With marks like these, you will never get an NIT') or comparing them to relatives. Reframe the mock exam as a diagnostic audit: 'Mock tests are meant to uncover mistakes now so they don't happen on exam day. Let us identify the specific topics that caused problems and build a plan to fix them.' Focus on diagnostic problem-solving rather than judgment.",
  },
  {
    question: "Why do teenage students often resist advice from parents but listen to an IITian or AIIMS mentor?",
    answer:
      "Developmental psychology demonstrates that teenagers naturally seek autonomy and often perceive parental advice as emotional pressure or criticism. In contrast, an IITian or AIIMS mentor who recently cleared the exact same exam is viewed as an empathetic, credible peer who understands the modern testing environment firsthand. Students receive strategic corrections from a mentor with significantly less emotional friction.",
  },
  {
    question: "How can parents protect their children from aggressive coaching center marketing?",
    answer:
      "Be skeptical of blanket guarantees (e.g., 'Guaranteed Top 100 Rank'). Investigate actual batch sizes, teacher-to-student ratios, and faculty retention. Ensure your child is not treated merely as a revenue source while attention is concentrated exclusively on a small 'Star Batch'.",
  },
  {
    question: "What daily practical support matters most during the final 3 months before the exam?",
    answer:
      "During the final 90 days, provide: 1) Nutritious, easily digestible home-cooked meals rich in proteins and omega-3s, 2) A quiet, well-ventilated study environment free from domestic conflict, 3) Protection of their 7-hour sleep window, and 4) Regular, low-pressure conversations that remind them their worth is not defined solely by an entrance exam score.",
  },
];

export default function ParentsGuideToJeeNeetCounselingAndMentorshipPage() {
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
        headline: "The Parent's Practical Guide to JEE & NEET: Supporting Mental Health & Mentorship",
        description:
          "Authoritative guide for parents on supporting teenagers through competitive exams, recognizing burnout, managing test anxiety, and the value of external mentorship.",
        url: "https://mentskool.com/parents-guide-to-jee-neet-counseling-and-mentorship",
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
              { label: "Mentorship", href: "/mentors" },
              {
                label: "Parents Guide to Mentorship",
                href: "/parents-guide-to-jee-neet-counseling-and-mentorship",
              },
            ]}
          />

          {/* Hero Section */}
          <header className="mt-8 mb-12 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4" />
              Parental Guidance &amp; Student Mental Resilience
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">
              The Parent&apos;s Practical Guide to JEE &amp; NEET:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-brand-400">
                Supporting Mental Health, Motivation &amp; Mentorship
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Preparing for JEE or NEET is an emotional marathon not just for the student, but for the entire family. Learn how parents can provide constructive academic support, spot silent burnout early, and create an encouraging home environment.
            </p>
          </header>

          {/* Direct Answer Box */}
          <section className="mb-14 rounded-2xl border border-rose-500/30 bg-rose-950/20 backdrop-blur-md p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-rose-300 mb-2">
                  The Parent&apos;s True Role: The Safe Anchor, Not the Second Examiner
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Aspirants already experience intense academic pressure from coaching centers, school teachers, and peer score comparisons. The home must serve as a sanctuary of emotional security rather than a second examination room. Parents who replace interrogation with <strong className="text-white">Empathetic Listening</strong>, <strong className="text-white">Nutrition &amp; Sleep Protection</strong>, and <strong className="text-rose-300">Third-Party Ranker Mentorship</strong> see their children perform with greater calm, resilience, and test-taking confidence.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Spotting the 5 Silent Signs of Burnout */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-rose-400" />
              Recognizing the 5 Warning Signs of Silent Student Burnout
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-rose-400 font-bold text-lg">1. Mock Score Secrecy &amp; Withdrawal</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  If your child previously shared test results openly but suddenly becomes defensive or avoids discussing marks, this indicates rising shame and fear of disappointment rather than a lack of effort.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-amber-400 font-bold text-lg">2. The &quot;Staring-at-the-Page&quot; Phenomenon</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Sitting at a study desk for 10 hours while making negligible progress through problem sets. This indicates working memory exhaustion where the brain is overwhelmed by anxiety and unable to process concepts.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-teal-400 font-bold text-lg">3. Sleep Disruption &amp; Physical Somatization</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Experiencing frequent unexplained tension headaches, digestive issues, or chronic insomnia on the nights preceding mock exams. These are physiological manifestations of acute performance stress.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-3">
                <div className="text-cyan-400 font-bold text-lg">4. Emotional Volatility or Numb Apathy</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Sudden irritable outbursts over minor domestic issues, or expressing complete detachment like <em>&quot;It doesn&apos;t matter anyway, I cannot do this.&quot;</em> This is a protective psychological defense against perceived failure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: What to Say vs What Never to Say */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Scale className="w-7 h-7 text-amber-400" />
              Communication Guide: What to Say vs What Never to Say
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/60 my-6">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-800/80 text-slate-200 border-b border-slate-700 font-semibold">
                  <tr>
                    <th className="p-4">Common Damaging Statements (Avoid)</th>
                    <th className="p-4">Constructive Alternative (Say Instead)</th>
                    <th className="p-4">Psychological Impact on Aspirant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 text-red-400 font-medium">&quot;Look at Sharma ji&apos;s son; he scored 660 in his Allen mock.&quot;</td>
                    <td className="p-4 text-emerald-400 font-medium">&quot;Let us compare your score today only with your own score last month.&quot;</td>
                    <td className="p-4 text-xs text-slate-400">Shifts focus from toxic comparison to personal incremental progress.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 text-red-400 font-medium">&quot;We have invested ₹4 Lakhs on your coaching; don&apos;t waste it.&quot;</td>
                    <td className="p-4 text-emerald-400 font-medium">&quot;We believe in your effort, regardless of the test outcome.&quot;</td>
                    <td className="p-4 text-xs text-slate-400">Eliminates financial guilt that causes panic during exam solving.</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-4 text-red-400 font-medium">&quot;Why are you wasting time sleeping? Sleep only 5 hours.&quot;</td>
                    <td className="p-4 text-emerald-400 font-medium">&quot;Your brain consolidates memory during sleep; protect your 7 hours.&quot;</td>
                    <td className="p-4 text-xs text-slate-400">Protects cognitive function and long-term memory consolidation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Why External Mentorship Unburdens Parents */}
          <section className="mb-16 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />
              Why 1-on-1 External Mentorship Unburdens the Parent-Child Dynamic
            </h2>
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                Parents often attempt to act as academic supervisors, checking timetables, questioning test results, and enforcing study hours. This dynamic can introduce conflict into parent-child relationships.
              </p>
              <div className="space-y-3 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-brand-300 block mb-0.5">The Neutral Expert Voice:</strong>
                  An IITian or AIIMS mentor steps in as an objective academic guide. When a mentor reviews rough sheets and advises skipping certain topics, students receive the guidance without emotional resistance.
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                  <strong className="text-emerald-300 block mb-0.5">Parents Can Return to Being Parents:</strong>
                  By delegating academic auditing to an experienced mentor, parents can focus on providing love, nourishment, and emotional reassurance at home.
                </div>
              </div>
            </div>
          </section>

          {/* Dedicated High-Converting Mentorship Funnel */}
          <SeoMentorFunnel
            examFocus="BOTH"
            title="Give Your Child the Advantage of an IITian or AIIMS Mentor"
            subtitle="Take the academic friction out of your home. Partner your child with an experienced mentor from IIT or AIIMS who will provide weekly 1-on-1 strategy, mock test audits, and empathetic guidance."
          />

          {/* Section 4: FAQ Accordion */}
          <section className="my-16">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-3">
                <HelpCircle className="w-7 h-7 text-rose-400" />
                Frequently Asked Questions: Parents &amp; Mentorship
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Helpful advice for parents supporting students through competitive entrance exams.
              </p>
            </div>
            <SeoFaqAccordion items={faqs} />
          </section>

          {/* Final Call to Action */}
          <SeoCtaBanner
            title="Help Your Child Succeed with Less Stress"
            subtitle="Connect with dedicated IIT and AIIMS mentors who will provide your child with personalized strategy, structured accountability, and encouraging guidance."
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
