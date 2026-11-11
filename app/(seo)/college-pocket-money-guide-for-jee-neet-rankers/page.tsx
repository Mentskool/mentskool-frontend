import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "College Pocket Money Guide for JEE & NEET Rankers: Earn ₹3 Lakh+/Year | Mentskool",
  description:
    "Financial independence playbook for IIT, NIT, IIIT & MBBS students: turn your exam rank into ₹20,000–₹35,000/month pocket money and build ₹3 Lakh+/year savings via Mentskool.",
  keywords: [
    "pocket money ideas for IIT NIT MBBS students",
    "how toppers become financially independent in college",
    "earn 3 lakh per year in college India",
    "student financial independence JEE NEET rankers",
    "college side hustle for top rankers India",
  ],
  alternates: {
    canonical: "https://mentskool.com/college-pocket-money-guide-for-jee-neet-rankers",
  },
  openGraph: {
    title: "Financial Independence in College: How JEE & NEET Rankers Earn ₹3 Lakh+/Year",
    description:
      "Stop relying on monthly family allowance—build dignified, academic-safe monthly mentorship income on Mentskool.",
    url: "https://mentskool.com/college-pocket-money-guide-for-jee-neet-rankers",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "College Pocket Money Guide for Rankers" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "college-pocket-money-guide-for-jee-neet-rankers",
  breadcrumbLabel: "College Financial Independence",
  audience: "BOTH",
  badgeText: "Student Financial Independence Playbook",
  h1Prefix: "Financial Independence in College: How",
  h1Highlight: "JEE & NEET Rankers Earn ₹3 Lakh+/Year",
  heroDescription:
    "You proved your work ethic by cracking one of the toughest entrance exams on earth. Now use just 4–6 hours a week on Mentskool to fund your hostel bills, tech upgrades, travel, and first investments completely on your own.",
  summaryHeading: "Executive Overview: Why Early Financial Independence Changes College Life",
  summaryIntro:
    "Achieving ₹25,000/month in personal cash flow at age 19 or 20 does far more than pay mess fees—it removes financial guilt when buying gear, funds conferences and trips, lets you send gifts home to parents, and accelerates your personal maturity years ahead of peers.",
  summaryPoints: [
    {
      title: "Zero Debt & Zero Family Strain",
      detail: "Take financial weight off your parents' shoulders for books, hostel living, electronics, and exam fees starting from Semester 1.",
    },
    {
      title: "High-Margin Rank Leverage",
      detail: "Instead of trading 25 hours/week for minimum-wage student gigs, earn ₹1,200–₹2,000/hr mentoring motivated aspirants.",
    },
    {
      title: "Compounding 4-Year Runway",
      detail: "Earning ₹25k/month across 10 academic months/year equals ₹2.5 Lakh/year—easily over ₹7–₹10 Lakh accumulated before graduation.",
    },
    {
      title: "Direct UPI Settlements",
      detail: "Seamless digital onboarding and automated seat management make running a 15–25 student cohort effortless.",
    },
  ],
  sections: [
    {
      heading: "The Hidden Freedom of Not Depending on Monthly Allowance Transfers at Age 19",
      subheading: "Why self-earned pocket money transforms confidence across engineering and medical hostels.",
      paragraphs: [
        "Most top rankers come from hardworking middle-class households where parents sacrificed heavily for coaching fees, hostel rent, and test series across Class 11, 12, and drop years. Even after you reach IIT, NIT, or a Government Medical College, watching parents pay ₹5,000 every month for mess food or hesitate when your old laptop breaks creates quiet pressure.",
        "When you earn ₹20,000 to ₹35,000 per month mentoring 15 to 22 aspirants on Mentskool, that dynamic flips overnight. Suddenly you pay your own mess bills, replace a dying laptop with a MacBook or ThinkPad cleanly out of your own earnings, fund hackathons or medical workshops without asking permission, and treat your family on semester breaks.",
        "That psychological freedom lets you take smarter career risks too—joining research labs, launching side projects, or preparing thoroughly for placements and NEET-PG without chasing the very first paycheck out of desperation.",
      ],
      bullets: [
        {
          title: "Start With Just 10 Mentees",
          detail: "Even a modest 10-student cohort at ₹1,300/month generates ₹13,000/month (~₹1.56 Lakh/year) in ~3 hours/week.",
        },
        {
          title: "Scale Responsibly Up to 30 Max",
          detail: "Growing to 20–25 active mentees lifts annual earnings past ₹3 Lakh–₹4 Lakh while staying strictly capped for safety.",
        },
      ],
    },
    {
      heading: "A Smart 3-Bucket Budget for Rankers Earning ₹25,000/Month on Mentskool",
      subheading: "Turn college mentorship income into lifelong financial habits.",
      paragraphs: [
        "Once mentors hit steady ₹20k–₹30k monthly payouts on Mentskool, the sharpest students divide their money across three intentional buckets: Bucket 1 (40% — ₹10,000/mo) covers 100% of hostel mess bills, mobile recharge, local travel, and everyday independence. Bucket 2 (30% — ₹7,500/mo) fuels high-ROI tools—textbooks, Marrow/PrepLadder plans, laptops, or certification courses.",
        "Bucket 3 (30% — ₹7,500/mo) goes straight into liquid savings or beginner index SIPs—building a real ₹3+ Lakh cash cushion by the time graduation robes go on. Starting wealth habits at 19 beats waiting until 24 by a mile.",
      ],
    },
  ],
  tableTitle: "4-Year Financial Trajectory: Dependent Student vs Mentskool Mentor",
  tableSubtitle: "What 4–5 weekly hours of cohort mentorship compounds into over a college degree:",
  tableHeaders: ["College Stage", "Typical Cohort Size", "Cumulative Self-Earned Capital"],
  tableRows: [
    {
      col1: "Year 1 (Starter Cohort)",
      col2: "8–12 Mentees (~3 hrs/wk)",
      col3: "₹1,20,000 – ₹1,80,000 earned",
    },
    {
      col1: "Year 2 (Verified Reviews Built)",
      col2: "15–20 Mentees (~4.5 hrs/wk)",
      col3: "₹3,40,000 – ₹4,80,000 cumulative",
      highlight: true,
    },
    {
      col1: "Year 3 (Peak Efficiency Workflow)",
      col2: "20–25 Mentees (~5.5 hrs/wk)",
      col3: "₹6,20,000 – ₹8,50,000 cumulative",
      highlight: true,
    },
    {
      col1: "Year 4 / Pre-Graduation",
      col2: "12–18 Mentees (Placements / Proffs Balance)",
      col3: "₹8,00,000 – ₹11,00,000+ cumulative",
    },
  ],
  playbookTitle: "Start Your College Financial Independence Journey Today",
  playbookSubtitle: "Complete free mentor registration in under 15 minutes:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Sign Up Under Mentor Role",
      description: "Go to /signup?role=MENTOR and verify your email address.",
    },
    {
      step: "Step 2",
      title: "Enter College & Rank Profile",
      description: "Submit your IIT, NIT, IIIT, AIIMS, or Govt Medical College info and exam ranks.",
    },
    {
      step: "Step 3",
      title: "Upload Verification Proofs",
      description: "Attach institute ID + NTA scorecard to unlock your Verified Ranker shield.",
    },
    {
      step: "Step 4",
      title: "Set Monthly Pricing & UPI",
      description: "Choose your cohort price, initial seat limit, and personal UPI ID.",
    },
    {
      step: "Step 5",
      title: "Lock Convenient Call Hours",
      description: "Keep weekdays clear and schedule quick 1:1 reviews on evenings or Sundays.",
    },
    {
      step: "Step 6",
      title: "Deliver Results & Earn Monthly",
      description: "Guide mentees cleanly via Mentskool's task portal and build lasting savings.",
    },
  ],
  faqs: [
    {
      question: "How much can a ranker realistically make in Year 1 without sacrificing grades?",
      answer:
        "Starting with 8–12 students takes ~3 hours/week and brings ₹10,000–₹18,000 monthly—plenty to pay hostel living costs while keeping CGPA strong.",
    },
    {
      question: "Does Mentskool charge mentors to create profiles or receive leads?",
      answer:
        "Never! Registration, verification, and platform listing are 100% free.",
    },
    {
      question: "Who qualifies to earn on Mentskool?",
      answer:
        "Students and alumni of IITs, NITs, IIITs, BITS, DTU/NSUT, AIIMS, JIPMER, and Government/recognized MBBS colleges with verified JEE or NEET scorecards.",
    },
    {
      question: "How does Mentskool prevent burnout?",
      answer:
        "Atomic 30-seat limits, asynchronous task tracking, and full mentor calendar control ensure weekly time rarely exceeds 4–6 hours.",
    },
    {
      question: "How do I start?",
      answer:
        "Click any Apply Now CTA to open /signup?role=MENTOR and complete the 4-step onboarding wizard.",
    },
  ],
  relatedLinks: [
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
    { label: "Become a NEET Mentor & Earn Money", href: "/become-a-neet-mentor-earn-money" },
    { label: "Earn Money as an IITian in College", href: "/earn-money-as-an-iitian-in-college" },
    { label: "Online Earning for MBBS Students India", href: "/online-earning-for-mbbs-students-india" },
    { label: "1st Year Freshers Pocket Money Guide", href: "/freshers-1st-year-iit-mbbs-earn-pocket-money" },
    { label: "Mentskool Mentor Payouts & Benefits", href: "/mentskool-mentor-program-benefits-and-payouts" },
  ],
  articleHeadline: "Financial Independence in College: How JEE & NEET Rankers Earn ₹3 Lakh+/Year",
  articleDescription: "Complete guide for top JEE and NEET rankers to cover college costs and build savings via flexible mentorship on Mentskool.",
};

export default function CollegePocketMoneyGuidePage() {
  return <MentorProgramGuideTemplate config={config} />;
}
