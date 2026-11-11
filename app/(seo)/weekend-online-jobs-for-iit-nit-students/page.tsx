import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "Weekend-Only Online Jobs for IIT, NIT & MBBS Students | Mentskool",
  description:
    "Keep Monday to Friday 100% free for college classes, labs, and placements. Run a paid JEE or NEET mentorship cohort strictly on weekends and earn ₹15,000–₹35,000/month.",
  keywords: [
    "weekend online jobs for IIT students",
    "weekend jobs for college students India",
    "Saturday Sunday earning opportunity for IITians",
    "weekend JEE mentorship job",
    "weekend NEET mentor work from hostel",
  ],
  alternates: {
    canonical: "https://mentskool.com/weekend-online-jobs-for-iit-nit-students",
  },
  openGraph: {
    title: "Weekend-Only High-Paying Online Mentorship for College Rankers | Mentskool",
    description:
      "Batch all 1:1 student strategy reviews on Saturday & Sunday while letting Mentskool's dashboard handle weekday compliance.",
    url: "https://mentskool.com/weekend-online-jobs-for-iit-nit-students",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Weekend Online Jobs for IIT NIT Students" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "weekend-online-jobs-for-iit-nit-students",
  breadcrumbLabel: "Weekend-Only Jobs",
  audience: "BOTH",
  badgeText: "Saturday & Sunday Only Schedule",
  h1Prefix: "Weekend-Only High-Paying Side Hustle for",
  h1Highlight: "IIT, NIT & MBBS Students",
  heroDescription:
    "Monday through Friday belongs strictly to your 8 AM lectures, labs, ward postings, and placement DSA prep. Mentskool lets verified JEE and NEET rankers batch 100% of live mentorship check-ins into a clean 4-hour Saturday/Sunday window.",
  summaryHeading: "Executive Overview: Keeping Weekdays 100% Untouched",
  summaryIntro:
    "The single biggest reason high-performing undergraduates avoid part-time work is weekday context switching. Having a 5 PM tutoring class on Tuesday breaks your afternoon study rhythm. Mentskool's async + weekend-batch model guarantees your weekdays stay completely undisturbed.",
  summaryPoints: [
    {
      title: "Zero Weekday Live Classes",
      detail: "Set your Mentskool availability exclusively to Saturday afternoons or Sunday blocks—zero Tuesday or Thursday calendar conflicts.",
    },
    {
      title: "Automated Monday–Friday Tracking",
      detail: "Students log daily tasks and mock scores into the Mentskool dashboard Mon–Fri without requiring live mentor calls.",
    },
    {
      title: "High Weekend Effective Earnings",
      detail: "Just 4 weekend hours serving 15–18 mentees delivers ₹18,000–₹28,000/month consistently.",
    },
    {
      title: "Perfect for 5-Day Academic Semesters",
      detail: "Ideal for B.Tech students with heavy lab schedules or MBBS students in full-day clinical postings.",
    },
  ],
  sections: [
    {
      heading: "Why 'Weekend-Batching' Is Actually Better for Aspirants Too",
      subheading: "Weekly Sunday planning mirrors real coaching test cycles naturally.",
      paragraphs: [
        "Most JEE and NEET aspirants attend weekly coaching mock tests every Saturday or Sunday morning. Doing your 1:1 mentorship check-in right after their weekend mock test is actually the single highest-impact moment in their entire week! Their mistakes are fresh in their mind, their rough-paper calculations are sitting right on their desk, and they have clear mental space to absorb next week's 7-day study sprint.",
        "Inside Mentskool's Mentor Portal, you open availability exclusively on Saturday (e.g., 4 PM–7 PM) and Sunday (e.g., 10 AM–1 PM or 5 PM–8 PM). Across a 4-hour weekend block, running sixteen crisp 15-minute 1:1 strategy reviews feels effortless because every student's weekly Task Efficiency Score and backlog chart loads automatically before the call begins.",
        "From Monday morning through Friday midnight, you never even have to open Google Meet—focusing 100% on college classes, club fests, competitive programming, or hospital postings while Mentskool tracks student compliance automatically.",
      ],
      bullets: [
        {
          title: "No Burnout Across Long Semesters",
          detail: "Keeping work contained inside predictable weekend blocks ensures your weekday sleep and lecture focus never erode.",
        },
        {
          title: "100% Compatible With Summer Internships",
          detail: "Doing a 9-to-6 corporate or research internship Mon–Fri? Your weekend Mentskool cohort keeps running smoothly alongside your internship stipend.",
        },
      ],
    },
    {
      heading: "A Sample Weekend-Only Schedule Earning ₹22,500/Month",
      subheading: "Exact hour-by-hour breakdown for a 15-student JEE or NEET cohort:",
      paragraphs: [
        "Suppose you charge ₹1,500/month across 15 mentees (₹22,500/month gross). Saturday 5:00 PM – 6:30 PM: Conduct 6 crisp 15-minute calls (students 1–6) + push Monday–Sunday task sheets in the dashboard. Sunday 10:30 AM – 1:00 PM: Conduct 9 calls (students 7–15) covering their weekend mock test error audits and locking upcoming week targets.",
        "Total time invested: 4 hours on the weekend, ~20 minutes on Wednesday checking mid-week dashboard compliance flags. Your entire weekday campus life, sports, coding sprints, and Friday hostel hangouts remain completely yours.",
      ],
    },
  ],
  tableTitle: "Weekday Protection Comparison Across Student Earning Options",
  tableSubtitle: "Why Mentskool fits 5-day college timetables cleanly:",
  tableHeaders: ["Part-Time Option", "Weekday Intrusion", "Weekend-Only Viability"],
  tableRows: [
    {
      col1: "Mentskool 1:1 Cohort Mentorship",
      col2: "Near Zero (async dashboard only)",
      col3: "100% Viable — ₹15k–₹35k/mo in 4 weekend hrs",
      highlight: true,
    },
    {
      col1: "Startup Part-Time Internships",
      col2: "High (daily standups & Slack pings)",
      col3: "Not viable for weekend-only",
    },
    {
      col1: "Live Online Coaching Batches",
      col2: "High (3–4 evening classes Mon–Fri)",
      col3: "Low availability; batches require weekday coverage",
    },
    {
      col1: "Chegg / Doubt Portals",
      col2: "Nighttime weekday rush queues",
      col3: "Weekends often have lower international question flow",
    },
  ],
  playbookTitle: "Set Up Your Weekend-Only Mentor Schedule in 6 Steps",
  playbookSubtitle: "Launch your verified cohort without touching Mon–Fri academics:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Register on Mentor Signup",
      description: "Go to /signup?role=MENTOR and verify your account.",
    },
    {
      step: "Step 2",
      title: "Add Academic & AIR Credentials",
      description: "Fill in your IIT, NIT, IIIT, AIIMS, or Govt Medical College details.",
    },
    {
      step: "Step 3",
      title: "Verify ID & Rank Scorecard",
      description: "Upload clear proofs for 24–48 hour badge verification.",
    },
    {
      step: "Step 4",
      title: "Set Monthly Pricing & UPI",
      description: "Choose monthly cohort fee, initial cap (e.g., 12–15 seats), and attach UPI.",
    },
    {
      step: "Step 5",
      title: "Enable Weekend-Only Slots",
      description: "Configure your Mentor Session schedule exclusively for Saturdays & Sundays.",
    },
    {
      step: "Step 6",
      title: "Host Crisp Weekend Reviews",
      description: "Run structured mock audits every Sat/Sun and earn steady monthly income.",
    },
  ],
  faqs: [
    {
      question: "Will students book weekday calls if I only want to mentor on weekends?",
      answer:
        "No—inside Mentskool's Mentor Sessions settings, you define your active availability windows. If you open slots only on Saturday and Sunday, students can only pick those weekend windows.",
    },
    {
      question: "How do students stay accountable Monday through Friday?",
      answer:
        "You assign structured weekly task checklists inside Mentskool's task portal. Students check off completed targets daily Mon–Fri while you check the dashboard summary in 5 minutes.",
    },
    {
      question: "Can I run this alongside a Monday–Friday summer internship?",
      answer:
        "Yes! Many 2nd and 3rd year IITians keep their Mentskool weekend cohort running smoothly throughout summer internships—stacking mentorship payouts right on top of internship stipends.",
    },
    {
      question: "How many students fit comfortably into a Saturday/Sunday schedule?",
      answer:
        "Twelve to eighteen students easily fit inside 3.5 to 4.5 hours across Saturday and Sunday.",
    },
    {
      question: "Does this work for both JEE and NEET mentors?",
      answer:
        "Yes—both JEE (IIT/NIT/IIIT) and NEET (AIIMS/GMC MBBS) mentors run weekend-only cohorts very effectively.",
    },
    {
      question: "Is signing up free?",
      answer:
        "Yes, 100% free with zero hidden platform charges.",
    },
  ],
  relatedLinks: [
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "Part-Time Jobs for IIT Students Online", href: "/part-time-jobs-for-iit-students-online" },
    { label: "Work-From-Hostel Engineering Jobs", href: "/work-from-hostel-jobs-for-engineering-students" },
    { label: "Mentskool Mentor Program Payouts", href: "/mentskool-mentor-program-benefits-and-payouts" },
    { label: "1st Year IIT/MBBS Pocket Money Guide", href: "/freshers-1st-year-iit-mbbs-earn-pocket-money" },
  ],
  articleHeadline: "Weekend-Only Online Jobs for IIT, NIT & MBBS Students",
  articleDescription: "How top college rankers keep weekdays free and earn ₹15,000–₹35,000/month running weekend-only JEE/NEET mentorship cohorts.",
};

export default function WeekendOnlineJobsPage() {
  return <MentorProgramGuideTemplate config={config} />;
}
