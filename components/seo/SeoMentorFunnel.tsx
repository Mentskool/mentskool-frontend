import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Star,
  ArrowRight,
  Lock,
  Sparkles,
  Video,
  Clock,
  Award,
} from "lucide-react";

interface SeoMentorFunnelProps {
  examFocus?: "JEE" | "NEET" | "BOTH";
  title?: string;
  subtitle?: string;
}

export function SeoMentorFunnel({
  examFocus = "BOTH",
  title = "Book a 1:1 Video Session with Verified Top Rankers",
  subtitle = "Learn directly from recent AIR < 500 IITians and AIIMS Doctors who conquered the exact exam you are preparing for.",
}: SeoMentorFunnelProps) {
  const mentors = [
    // JEE Mentors
    {
      name: "Aryan Sharma",
      college: "IIT Bombay",
      branch: "Computer Science & Engg",
      rank: "AIR 247",
      exam: "JEE Advanced",
      score: "302 / 360",
      rating: "4.98",
      sessions: "180+ sessions",
      sessionFee: "₹799",
      tags: ["Advanced Problem Triage", "Calculus Speed", "Rotational Dynamics"],
      seatsLeft: 3,
      category: "JEE_PREP",
      bio: "Cracked JEE Advanced in first attempt from regular school. Specializes in helping Class 11 and 12 droppers master mechanics and high-speed calculus.",
    },
    {
      name: "Rohan Kulkarni",
      college: "IIT Delhi",
      branch: "Electrical Engineering",
      rank: "AIR 412",
      exam: "JEE Main & Adv",
      score: "99.85 %ile",
      rating: "4.95",
      sessions: "145+ sessions",
      sessionFee: "₹699",
      tags: ["Physics Visualization", "Daily Time-Blocking", "Backlog Recovery"],
      seatsLeft: 5,
      category: "JEE_PREP",
      bio: "Recovered from a partially wasted Class 11 to secure top-tier IIT Delhi Electrical. Guides 2027/2028 aspirants on realistic study routines and overcoming test anxiety.",
    },
    {
      name: "Kavya Nair",
      college: "IIT Madras",
      branch: "Mechanical Engineering",
      rank: "AIR 618",
      exam: "JEE Advanced",
      score: "284 / 360",
      rating: "4.96",
      sessions: "110+ sessions",
      sessionFee: "₹699",
      tags: ["Organic Mechanisms", "Inorganic Retention", "Maths Speed Drills"],
      seatsLeft: 4,
      category: "JEE_PREP",
      bio: "Expert in transforming organic chemistry into logical reaction mechanisms. Helps students avoid rote memorization and score 90+ in Chemistry.",
    },
    {
      name: "Aditya Singhania",
      college: "IIT Kanpur",
      branch: "Computer Science & Engg",
      rank: "AIR 134",
      exam: "JEE Advanced",
      score: "320 / 360",
      rating: "4.99",
      sessions: "210+ sessions",
      sessionFee: "₹899",
      tags: ["Olympiad Math (IOQM)", "Complex Numbers", "Top 100 Mindset"],
      seatsLeft: 2,
      category: "JEE_PREP",
      bio: "Olympiad medalist and AIR 134. Coaches young Class 9 and 10 foundation students as well as serious Class 11 aspirants targeting AIR < 100.",
    },

    // NEET Mentors
    {
      name: "Dr. Tanya Verma",
      college: "AIIMS New Delhi",
      branch: "MBBS (Ranker Cohort)",
      rank: "AIR 182",
      exam: "NEET-UG",
      score: "705 / 720",
      rating: "4.99",
      sessions: "240+ sessions",
      sessionFee: "₹799",
      tags: ["360/360 Biology NCERT", "Physics Numerical Drills", "Mock Post-Mortem"],
      seatsLeft: 4,
      category: "NEET_PREP",
      bio: "Scored 360/360 in Biology and 170 in Physics. Specializes in line-by-line NCERT active recall and curing physics numerical phobia for medical aspirants.",
    },
    {
      name: "Dr. Devansh Joshi",
      college: "MAMC New Delhi",
      branch: "MBBS (Maulana Azad)",
      rank: "AIR 341",
      exam: "NEET-UG",
      score: "695 / 720",
      rating: "4.96",
      sessions: "160+ sessions",
      sessionFee: "₹699",
      tags: ["Plant Physiology", "Physical Chemistry Hacks", "OMR Strategy"],
      seatsLeft: 5,
      category: "NEET_PREP",
      bio: "Maulana Azad Medical College MBBS scholar. Trains NEET 2027 and 2028 students on rapid mental chemistry calculations and retaining botanical taxonomy.",
    },
    {
      name: "Dr. Ananya Sen",
      college: "VMMC & Safdarjung Hospital",
      branch: "MBBS (Delhi Quota)",
      rank: "AIR 522",
      exam: "NEET-UG",
      score: "690 / 720",
      rating: "4.94",
      sessions: "130+ sessions",
      sessionFee: "₹699",
      tags: ["Zero-Panic Triage", "Assertion-Reason Logic", "Error Vault Setup"],
      seatsLeft: 6,
      category: "NEET_PREP",
      bio: "Overcame severe mock test anxiety in Class 11 to surge from 460 to 690 in NEET. Teaches surgical test temperament and negative marking elimination.",
    },
    {
      name: "Dr. Siddharth Rao",
      college: "AIIMS Rishikesh",
      branch: "MBBS Candidate",
      rank: "AIR 410",
      exam: "NEET-UG",
      score: "692 / 720",
      rating: "4.97",
      sessions: "150+ sessions",
      sessionFee: "₹749",
      tags: ["Human Physiology", "Class 11 Backlog Sprint", "Organic Flowcharts"],
      seatsLeft: 3,
      category: "NEET_PREP",
      bio: "Cracked NEET in his first attempt with self-study from home. Passionate about helping students escape toxic coaching hostels and build elite home routines.",
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
          href="/book-call"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-elevated transition-all shrink-0 group active:scale-95"
        >
          <Video className="w-4 h-4" />
          <span>Browse All Available Mentors</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Mentor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredMentors.map((m, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 group shadow-xs"
          >
            <div>
              {/* Header Badge & Rank */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-md bg-sky-950/80 text-sky-400 border border-sky-800/60 text-[11px] font-bold">
                  {m.exam}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-black flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>{m.rank}</span>
                </span>
              </div>

              {/* Name & College */}
              <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                {m.name}
              </h4>
              <p className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mt-0.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">{m.college} • {m.branch}</span>
              </p>

              {/* Rating & Sessions */}
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{m.rating}</span>
                </span>
                <span>•</span>
                <span className="text-slate-400 text-[11px]">{m.sessions}</span>
              </div>

              {/* Short Bio */}
              <p className="text-xs text-slate-400 mt-3 leading-relaxed line-clamp-3">
                {m.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {m.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Fee, Seats & Booking CTA */}
            <div className="mt-5 pt-3.5 border-t border-slate-800/80 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">
                  {m.sessionFee} <span className="text-slate-400 font-normal">/ 45 min</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>{m.seatsLeft} slots left</span>
                </span>
              </div>

              <Link
                href="/book-call"
                className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-1.5 transition-colors shadow-xs active:scale-95"
              >
                <Video className="w-3.5 h-3.5" />
                <span>Book 1:1 Video Session</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Funnel Navigation Links */}
      <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>100% Verified IIT &amp; AIIMS Credentials • Private End-to-End Encrypted Video</span>
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
            href="/mentors"
            className="text-sky-400 hover:text-sky-300 font-semibold transition-colors"
          >
            Explore Mentor Directory
          </Link>
        </div>
      </div>
    </section>
  );
}
