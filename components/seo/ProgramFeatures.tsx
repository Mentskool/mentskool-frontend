import React from "react";
import {
  Video,
  ClipboardCheck,
  TrendingUp,
  Users,
  RefreshCw,
  Sparkles,
  LucideIcon,
} from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
}

const defaultFeatures: FeatureCard[] = [
  {
    icon: Video,
    title: "1:1 Live Strategy & Video Calls",
    tag: "Direct Face-to-Face",
    tagColor: "bg-blue-100 text-blue-800 border-blue-200",
    description:
      "Direct calls with verified IIT Bombay, Delhi, Madras, or AIIMS New Delhi rankers who solved your exact entrance exam. No generic call-center advisors.",
  },
  {
    icon: ClipboardCheck,
    title: "Tailored Weekly Task Sheets",
    tag: "Custom Problem Sets",
    tagColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    description:
      "Never guess what to study next. Your mentor designs custom weekly revision goals, problem drills, and milestone assignments tailored to your weakest chapters.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Efficiency Score (94%)",
    tag: "Real Accountability",
    tagColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description:
      "A proprietary accountability score that verifies on-time completion, question accuracy, and test review audits. Keeps you disciplined week after week.",
  },
  {
    icon: Users,
    title: "Strict 30-Student Cohort Cap",
    tag: "Zero Overbooking",
    tagColor: "bg-purple-100 text-purple-800 border-purple-200",
    description:
      "Guaranteed low student-to-mentor ratio backed by atomic seat locking. Your mentor genuinely knows your mock test history and personal weaknesses.",
  },
  {
    icon: Sparkles,
    title: "Mock Test Negative-Marking Audit",
    tag: "Score Booster",
    tagColor: "bg-amber-100 text-amber-800 border-amber-200",
    description:
      "Deep dive into every negative mark in your tests. Mentors diagnose why you made calculation, conceptual, or time-panic mistakes and calibrate your exam strategy.",
  },
  {
    icon: RefreshCw,
    title: "Switch Mentors Anytime — 100% Freedom",
    tag: "Zero Annual Lock-in",
    tagColor: "bg-rose-100 text-rose-800 border-rose-200",
    description:
      "If teaching styles ever do not click, switch to another top ranker cohort with 1 click or pause monthly. No predatory upfront annual contracts.",
  },
];

interface ProgramFeaturesProps {
  heading?: string;
  subheading?: string;
  features?: FeatureCard[];
}

export function ProgramFeatures({
  heading = "Why Mentskool Outranks Traditional Mentorship",
  subheading = "Built from the ground up for students who need serious discipline and proven results.",
  features = defaultFeatures,
}: ProgramFeaturesProps) {
  return (
    <section className="w-full my-16">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-lg shadow-soft inline-block">
          THE MENTSKOOL ADVANTAGE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-display text-ink tracking-tight">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
          {subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-mist bg-white p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${feat.tagColor}`}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg font-display text-ink">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
