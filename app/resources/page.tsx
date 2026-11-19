import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Target,
  Calculator,
  ArrowRight,
  Sparkles,
  Users,
  IndianRupee,
  Clock,
  TrendingUp,
  FlaskConical,
  Brain,
  ShieldCheck,
  Calendar,
  Compass,
} from "lucide-react";
import { HeroGridBackground } from "@/components/HeroGridBackground";

export const metadata: Metadata = {
  title: "Free JEE & NEET Guides, Study Plans & Tools | Mentskool Resources",
  description:
    "Browse 280+ free study guides, subject roadmaps, exam strategy blueprints, interactive calculators, and mentorship comparisons for JEE Main, JEE Advanced, and NEET-UG aspirants.",
  keywords: [
    "JEE study guide",
    "NEET preparation guide",
    "JEE mentorship guide",
    "NEET study plan",
    "JEE marks vs percentile calculator",
    "NEET marks vs rank calculator",
    "JEE dropper strategy",
    "NEET repeater plan",
    "free JEE resources",
    "free NEET resources",
  ],
  alternates: {
    canonical: "https://mentskool.com/resources",
  },
  openGraph: {
    title: "Free JEE & NEET Guides, Study Plans & Tools | Mentskool",
    description:
      "280+ free exam guides, subject roadmaps, interactive calculators, and strategy blueprints for JEE & NEET aspirants.",
    url: "https://mentskool.com/resources",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mentskool Resources Hub",
      },
    ],
  },
};

/* ───────────────────────────────────────────────
   Category definitions — each has a title, icon,
   description, and an array of guide links.
   ─────────────────────────────────────────────── */

interface GuideLink {
  label: string;
  href: string;
  badge?: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  description: string;
  colorClass: string;
  borderColor: string;
  guides: GuideLink[];
}

const categories: Category[] = [
  /* ── 1. JEE Preparation & Strategy ── */
  {
    title: "JEE Preparation & Strategy",
    icon: <Target className="w-5 h-5" />,
    description:
      "Complete roadmaps, subject-wise strategies, exam-date calendars, and score-improvement blueprints for JEE Main & Advanced 2027–2028.",
    colorClass: "text-sky-400",
    borderColor: "border-sky-500/30",
    guides: [
      { label: "Best JEE Mentorship Programs", href: "/best-jee-mentorship", badge: "Popular" },
      { label: "How to Score 99 Percentile in JEE Main", href: "/how-to-score-99-percentile-in-jee-main" },
      { label: "JEE Main 2027 Exam Dates & Calendar", href: "/jee-main-2027-exam-dates" },
      { label: "JEE Advanced 2027 Exam Date & Pattern", href: "/jee-advanced-2027-exam-date" },
      { label: "JEE Advanced Exam Pattern Guide", href: "/jee-advanced-exam-pattern-guide" },
      { label: "JEE Main Exam Pattern Changes", href: "/jee-main-exam-pattern-changes" },
      { label: "NTA 2027 Exam Calendar (JEE & NEET)", href: "/nta-2027-exam-calendar-jee-neet" },
      { label: "JEE Main Chapter-Wise Weightage Trends", href: "/jee-main-chapter-wise-weightage-trends" },
      { label: "JEE Main Last 5 Years Trends", href: "/jee-main-last-5-years-trends" },
      { label: "JEE Main Shift Difficulty Analysis", href: "/jee-main-shift-difficulty-analysis" },
      { label: "JEE Negative Marking Rules", href: "/jee-negative-marking-rules" },
      { label: "JEE 2027 Aspirant Roadmap & Study Plan", href: "/jee-2027-aspirant-roadmap-and-study-plan" },
      { label: "JEE 2027 Top 10 High-Weightage Chapters PCM", href: "/jee-2027-top-10-high-weightage-chapters-pcm" },
      { label: "JEE Study Plan With Mentor", href: "/jee-study-plan-with-mentor" },
      { label: "JEE Revision Plan", href: "/jee-revision-plan" },
      { label: "JEE Backlog Management", href: "/jee-backlog-management" },
      { label: "JEE Mock Test Analysis", href: "/jee-mock-test-analysis" },
      { label: "JEE Weak Topic Tracking", href: "/jee-weak-topic-tracking" },
      { label: "JEE Accountability Mentor", href: "/jee-accountability-mentor" },
      { label: "JEE Self-Study Timetable for Droppers", href: "/jee-self-study-timetable-for-droppers" },
      { label: "JEE Mentorship 2027", href: "/jee-mentorship-2027" },
      { label: "JEE Mentorship Fees", href: "/jee-mentorship-fees" },
      { label: "JEE 1-on-1 Mentorship", href: "/jee-1-on-1-mentorship" },
      { label: "Personalized JEE Mentorship", href: "/personalized-jee-mentorship" },
      { label: "JEE Advanced Mentorship", href: "/jee-advanced-mentorship" },
      { label: "JEE Crash Course vs 1-on-1 Mentorship", href: "/jee-crash-course-vs-1-on-1-mentorship" },
      { label: "JEE Droppers Guide", href: "/jee-droppers" },
      { label: "JEE Repeaters: Self-Study vs Coaching", href: "/jee-2027-dropper-vs-two-year-prep-analysis" },
      { label: "Class 11 Wasted — JEE 2027 Recovery", href: "/class-11-wasted-jee-2027-recovery-guide" },
      { label: "JEE 2027 Class 11 Backlog Clearance", href: "/jee-2027-class-11-backlog-clearance-strategy" },
      { label: "JEE 2027 Class 11 Syllabus Deadline", href: "/jee-2027-class-11-syllabus-completion-deadline" },
      { label: "How Many Hours to Study for JEE 2027", href: "/how-many-hours-to-study-for-jee-2027-in-class-11" },
      { label: "JEE 2027 Mock Test Analysis Template", href: "/jee-2027-mock-test-analysis-template-excel" },
      { label: "JEE 2027 Speed & Accuracy Drills", href: "/jee-2027-speed-and-accuracy-drills-physics-maths" },
      { label: "JEE 2027 Test Anxiety & Score Stagnation", href: "/jee-2027-test-anxiety-and-score-stagnation" },
      { label: "JEE 2027 Winter Vacation Blueprint", href: "/jee-2027-winter-vacation-study-blueprint" },
      { label: "JEE 2027 Night Owl vs Early Bird Timetable", href: "/jee-2027-night-owl-vs-early-bird-study-timetable" },
      { label: "JEE 2027 Peer Pressure & Comparison Anxiety", href: "/jee-2027-peer-pressure-and-comparison-anxiety" },
      { label: "JEE Main January to April Score Surge", href: "/jee-main-january-to-april-score-surge" },
      { label: "JEE Last 30 Days Formula Revision", href: "/jee-last-30-days-formula-revision-blueprint" },
      { label: "JEE 2027 Self-Study vs PW vs Allen", href: "/jee-2027-self-study-vs-pw-vs-allen-for-droppers-11th" },
      { label: "JEE 2027 How to Score 99%ile in Session 1", href: "/jee-2027-how-to-score-99-percentile-in-session-1" },
      { label: "Low Percentile in JEE Main: What Next?", href: "/low-percentile-in-jee-main-what-next" },
      { label: "JEE Main Colleges for 70-80 Percentile", href: "/jee-main-colleges-for-70-to-80-percentile" },
      { label: "JEE Main Colleges for 80-90 Percentile", href: "/jee-main-colleges-for-80-to-90-percentile" },
      { label: "JEE Main Low Marks vs Percentile Table", href: "/jee-main-low-marks-vs-percentile-table" },
      { label: "Safe Score for NIT / IIT (JEE)", href: "/safe-score-for-nit-iit-jee" },
      { label: "NIT Trichy / Surathkal / Warangal Safe Percentile", href: "/nit-trichy-surathkal-warangal-safe-percentile" },
      { label: "Can I Get NIT with 85-90 Percentile?", href: "/can-i-get-nit-with-85-to-90-percentile" },
      { label: "IIIT Hyderabad UGEE & JEE Main Strategy", href: "/iiit-hyderabad-ugee-and-jee-main-strategy" },
      { label: "BITSAT vs JEE Advanced Dual Preparation", href: "/bitsat-vs-jee-advanced-dual-preparation" },
      { label: "3-Year and 4-Year IIT JEE Master Timeline", href: "/3-year-and-4-year-iit-jee-master-timeline" },
      { label: "JEE 2027 Allen Score vs Real Main Percentile", href: "/jee-2027-allen-score-vs-real-jee-main-percentile" },
      { label: "JEE 2027 Regular School vs Dummy School", href: "/jee-2027-regular-school-vs-dummy-school-decision" },
      { label: "JEE 2027 Dummy School Daily Routine", href: "/jee-2027-dummy-school-daily-routine-and-timetable" },
      { label: "IIT Bombay Toppers Study Routine", href: "/iit-bombay-toppers-study-routine" },
      { label: "IIT Delhi CS Rankers Strategy Guide", href: "/iit-delhi-cs-rankers-strategy-guide" },
      { label: "How IIT Rankers Solve Irodov & HC Verma", href: "/how-iit-rankers-solve-irodov-and-hc-verma" },
    ],
  },

  /* ── 2. JEE Subject-Wise Guides ── */
  {
    title: "JEE Subject-Wise Mastery",
    icon: <FlaskConical className="w-5 h-5" />,
    description:
      "Deep-dive guides for Physics, Chemistry, and Mathematics — formula vaults, mechanism maps, mnemonics, and problem-solving blueprints.",
    colorClass: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    guides: [
      { label: "JEE Physics Mentor", href: "/jee-physics-mentor" },
      { label: "JEE Chemistry Mentor", href: "/jee-chemistry-mentor" },
      { label: "JEE Maths Mentor", href: "/jee-maths-mentor" },
      { label: "JEE Physics Formula Revision Tricks", href: "/jee-physics-formula-revision-tricks" },
      { label: "JEE Chemistry Mnemonics & Organic Tricks", href: "/jee-chemistry-mnemonics-and-organic-tricks" },
      { label: "JEE Maths Speed Tricks & Shortcuts", href: "/jee-maths-speed-tricks-and-shortcuts" },
      { label: "Calculus Shortcut Methods for JEE Main", href: "/calculus-shortcut-methods-for-jee-main" },
      { label: "Coordinate Geometry Problem Triage (JEE)", href: "/coordinate-geometry-problem-triage-jee" },
      { label: "JEE Mechanics Phobia & Problem-Solving Blueprint", href: "/jee-mechanics-phobia-and-problem-solving-blueprint" },
      { label: "Organic Chemistry Mechanisms for JEE Advanced", href: "/organic-chemistry-mechanisms-for-jee-advanced" },
      { label: "Organic Chemistry Reactions Roadmap (JEE & NEET)", href: "/organic-chemistry-reactions-roadmap-jee-neet" },
      { label: "JEE Inorganic Chemistry NCERT Retention Guide", href: "/jee-inorganic-chemistry-ncert-retention-guide" },
      { label: "JEE 2027 Physics Formula Sheet & Short Notes", href: "/jee-2027-physics-formula-sheet-and-short-notes" },
      { label: "JEE 2027 Maths Coordinate Geometry Formula Vault", href: "/jee-2027-maths-coordinate-geometry-formula-vault" },
      { label: "JEE 2027 Inorganic Chemistry NCERT Table Tracker", href: "/jee-2027-inorganic-chemistry-ncert-table-tracker" },
      { label: "JEE 2027 Organic Reaction Pathways & Reagents", href: "/jee-2027-organic-reaction-pathways-and-reagents" },
      { label: "JEE 2027 How to Solve Cengage Maths Effectively", href: "/jee-2027-how-to-solve-cengage-mathematics-effectively" },
      { label: "GOC & Hydrocarbons Retention for Class 12", href: "/goc-and-hydrocarbons-retention-for-class-12-organic" },
      { label: "Prerequisite Chapters for Class 12 JEE Maths", href: "/prerequisite-chapters-for-class-12-jee-maths" },
      { label: "Coaching Module vs Standard Reference Books (JEE)", href: "/coaching-module-vs-standard-reference-books-jee" },
    ],
  },

  /* ── 3. NEET Preparation & Strategy ── */
  {
    title: "NEET Preparation & Strategy",
    icon: <GraduationCap className="w-5 h-5" />,
    description:
      "Complete preparation guides, exam calendars, scoring roadmaps, and admission cutoff breakdowns for NEET-UG 2027–2028.",
    colorClass: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    guides: [
      { label: "Best NEET Mentorship Programs", href: "/best-neet-mentorship", badge: "Popular" },
      { label: "How to Score 680+ in NEET", href: "/how-to-score-680-plus-in-neet" },
      { label: "NEET 2027 Exam Dates", href: "/neet-2027-exam-dates" },
      { label: "NEET 2027 Application Form Guide", href: "/neet-2027-application-form-guide" },
      { label: "NEET Exam Pattern & Marking Scheme", href: "/neet-exam-pattern-and-marking-scheme" },
      { label: "NEET CBT vs Pen-Paper Guide", href: "/neet-cbt-vs-pen-paper-guide" },
      { label: "NEET 2027 CBT Preparation", href: "/neet-2027-cbt-preparation" },
      { label: "NEET Chapter-Wise Weightage Trends", href: "/neet-chapter-wise-weightage-trends" },
      { label: "NEET Last 5 Years Marks vs Rank Trends", href: "/neet-last-5-years-marks-vs-rank-trends" },
      { label: "NEET Negative Marking Rules", href: "/neet-negative-marking-rules" },
      { label: "NEET 2027 Aspirant Complete Preparation Guide", href: "/neet-2027-aspirant-complete-preparation-guide" },
      { label: "NEET 2027 Top 12 High-Yield Chapters for 600+", href: "/neet-2027-top-12-high-yield-chapters-for-600-plus" },
      { label: "NEET 2027 How to Score 680+ in First Attempt", href: "/neet-2027-how-to-score-680-plus-in-first-attempt" },
      { label: "NEET Study Plan With Mentor", href: "/neet-study-plan-with-mentor" },
      { label: "NEET Revision Plan", href: "/neet-revision-plan" },
      { label: "NEET Backlog Management", href: "/neet-backlog-management" },
      { label: "NEET Mock Test Analysis", href: "/neet-mock-test-analysis" },
      { label: "NEET Weak Topic Tracking", href: "/neet-weak-topic-tracking" },
      { label: "NEET Accountability Mentor", href: "/neet-accountability-mentor" },
      { label: "NEET Mentorship 2027", href: "/neet-mentorship-2027" },
      { label: "NEET Mentorship Fees", href: "/neet-mentorship-fees" },
      { label: "NEET 1-on-1 Mentorship", href: "/neet-1-on-1-mentorship" },
      { label: "Personalized NEET Mentorship", href: "/personalized-neet-mentorship" },
      { label: "NEET Crash Course vs 1-on-1 Mentorship", href: "/neet-crash-course-vs-1-on-1-mentorship" },
      { label: "NEET Repeaters Guide", href: "/neet-repeaters" },
      { label: "NEET Repeaters: Self-Study vs Coaching", href: "/neet-repeaters-self-study-vs-coaching-guide" },
      { label: "NEET Score Stuck at 400-500: How to Reach 650", href: "/neet-score-stuck-at-400-to-500-how-to-reach-650" },
      { label: "Class 11 Wasted — NEET 2027 Comeback Plan", href: "/class-11-wasted-neet-2027-comeback-plan" },
      { label: "NEET 2027 Negative Marking Reduction System", href: "/neet-2027-negative-marking-reduction-system" },
      { label: "NEET 2027 OMR Bubble Filling & Time Management", href: "/neet-2027-omr-bubble-filling-and-time-management" },
      { label: "NEET 2027 Mock Test Score vs Actual Marks", href: "/neet-2027-mock-test-score-vs-actual-neet-marks" },
      { label: "NEET 2027 Winter Revision & Backlog Sprint", href: "/neet-2027-winter-revision-and-backlog-sprint" },
      { label: "NEET 2027 Assertion-Reason & Statement Questions", href: "/neet-2027-assertion-reason-and-statement-questions" },
      { label: "NEET 2027 Daily NCERT Audio & Flashcard System", href: "/neet-2027-daily-ncert-audio-and-flashcard-system" },
      { label: "NEET Qualifying Marks vs Admission Cutoff", href: "/neet-qualifying-marks-vs-admission-cutoff" },
      { label: "NEET Low Marks Admission Options (300-500)", href: "/neet-low-marks-admission-options-300-to-500" },
      { label: "Safe Score for AIIMS / Government MBBS", href: "/safe-score-for-aiims-government-mbbs" },
      { label: "MAMC / VMMC Delhi NEET Cutoff & Score Guide", href: "/mamc-vmmc-delhi-neet-cutoff-and-score-guide" },
      { label: "NEET 2027 AIIMS Delhi vs MAMC vs VMMC Cutoff", href: "/neet-2027-aiims-delhi-vs-mamc-vs-vmmc-cutoff-guide" },
      { label: "Semi-Government & Private Medical College Cutoff Reality", href: "/semi-government-and-private-medical-college-cutoff-reality" },
      { label: "BDS / BAMS / BHMS vs MBBS Repeat Decision Guide", href: "/bds-bams-bhms-vs-mbbs-repeat-decision-guide" },
      { label: "NEET 2027 Parent Guide to Child's Mock Scores", href: "/neet-2027-parent-guide-to-childs-mock-scores" },
      { label: "Overcoming NEET Burnout & Medical Seat Anxiety", href: "/overcoming-neet-burnout-and-medical-seat-anxiety" },
    ],
  },

  /* ── 4. NEET Subject-Wise Guides ── */
  {
    title: "NEET Subject-Wise Mastery",
    icon: <Brain className="w-5 h-5" />,
    description:
      "Biology NCERT mastery, Physics numerical cures, and Chemistry formula vaults — everything for NEET subject dominance.",
    colorClass: "text-teal-400",
    borderColor: "border-teal-500/30",
    guides: [
      { label: "NEET Biology Mentor", href: "/neet-biology-mentor" },
      { label: "NEET Physics Mentor", href: "/neet-physics-mentor" },
      { label: "NEET Chemistry Mentor", href: "/neet-chemistry-mentor" },
      { label: "How to Score 360 in NEET Biology (NCERT)", href: "/how-to-score-360-in-neet-biology-ncert" },
      { label: "How to Read NCERT Biology Line by Line (2027)", href: "/how-to-read-ncert-biology-line-by-line-for-neet-2027" },
      { label: "NEET Biology NCERT Mnemonics & Diagrams", href: "/neet-biology-ncert-mnemonics-and-diagrams" },
      { label: "NEET Biology Diagram-Based Questions Guide", href: "/neet-biology-diagram-based-questions-guide" },
      { label: "Plant Physiology NEET NCERT Retention Guide", href: "/plant-physiology-neet-ncert-retention-guide" },
      { label: "Botany Morphology & Anatomy Retention Hacks", href: "/botany-morphology-and-anatomy-retention-hacks-neet" },
      { label: "Human Physiology NEET Mnemonics & Diagrams", href: "/human-physiology-neet-mnemonics-and-diagrams" },
      { label: "NEET Genetics & Biotechnology Mastery Guide", href: "/neet-genetics-and-biotechnology-mastery-guide" },
      { label: "NEET Physics Calculation Hacks", href: "/neet-physics-calculation-hacks" },
      { label: "NEET Physics Basic Mathematics & Vectors Mastery", href: "/neet-physics-basic-mathematics-and-vectors-mastery" },
      { label: "NEET Physics Modern Physics & Semiconductors", href: "/neet-physics-modern-physics-and-semiconductors" },
      { label: "NEET Chemistry Physical Shortcut Formulas", href: "/neet-chemistry-physical-shortcut-formulas" },
      { label: "NEET Physical Chemistry Formula Calculation Tricks", href: "/neet-physical-chemistry-formula-calculation-tricks" },
      { label: "NEET Physical Chemistry Speed Calculation Hacks", href: "/neet-physical-chemistry-speed-calculation-hacks" },
      { label: "NEET Inorganic Chemistry Exceptions Cheat Sheet", href: "/neet-inorganic-chemistry-exceptions-cheat-sheet" },
      { label: "NEET Organic Chemistry Named Reactions Summary", href: "/neet-organic-chemistry-named-reactions-summary" },
      { label: "NEET 2027 Human Physiology NCERT Deep Dive", href: "/neet-2027-human-physiology-ncert-deep-dive" },
      { label: "NEET 2027 Plant Physiology, Enzyme & Respiration Hacks", href: "/neet-2027-plant-physiology-enzyme-and-respiration-hacks" },
      { label: "NEET 2027 Inorganic Chemistry Block Chemistry Vault", href: "/neet-2027-inorganic-chemistry-block-chemistry-vault" },
      { label: "NEET 2027 Organic Chemistry Reaction Maps", href: "/neet-2027-organic-chemistry-reaction-maps" },
      { label: "NEET 2027 Chemistry Physical Chemistry Formula Vault", href: "/neet-2027-chemistry-physical-chemistry-formula-vault" },
      { label: "NEET 2027 Physics Formula Sheet & Derivations", href: "/neet-2027-physics-formula-sheet-and-derivations" },
      { label: "NEET 2027 Class 11 Physics Numerical Fear Cure", href: "/neet-2027-class-11-physics-numerical-fear-cure" },
      { label: "NEET 2027 How to Solve MTG Fingertips Line by Line", href: "/neet-2027-how-to-solve-mtg-fingertips-line-by-line" },
      { label: "How to Maintain NEET Error Notebook", href: "/how-to-maintain-neet-error-notebook-mistake-copy" },
      { label: "PCB Daily Study Timetable for Class 11 NEET", href: "/pcb-daily-study-timetable-for-class-11-neet" },
      { label: "Prerequisite Class 11 Chapters for Class 12 NEET", href: "/prerequisite-class-11-chapters-for-class-12-neet" },
    ],
  },

  /* ── 5. Foundation & Early Start (Class 8–10) ── */
  {
    title: "Foundation & Early Start (Class 8–10)",
    icon: <Compass className="w-5 h-5" />,
    description:
      "Starting early for JEE or NEET? Guides for Class 8, 9, and 10 students on building strong fundamentals and choosing the right path.",
    colorClass: "text-amber-400",
    borderColor: "border-amber-500/30",
    guides: [
      { label: "JEE 2028 Aspirant Starter Guide (Class 10 → 11)", href: "/jee-2028-aspirant-starter-guide-class-10-to-11" },
      { label: "NEET 2028 Aspirant Starter Guide (Class 10 → 11)", href: "/neet-2028-aspirant-starter-guide-class-10-to-11" },
      { label: "JEE 2028 Exam Dates Roadmap", href: "/jee-2028-exam-dates-roadmap" },
      { label: "NEET 2028 Exam Dates Roadmap", href: "/neet-2028-exam-dates-roadmap" },
      { label: "JEE 2028 First 30 Days of Class 11 Survival Guide", href: "/jee-2028-first-30-days-of-class-11-survival-guide" },
      { label: "NEET 2028 First 30 Days of Medical Prep Survival Guide", href: "/neet-2028-first-30-days-of-medical-prep-survival-guide" },
      { label: "JEE 2028 Summer Physics Starter", href: "/jee-2028-class-10-to-11-summer-physics-starter" },
      { label: "JEE 2028 Summer Chemistry Starter", href: "/jee-2028-class-10-to-11-summer-chemistry-starter" },
      { label: "JEE 2028 Summer Maths Starter", href: "/jee-2028-class-10-to-11-summer-maths-starter" },
      { label: "NEET 2028 Summer Biology Starter", href: "/neet-2028-class-10-to-11-summer-biology-starter" },
      { label: "NEET 2028 Summer Chemistry Starter", href: "/neet-2028-class-10-to-11-summer-chemistry-starter" },
      { label: "NEET 2028 Summer Physics Starter", href: "/neet-2028-class-10-to-11-summer-physics-starter" },
      { label: "JEE 2028 Early Olympiad & Foundation Roadmap", href: "/jee-2028-early-olympiad-and-foundation-roadmap" },
      { label: "NEET 2028 Early Pre-Medical Study Schedule (Class 10)", href: "/neet-2028-early-pre-medical-study-schedule-class-10" },
      { label: "JEE 2028 PCMB to PCM Stream Change Recovery", href: "/jee-2028-pcmb-to-pcm-stream-change-recovery" },
      { label: "NEET 2028 PCMB to PCB Stream Transition Guide", href: "/neet-2028-pcmb-to-pcb-stream-transition-guide" },
      { label: "JEE 2028 Dummy School Admissions & CBSE Verification", href: "/jee-2028-dummy-school-admissions-and-cbse-verification" },
      { label: "NEET 2028 Dummy School Practical File & Viva Guide", href: "/neet-2028-dummy-school-practical-file-and-viva-guide" },
      { label: "Early Start Advantage for IIT JEE 2028", href: "/early-start-advantage-for-iit-jee-2028" },
      { label: "Early Start Advantage for NEET 2028", href: "/early-start-advantage-for-neet-2028" },
      { label: "IIT JEE 2029 Aspirant Roadmap for Class 9", href: "/iit-jee-2029-aspirant-roadmap-for-class-9" },
      { label: "NEET 2029 Aspirant Roadmap for Class 9", href: "/neet-2029-aspirant-roadmap-for-class-9" },
      { label: "Is Starting JEE Prep in Class 9 Too Early?", href: "/is-starting-jee-prep-in-class-9-too-early" },
      { label: "Is Starting NEET Prep in Class 9 Too Early?", href: "/is-starting-neet-prep-in-class-9-too-early" },
      { label: "How to Study Class 9 Maths for Future JEE", href: "/how-to-study-class-9-maths-for-future-jee-success" },
      { label: "How to Study Class 9 Science for Future NEET", href: "/how-to-study-class-9-science-for-future-neet-success" },
      { label: "HC Verma Physics for Class 9 & 10 Guide", href: "/hc-verma-physics-for-class-9-and-10-guide" },
      { label: "Chemistry Periodic Table & Bonding for Class 10 → 11", href: "/chemistry-periodic-table-and-bonding-for-class-10-to-11" },
      { label: "Self-Study Foundation Plan for Class 8 & 9", href: "/self-study-foundation-plan-for-class-8-and-9" },
      { label: "Online 1-on-1 Mentorship for Class 8-9 Foundation", href: "/online-1-on-1-mentorship-for-class-8-9-foundation" },
      { label: "IOQM / Mathematics Olympiad Strategy (Class 8-9)", href: "/ioqm-mathematics-olympiad-strategy-for-class-8-9" },
      { label: "NSEJS Junior Science Olympiad Roadmap (Class 9)", href: "/nsejs-junior-science-olympiad-roadmap-for-class-9" },
      { label: "How IIT Rankers Studied in Classes 8, 9 & 10", href: "/how-iit-rankers-studied-in-classes-8-9-and-10" },
      { label: "How to Build Problem-Solving Mindset in Class 10", href: "/how-to-build-problem-solving-mindset-in-class-10" },
      { label: "Mental Math & Speed Calculation for Young Aspirants", href: "/mental-math-and-speed-calculation-for-young-aspirants" },
      { label: "Developing Study Discipline & Focus in Middle School", href: "/developing-study-discipline-and-focus-in-middle-school" },
      { label: "Critical Thinking & Deductive Reasoning for Students", href: "/critical-thinking-and-deductive-reasoning-for-students" },
      { label: "PCM vs PCB vs PCMB Confusion (Class 10 Guide)", href: "/pcm-vs-pcb-vs-pcmb-confusion-class-10-guide" },
      { label: "Why Class 10 Toppers Struggle in JEE & NEET", href: "/why-class-10-toppers-struggle-in-jee-and-neet" },
      { label: "Is Class 11 Really Hard? Truth for 10th Toppers", href: "/is-class-11-really-hard-truth-for-10th-toppers" },
      { label: "Class 10 → 11 JEE Transition Shock Recovery", href: "/class-10-to-11-jee-transition-shock-recovery" },
      { label: "Best Books to Buy Before Starting Class 11 (JEE)", href: "/best-books-to-buy-before-starting-class-11-jee" },
      { label: "Best Books to Buy Before Starting Class 11 (NEET)", href: "/best-books-to-buy-before-starting-class-11-neet" },
      { label: "How to Restart JEE Preparation in Class 11", href: "/how-to-restart-jee-preparation-in-class-11" },
      { label: "Class 10 Board Exam vs JEE 2028 Foundation Balance", href: "/class-10-board-exam-vs-jee-2028-foundation-balance" },
      { label: "Class 10 Board Exam vs NEET 2028 Foundation Balance", href: "/class-10-board-exam-vs-neet-2028-foundation-balance" },
      { label: "Class 10 Summer Break Bridge Course for JEE & NEET", href: "/class-10-summer-break-bridge-course-for-jee-neet" },
      { label: "Balancing Sports, Hobbies & Early JEE / NEET Prep", href: "/balancing-sports-hobbies-and-early-jee-neet-prep" },
      { label: "Basic Calculus & Algebra Preparation for JEE 2028", href: "/basic-calculus-and-algebra-preparation-for-jee-2028" },
    ],
  },

  /* ── 6. Parents & Family Guides ── */
  {
    title: "Parents & Family Guides",
    icon: <Users className="w-5 h-5" />,
    description:
      "Guidance for parents navigating coaching selection, mentorship investments, and supporting their child's JEE or NEET journey.",
    colorClass: "text-rose-400",
    borderColor: "border-rose-500/30",
    guides: [
      { label: "Is Online Mentorship Safe for Students? (Parent Checklist)", href: "/is-online-mentorship-safe-for-students-parents", badge: "Safety" },
      { label: "Parents' Guide to JEE & NEET", href: "/parents-guide-jee-neet" },
      { label: "Parents' Guide to JEE / NEET Counseling & Mentorship", href: "/parents-guide-to-jee-neet-counseling-and-mentorship" },
      { label: "Parents' Guide to Coaching Selection 2028", href: "/parents-guide-to-jee-neet-coaching-selection-2028" },
      { label: "Parents' Guide to Child's Early IIT / NEET Dream", href: "/parents-guide-to-childs-early-iit-neet-dream" },
      { label: "Parents Consultation Call (JEE & NEET)", href: "/parents-consultation-call-jee-neet" },
      { label: "Foundation Coaching Scams & Honest Review", href: "/foundation-coaching-scams-and-honest-review" },
      { label: "CBSE Board 75% Criteria Panic (JEE 2027)", href: "/cbse-board-75-percent-criteria-panic-jee-2027" },
      { label: "CBSE / ICSE / State Board Comparison for JEE & NEET", href: "/cbse-icse-state-board-comparison-for-jee-neet" },
      { label: "Offline Coaching vs Online Coaching with Mentor 2028", href: "/offline-coaching-vs-online-coaching-with-mentor-2028" },
      { label: "Phone Addiction & Screen Time Fix for JEE Aspirants", href: "/phone-addiction-and-screen-time-fix-for-jee-aspirants" },
    ],
  },

  /* ── 7. Coaching Comparisons & Alternatives ── */
  {
    title: "Coaching Comparisons & Alternatives",
    icon: <TrendingUp className="w-5 h-5" />,
    description:
      "Honest head-to-head comparisons: Mentskool vs Allen, PW, Aakash, and other mentorship platforms.",
    colorClass: "text-orange-400",
    borderColor: "border-orange-500/30",
    guides: [
      { label: "Do I Actually Need a JEE / NEET Mentor? (Honest Self-Check)", href: "/do-i-need-a-jee-neet-mentor", badge: "Decision" },
      { label: "Allen vs PW vs Mentskool", href: "/allen-vs-pw-vs-mentskool" },
      { label: "Allen vs Aakash vs PW Test Series (NEET)", href: "/allen-vs-aakash-vs-pw-test-series-for-neet" },
      { label: "Allen / FIITJEE / Resonance Test Series Comparison", href: "/allen-fiitjee-resonance-test-series-comparison" },
      { label: "Mentor vs Coaching for JEE & NEET", href: "/mentor-vs-coaching-for-jee-neet" },
      { label: "Self-Study vs Coaching (JEE & NEET)", href: "/self-study-vs-coaching-jee-neet" },
      { label: "Kota Coaching vs Online Mentorship", href: "/kota-coaching-vs-online-mentorship" },
      { label: "Dummy School vs Regular School (JEE & NEET)", href: "/dummy-school-vs-regular-school-jee-neet" },
      { label: "Should I Take Dummy School for JEE 2028?", href: "/should-i-take-dummy-school-for-jee-2028" },
      { label: "Should I Take Dummy School for NEET 2028?", href: "/should-i-take-dummy-school-for-neet-2028" },
      { label: "Partial Drop vs Full Drop (JEE & NEET)", href: "/partial-drop-vs-full-drop-jee-neet" },
      { label: "Low Mock Test Score (JEE & NEET)", href: "/low-mock-test-score-jee-neet" },
      { label: "Allen / FIITJEE Batch Demotion Recovery (JEE)", href: "/allen-fiitjee-batch-demotion-recovery-jee" },
      { label: "Aakash / Allen NEET Batch Stress & Recovery", href: "/aakash-allen-neet-batch-stress-and-recovery" },
      { label: "Leaving Kota for Home Study — JEE Plan", href: "/leaving-kota-for-home-study-jee-plan" },
      { label: "Leaving Allen / Aakash Hostel — NEET Self-Study Guide", href: "/leaving-allen-aakash-hostel-neet-self-study-guide" },
      { label: "Silly Mistakes Reduction (JEE & NEET)", href: "/silly-mistakes-reduction-jee-neet" },
      { label: "Managing School Attendance & JEE Preparation", href: "/managing-school-attendance-and-jee-preparation" },
      { label: "MentorPrep Alternative", href: "/compare/mentorprep-alternative" },
      { label: "MentorKhoj Alternative", href: "/compare/mentorkhoj-alternative" },
      { label: "PW Disha Alternative", href: "/compare/pw-disha-alternative" },
      { label: "JeetNeeti Alternative", href: "/compare/jeetneeti-alternative" },
      { label: "JEE Society Alternative", href: "/compare/jeesociety-alternative" },
      { label: "ToppersClubs Alternative", href: "/compare/toppersclubs-alternative" },
      { label: "eSaral Alternative", href: "/compare/esaral-alternative" },
      { label: "CampusPoint Alternative", href: "/compare/campuspoint-alternative" },
      { label: "MindPeak Alternative", href: "/compare/mindpeak-alternative" },
      { label: "Hello Mentor Alternative", href: "/compare/hello-mentor-alternative" },
      { label: "Mentors Eduserv Alternative", href: "/compare/mentors-eduserv-alternative" },
    ],
  },

  /* ── 8. Booking & Consultation Pages ── */
  {
    title: "Book a 1:1 Session",
    icon: <Calendar className="w-5 h-5" />,
    description:
      "Book free and paid 1-on-1 strategy calls, doubt sessions, mock test analyses, and backlog recovery sessions.",
    colorClass: "text-blue-400",
    borderColor: "border-blue-500/30",
    guides: [
      { label: "Free Mentorship Session", href: "/free-mentorship-session", badge: "Free" },
      { label: "Book 1:1 JEE Mentorship Session", href: "/book-1-on-1-jee-mentorship-session" },
      { label: "Book 1:1 NEET Mentorship Session", href: "/book-1-on-1-neet-mentorship-session" },
      { label: "Book Call with IITian for JEE", href: "/book-call-with-iitian-for-jee" },
      { label: "Book Call with AIIMS Doctor for NEET", href: "/book-call-with-aiims-doctor-for-neet" },
      { label: "Book JEE Backlog Recovery Session", href: "/book-jee-backlog-recovery-session" },
      { label: "Book NEET Backlog Recovery Session", href: "/book-neet-backlog-recovery-session" },
      { label: "Book JEE Mock Test Analysis Call", href: "/book-jee-mock-test-analysis-call" },
      { label: "Book NEET Mock Test Analysis Call", href: "/book-neet-mock-test-analysis-call" },
      { label: "JEE Advanced 1:1 Strategy Call", href: "/jee-advanced-1-on-1-strategy-call" },
      { label: "JEE One-on-One Counseling Call", href: "/jee-one-on-one-counseling-call" },
      { label: "NEET One-on-One Counseling Call", href: "/neet-one-on-one-counseling-call" },
      { label: "JEE Maths 1:1 Strategy Session", href: "/jee-maths-1-on-1-strategy-session" },
      { label: "NEET Physics 1:1 Doubt Call", href: "/neet-physics-1-on-1-doubt-call" },
      { label: "Online 1:1 Consultation for JEE Aspirants", href: "/online-1-on-1-consultation-jee-aspirants" },
      { label: "Online 1:1 Consultation for NEET Aspirants", href: "/online-1-on-1-consultation-neet-aspirants" },
      { label: "Class 11-12 Mentorship", href: "/class-11-12-mentorship" },
      { label: "Class 11 → 12 Transition Call (JEE & NEET)", href: "/class-11-to-12-transition-call-jee-neet" },
      { label: "Drop Year Strategy Call (JEE & NEET)", href: "/drop-year-strategy-call-jee-neet" },
      { label: "Urgent JEE Doubt & Strategy Session", href: "/urgent-jee-doubt-and-strategy-session" },
      { label: "Urgent NEET Doubt & Strategy Session", href: "/urgent-neet-doubt-and-strategy-session" },
      { label: "AIIMS Delhi Toppers Daily Study Timetable", href: "/aiims-delhi-toppers-daily-study-timetable" },
    ],
  },

  /* ── 9. Earn as a Mentor (IIT / AIIMS / NIT Students) ── */
  {
    title: "Earn as a Mentor",
    icon: <IndianRupee className="w-5 h-5" />,
    description:
      "Guides for IIT, NIT, AIIMS & MBBS students to earn ₹15k–45k/month mentoring aspirants on Mentskool.",
    colorClass: "text-emerald-300",
    borderColor: "border-emerald-400/30",
    guides: [
      { label: "Become a JEE Mentor — Earn Money", href: "/become-a-jee-mentor-earn-money", badge: "Popular" },
      { label: "Become a NEET Mentor — Earn Money", href: "/become-a-neet-mentor-earn-money" },
      { label: "Best Platform for MBBS Students to Teach NEET", href: "/best-platform-for-mbbs-students-to-teach-neet" },
      { label: "Best Platform to Become Online JEE Mentor", href: "/best-platform-to-become-online-jee-mentor" },
      { label: "How to Become a Verified NEET Mentor on Mentskool", href: "/how-to-become-a-verified-neet-mentor-on-mentskool" },
      { label: "How to Start JEE Mentoring in Engineering College", href: "/how-to-start-jee-mentoring-in-engineering-college" },
      { label: "How IITians Make Passive Income Mentoring", href: "/how-iitians-make-passive-income-mentoring" },
      { label: "JEE Topper — Earn Money Mentoring Aspirants", href: "/jee-topper-earn-money-mentoring-aspirants" },
      { label: "NEET Topper — Earn Money Guiding Students", href: "/neet-topper-earn-money-guiding-students" },
      { label: "NIT Topper — Earn Money Online Mentorship", href: "/nit-topper-earn-money-online-mentorship" },
      { label: "Earn Money as an IITian in College", href: "/earn-money-as-an-iitian-in-college" },
      { label: "Earn Money as an MBBS Student in India", href: "/earn-money-as-an-mbbs-student-in-india" },
      { label: "College Pocket Money Guide for JEE & NEET Rankers", href: "/college-pocket-money-guide-for-jee-neet-rankers" },
      { label: "Freshers 1st Year IIT / MBBS — Earn Pocket Money", href: "/freshers-1st-year-iit-mbbs-earn-pocket-money" },
      { label: "Part-Time Jobs for IIT Students Online", href: "/part-time-jobs-for-iit-students-online" },
      { label: "Part-Time Mentorship Job for NIT Students", href: "/part-time-mentorship-job-for-nit-students" },
      { label: "Weekend Online Jobs for IIT / NIT Students", href: "/weekend-online-jobs-for-iit-nit-students" },
      { label: "Work-from-Hostel Jobs for Engineering Students", href: "/work-from-hostel-jobs-for-engineering-students" },
      { label: "Hostel-Based JEE Mentoring Jobs for IITians", href: "/hostel-based-jee-mentoring-jobs-for-iitians" },
      { label: "Online Earning for MBBS Students India", href: "/online-earning-for-mbbs-students-india" },
      { label: "MBBS Internship Safe Side Income (Mentoring)", href: "/mbbs-internship-safe-side-income-mentoring" },
      { label: "Medical Student Side Income India (NEET Mentorship)", href: "/medical-student-side-income-india-neet-mentorship" },
      { label: "AIIMS Student Part-Time Income Online Mentoring", href: "/aiims-student-part-time-income-online-mentoring" },
      { label: "Online Tutoring vs Mentoring for College Students", href: "/online-tutoring-vs-mentoring-for-college-students" },
      { label: "BTech 1st Year Online Tutoring vs Mentoring", href: "/btech-1st-year-online-tutoring-vs-mentoring" },
      { label: "Teach & Mentor JEE / NEET Without Full-Time Coaching", href: "/teach-and-mentor-jee-neet-without-full-time-coaching" },
      { label: "Mentskool Mentor Eligibility & Verification", href: "/mentskool-mentor-eligibility-and-verification" },
      { label: "Mentskool Mentor Program Benefits & Payouts", href: "/mentskool-mentor-program-benefits-and-payouts" },
      { label: "JEE Mentorship Hourly Rates & Payouts India", href: "/jee-mentorship-hourly-rates-and-payouts-india" },
      { label: "NEET Mentor Earnings, Payouts & Seat Pricing", href: "/neet-mentor-earnings-payouts-and-seat-pricing" },
    ],
  },

  /* ── 10. Free Interactive Tools ── */
  {
    title: "Free Interactive Tools & Calculators",
    icon: <Calculator className="w-5 h-5" />,
    description:
      "Use our free exam calculators to estimate your percentile, rank, daily study hours, and rank improvement potential.",
    colorClass: "text-violet-400",
    borderColor: "border-violet-500/30",
    guides: [
      { label: "JEE & NEET Backlog Clearance Calculator", href: "/tools/jee-neet-backlog-clearance-calculator", badge: "New Tool" },
      { label: "JEE Main Marks vs Percentile Calculator", href: "/tools/jee-main-marks-vs-percentile-calculator", badge: "Tool" },
      { label: "NEET Marks vs Rank Calculator", href: "/tools/neet-marks-vs-rank-calculator", badge: "Tool" },
      { label: "JEE & NEET Rank Improvement Calculator", href: "/tools/jee-neet-rank-improvement-calculator", badge: "Tool" },
      { label: "JEE & NEET Daily Study Hour Calculator", href: "/tools/jee-neet-daily-study-hour-calculator", badge: "Tool" },
    ],
  },
];

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mentskool Resources — Free JEE & NEET Guides, Study Plans & Tools",
    description:
      "Browse 280+ free study guides, subject roadmaps, exam strategy blueprints, interactive calculators, and mentorship comparisons for JEE and NEET aspirants.",
    url: "https://mentskool.com/resources",
    isPartOf: {
      "@type": "WebSite",
      name: "Mentskool",
      url: "https://mentskool.com",
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Mentskool Technologies",
      url: "https://mentskool.com",
      logo: "https://mentskool.com/logo.png",
    },
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-sky-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroGridBackground />

      <main className="relative z-10 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>280+ Free Guides & Tools</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              JEE & NEET{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400">
                Study Resources
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Subject roadmaps, exam strategies, interactive calculators, and
              mentorship guides — everything you need to prepare for JEE Main,
              JEE Advanced, and NEET-UG. All free, all written by verified
              rankers.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="px-8 py-3.5 rounded-xl text-base font-bold flex items-center gap-2.5 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-elevated hover:-translate-y-0.5 transition-all group"
              >
                <span>Book Free 1:1 Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/mentors"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Browse Mentors
              </Link>
            </div>
          </div>

          {/* Category Sections */}
          <div className="space-y-12">
            {categories.map((cat, catIdx) => (
              <section
                key={catIdx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-slate-950/80 ${cat.borderColor} border flex items-center justify-center ${cat.colorClass} shrink-0`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h2
                      className={`text-xl sm:text-2xl font-extrabold text-white`}
                    >
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed max-w-2xl">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Guide Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {cat.guides.map((g, gIdx) => (
                    <Link
                      key={gIdx}
                      href={g.href}
                      className="group p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all flex items-center justify-between gap-2"
                    >
                      <span className="text-xs sm:text-sm text-slate-300 group-hover:text-white transition-colors leading-snug">
                        {g.label}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        {g.badge && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              g.badge === "Popular"
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                                : g.badge === "Free"
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                                : "bg-violet-500/10 text-violet-400 border border-violet-500/30"
                            }`}
                          >
                            {g.badge}
                          </span>
                        )}
                        <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Verified IIT & AIIMS Rankers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Reading is Good. A Personal Mentor is Better.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto mb-6">
              Guides can show the path, but a 1:1 mentor who cracked your exact
              exam walks the path with you — daily tasks, weekly accountability,
              and zero annual lock-ins.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-call"
                className="px-8 py-3.5 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-elevated hover:-translate-y-0.5 transition-all flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free 1:1 Strategy Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/mentors"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
              >
                Explore Mentor Directory
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
