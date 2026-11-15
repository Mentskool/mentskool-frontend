import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "Book 1:1 JEE Advanced Problem Deconstruction Call | Mentskool",
  description: "Transition from JEE Main 99 percentile to Top 2000 in JEE Advanced. Book a 1-on-1 problem deconstruction call with top IIT Bombay and Delhi rankers.",
  keywords: ["jee advanced 1 on 1 strategy call", "jee advanced problem solving session iitian", "jee advanced paper 1 paper 2 triage", "how to prepare for jee advanced", "iit jee advanced mentorship call"],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-1-on-1-strategy-call",
  },
  openGraph: {
    title: "Book 1:1 JEE Advanced Problem Deconstruction Call | Mentskool",
    description: "Transition from JEE Main 99 percentile to Top 2000 in JEE Advanced. Book a 1-on-1 problem deconstruction call with top IIT Bombay and Delhi rankers.",
    url: "https://mentskool.com/jee-advanced-1-on-1-strategy-call",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 JEE Advanced Strategic Problem Deconstruction Session",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "jee-advanced-1-on-1-strategy-call",
  "breadcrumbLabel": "JEE Advanced Strategy Call",
  "examFocus": "JEE",
  "metaTitle": "Book 1:1 JEE Advanced Problem Deconstruction Call | Mentskool",
  "metaDescription": "Transition from JEE Main 99 percentile to Top 2000 in JEE Advanced. Book a 1-on-1 problem deconstruction call with top IIT Bombay and Delhi rankers.",
  "keywords": [
    "jee advanced 1 on 1 strategy call",
    "jee advanced problem solving session iitian",
    "jee advanced paper 1 paper 2 triage",
    "how to prepare for jee advanced",
    "iit jee advanced mentorship call"
  ],
  "badgeText": "1-on-1 Advanced Problem Deconstruction",
  "h1Prefix": "Book a 1:1 JEE Advanced Problem Deconstruction Call with",
  "h1Highlight": "Top 1000 IITian Rankers",
  "heroDescription": "Master multi-concept problems, matrix matching, paragraph questions, and partial marking strategies. Screen-share challenging JEE Advanced problems live with IIT Bombay, Delhi, and Madras toppers.",
  "serviceTitle": "1:1 JEE Advanced Strategic Problem Deconstruction Session",
  "serviceDescription": "45-minute live screen-share problem-solving consultation with top 1000 JEE Advanced rankers focusing on multi-concept synthesis, partial marking optimization, and 6-hour exam stamina.",
  "quickStats": [
    {
      "label": "Mentor Tier",
      "value": "AIR < 1000",
      "hint": "IIT Bombay & Delhi"
    },
    {
      "label": "Format",
      "value": "Live Screen-Share",
      "hint": "Unseen Problem Solving"
    },
    {
      "label": "Focus",
      "value": "JEE Advanced",
      "hint": "Multi-Concept Synthesis"
    },
    {
      "label": "Duration",
      "value": "45 Mins",
      "hint": "Intensive Deep-Dive"
    }
  ],
  "overviewHeading": "Why JEE Advanced Requires an Entirely Different Problem-Solving Engine",
  "overviewIntro": "Scoring 99 percentile in JEE Main tests speed, formula recall, and rapid algebra. In JEE Advanced, however, formula memorization is completely useless. The paper setters deliberately create novel questions combining multiple physical principles, tricky coordinate systems, and ambiguous multiple-correct options. An IITian mentor teaches you how to think like a JEE Advanced problem creator.",
  "overviewPoints": [
    {
      "title": "Multi-Concept Problem Unraveling",
      "detail": "Learn how to break an intimidating 12-line physics problem into 3 sequential high-school physics principles."
    },
    {
      "title": "Multiple-Correct Partial Marking Strategy",
      "detail": "Master the mathematical risk-reward matrix: when to mark 2 options for safe +2 marks versus risking -2 for the 4th option."
    },
    {
      "title": "Paper 1 & Paper 2 Endurance Pacing",
      "detail": "Build the cognitive stamina required to maintain intense mathematical focus across 6 grueling hours of testing."
    },
    {
      "title": "Official PYQ Deep-Dive Methodology",
      "detail": "Discover why solving the past 15 years of JEE Advanced official questions provides 5x more value than coaching test series."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "JEE Advanced Readiness Audit",
      "description": "Review current JEE Main percentile, test series scores (FIITJEE AITS, Allen score), and strongest subject.",
      "deliverables": [
        "Advanced conceptual baseline",
        "Problem-solving speed check",
        "Multiple-correct risk profile"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Live Problem Deconstruction",
      "description": "Screen-share an unseen multi-concept JEE Advanced question; observe how the IITian reads and constructs boundary equations.",
      "deliverables": [
        "Symmetry identification tricks",
        "Coordinate system selection rubric",
        "Equation minimization habits"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Partial Marking & Option Triage",
      "description": "Formulate strict decision rules for multiple-correct, matrix-match, and integer-type question formats.",
      "deliverables": [
        "Multiple-correct risk-reward rubric",
        "Integer range approximation techniques",
        "Matrix matching shortcut methods"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "30-Day Advanced Roadmap & Q&A",
      "description": "Finalize an advanced problem quota (30 quality problems/day) and review official PYQ schedules, followed by Q&A.",
      "deliverables": [
        "30-day Advanced problem calendar",
        "Target book/PYQ chapter list",
        "Session recap notes"
      ]
    }
  ],
  "comparisonTitle": "Coaching Advanced Batch Lecture vs. Mentskool 1:1 Live Deconstruction",
  "comparisonSubtitle": "Why individual 1:1 problem deconstruction uncovers problem-solving architecture classroom lectures hide.",
  "comparisonRows": [
    {
      "aspect": "Problem Solving",
      "genericCoaching": "Faculty writes pre-rehearsed solution on board; student copies passively.",
      "mentskool1on1": "Student and IITian solve unseen problems live, discussing intermediate thoughts."
    },
    {
      "aspect": "Multiple-Correct",
      "genericCoaching": "Solves all options without explaining when to leave ambiguous choices.",
      "mentskool1on1": "Teaches ruthless partial marking management to protect positive marks."
    },
    {
      "aspect": "Question Selection",
      "genericCoaching": "Discusses entire paper in sequence regardless of question difficulty.",
      "mentskool1on1": "Teaches how to scan the paper in 3 minutes to find the 40% scoring questions first."
    },
    {
      "aspect": "Stamina Coaching",
      "genericCoaching": "Ignores the psychological fatigue between Paper 1 and Paper 2.",
      "mentskool1on1": "Provides exact nutrition, rest, and mental reset protocols for the 2-hour break."
    },
    {
      "aspect": "Actionable Target",
      "genericCoaching": "Assigns 100 random problems that create cognitive exhaustion.",
      "mentskool1on1": "Curates 30 high-yield multi-concept problems tailored to your target IIT branch."
    }
  ],
  "sections": [
    {
      "heading": "The Multiple-Correct Dilemma: Mastering the +4/-2 Risk Matrix",
      "subheading": "How Strategic Partial Marking Secures Top 2000 IIT Ranks",
      "paragraphs": [
        "In JEE Advanced, multiple-correct questions are where ranks are made or destroyed. If a question has options A, B, and C as correct, marking only A and B earns +2 partial marks. Marking A, B, and D earns -2 marks\u2014a net penalty swing of 4 marks on a single question.",
        "Your IITian mentor teaches you the 'Conservative Aggression' rule. Unless you can prove the 3rd or 4th option with 95% mathematical certainty, take the guaranteed +2 partial marks and move on. In a paper with 12 multiple-correct questions, banking +18 partial marks with zero negatives outperforms reckless guessing by 30+ marks."
      ],
      "keyTakeaways": [
        {
          "title": "The +2 Partial Safety Valve",
          "detail": "Treat partial marks as intentional victories rather than incomplete solutions."
        },
        {
          "title": "Zero Speculative Marking",
          "detail": "Never mark a third option on intuition; the -2 penalty wipes out previous question gains."
        },
        {
          "title": "Option Elimination via Limits",
          "detail": "Test boundary conditions (x -> 0 or x -> inf) to disprove incorrect options in seconds."
        }
      ]
    },
    {
      "heading": "Deconstructing Paragraph and Matrix Match Questions",
      "subheading": "Extracting Maximum Marks from High-Information Density Formats",
      "paragraphs": [
        "Paragraph-type and matrix-match questions often appear terrifying because they take up an entire page with dense text, experimental data, and complex schematics. In truth, paragraph questions frequently share common intermediate variables, meaning solving the first question immediately solves the next two.",
        "Your mentor demonstrates how to read comprehensive paragraphs efficiently. You will learn to extract the core mathematical model, label known and unknown variables, and exploit matrix-match option elimination patterns (e.g. if column 1 matches only option (A) and (C), you only need to check one more row to confirm the answer)."
      ],
      "keyTakeaways": [
        {
          "title": "Intermediate Variable Reuse",
          "detail": "Keep rough work for paragraph questions exceptionally tidy so you can reuse intermediate results."
        },
        {
          "title": "Matrix Elimination Shortcuts",
          "detail": "Check options before solving all 4 rows; 2 rows are often enough to uniquely identify the correct code."
        },
        {
          "title": "Experimental Data Extraction",
          "detail": "Look for asymptotes, intercepts, and inflection points in accompanying graphs to bypass equations."
        }
      ]
    },
    {
      "heading": "Surviving the 6-Hour Crucible: Paper 1 & Paper 2 Pacing",
      "subheading": "Physiological and Cognitive Endurance Strategies for JEE Advanced Day",
      "paragraphs": [
        "JEE Advanced is the most physically and mentally exhausting examination in the world: two 3-hour papers separated by a 2-hour break under harsh summer temperatures. Over 60% of score drops happen in Paper 2 because students suffer severe mental exhaustion, dehydration, or carry emotional baggage from a difficult Paper 1.",
        "Your mentor teaches you the exact protocol used by top 500 rankers: zero post-Paper 1 discussions with friends, light low-glycemic nutrition (fruits, nuts, water) to avoid food comas, a 20-minute eyes-closed relaxation drill, and a complete mental reset to approach Paper 2 with fresh adrenaline."
      ],
      "keyTakeaways": [
        {
          "title": "The Mid-Day Discussion Ban",
          "detail": "Never discuss Paper 1 answers with peers during the 2-hour break; it destroys Paper 2 focus."
        },
        {
          "title": "Low-Glycemic Fueling",
          "detail": "Avoid heavy carbohydrate meals that cause sluggishness; consume electrolytes, nuts, and apples."
        },
        {
          "title": "The 20-Minute Power Rest",
          "detail": "Close your eyes in a cool, quiet space for 20 minutes to restore cognitive prefrontal cortex bandwidth."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select IITian Ranker",
      "description": "Choose an IIT Bombay, Delhi, or Madras mentor who secured AIR < 1000 in JEE Advanced."
    },
    {
      "step": "02",
      "title": "Submit Challenging Problems",
      "description": "Share 2-3 specific JEE Advanced problems or your latest test series scorecard."
    },
    {
      "step": "03",
      "title": "45-Min Screen-Share",
      "description": "Deconstruct problems live on video, mastering intermediate reasoning and partial marking."
    },
    {
      "step": "04",
      "title": "Implement Advanced Routine",
      "description": "Execute your 30-day Advanced problem quota with clear benchmark accuracy targets."
    }
  ],
  "faqs": [
    {
      "question": "What is the minimum JEE Main percentile recommended for this call?",
      "answer": "This call is most effective for students scoring 95+ percentile in JEE Main or those preparing specifically for JEE Advanced in premier coaching batches."
    },
    {
      "question": "Can we solve specific Irodov, Pathfinder, or Black Book problems on the call?",
      "answer": "Yes! Mentors frequently work through challenging problems from standard advanced books or coaching AITS test papers live on screen-share."
    },
    {
      "question": "Will the mentor give me specific advice for IIT Bombay/Delhi cutoffs?",
      "answer": "Yes, mentors provide granular rank and score requirements for top branches (Computer Science, Electrical, Mechanical) across the top 7 IITs."
    },
    {
      "question": "Can I bring my rough work sheets from my last advanced test?",
      "answer": "Yes! Inspecting your rough work allows the mentor to identify algebraic inefficiencies, messy organization, and calculation slip points."
    },
    {
      "question": "Can I book weekly Advanced problem-solving sessions?",
      "answer": "Yes, you can schedule regular 1:1 strategy calls or enroll in the mentor's monthly cohort for continuous weekly Advanced reviews."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 JEE Mentorship Session",
      "href": "/book-1-on-1-jee-mentorship-session"
    },
    {
      "label": "Book Call with an IITian",
      "href": "/book-call-with-iitian-for-jee"
    },
    {
      "label": "JEE Maths 1:1 Strategy Session",
      "href": "/jee-maths-1-on-1-strategy-session"
    },
    {
      "label": "JEE Mock Test Analysis Call",
      "href": "/book-jee-mock-test-analysis-call"
    },
    {
      "label": "Find All IIT Mentors",
      "href": "/mentors"
    },
    {
      "label": "Free Mentorship Trial",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
