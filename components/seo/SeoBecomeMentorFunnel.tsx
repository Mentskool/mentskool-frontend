import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  IndianRupee,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

interface SeoBecomeMentorFunnelProps {
  audience?: "IIT" | "NEET" | "BOTH";
  title?: string;
  subtitle?: string;
}

export function SeoBecomeMentorFunnel({
  audience = "BOTH",
  title = "Turn Your JEE or NEET Rank Into Flexible Monthly Income",
  subtitle = "Join verified IITians, NITians, and AIIMS/Govt MBBS doctors mentoring 2027 & 2028 aspirants 4–6 hours a week from your hostel room.",
}: SeoBecomeMentorFunnelProps) {
  const tiers = [
    {
      label: "Starter Cohort",
      students: "10 Active Aspirants",
      time: "~3 Hours / Week",
      estimate: "₹12,000 – ₹18,000 / mo",
      perks: "Ideal for semester exam weeks & 1st-year freshers",
      highlight: false,
    },
    {
      label: "Standard Cohort",
      students: "20 Active Aspirants",
      time: "~5 Hours / Week",
      estimate: "₹24,000 – ₹36,000 / mo",
      perks: "Most popular among 2nd & 3rd year IIT/MBBS mentors",
      highlight: true,
    },
    {
      label: "Full Cohort (Capped)",
      students: "30 Active Aspirants Max",
      time: "~7.5 Hours / Week",
      estimate: "₹36,000 – ₹54,000 / mo",
      perks: "Strict 30-seat cap guarantees deep mentorship quality",
      highlight: false,
    },
  ];

  const badgeText =
    audience === "IIT"
      ? "For IIT, NIT & IIIT Rankers"
      : audience === "NEET"
      ? "For AIIMS & Govt MBBS Students"
      : "For IITians, NITians & MBBS Rankers";

  return (
    <section className="my-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/60 border border-indigo-500/30 shadow-elevated relative overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Wallet className="w-3.5 h-3.5" />
              <span>{badgeText} • Paid Mentorship Program</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-slate-300 mt-1.5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Link
            href="/signup?role=MENTOR"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transition-all shrink-0 group"
          >
            <span>Apply as a Mentor Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border flex flex-col justify-between ${
                tier.highlight
                  ? "bg-slate-950/90 border-emerald-500/50 shadow-lg ring-1 ring-emerald-500/20"
                  : "bg-slate-950/60 border-slate-800"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {tier.label}
                  </span>
                  {tier.highlight && (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="text-xl sm:text-2xl font-black text-white flex items-center gap-1 mt-1">
                  <IndianRupee className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{tier.estimate.replace("₹", "")}</span>
                </p>
                <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                  <p className="flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{tier.students}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{tier.time} (Hostel Friendly)</span>
                  </p>
                </div>
              </div>
              <p className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                {tier.perks}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs text-slate-200 mb-8">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Direct UPI &amp; Bank Payouts</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
            <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Set Your Own Pricing &amp; Hours</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Official Verified Ranker Badge</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Zero Teaching Script / Lock-In</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <p className="text-xs text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>
              Eligibility: Valid College ID + JEE Main/Advanced Rank or NEET-UG Scorecard verification during onboarding.
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/signup?role=MENTOR"
              className="px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>Start 3-Minute Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/mentors"
              className="px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 transition-all"
            >
              See Active Mentor Profiles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
