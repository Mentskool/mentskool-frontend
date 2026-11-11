import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "Become a JEE Mentor & Earn ₹15,000–₹45,000/Month in College | Mentskool",
  description:
    "IIT, NIT & IIIT rankers: learn how to become a paid JEE mentor on Mentskool and earn ₹15,000 to ₹45,000/month working just 4–6 hours weekly from your hostel room.",
  keywords: [
    "become a JEE mentor",
    "earn money as JEE mentor",
    "paid JEE mentorship job for IITians",
    "online mentoring jobs for IIT students",
    "how IITians earn money by mentoring JEE aspirants",
    "Mentskool mentor signup",
  ],
  alternates: {
    canonical: "https://mentskool.com/become-a-jee-mentor-earn-money",
  },
  openGraph: {
    title: "Become a JEE Mentor & Earn Money While Studying in IIT/NIT",
    description:
      "Turn your hard-earned JEE Main/Advanced rank into recurring monthly income without disturbing your CGPA or placements.",
    url: "https://mentskool.com/become-a-jee-mentor-earn-money",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Become a JEE Mentor on Mentskool" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "become-a-jee-mentor-earn-money",
  breadcrumbLabel: "Become a JEE Mentor",
  audience: "IIT",
  badgeText: "IIT, NIT & IIIT Ranker Earning Opportunity",
  h1Prefix: "Become a JEE Mentor &",
  h1Highlight: "Earn ₹15,000–₹45,000/Month in College",
  heroDescription:
    "You spent two or three grueling years mastering Physics, Chemistry, Mathematics, mock-test temperament, and exam psychology to crack JEE. On Mentskool, your rank does not stop paying off after JoSAA counseling—you can mentor 10 to 30 focused aspirants 1-on-1 right from your hostel desk.",
  summaryHeading: "Executive Overview: Why Paid JEE Mentorship Beats Generic Tutoring",
  summaryIntro:
    "Most engineering undergraduates waste dozens of hours solving random textbook doubts on low-paying Q&A portals for ₹40–₹70 per question, or commute across cities for offline tuition that wrecks lab attendance. Mentskool transforms your lived JEE experience into a structured, recurring cohort mentorship business with zero administrative overhead.",
  summaryPoints: [
    {
      title: "High Hourly Leverage",
      detail: "Mentors typically spend 15–20 minutes per student per week reviewing task completion and conducting short strategy check-ins—earning ₹1,200 to ₹2,000 per effective hour.",
    },
    {
      title: "Predictable Monthly Recurring Revenue",
      detail: "Unlike erratic per-question platforms where you fight bots for questions at 2 AM, cohort students renew monthly alongside consistent weekly plans.",
    },
    {
      title: "Zero Syllabus Lecture Burden",
      detail: "Students already watch lectures at Allen, Resonance, PW, or Unacademy. Your job is strategy, backlog pruning, PYQ prioritization, mock-test post-mortems, and accountability.",
    },
    {
      title: "Built Around Semester Exams",
      detail: "Pause new enrollments during midsems, endsems, or internship seasons while continuing quick async check-ins on Mentskool's mentor task dashboard.",
    },
  ],
  sections: [
    {
      heading: "Why Top JEE Rankers Are Moving From Q&A Solving to Structured 1:1 Mentorship",
      subheading: "Understand the difference between selling raw problem-solving hours and selling battle-tested exam judgment.",
      paragraphs: [
        "Every year, over 14 lakh students register for JEE Main, yet less than 1.5% actually figure out how to balance backlogs, school pre-boards, multi-concept test anxiety, and revision cycles. Coaching institutes pack 250 students into batches or 10,000 students into live streams, leaving individual students clueless about why their mock test scores plateau around 110 or 150 marks. When a student fails to improve despite watching 6 hours of lectures daily, they do not need another lecture—they need an elder brother or sister from an IIT or NIT who walked that exact tightrope 12 to 36 months ago.",
        "Traditional doubt-solving apps treat rankers like interchangeable human calculators. You wait on a screen, race other solvers to claim a rotational mechanics numerical, type out a solution, and earn ₹50 if the system approves it. There is zero relationship, zero recurring income, and zero protection for your time during college project deadlines. On Mentskool, you own a capped personal cohort (maximum 30 students) directly tied to your verified college badge and AIR profile.",
        "Because mentorship focuses on diagnosis rather than re-teaching 40 hours of electrostatics from scratch, the time-to-income ratio is unmatched among college side hustles. Reviewing a mentee's weekly task progress on the Mentskool dashboard takes 5 minutes, and conducting a focused 15–20 minute Google Meet strategy review once a week gives the aspirant massive clarity while keeping your total weekly commitment under 5 hours for a 15–20 student cohort.",
      ],
      bullets: [
        {
          title: "What Aspirants Actually Pay You For",
          detail: "Weekly study targets tailored to their coaching calendar, realistic PYQ filtering (what to skip vs what to master), negative-marking root-cause audits, and emotional stability before NTA shifts.",
        },
        {
          title: "What You Never Have To Do",
          detail: "No cold-calling parents, no recording 200 hours of studio video lectures, no commuting in city traffic, and no rigid shift timings dictated by an edtech manager.",
        },
      ],
    },
    {
      heading: "Real Monthly Earnings Math for IIT, NIT & IIIT Undergraduates",
      subheading: "How mentors set cohort pricing, scale safely up to the 30-seat cap, and withdraw earnings directly via UPI.",
      paragraphs: [
        "Financial independence during B.Tech changes everything about college life. Covering your mess bills, upgrading your laptop for coding or ML projects, paying for technical fest travel, or simply lifting financial pressure off your parents becomes effortless when you build a reliable side income inside campus. Mentskool gives mentors transparent control over cohort pricing and seat capacity during Step 3 of Mentor Onboarding.",
        "Suppose you start conservatively in your first month with just 8 to 10 JEE 2027 or 2028 aspirants while testing how much time your semester coursework demands. At a standard monthly mentorship fee between ₹1,200 and ₹1,800 per student (depending on whether you hold a top IIT CSE/EE AIR or a strong NIT/IIT core branch rank), those 10 students generate roughly ₹12,000 to ₹18,000 every single month. That requires only around 3 hours of focused mentorship per week—less time than two campus club meetings.",
        "Once you master Mentskool's weekly task templates and structured mock-test audit checklists, scaling to 20–25 active mentees pushes your monthly payout into the ₹25,000 to ₹45,000 range. We enforce a strict hard cap of 30 students per mentor using atomic database seat locking specifically to prevent burnout and preserve 4.9-star student satisfaction. Better student outcomes drive organic word-of-mouth referrals and profile bookings directly on your public Mentskool ranker card.",
      ],
      bullets: [
        {
          title: "Verified Credential Premium",
          detail: "Uploading your valid college ID card and JEE Main/Advanced scorecard unlocks the blue Verified Ranker badge, visibly boosting student trust and conversion on /mentors.",
        },
        {
          title: "Zero Upfront Fee to Join",
          detail: "Creating your mentor account and submitting onboarding credentials on Mentskool is 100% free. You only share a transparent platform fee on confirmed student enrollments.",
        },
      ],
    },
    {
      heading: "How Mentskool Keeps Your Weekly Time Under 5 Hours (Zero CGPA Damage)",
      subheading: "Designed specifically around hostel schedules, lab submissions, and placement prep.",
      paragraphs: [
        "Every college mentor's biggest fear is committing to an online job that clashes with a surprise quiz, an 8 AM lab, or placement coding tests. Unlike live-batch tutoring platforms where cancelling a 7 PM class triggers penalty deductions, Mentskool combines asynchronous task tracking with short, mentor-scheduled video calls.",
        "Inside your Mentskool Mentor Portal, you assign weekly chapter targets and PYQ checklists to students in minutes. Students mark completed tasks and update their dynamic efficiency scores asynchronously. When you sit down on Saturday evening or Sunday morning for your mentorship block, you already see every student's backlog compliance and mock score drop before saying hello on Google Meet.",
        "If your end-semester exams arrive in November or April, you can temporarily toggle new cohort bookings off while finishing concise 10-minute async voice/text check-ins or rescheduling calls around your exam timetable—so your academic CGPA and coding prep always stay number one.",
      ],
    },
  ],
  tableTitle: "JEE Mentorship vs Other Part-Time Income Options for IITians",
  tableSubtitle: "Compare real hourly returns, flexibility, and campus compatibility across common college gigs:",
  tableHeaders: ["Income Source", "Typical Pay & Flexibility", "Mentskool 1:1 Cohort Mentorship Advantage"],
  tableRows: [
    {
      col1: "Mentskool JEE Mentorship",
      col2: "₹12k–₹45k+/mo • 4–6 hrs/week • Hostel-based",
      col3: "Recurring monthly income, zero commute, builds leadership & communication skills",
      highlight: true,
    },
    {
      col1: "Doubt-Solving Apps (Chegg / Filo)",
      col2: "₹40–₹90 per question • Unpredictable queues",
      col3: "Mentskool pays per retained monthly student rather than stressful per-question speed races",
    },
    {
      col1: "Offline Home Tuition",
      col2: "₹500–₹800/hr + 60 mins travel waste",
      col3: "Zero travel fatigue; mentor pan-India aspirants across Kota, Delhi, Mumbai & Tier-3 towns",
    },
    {
      col1: "Campus TA / Lab Assistant",
      col2: "₹6,000–₹12,000/mo fixed stipend",
      col3: "Earn 2x–4x higher effective hourly pay with total control over your weekly calendar",
    },
    {
      col1: "Unpaid / Low-Pay Content Internships",
      col2: "₹5,000–₹10,000/mo • 25 hrs/week workload",
      col3: "Keep 20 hours/week free for DSA, research, or GATE/CAT prep while earning significantly more",
    },
  ],
  playbookTitle: "How to Launch Your Paid JEE Mentor Profile in Under 15 Minutes",
  playbookSubtitle: "Follow these six quick steps from account creation to welcoming your first paid JEE aspirant:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Sign Up with Role = Mentor",
      description: "Click Apply Now to create your account on /signup?role=MENTOR using your personal or institute email address and verify your inbox.",
    },
    {
      step: "Step 2",
      title: "Enter Academic & Rank Details",
      description: "Fill in your IIT/NIT/IIIT name, engineering branch, current year, JEE Main percentile, and JEE Advanced AIR in Step 1 of onboarding.",
    },
    {
      step: "Step 3",
      title: "Upload Verification Proofs",
      description: "Upload a clear photo of your valid college ID card and official NTA/JEE scorecard. Our team verifies authenticity within 24–48 hours.",
    },
    {
      step: "Step 4",
      title: "Set Monthly Fee, Seat Cap & UPI",
      description: "Pick your monthly mentorship pricing, choose an initial seat cap (e.g., 10 or 15 seats), and attach your UPI ID for direct payouts.",
    },
    {
      step: "Step 5",
      title: "Add Bio & Strategy Tags",
      description: "Highlight your personal JEE superpowers—such as Physics visualization, 11th backlog recovery, or Inorganic NCERT mastery—so matching students find you.",
    },
    {
      step: "Step 6",
      title: "Host Discovery Calls & Onboard",
      description: "Respond to incoming aspirant bookings on your dashboard, run crisp weekly accountability sprints, and get paid automatically every month.",
    },
  ],
  faqs: [
    {
      question: "Who is eligible to become a paid JEE mentor on Mentskool?",
      answer:
        "Current undergraduate/postgraduate students and recent graduates from IITs, NITs, IIITs, BITS, and premier GFTIs who cracked JEE Main (typically 97+ percentile) or JEE Advanced with verifiable rank cards and valid college IDs are eligible to apply.",
    },
    {
      question: "Can 1st-year B.Tech freshers at IIT or NIT join as mentors?",
      answer:
        "Yes! In fact, 1st-year and 2nd-year students are often the highest-converting mentors on Mentskool because your memory of latest NTA paper patterns, NCERT shifts, and syllabus changes is completely fresh.",
    },
    {
      question: "How much can I realistically earn per month without hurting my CGPA?",
      answer:
        "Most active mentors handle 10 to 25 students in 3 to 6 hours per week, earning between ₹12,000 and ₹38,000 per month depending on cohort size and rank tier. Our strict 30-student cap ensures you never overcommit.",
    },
    {
      question: "Do I have to teach full 2-hour Physics or Maths chapters live?",
      answer:
        "No. Mentskool is a strategy, planning, test-analysis, and accountability mentorship platform—not an online lecture coaching center. You help students fix what to study, audit mock errors, clear tactical roadblocks, and stick to daily execution.",
    },
    {
      question: "How and when do mentor payouts happen?",
      answer:
        "You enter your UPI ID or bank payout details inside Step 3 of Mentor Onboarding. As students join or renew your cohort, verified payouts are settled cleanly to your account without manual invoicing hassle.",
    },
    {
      question: "What happens during my college midsem or endsem exam weeks?",
      answer:
        "You manage your own calendar. You can temporarily pause new cohort admissions, shift weekly 1:1 Google Meet reviews to lighter weekend windows, or rely on quick 5-minute asynchronous task feedback on the Mentskool dashboard.",
    },
  ],
  relatedLinks: [
    { label: "Part-Time Online Jobs for IIT Students", href: "/part-time-jobs-for-iit-students-online" },
    { label: "Earn Money as an IITian in College", href: "/earn-money-as-an-iitian-in-college" },
    { label: "Mentorship Jobs for NIT & IIIT Students", href: "/part-time-mentorship-job-for-nit-students" },
    { label: "Mentskool Mentor Payouts & Benefits", href: "/mentskool-mentor-program-benefits-and-payouts" },
    { label: "Online Tutoring vs 1:1 Cohort Mentoring", href: "/online-tutoring-vs-mentoring-for-college-students" },
    { label: "Mentor Eligibility & Rank Verification", href: "/mentskool-mentor-eligibility-and-verification" },
  ],
  articleHeadline: "Become a JEE Mentor & Earn ₹15,000–₹45,000/Month in College",
  articleDescription: "Complete guide for IIT, NIT, and IIIT students to monetize their JEE rank through flexible 1:1 cohort mentorship on Mentskool.",
};

export default function BecomeJeeMentorEarnMoneyPage() {
  return <MentorProgramGuideTemplate config={config} />;
}
