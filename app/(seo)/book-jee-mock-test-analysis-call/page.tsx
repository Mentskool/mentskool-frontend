import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Book 1:1 JEE Mock Test Post-Mortem & Error Analysis Call | Mentskool",
  description: "Stop repeating silly mistakes. Book a 1-on-1 live video mock test analysis with an IITian ranker to audit negative marks, question selection, and test pacing.",
  keywords: ["book jee mock test analysis call", "jee test series error analysis 1 on 1", "mock test review session jee", "reduce silly mistakes jee main", "jee test post mortem call"],
  alternates: {
    canonical: "https://mentskool.com/book-jee-mock-test-analysis-call",
  },
  openGraph: {
    title: "Book 1:1 JEE Mock Test Post-Mortem & Error Analysis Call | Mentskool",
    description: "Stop repeating silly mistakes. Book a 1-on-1 live video mock test analysis with an IITian ranker to audit negative marks, question selection, and test pacing.",
    url: "https://mentskool.com/book-jee-mock-test-analysis-call",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 JEE Mock Test Post-Mortem & Error Analysis Session",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "book-jee-mock-test-analysis-call",
  "breadcrumbLabel": "JEE Mock Test Analysis Call",
  "examFocus": "JEE",
  "metaTitle": "Book 1:1 JEE Mock Test Post-Mortem & Error Analysis Call | Mentskool",
  "metaDescription": "Stop repeating silly mistakes. Book a 1-on-1 live video mock test analysis with an IITian ranker to audit negative marks, question selection, and test pacing.",
  "keywords": [
    "book jee mock test analysis call",
    "jee test series error analysis 1 on 1",
    "mock test review session jee",
    "reduce silly mistakes jee main",
    "jee test post mortem call"
  ],
  "badgeText": "1-on-1 Test Post-Mortem",
  "h1Prefix": "Book a 1:1 Mock Test Error Analysis Call with an",
  "h1Highlight": "IITian Ranker for JEE",
  "heroDescription": "Screen-share your latest mock exam scorecard and answer PDF with a top IITian. Categorize every lost mark into conceptual flaws, algebraic blunders, or time traps, and unlock an immediate 25-45 mark jump.",
  "serviceTitle": "1:1 JEE Mock Test Post-Mortem & Error Analysis Session",
  "serviceDescription": "45-minute live screen-share test paper review with verified IITian rankers auditing question triage, negative marking triggers, and time-budgeting efficiency.",
  "quickStats": [
    {
      "label": "Format",
      "value": "Screen-Share",
      "hint": "PDF by PDF Review"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Granular Error Audit"
    },
    {
      "label": "Target Gain",
      "value": "+30 Marks",
      "hint": "Silly Mistake Reduction"
    },
    {
      "label": "Mentor",
      "value": "IITian",
      "hint": "Top Percentile Topper"
    }
  ],
  "overviewHeading": "Why Mock Test Analysis Determines 80% of Your Final JEE Rank",
  "overviewIntro": "Taking 50 mock tests without analyzing them is worse than taking 10 mock tests with deep, surgical analysis. Most students simply check their overall score, feel disappointed for 10 minutes, and move on. In a 1:1 test analysis session, an IITian sits beside you virtually to audit every single decision you made during those 180 minutes.",
  "overviewPoints": [
    {
      "title": "The 3-Bucket Error Classification",
      "detail": "Separate errors into Conceptual Gaps (need study), Execution Slips (need discipline), and Time Pressure Traps (need better skipping)."
    },
    {
      "title": "Question Triage Post-Mortem",
      "detail": "Analyze why you spent 6 minutes on an unsolvable maths problem while leaving 3 easy chemistry questions unread."
    },
    {
      "title": "The 3-Round Attempt Rubric",
      "detail": "Calibrate your test pacing into Round 1 (easy marks), Round 2 (standard numericals), and Round 3 (tough puzzles)."
    },
    {
      "title": "Error Log Ledger Setup",
      "detail": "Build a permanent error repository that ensures you never repeat the same mistake twice in NTA exams."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "Paper Overview & Metric Audit",
      "description": "Review overall score, accuracy rate, time spent per subject, and negative marks tally.",
      "deliverables": [
        "Accuracy-to-speed ratio",
        "Subject time breakdown",
        "Negative mark total cost"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Question-by-Question Deep Dive",
      "description": "Screen-share your test PDF and examine the 10 most damaging incorrect answers and time sinks.",
      "deliverables": [
        "Calculation slip pattern detection",
        "Option misreading identification",
        "Concept vs silly error split"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Triage & Skipping Strategy Calibration",
      "description": "Teach the exact criteria for skipping questions within 30 seconds to protect pacing.",
      "deliverables": [
        "30-second skip rubric",
        "Subject order optimization",
        "Round 1 target threshold"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Action Plan for Next Test",
      "description": "Establish concrete rules and benchmark targets for your next mock exam, plus student Q&A.",
      "deliverables": [
        "Target attempt quota",
        "Pre-test checklist",
        "Summary analysis report"
      ]
    }
  ],
  "comparisonTitle": "Coaching Batch Answer Key Discussion vs. Mentskool 1:1 Post-Mortem",
  "comparisonSubtitle": "Why individual screen-share post-mortems reveal insights classroom answer key discussions completely miss.",
  "comparisonRows": [
    {
      "aspect": "Analysis Scope",
      "genericCoaching": "Faculty solves questions on blackboard; zero personal feedback.",
      "mentskool1on1": "Audits your individual decision tree, time spent per problem, and rough sheet work."
    },
    {
      "aspect": "Error Diagnosis",
      "genericCoaching": "Assumes you don't know theory if you got a question wrong.",
      "mentskool1on1": "Identifies psychological triggers: rushing, fatigue, misreading negative signs."
    },
    {
      "aspect": "Time Tracking",
      "genericCoaching": "Ignores time spent per question.",
      "mentskool1on1": "Identifies time traps: questions where you spent >4 minutes and still got -1."
    },
    {
      "aspect": "Attempt Order",
      "genericCoaching": "Rigid subject order recommended to all 100 students in the batch.",
      "mentskool1on1": "Customizes your subject sequence based on your cognitive strengths."
    },
    {
      "aspect": "Long-Term Retention",
      "genericCoaching": "Notes thrown away after class.",
      "mentskool1on1": "Systematic error notebook protocol reviewed before every subsequent test."
    }
  ],
  "sections": [
    {
      "heading": "The Anatomy of Silly Mistakes: Cognitive Traps in JEE Main",
      "subheading": "How Eliminating Calculation Blunders Adds 30 Marks Instantly",
      "paragraphs": [
        "A 'silly mistake' is not bad luck; it is a predictable breakdown in cognitive execution. When students read 'which of the following is NOT correct' as 'which is correct', or drop a minus sign when expanding a binomial bracket, it happens because their eyes are moving faster than their hand.",
        "During your 1:1 session, your IITian mentor audits your rough sheet organization. By enforcing structured rough work quadrants, double-checking unit conversions before entering numerical values, and developing option validation habits, you permanently eliminate 6 to 8 silly mistakes per test."
      ],
      "keyTakeaways": [
        {
          "title": "Rough Sheet Quadrant Protocol",
          "detail": "Divide rough sheets into neat numbered boxes to prevent miscopying intermediate calculations."
        },
        {
          "title": "The Negative Word Circle",
          "detail": "Mentally circle words like 'INCORRECT', 'NOT', and 'EXCEPT' before reading options."
        },
        {
          "title": "Unit & Dimension Sanity Check",
          "detail": "Verify SI units (cm vs m, Joules vs calories) in the final 10 seconds before inking the answer."
        }
      ]
    },
    {
      "heading": "Question Triage: The Art of Skipping to Win",
      "subheading": "Why Top Rankers Spend 40% of Their Exam Time Rejecting Questions",
      "paragraphs": [
        "Average aspirants view every question as a personal challenge\u2014spending 6 to 8 minutes wrestling with a tough complex numbers problem because they spent 20 hours studying that chapter. In JEE, however, an easy Modern Physics question carries the exact same 4 marks as a brutal Coordinate Geometry question.",
        "Your mentor teaches you ruthless question triage. You will learn the 30-second scan rule: read the first two lines, inspect the diagram or equation, and if the path to solution is not immediately clear, flag it and move on immediately. By protecting your time, you ensure you never leave easy questions unattempted."
      ],
      "keyTakeaways": [
        {
          "title": "The 30-Second Scan Rule",
          "detail": "Decide to attempt, flag, or skip within 30 seconds of opening any question."
        },
        {
          "title": "Ego Detachment",
          "detail": "Never allow personal chapter favoritism to keep you trapped on a lengthy calculation."
        },
        {
          "title": "The Round-1 Harvest",
          "detail": "Aim to secure 25 easy questions across all 3 subjects in the first 65 minutes to build an unshakeable score cushion."
        }
      ]
    },
    {
      "heading": "Maintaining a Living Error Notebook",
      "subheading": "The Single Most Effective Revision Tool for JEE Advanced",
      "paragraphs": [
        "Every topper will tell you that their error notebook was their most valuable possession during the final 3 months of preparation. An error notebook is not a copy of full solutions; it is a curated collection of your personal conceptual blind spots, tricky traps set by paper writers, and volatile formula reminders.",
        "Your mentor guides you on how to structure your error notebook. Rather than copying lengthy question texts, you document the single critical insight that unlocked the solution, along with the date and test number. Reviewing this ledger before every mock test stops recurring errors in their tracks."
      ],
      "keyTakeaways": [
        {
          "title": "1-Sentence Error Insights",
          "detail": "Record the exact mistake made in one sentence (e.g., 'Forgot to check domain restriction for ln(x)')."
        },
        {
          "title": "Periodic Error Re-Tests",
          "detail": "Re-attempt all error notebook questions without looking at solutions every 3 weeks."
        },
        {
          "title": "Pre-Exam Review Habit",
          "detail": "Read through your error notebook 24 hours before your actual JEE Main and Advanced exam shifts."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select IITian Analyst",
      "description": "Choose a mentor specialized in mock test triage and test series score surge methodologies."
    },
    {
      "step": "02",
      "title": "Upload Scorecard & PDF",
      "description": "Provide your latest test series question paper, response sheet, and mark breakdown."
    },
    {
      "step": "03",
      "title": "45-Min Screen-Share",
      "description": "Walk through your paper question by question to uncover your exact score leakage points."
    },
    {
      "step": "04",
      "title": "Implement Next-Test Plan",
      "description": "Apply your new question triage and silly-mistake elimination rubric on your very next test."
    }
  ],
  "faqs": [
    {
      "question": "Which test series papers can we analyze on the call?",
      "answer": "Mentors can analyze any major national or regional test series: Allen (Leader/Nurture), FIITJEE (AITS), Resonance, Narayana, Sri Chaitanya, MathonGo, or PW test papers."
    },
    {
      "question": "How many test papers can we review in 45 minutes?",
      "answer": "We focus deeply on your single latest test paper\u2014reviewing all incorrect and unattempted questions thoroughly\u2014and briefly cross-reference patterns from 1-2 prior tests."
    },
    {
      "question": "Do I need my rough sheets for the call?",
      "answer": "Having your rough sheets is extremely helpful! It allows the mentor to inspect your calculation organization and identify exactly where mathematical errors occurred."
    },
    {
      "question": "Will this help if my score is currently under 100 marks?",
      "answer": "Yes, students scoring under 100 usually have massive question-selection issues\u2014attempting the wrong 40 questions and suffering 15 negative marks. Correcting triage alone often adds 30 marks."
    },
    {
      "question": "Can I book a mock review call after every major test?",
      "answer": "Yes! Many students book periodic mock analysis sessions every 3-4 weeks to track their progress and continually refine their pacing strategy."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 JEE Mentorship Session",
      "href": "/book-1-on-1-jee-mentorship-session"
    },
    {
      "label": "JEE Maths 1:1 Strategy Session",
      "href": "/jee-maths-1-on-1-strategy-session"
    },
    {
      "label": "JEE Backlog Recovery Session",
      "href": "/book-jee-backlog-recovery-session"
    },
    {
      "label": "NEET Mock Test Analysis Call",
      "href": "/book-neet-mock-test-analysis-call"
    },
    {
      "label": "Find All IITian Mentors",
      "href": "/mentors"
    },
    {
      "label": "Free Mentorship Trial Call",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
