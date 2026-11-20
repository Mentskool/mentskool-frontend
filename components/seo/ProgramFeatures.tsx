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
    tagColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    description:
      "Direct calls with verified IIT Bombay, Delhi, Madras, or AIIMS New Delhi rankers who solved your exact entrance exam. No generic call-center advisors.",
  },
  {
    icon: ClipboardCheck,
    title: "Tailored Weekly Task Sheets",
    tag: "Custom Problem Sets",
    tagColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    description:
      "Never guess what to study next. Your mentor designs custom weekly revision goals, problem drills, and milestone assignments tailored to your weakest chapters.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Efficiency Score (94%)",
    tag: "Real Accountability",
    tagColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    description:
      "A proprietary accountability score that verifies on-time completion, question accuracy, and test review audits. Keeps you disciplined week after week.",
  },
  {
    icon: Users,
    title: "Strict 30-Student Cohort Cap",
    tag: "Zero Overbooking",
    tagColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    description:
      "Guaranteed low student-to-mentor ratio backed by atomic seat locking. Your mentor genuinely knows your mock test history and personal weaknesses.",
  },
  {
    icon: Sparkles,
    title: "Mock Test Negative-Marking Audit",
    tag: "Score Booster",
    tagColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    description:
      "Deep dive into every negative mark in your tests. Mentors diagnose why you made calculation, conceptual, or time-panic mistakes and calibrate your exam strategy.",
  },
  {
    icon: RefreshCw,
    title: "Switch Mentors Anytime — 100% Freedom",
    tag: "Zero Annual Lock-in",
    tagColor: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    description:
      "If teaching styles ever do not click, switch to another top ranker cohort with 1 click or pause monthly. No predatory upfront annual contracts.",
  },
];

interface ProgramFeaturesProps {
  heading?: string;
  subheading?: string;
  badge?: string;
  features?: FeatureCard[];
  showHeader?: boolean;
}

export function ProgramFeatures({
  heading = "Why Mentskool Outranks Traditional Mentorship",
  subheading = "Built from the ground up for students who need serious discipline, weekly error audits, and proven results.",
  badge = "THE MENTSKOOL ADVANTAGE",
  features = defaultFeatures,
  showHeader = true,
}: ProgramFeaturesProps) {
  return (
    <section className="w-full my-16" id="mentskool-advantage">
      {showHeader && (
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-brand-300 uppercase tracking-widest bg-brand-500/10 border border-brand-500/30 px-4 py-1.5 rounded-full inline-block shadow-soft">
            {badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 hover:bg-slate-900 hover:border-brand-500/40 p-7 shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-4 group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-300 border border-brand-500/30 flex items-center justify-center font-bold shadow-soft group-hover:scale-105 group-hover:bg-brand-500/30 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${feat.tagColor}`}
                  >
                    {feat.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg font-display text-white group-hover:text-brand-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
