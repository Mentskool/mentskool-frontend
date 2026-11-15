import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "NEET 1-on-1 Academic Counseling & Score Audit Call | Mentskool",
  description: "Stuck in the 480-550 NEET score trap? Book a private 1-on-1 counseling call with an AIIMS doctor to audit your preparation, eliminate test panic, and plan a 650+ comeback.",
  keywords: ["neet 1 on 1 counseling call", "neet medical counseling call online", "neet score stagnation counseling", "talk to aiims medical student", "neet drop year decision call"],
  alternates: {
    canonical: "https://mentskool.com/neet-one-on-one-counseling-call",
  },
  openGraph: {
    title: "NEET 1-on-1 Academic Counseling & Score Audit Call | Mentskool",
    description: "Stuck in the 480-550 NEET score trap? Book a private 1-on-1 counseling call with an AIIMS doctor to audit your preparation, eliminate test panic, and plan a 650+ comeback.",
    url: "https://mentskool.com/neet-one-on-one-counseling-call",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "1:1 NEET Academic Counseling & Score Audit",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "neet-one-on-one-counseling-call",
  "breadcrumbLabel": "NEET 1-on-1 Counseling Call",
  "examFocus": "NEET",
  "metaTitle": "NEET 1-on-1 Academic Counseling & Score Audit Call | Mentskool",
  "metaDescription": "Stuck in the 480-550 NEET score trap? Book a private 1-on-1 counseling call with an AIIMS doctor to audit your preparation, eliminate test panic, and plan a 650+ comeback.",
  "keywords": [
    "neet 1 on 1 counseling call",
    "neet medical counseling call online",
    "neet score stagnation counseling",
    "talk to aiims medical student",
    "neet drop year decision call"
  ],
  "badgeText": "Medical Strategy & Score Diagnosis",
  "h1Prefix": "Book a 1:1 Academic Counseling Call for",
  "h1Highlight": "NEET UG Aspirants & Droppers",
  "heroDescription": "Overcome score stagnation, parental pressure, and test panic. Spend 45 minutes in private video consultation with an AIIMS MBBS doctor to diagnose why your marks aren't translating into a government medical seat.",
  "serviceTitle": "1:1 NEET Academic Counseling & Score Audit",
  "serviceDescription": "45-minute private strategy and counseling call with AIIMS/GMC medical students to break out of score stagnation, manage test stress, and plan repeat years.",
  "quickStats": [
    {
      "label": "Target Score",
      "value": "650+ Marks",
      "hint": "Govt MBBS Threshold"
    },
    {
      "label": "Counselor",
      "value": "AIIMS Doctor",
      "hint": "Verified Ranker"
    },
    {
      "label": "Format",
      "value": "Private 1:1",
      "hint": "Parents Invited"
    },
    {
      "label": "Turnaround",
      "value": "24-48 Hours",
      "hint": "Immediate Clarity"
    }
  ],
  "overviewHeading": "Breaking the 500-Mark Ceiling in NEET UG",
  "overviewIntro": "Scoring 500 in NEET is the most agonizing position in competitive exams. You have worked hard enough to understand the entire syllabus, but fall 80 to 100 marks short of a government medical college. At this stage, reading the same textbooks again will not help. You need a surgical diagnosis of your exam psychology, negative marking tendencies, and time distribution.",
  "overviewPoints": [
    {
      "title": "The 500-to-650 Bridge Plan",
      "detail": "Identify the 25 specific questions you consistently miss across Physics and Chemistry to unlock the extra 100 marks."
    },
    {
      "title": "Overcoming Test Day Freezing",
      "detail": "Learn breathing and pacing drills from doctors who stayed completely calm during high-pressure medical exams."
    },
    {
      "title": "Drop Year Feasibility Audit",
      "detail": "Assess whether a 1st or 2nd drop is strategically viable based on your learning curve and emotional endurance."
    },
    {
      "title": "Parent Counseling on Cutoffs",
      "detail": "Give parents clear facts about State Quota vs. All India Quota cutoffs and private medical college fee realities."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "00 \u2013 10 Min",
      "phaseTitle": "Score History & Error Audit",
      "description": "Review score progression over the last 6 months across Biology, Chemistry, and Physics.",
      "deliverables": [
        "Score bottleneck diagnosis",
        "Physics avoidance index",
        "Negative mark penalty breakdown"
      ]
    },
    {
      "timeframe": "10 \u2013 25 Min",
      "phaseTitle": "Psychological & Test Temperament Review",
      "description": "Examine panic triggers, rapid heart rate in test halls, and why simple questions were marked wrong.",
      "deliverables": [
        "Test anxiety profile",
        "OMR filling audit",
        "Option misreading analysis"
      ]
    },
    {
      "timeframe": "25 \u2013 38 Min",
      "phaseTitle": "Strategic Study Plan Calibration",
      "description": "Re-engineer daily study routines to enforce active question solving over passive theory skimming.",
      "deliverables": [
        "Daily numerical quota",
        "NCERT active recall system",
        "Targeted 30-day revision schedule"
      ]
    },
    {
      "timeframe": "38 \u2013 45 Min",
      "phaseTitle": "Action Plan & Parent Discussion",
      "description": "Present the strategic comeback plan to student and parents, answering all cutoff and college questions.",
      "deliverables": [
        "Documented comeback blueprint",
        "Parent counseling checklist",
        "Session recap notes"
      ]
    }
  ],
  "comparisonTitle": "Coaching Center Counselor vs. AIIMS Medical Student Counselor",
  "comparisonSubtitle": "Discover the critical difference between commercial counseling and authentic medical peer mentorship.",
  "comparisonRows": [
    {
      "aspect": "Advisor Background",
      "genericCoaching": "Administrative marketing staff selling repeat batches.",
      "mentskool1on1": "Current AIIMS MBBS student who conquered modern NEET UG cutoffs."
    },
    {
      "aspect": "Empathy Level",
      "genericCoaching": "Treats students as batch roll numbers; ignores test stress.",
      "mentskool1on1": "Deeply empathetic to repeat exhaustion, isolation, and family expectations."
    },
    {
      "aspect": "Drop Year Evaluation",
      "genericCoaching": "Automatically pushes every failed student to enroll in another drop.",
      "mentskool1on1": "Provides honest evaluation of repeat potential and alternative allied medical careers."
    },
    {
      "aspect": "Subject Breakdown",
      "genericCoaching": "General statements like 'work hard on Physics.'",
      "mentskool1on1": "Granular breakdown: shows exactly which 10 physics topics yield 40 safe marks."
    },
    {
      "aspect": "Long-Term Impact",
      "genericCoaching": "Zero follow-up or support after registration fees are paid.",
      "mentskool1on1": "Provides a structured 30-day milestone roadmap with ongoing cohort options."
    }
  ],
  "sections": [
    {
      "heading": "Navigating the Agony of the Repeat / Dropper Year",
      "subheading": "Managing Social Isolation, Guilt, and Fear of Failure",
      "paragraphs": [
        "Taking a drop year for NEET is one of the most emotionally demanding journeys in Indian education. As school friends enter engineering, arts, or commerce colleges, the dropper remains confined to a single room with the same three NCERT textbooks. Feelings of guilt, worthlessness, and dread intensify with every passing month.",
        "During your 1:1 counseling call, an AIIMS doctor who personally navigated the repeat year shares practical mental hygiene protocols. You will learn how to structure your days to prevent depressive spirals, maintain healthy social boundaries with judgmental relatives, and cultivate a fierce, competitive mindset focused entirely on your dream stethoscope."
      ],
      "keyTakeaways": [
        {
          "title": "Social Media Blackout",
          "detail": "Eliminate peer comparison triggers by disconnecting from college lifestyle updates of former classmates."
        },
        {
          "title": "The Daily Win Protocol",
          "detail": "Celebrate daily micro-completions (e.g. 50 physics numericals solved) to build positive dopamine loops."
        },
        {
          "title": "Physical Well-Being Routine",
          "detail": "Incorporate 30 minutes of sunlight and brisk walking daily to regulate cortisol and serotonin levels."
        }
      ]
    },
    {
      "heading": "Eliminating Exam Hall Freeze and Panic Surges",
      "subheading": "Physiological and Mental Techniques for Peak Test Performance",
      "paragraphs": [
        "It is heartbreaking when a student who scores 620 in comfortable home mock tests freezes in the examination hall and scores only 510. The physiological response to high stress\u2014elevated pulse, shallow breathing, tunnel vision\u2014temporarily shuts down prefrontal cortex reasoning, making basic calculations feel impossible.",
        "Your AIIMS mentor teaches you clinical grounding techniques used by doctors in emergency wards. You will learn the '4-7-8 Breathing Technique', the 2-minute paper preview ritual, and the emergency reset protocol when encountering two consecutive questions you cannot solve."
      ],
      "keyTakeaways": [
        {
          "title": "The 4-7-8 Reset Drill",
          "detail": "Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds to instantly trigger the parasympathetic nervous system."
        },
        {
          "title": "Strategic Question Skipping",
          "detail": "Train your brain to view skipping difficult questions as a tactical victory that protects your pacing."
        },
        {
          "title": "Confidence Anchoring",
          "detail": "Always begin the exam with your strongest Biology section to build immediate momentum and calm nerves."
        }
      ]
    },
    {
      "heading": "Bridging the Final 80 Marks: Physics & Organic Focus",
      "subheading": "Converting Near-Misses into Confirmed Government Medical College Ranks",
      "paragraphs": [
        "When you are stuck at 520, you already know 85% of the syllabus. The remaining 15% consists of chapters you secretly fear and avoid: Rotation, Wave Optics, Ionic Equilibrium, Aldehydes and Ketones, and Plant Physiology.",
        "Your mentor helps you face these fear topics systematically. Rather than attempting to master the entire chapter in one day, your mentor breaks them down into 5 standard question patterns that NTA asks every year. By mastering these archetypes, you turn your biggest vulnerabilities into reliable scoring zones."
      ],
      "keyTakeaways": [
        {
          "title": "Targeted Fear Elimination",
          "detail": "Dedicate 90 minutes every morning specifically to your single most feared topic."
        },
        {
          "title": "Standard PYQ Pattern Matching",
          "detail": "Solve the past 15 years of NEET and AIPMT questions for that chapter to recognize recurring templates."
        },
        {
          "title": "Zero Blank Leave Policy",
          "detail": "Ensure every chapter has at least basic formula familiarity so you never leave easy Section B questions."
        }
      ]
    }
  ],
  "bookingSteps": [
    {
      "step": "01",
      "title": "Select Doctor Counselor",
      "description": "Choose an AIIMS or Top GMC MBBS mentor specialized in dropper counseling and test anxiety."
    },
    {
      "step": "02",
      "title": "Share Your Background",
      "description": "Submit your previous NEET attempts, current mock scores, and primary emotional challenges."
    },
    {
      "step": "03",
      "title": "Attend 45-Min Video Call",
      "description": "Connect in a private, supportive video consultation with your doctor mentor."
    },
    {
      "step": "04",
      "title": "Execute Comeback Plan",
      "description": "Follow your personalized 30-day academic and psychological roadmap to secure your MBBS seat."
    }
  ],
  "faqs": [
    {
      "question": "Is this call suitable for droppers taking a 2nd or 3rd attempt?",
      "answer": "Yes. Many of our medical mentors took repeat attempts themselves and understand the deep emotional burden, self-doubt, and family expectations that come with multiple drops."
    },
    {
      "question": "Can my parents join the session?",
      "answer": "Yes, parents are warmly invited to join the conversation. It helps them understand the competitive reality of modern NEET and how best to support their child."
    },
    {
      "question": "Will the doctor advise me on whether to take BDS, BAMS, or repeat NEET?",
      "answer": "Yes, our mentors provide objective, realistic evaluations of alternative medical and allied health career pathways versus repeating."
    },
    {
      "question": "How does this call help if my marks are stuck at 500?",
      "answer": "A score of 500 proves your baseline knowledge is solid. The call identifies the specific 20-25 questions lost to negative marks, time traps, and weak physics topics to bridge you to 650+."
    },
    {
      "question": "Can I get ongoing weekly mentorship after this session?",
      "answer": "Yes, you can enroll in ongoing monthly cohort guidance with your mentor for weekly accountability and continuous progress tracking."
    }
  ],
  "relatedLinks": [
    {
      "label": "Book 1:1 NEET Mentorship Session",
      "href": "/book-1-on-1-neet-mentorship-session"
    },
    {
      "label": "Drop Year Strategy Call",
      "href": "/drop-year-strategy-call-jee-neet"
    },
    {
      "label": "NEET Mock Test Analysis Call",
      "href": "/book-neet-mock-test-analysis-call"
    },
    {
      "label": "NEET Physics Doubt Call",
      "href": "/neet-physics-1-on-1-doubt-call"
    },
    {
      "label": "Browse All Medical Mentors",
      "href": "/mentors"
    },
    {
      "label": "Claim Free Trial Call",
      "href": "/free-mentorship-session"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
