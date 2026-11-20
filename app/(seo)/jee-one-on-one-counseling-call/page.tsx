import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "JEE 1-on-1 Academic Counseling & Strategy Call | Mentskool",
  description: "Break free from score plateaus and test anxiety. Book a private 1-on-1 counseling video call with an IITian ranker to audit your JEE preparation schedule and mindset.",
  keywords: ["jee 1 on 1 counseling call", "iit jee academic counseling online", "jee preparation strategy call", "talk to iitian counselor", "jee score plateau guidance"],
  alternates: {
    canonical: "https://mentskool.com/jee-one-on-one-counseling-call",
  },
  openGraph: {
    title: "JEE 1-on-1 Academic Counseling & Strategy Call | Mentskool",
    description: "Break free from score plateaus and test anxiety. Book a private 1-on-1 counseling video call with an IITian ranker to audit your JEE preparation schedule and mindset.",
    url: "https://mentskool.com/jee-one-on-one-counseling-call",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 JEE Academic Counseling & Psychological Alignment",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "jee-one-on-one-counseling-call",
  "breadcrumbLabel": "JEE 1-on-1 Counseling Call",
  "examFocus": "JEE",
  "metaTitle": "JEE 1-on-1 Academic Counseling & Strategy Call | Mentskool",
  "metaDescription": "Break free from score plateaus and test anxiety. Book a private 1-on-1 counseling video call with an IITian ranker to audit your JEE preparation schedule and mindset.",
  "keywords": [
    "jee 1 on 1 counseling call",
    "iit jee academic counseling online",
    "jee preparation strategy call",
    "talk to iitian counselor",
    "jee score plateau guidance"
  ],
  "badgeText": "Academic Diagnosis & Counseling",
  "h1Prefix": "Book a 1:1 Academic Counseling Call for",
  "h1Highlight": "JEE Main & Advanced Aspirants",
  "heroDescription": "Stuck at 110-140 marks despite 12-hour study days? Book a private 45-minute counseling call with an IITian to diagnose whether cognitive burnout, poor timetable balance, or exam panic is suffocating your true potential.",
  "serviceTitle": "1:1 JEE Academic Counseling & Psychological Alignment",
  "serviceDescription": "45-minute private counseling video session with verified IITians covering score plateau diagnosis, timetable engineering, and mental stamina under pressure.",
  "quickStats": [
    {
      "label": "Session Type",
      "value": "Counseling",
      "hint": "Holistic Academic & Mental Audit"
    },
    {
      "label": "Format",
      "value": "Private 1:1",
      "hint": "Student & Parents Welcome"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Clinical Root Cause Analysis"
    },
    {
      "label": "Output",
      "value": "Reset Plan",
      "hint": "Timetable & Habit Restructure"
    }
  ],
  "overviewHeading": "When to Book a 1:1 JEE Counseling Session",
  "overviewIntro": "Academic counseling is not generic motivation. When a JEE student loses confidence, watching motivational videos only creates temporary guilt. Real counseling requires an objective diagnostic of daily micro-habits: sleep architecture, active versus passive problem solving, and post-test recovery protocols.",
  "overviewPoints": [
    {
      "title": "Overcoming Chronic Plateaus",
      "detail": "Discover why studying 3 additional hours yields zero score increase and how to pivot towards high-efficiency question analysis."
    },
    {
      "title": "Resolving Batch Demotion Trauma",
      "detail": "Rebuild momentum after dropping from top coaching batches to regular batches without losing belief."
    },
    {
      "title": "Class 12 vs. Boards Equilibrium",
      "detail": "Design an integrated weekly schedule that ensures 90%+ in 12th board exams while protecting your JEE Advanced rank."
    },
    {
      "title": "Parent-Aspirant Alignment",
      "detail": "Facilitate a healthy, transparent conversation between parents and aspirants to eliminate unrealistic emotional stress."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 12 Min",
      "phaseTitle": "Psychological & Schedule Audit",
      "description": "Evaluate sleep patterns, coaching commute stress, and burnout markers.",
      "deliverables": [
        "Burnout index calculation",
        "Time leakage audit",
        "Mindset assessment"
      ]
    },
    {
      "timeframe": "12 \u2013 25 Min",
      "phaseTitle": "Academic Bottleneck Deconstruction",
      "description": "Inspect subject confidence levels and why specific chapters create immense test paralysis.",
      "deliverables": [
        "Subject fear hierarchy",
        "High-friction topic isolation",
        "Self-study efficiency metric"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Timetable & Routine Restructuring",
      "description": "Build a realistic 6-day weekly block routine with built-in buffers for revision and physical exercise.",
      "deliverables": [
        "Hour-by-hour calendar",
        "Sunday review protocol",
        "Screen time reduction plan"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Confidence Blueprint & Q&A",
      "description": "Synthesize clear weekly commitments and address parental anxieties.",
      "deliverables": [
        "Reset commitment document",
        "Parental guidance checklist",
        "Emergency check-in route"
      ]
    }
  ],
  "comparisonTitle": "Coaching Class Counselor vs. Mentskool IITian Counselor",
  "comparisonSubtitle": "Why an active IITian provides genuine academic counseling while coaching centers offer sales pitches.",
  "comparisonRows": [
    {
      "aspect": "Counselor Profile",
      "genericCoaching": "Sales staff with targets to renew admissions or sell test packages.",
      "mentskool1on1": "IITian who personally handled the exact emotional and academic strain."
    },
    {
      "aspect": "Personalization",
      "genericCoaching": "Generic advice: 'wake up at 4 AM and study harder.'",
      "mentskool1on1": "Customized diagnostic tailored to your exact sleep chronotype and coaching schedule."
    },
    {
      "aspect": "Parent Engagement",
      "genericCoaching": "Often creates anxiety by warning parents about cutoff failures.",
      "mentskool1on1": "Bridges parent-student expectations with realistic, constructive benchmarks."
    },
    {
      "aspect": "Mental Health Awareness",
      "genericCoaching": "Dismisses burnout as 'laziness' or 'lack of dedication.'",
      "mentskool1on1": "Recognizes cognitive fatigue and implements strategic recovery days."
    },
    {
      "aspect": "Action Plan",
      "genericCoaching": "Leaves you feeling guilty with no clear tactical steps.",
      "mentskool1on1": "Leaves you with an actionable, hour-by-hour daily execution routine."
    }
  ],
  "sections": [
    {
      "heading": "Diagnosing Cognitive Burnout vs. Conceptual Weakness",
      "subheading": "Why Studying More Hours Often Leads to Decreasing Marks",
      "paragraphs": [
        "When marks fall, the instinctive reaction of parents and teachers is to demand 14 hours of study instead of 10. In over 70% of cases examined by our IITian mentors, however, mark drops are triggered by cognitive saturation rather than lack of effort. When the brain is exhausted, working memory falters, resulting in severe algebraic blunders and misread question stems.",
        "During your 1:1 counseling call, your mentor helps you identify the symptoms of cognitive saturation: taking 10 minutes to read a simple paragraph, staring blankly at formulas you know, and experiencing high heart rates during tests. You will learn how to implement structured 50-minute focused blocks and tactical rest intervals that double retention."
      ],
      "keyTakeaways": [
        {
          "title": "The 50/10 Study Cycle",
          "detail": "Never sit for more than 50 consecutive minutes without a 10-minute non-screen physical break."
        },
        {
          "title": "Active Recovery Protocols",
          "detail": "Replace social media breaks with light stretching or walking to allow memory consolidation."
        },
        {
          "title": "Pre-Exam Cognitive Tapering",
          "detail": "Reduce problem-solving volume by 40% in the final 48 hours before tests to enter the hall with fresh mental energy."
        }
      ]
    },
    {
      "heading": "Rebuilding Confidence After Test Setbacks",
      "subheading": "The Post-Test Reset Framework Used by Top 100 Rankers",
      "paragraphs": [
        "A disastrous mock score can destroy 3 weeks of hard work if not processed correctly. Many aspirants spiral into days of avoidance\u2014skipping classes and procrastinating because looking at their books triggers intense anxiety. This cycle of avoidance is the number one killer of JEE dreams.",
        "Your IITian counselor equips you with a clinical emotional detachment framework. You will learn to treat mock tests as diagnostic blood reports rather than personal judgments of your intelligence. By categorizing errors within 2 hours of receiving your answer key, you transform negative feelings into clear action items."
      ],
      "keyTakeaways": [
        {
          "title": "Detaching Self-Worth from Marks",
          "detail": "Mock tests exist to reveal weaknesses before NTA conducts the actual exam; every mistake found early is a gift."
        },
        {
          "title": "The 2-Hour Error Processing Window",
          "detail": "Process errors immediately on Sunday evening so you start Monday with clean momentum."
        },
        {
          "title": "Incremental Progress Targets",
          "detail": "Aim for a +15 mark improvement per test rather than expecting an unrealistic 60-mark surge."
        }
      ]
    },
    {
      "heading": "Designing a Sustainable Daily Study Architecture",
      "subheading": "Balancing Coaching, School Attendance, and Active Self-Study",
      "paragraphs": [
        "The most common complaint from class 12 aspirants is: 'I have no time for self-study.' Between 6 hours of coaching, 6 hours of school, and 2 hours of travel, students are left with only 2 exhausted hours at night. Trying to solve complex physics problems at 1:00 AM while half-asleep is completely unproductive.",
        "Your mentor helps you audit your weekly calendar to reclaim 18-24 hours of wasted transit and micro-delays. You will learn how to utilize commuting time for flashcard review, convert school free periods into question-solving sprints, and protect high-energy morning hours for intense calculus problem sets."
      ],
      "keyTakeaways": [
        {
          "title": "Micro-Session Utilization",
          "detail": "Transform 20-minute gap periods into targeted 5-question numerical sprints."
        },
        {
          "title": "High-Energy Matching",
          "detail": "Schedule your hardest subject during your peak circadian window (typically morning or early evening)."
        },
        {
          "title": "Strict Bedtime Enactment",
          "detail": "Protect 7 hours of sleep to ensure cognitive sharpness and emotional stability."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Pick IITian Counselor",
      "description": "Select an IIT mentor with strong counseling experience in burnout and timetable restructuring."
    },
    {
      "step": "02",
      "title": "Complete Pre-Call Form",
      "description": "Share your current daily routine, coaching hours, and emotional stress points."
    },
    {
      "step": "03",
      "title": "Attend 1:1 Video Call",
      "description": "Experience an empathetic, deeply actionable 45-minute consultation."
    },
    {
      "step": "04",
      "title": "Implement Reset Plan",
      "description": "Follow your new sustainable routine and re-evaluate your mental stamina in 14 days."
    }
  ],
  "faqs": [
    {
      "question": "Is this psychological counseling or academic counseling?",
      "answer": "It is an integrated academic-strategic counseling session. We address the root academic problems (poor routine, backlogs, test mistakes) that trigger anxiety and low confidence, providing tactical solutions from an IITian."
    },
    {
      "question": "Can parents talk to the mentor during the call?",
      "answer": "Yes! Parents are encouraged to participate to discuss realistic expectations, reducing domestic pressure, and creating a quiet, supportive study environment."
    },
    {
      "question": "Will the mentor help me choose between drop year and college admissions?",
      "answer": "Yes, our mentors provide candid, data-driven advice on whether taking a drop year is viable based on your current score trajectory and mental resilience."
    },
    {
      "question": "How soon can I schedule this session?",
      "answer": "Slots are available within 24 to 48 hours to ensure you receive immediate intervention when feeling overwhelmed."
    },
    {
      "question": "Can I follow up after 2 weeks to review progress?",
      "answer": "Yes, you can schedule follow-up check-ins or enroll in our weekly accountability program to ensure the new routine sticks."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 JEE Mentorship Session",
      "href": "/book-1-on-1-jee-mentorship-session"
    },
    {
      "label": "Drop Year Strategy Call",
      "href": "/drop-year-strategy-call-jee-neet"
    },
    {
      "label": "Parent Consultation Call",
      "href": "/parents-consultation-call-jee-neet"
    },
    {
      "label": "JEE Backlog Recovery Session",
      "href": "/book-jee-backlog-recovery-session"
    },
    {
      "label": "Explore All Mentors",
      "href": "/mentors"
    },
    {
      "label": "Free Strategy Call",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
