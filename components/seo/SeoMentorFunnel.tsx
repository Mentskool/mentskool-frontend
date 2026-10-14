import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";

interface SeoMentorFunnelProps {
  examFocus?: "JEE" | "NEET" | "BOTH";
  title?: string;
  subtitle?: string;
}

export function SeoMentorFunnel({
  examFocus = "BOTH",
  title = "Connect Directly With Recent IIT & AIIMS Rankers",
  subtitle = "Stop guessing your strategy. Learn how top rankers cracked JEE and NEET with personalized 1-on-1 cohort guidance.",
}: SeoMentorFunnelProps) {
  const mentors = [
    {
      name: "Aryan Sharma",
      college: "IIT Bombay",
      branch: "Computer Science & Engg",
      rank: "AIR 247",
      exam: "JEE Advanced",
      tags: ["Advanced Problem Deconstruction", "Backlog Recovery", "Maths Speed"],
      seatsLeft: 4,
      category: "JEE_PREP",
    },
    {
      name: "Dr. Tanya Verma",
      college: "AIIMS New Delhi",
      branch: "MBBS (Ranker Cohort)",
      rank: "AIR 182",
      exam: "NEET-UG",
      tags: ["NCERT Line Auditing", "Physics Numerical Drills", "Mock Test Post-Mortems"],
      seatsLeft: 6,
      category: "NEET_PREP",
    },
    {
      name: "Rohan Kulkarni",
      college: "IIT Delhi",
      branch: "Electrical Engineering",
      rank: "AIR 412",
      exam: "JEE Main & Adv",
      tags: ["Physics Visualization", "Daily Accountability", "Revision Blueprints"],
      seatsLeft: 5,
      category: "JEE_PREP",
    },
  ];

  const filteredMentors =
    examFocus === "JEE"
      ? mentors.filter((m) => m.category === "JEE_PREP")
      : examFocus === "NEET"
      ? mentors.filter((m) => m.category === "NEET_PREP")
      : mentors;

  return (
    <section className="my-16 p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-elevated">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeting 2027 &amp; 2028 Aspirants</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <Link
          href="/mentors"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-400 hover:text-sky-300 transition-colors shrink-0 group"
        >
          <span>Explore All Verified Mentors</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredMentors.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-5 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all hover:-translate-y-1 group"
          >
            <div>
              {/* Badge & Rank */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-sky-950/80 text-sky-400 border border-sky-800/60 text-xs font-bold">
                  {m.exam}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-black">
                  {m.rank}
                </span>
              </div>

              {/* Name & College */}
              <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                {m.name}
              </h4>
              <p className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>{m.college} • {m.branch}</span>
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {m.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Seats & CTA */}
            <div className="mt-5 pt-3.5 border-t border-slate-900 flex items-center justify-between gap-2">
              <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Only {m.seatsLeft} Cohort Seats Left</span>
              </span>
              <Link
                href="/mentors"
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Funnel Navigation Links */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Strict Max 30 Students Per Mentor Cohort • Zero Annual Lock-in</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/free-mentorship-session"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1"
          >
            <span>Book Free 1:1 Strategy Call</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <span>•</span>
          <Link
            href={examFocus === "NEET" ? "/neet-mentorship-fees" : "/jee-mentorship-fees"}
            className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            Compare Mentorship Fees
          </Link>
        </div>
      </div>
    </section>
  );
}
