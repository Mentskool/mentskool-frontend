import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "1st Year IIT, NIT & MBBS Freshers: Earn Pocket Money Mentoring | Mentskool",
  description:
    "Just joined IIT, NIT, IIIT, AIIMS or a Govt Medical College in 1st year? Turn your fresh JEE or NEET rank into ₹12,000–₹30,000/month pocket money on Mentskool.",
  keywords: [
    "1st year IIT student earn money",
    "1st year MBBS student pocket money",
    "freshers earn money in college India",
    "how 1st year NIT students earn online",
    "turn fresh JEE NEET rank into money",
  ],
  alternates: {
    canonical: "https://mentskool.com/freshers-1st-year-iit-mbbs-earn-pocket-money",
  },
  openGraph: {
    title: "Just Joined IIT, NIT or Govt Medical College? Monetize Your Fresh Rank",
    description:
      "Freshers hold the single sharpest advantage in mentoring 2027/2028 aspirants—your exam memory is 100% current.",
    url: "https://mentskool.com/freshers-1st-year-iit-mbbs-earn-pocket-money",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "1st Year Freshers Earn Pocket Money" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "freshers-1st-year-iit-mbbs-earn-pocket-money",
  breadcrumbLabel: "1st-Year Freshers Pocket Money",
  audience: "BOTH",
  badgeText: "Built for 1st-Year College Freshers",
  h1Prefix: "Just Joined IIT, NIT or MBBS? Turn Your",
  h1Highlight: "Fresh Rank Into ₹12k–₹30k/Month",
  heroDescription:
    "Freshers rarely qualify for coding internships or campus TA jobs—yet 1st-year students hold a massive hidden advantage in mentorship: you literally just survived the latest NTA exam pattern, syllabus cuts, and mock-test cutoffs weeks ago.",
  summaryHeading: "Executive Overview: Why 1st-Year Students Are Actually Mentskool's Most Relatable Mentors",
  summaryIntro:
    "Aspirants preparing for JEE 2027 or NEET 2027 want mentors who faced recent NTA difficulty shifts—not someone who wrote the exam five years ago on outdated syllabi. If you just cleared JoSAA or NEET counseling, your fresh exam instincts are immediately valuable.",
  summaryPoints: [
    {
      title: "Fresh NTA Pattern Memory",
      detail: "You vividly remember exact 2025/2026 NCERT traps, deleted syllabus tweaks, shift difficulty spikes, and exam-hall time pressure.",
    },
    {
      title: "Start With Allotment Letter or ID",
      detail: "Even before formal campus fests finish, your seat allotment letter + NTA scorecard qualifies you for rapid verification.",
    },
    {
      title: "Earn Before Coding Skills Are Ready",
      detail: "While classmates spend 2 years learning software stacks before getting paid, you monetize your JEE/NEET mastery in Month 1.",
    },
    {
      title: "Light 8–12 Seat Starter Cohort",
      detail: "Take just 8 to 10 students in Semester 1 for ₹10,000–₹15,000/month pocket money while enjoying hostel life fully.",
    },
  ],
  sections: [
    {
      heading: "Why Seniors Wait Two Years to Earn—While Smart Freshers Start in Semester 1",
      subheading: "Flipping the disadvantage of being a 'fresher' into your strongest marketplace selling point.",
      paragraphs: [
        "Walk onto any college campus as a 1st-year B.Tech or MBBS student and almost every financial opportunity ignores you: corporate internships want 3rd-year students, coding startups want GitHub portfolios, and local tuition agencies look at age first. Meanwhile, freshers feel awkward asking parents repeatedly for fest passes, laptops, train tickets, and weekend dining.",
        "Yet inside JEE & NEET mentorship, being a 1st-year fresher is an unfair competitive advantage. Think about an aspirant taking NEET or JEE Main in 2027: who knows the latest NTA statement-based Biology wording or recent JEE Main Physics formula emphasis better—a final-year senior who took the exam in 2022 before half the syllabus changed, or a 1st-year IITian/MBBS student who sat inside that exact examination center just months ago?",
        "Your formula notebooks, mistake diaries, and mental tricks are still fresh in your mind. You remember the exact dread of February pre-boards, January percentile dips, and May exam-center anxiety—making your empathy 10x stronger than older tutors.",
      ],
      bullets: [
        {
          title: "Immediate Confidence Builder",
          detail: "Paying your own mess bills and buying your own laptop/iPad in 1st year gives huge personal pride and financial discipline early in adulthood.",
        },
        {
          title: "Zero Need to Wait for Placement Season",
          detail: "Build steady monthly cash flow across all 8 semesters (or all 5.5 MBBS years) starting now.",
        },
      ],
    },
    {
      heading: "How 1st-Year Freshers Balance Hostel Bonding, Clubs & 10 Mentees Smoothly",
      subheading: "Keeping Semester 1 GPA high while mentoring just 3 hours weekly.",
      paragraphs: [
        "First year is precious—you are making lifelong hostel friends, exploring technical/cultural clubs, and settling into college independence. We never want mentoring to trap freshers inside their rooms 20 hours a week. That is why Mentskool recommends starting with a comfortable 8-to-12 student cap during your first two months.",
        "Eight to ten students take only ~2.5 to 3 hours per week total using Mentskool's task assignment board and crisp 15-minute Sunday check-ins. That easily generates ₹10,000 to ₹16,000/month—plenty for genuine college pocket money without missing a single wing hangout or club orientation.",
      ],
    },
  ],
  tableTitle: "1st-Year Fresher Earning Paths Compared",
  tableSubtitle: "Why mentoring beats waiting until 3rd year or grinding low-pay fresher gigs:",
  tableHeaders: ["Option Available to 1st-Year Freshers", "Prerequisites Required", "Realistic Monthly Earnings"],
  tableRows: [
    {
      col1: "Mentskool Verified Mentorship",
      col2: "Fresh JEE/NEET rankcard + admission/college ID",
      col3: "₹10,000 – ₹28,000 / mo (3–5 hrs/week)",
      highlight: true,
    },
    {
      col1: "Campus Marketing / Ambassador",
      col2: "Constant social media story posting",
      col3: "₹0 – ₹2,500 (mostly merchandise/certificates)",
    },
    {
      col1: "Wait for 2nd/3rd Year Internships",
      col2: "4 semesters of DSA / portfolio prep",
      col3: "₹0 during Years 1 & 2",
    },
    {
      col1: "Chegg Q&A Fresh Signup",
      col2: "Subject screening test + night queues",
      col3: "₹3,000 – ₹7,000 / mo",
    },
  ],
  playbookTitle: "Start Earning in Your 1st Semester in 6 Steps",
  playbookSubtitle: "Simple 15-minute verification using your admission proofs:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Sign Up at /signup?role=MENTOR",
      description: "Create your account and select Mentor role cleanly.",
    },
    {
      step: "Step 2",
      title: "Fill Latest JEE/NEET Scores",
      description: "Enter your fresh college campus, branch/MBBS course, and recent rank/percentile.",
    },
    {
      step: "Step 3",
      title: "Upload Rank Card & College Proof",
      description: "Attach your institute ID (or official JoSAA/MCC allotment + fee receipt) and scorecard.",
    },
    {
      step: "Step 4",
      title: "Set Accessible Starter Fee & Cap",
      description: "Start with 8–12 seats, competitive starter pricing, and your active UPI ID.",
    },
    {
      step: "Step 5",
      title: "Share Your Fresh Strategy Story",
      description: "Highlight latest 2025/2026 NTA insights, NCERT revision habits, and honest turnaround tips.",
    },
    {
      step: "Step 6",
      title: "Earn & Enjoy College Freedom",
      description: "Run crisp weekend check-ins and earn your first independent ₹10,000+ monthly.",
    },
  ],
  faqs: [
    {
      question: "Can 1st-year students apply before their permanent smart ID card is printed?",
      answer:
        "Yes! During early months of 1st year, submitting your official college seat allotment letter / admission receipt carrying your full name alongside your NTA JEE/NEET scorecard works for review.",
    },
    {
      question: "Will 1st-year students get booked compared to 3rd-year seniors?",
      answer:
        "Frequently yes! Aspirants love freshers because your exam experience reflects the newest syllabus deletions, latest NCERT line tweaks, and current NTA difficulty.",
    },
    {
      question: "How much time does an 8-student cohort take in 1st year?",
      answer:
        "Around 2 to 2.5 hours per week total—easily managed on Sunday afternoons.",
    },
    {
      question: "Is there any joining fee?",
      answer:
        "Zero—creating your account and completing verification is completely free.",
    },
    {
      question: "Can I pause new seats before my very first college midsems?",
      answer:
        "Yes, you control seat caps directly from your dashboard.",
    },
  ],
  relatedLinks: [
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "College Pocket Money Guide for Rankers", href: "/college-pocket-money-guide-for-jee-neet-rankers" },
    { label: "Mentor Eligibility & Verification Rules", href: "/mentskool-mentor-eligibility-and-verification" },
    { label: "Weekend-Only Online Jobs", href: "/weekend-online-jobs-for-iit-nit-students" },
    { label: "Mentskool Mentor Payouts & Benefits", href: "/mentskool-mentor-program-benefits-and-payouts" },
  ],
  articleHeadline: "1st Year IIT, NIT & MBBS Freshers: Earn Pocket Money Mentoring",
  articleDescription: "How 1st-year college freshers monetize fresh JEE/NEET exam insights for ₹12,000–₹30,000/month pocket money on Mentskool.",
};

export default function FreshersEarnPocketMoneyPage() {
  return <MentorProgramGuideTemplate config={config} />;
}
