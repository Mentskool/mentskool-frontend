import React from "react";
import type { Metadata } from "next";
import {
  MentorProgramGuideTemplate,
  MentorGuidePageConfig,
} from "@/components/seo/MentorProgramGuideTemplate";

export const metadata: Metadata = {
  title: "How IITians & NITians Build Recurring Monthly Income Mentoring | Mentskool",
  description:
    "Learn how engineering rankers at IITs and NITs build predictable, recurring ₹20,000–₹45,000/month side income through lightweight 5-hour/week JEE cohorts on Mentskool.",
  keywords: [
    "passive income for IIT students",
    "recurring monthly income college India",
    "IITian mentorship income model",
    "low effort side income for IITians",
    "earn recurring money in BTech",
  ],
  alternates: {
    canonical: "https://mentskool.com/how-iitians-make-passive-income-mentoring",
  },
  openGraph: {
    title: "How IIT & NIT Undergrads Build Recurring Income With 5-Hr/Wk Cohorts",
    description:
      "Stop trading endless hours for one-off freelance cash. Build repeatable weekly mentorship systems on Mentskool.",
    url: "https://mentskool.com/how-iitians-make-passive-income-mentoring",
    siteName: "Mentskool",
    images: [{ url: "https://mentskool.com/logo.png", width: 1200, height: 630, alt: "Recurring Income Mentoring for IITians" }],
  },
};

const config: MentorGuidePageConfig = {
  slug: "how-iitians-make-passive-income-mentoring",
  breadcrumbLabel: "Recurring Income for IITians",
  audience: "IIT",
  badgeText: "Systemized Campus Cash Flow",
  h1Prefix: "How IIT & NIT Undergrads Build",
  h1Highlight: "Recurring Income in 5 Hours a Week",
  heroDescription:
    "True 'zero-effort' get-rich schemes in college do not exist—but building a repeatable, systemized cohort of 15–25 monthly JEE mentees is the closest thing in India to high-margin, semi-passive recurring income for top rankers.",
  summaryHeading: "Executive Overview: Systemizing Your Mentorship Like an Engineer",
  summaryIntro:
    "Most student tutors work linearly: teach 10 hours, get paid for 10 hours, earn zero when exams hit. Great IIT & NIT mentors apply engineering leverage—reusing master revision roadmaps, Mentskool async task templates, and concise weekly check-ins to generate compounding monthly renewals.",
  summaryPoints: [
    {
      title: "Build Your Blueprint Once, Reuse Cleanly",
      detail: "Your curated PYQ lists, mock-analysis templates, and inorganic tricks take a weekend to organize and guide dozens of cohorts across years.",
    },
    {
      title: "Subscription Renewals vs One-Off Gigs",
      detail: "Instead of pitching new clients weekly, JEE students stay enrolled for 6–12 months straight toward January and April attempts.",
    },
    {
      title: "Async Tracking Multiplies Capacity",
      detail: "Mentskool's dashboard verifies daily study compliance without you chasing students on messaging apps all day.",
    },
    {
      title: "Earn ₹2.5L–₹4.5L+ Before Graduation",
      detail: "Running a disciplined 15–25 student cohort across 2nd, 3rd, and 4th year builds meaningful personal savings before placement Day 1.",
    },
  ],
  sections: [
    {
      heading: "Why 'One-Time Freelancing' Keeps College Students Stuck on a Treadmill",
      subheading: "The compounding advantage of subscription mentorship over isolated projects or hourly doubts.",
      paragraphs: [
        "Whether you edit videos, design logos, write code scripts, or answer isolated physics doubts on Q&A sites, every single month starts back at ₹0. The moment your midsem exams arrive and you take 10 days off from bidding on new freelance tickets, your income drops to zero instantly.",
        "Recurring monthly mentorship breaks that treadmill cleanly. When a Class 11 or dropper JEE aspirant joins your Mentskool cohort in August, they are not buying one isolated conversation—they are subscribing to an ongoing accountability system all the way through JEE Main Session 1, Session 2, and JEE Advanced. As long as you deliver clear weekly roadmaps and genuine check-ins, 80%+ of serious students renew month after month.",
        "That compounding predictability means you already know in October how much income will hit your account in November, December, and January—letting you plan hackathons, fest travel, or laptop EMI payments stress-free.",
      ],
      bullets: [
        {
          title: "Reuse Tested Playbooks",
          detail: "Notice how 80% of JEE aspirants struggle with the exact same 12 bottlenecks (Rotational Mechanics, Organic GOC, 11th backlog, test panic). Package clear fixes once and customize per student.",
        },
        {
          title: "Compounding Word-of-Mouth",
          detail: "Happy students refer school friends and coaching batchmates straight to your profile link, keeping your seat cap permanently full.",
        },
      ],
    },
    {
      heading: "The 5-Hour-a-Week Engineering Playbook for Maximum Leverage",
      subheading: "Exact time allocation used by high-efficiency mentors at top IITs.",
      paragraphs: [
        "How do you serve 20 students exceptionally well in just 5 hours per week? Through structured batching and software automation. Spend 30 minutes on Monday morning assigning weekly task blocks inside Mentskool's portal—tailoring chapter sets for Class 11 vs Class 12 vs Droppers using reusable checklist templates.",
        "On Wednesday evening (1 hour) and Sunday afternoon (3.5 hours), host quick, high-energy 12–15 minute 1:1 Google Meet audits. Because Mentskool already displays the student's live task completion score and missed items right on screen, zero minutes get wasted asking what they studied—you spend 100% of the call solving bottlenecks.",
      ],
      bullets: [
        {
          title: "Automated Seat Cap Safety",
          detail: "Cap your profile at 15 or 20 seats during tough academic semesters so your weekly hours never creep past 5 hours.",
        },
        {
          title: "Long-Term Multi-Year Runway",
          detail: "Mentors starting in 1st-year B.Tech can run cohorts smoothly across 3–4 full college years, accumulating real savings before graduating.",
        },
      ],
    },
    {
      heading: "Smart Financial Moves Top Mentors Make With Their Earnings",
      subheading: "Turning ₹25k/month campus income into lasting post-college freedom.",
      paragraphs: [
        "Mentors across IIT campuses regularly use Mentskool earnings to pay off hostel/mess charges independently, invest in mutual fund SIPs at age 19, purchase high-performance laptops for research, or build cash cushions so they can chase ambitious startups or dream core jobs without feeling forced into high-stress sales roles right out of college.",
      ],
    },
  ],
  tableTitle: "Compounding Revenue Comparison: 10 Months in College",
  tableSubtitle: "Why recurring cohort seats beat starting over every week with hourly/gig freelancing:",
  tableHeaders: ["Model (5 Hrs/Week Budget)", "Month 1 Income", "Cumulative 10-Month Academic Year Income"],
  tableRows: [
    {
      col1: "Mentskool Recurring Cohort (Growing 10 → 22 seats)",
      col2: "₹14,000",
      col3: "₹2,40,000 – ₹3,20,000+",
      highlight: true,
    },
    {
      col1: "Per-Question Q&A Solving (Zero Renewal)",
      col2: "₹4,500",
      col3: "₹35,000 – ₹55,000 (drops to ₹0 during exam weeks)",
    },
    {
      col1: "Ad-Hoc Freelance Design / Writing",
      col2: "₹6,000",
      col3: "₹60,000 – ₹90,000 (high outreach time wasted)",
    },
    {
      col1: "Unpaid / ₹5k Campus Internships",
      col2: "₹5,000",
      col3: "₹40,000 – ₹50,000 (for 20+ hrs/week labor)",
    },
  ],
  playbookTitle: "Build Your Systemized Cohort Engine in 6 Steps",
  playbookSubtitle: "Get verified once and let Mentskool automate recurring operations:",
  playbookSteps: [
    {
      step: "Step 1",
      title: "Register on Mentor Signup",
      description: "Sign up at /signup?role=MENTOR using your Google or institute email.",
    },
    {
      step: "Step 2",
      title: "Verify Campus & Rank",
      description: "Submit your IIT/NIT/IIIT details, college ID, and JEE Main/Adv scorecard.",
    },
    {
      step: "Step 3",
      title: "Set Recurring Monthly Pricing",
      description: "Choose your monthly cohort fee, initial cap (e.g. 12 seats), and link UPI.",
    },
    {
      step: "Step 4",
      title: "Organize Reusable Study Templates",
      description: "Draft clean 4-week Physics/Chem/Math checklist blueprints for droppers and 12thies.",
    },
    {
      step: "Step 5",
      title: "Batch Your Weekly Call Blocks",
      description: "Open fixed 2-hour evening/Sunday windows on Mentskool for streamlined 1:1 sessions.",
    },
    {
      step: "Step 6",
      title: "Compound Retention & Savings",
      description: "Deliver honest mock audits, watch scores rise, and enjoy steady monthly UPI payouts.",
    },
  ],
  faqs: [
    {
      question: "Is mentorship truly 'passive' income?",
      answer:
        "Honest answer: no legitimate high-paying mentorship is 0-hours passive—students pay for real human attention. However, it is the highest-leverage semi-passive subscription model in college because Mentskool's software eliminates 80% of admin work and monthly student renewals compound automatically.",
    },
    {
      question: "How long do students stay subscribed to a mentor?",
      answer:
        "Serious JEE 2027/2028 aspirants typically stay enrolled for 4 to 12+ months through their target NTA attempts whenever mentors stay consistent with weekly check-ins.",
    },
    {
      question: "Can I pause new student intake once I hit my ideal weekly hour budget?",
      answer:
        "Yes! Adjust your seat cap anytime—for example locking at 15 seats so your weekly time stays strictly around 3.5 to 4 hours.",
    },
    {
      question: "Do mentors from NITs and IIITs also get recurring monthly renewals?",
      answer:
        "Yes—students targeting 98.5–99.7%ile in JEE Main frequently renew monthly with verified NIT/IIIT mentors right through April Attempt.",
    },
    {
      question: "What if I graduate while mentoring?",
      answer:
        "As long as you keep your verified ranker profile active and serve cohorts reliably, you can continue mentoring even after graduation or while starting a job.",
    },
    {
      question: "Does Mentskool handle payment reminders automatically?",
      answer:
        "Yes, billing and seat tracking live cleanly inside Mentskool's platform so you focus purely on mentoring.",
    },
  ],
  relatedLinks: [
    { label: "Earn Money as an IITian in College", href: "/earn-money-as-an-iitian-in-college" },
    { label: "Part-Time Online Jobs for IIT Students", href: "/part-time-jobs-for-iit-students-online" },
    { label: "Mentskool Mentor Program Payouts", href: "/mentskool-mentor-program-benefits-and-payouts" },
    { label: "Weekend Online Jobs for IIT & NIT Students", href: "/weekend-online-jobs-for-iit-nit-students" },
    { label: "College Pocket Money Guide for Rankers", href: "/college-pocket-money-guide-for-jee-neet-rankers" },
    { label: "Become a JEE Mentor & Earn Money", href: "/become-a-jee-mentor-earn-money" },
  ],
  articleHeadline: "How IITians & NITians Build Recurring Monthly Income Mentoring",
  articleDescription: "Engineering-style breakdown of how IIT and NIT students turn 5 weekly hours into recurring ₹20,000–₹45,000/month mentorship income.",
};

export default function HowIitiansMakePassiveIncomePage() {
  return <MentorProgramGuideTemplate config={config} />;
}
