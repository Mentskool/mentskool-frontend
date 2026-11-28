import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "neet-body-fluids-and-circulation-heart-diagram-questions",
  "breadcrumbLabel": "Heart Diagram & Circulation NEET",
  "examFocus": "NEET",
  "metaTitle": "NEET Body Fluids & Circulation: Heart Diagram, ECG Waves & Blood Groups (12 Marks)",
  "metaDescription": "Master NEET Body Fluids & Circulation (8–12 marks). Covers WBC % table, ABO/Rh compatibility, Cardiac Cycle 0.8s, ECG P-QRS-T waves, and Double Circulation.",
  "keywords": [
    "NEET body fluids and circulation heart diagram",
    "ECG P QRS T waves NEET",
    "WBC percentage neutrophil eosinophil basophil",
    "erythroblastosis fetalis Rh NEET",
    "cardiac cycle 0.8 seconds NEET"
  ],
  "h1": "NEET Body Fluids & Circulation: Heart Diagram, ECG & Blood Groups",
  "readTime": "11 min read",
  "quickSummary": "Body Fluids and Circulation consistently delivers 2 to 3 Zoology questions (8 to 12 marks) in NEET. Nearly every question tests four exact NCERT visuals and tables: Formed Elements (WBC % & functions), ABO/Rh Donor Compatibility, the 0.8-second Cardiac Cycle, and P-QRS-T ECG wave events.",
  "sections": [
    {
      "heading": "WBCs & Blood Formed Elements: The Exact Percentage Table",
      "paragraphs": [
        "NTA frequently asks you to arrange Leucocytes (WBCs) in descending order of abundance or match each cell to its exact immune function.",
        "Use the classic descending mnemonic 'Never Let Monkeys Eat Bananas': Neutrophils (60–65%) > Lymphocytes (20–25%) > Monocytes (6–8%) > Eosinophils (2–3%) > Basophils (0.5–1%)."
      ],
      "table": {
        "caption": "Formed Elements & WBC Functions (NCERT Exact)",
        "headers": [
          "Cell Type",
          "% of Total WBCs / Count",
          "Key Function Tested in NEET"
        ],
        "rows": [
          [
            "Erythrocytes (RBCs)",
            "5 – 5.5 million / mm³",
            "Biconcave, enucleated in mammals; 120-day lifespan; destroyed in Spleen (graveyard)"
          ],
          [
            "Neutrophils",
            "60 – 65%",
            "Most abundant WBC; Phagocytic defense"
          ],
          [
            "Lymphocytes (B & T)",
            "20 – 25%",
            "Responsible for immune responses of the body"
          ],
          [
            "Monocytes",
            "6 – 8%",
            "Phagocytic cells that destroy foreign organisms"
          ],
          [
            "Eosinophils",
            "2 – 3%",
            "Resist infections & associated with ALLERGIC reactions"
          ],
          [
            "Basophils",
            "0.5 – 1% (Least)",
            "Secrete Histamine, Serotonin, Heparin (inflammatory reactions)"
          ],
          [
            "Platelets (Thrombocytes)",
            "1.5 – 3.5 lakh / mm³",
            "Produced by Megakaryocytes in bone marrow; essential for clotting"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Human Physiology Most Important Topics (Mark-Wise)",
        "href": "/neet-human-physiology-most-important-topics-mark-wise"
      }
    },
    {
      "heading": "ABO & Rh Incompatibility (Erythroblastosis Fetalis)",
      "paragraphs": [
        "Remember: Blood Group O lacks both A and B antigens on RBCs (Universal Donor), while Blood Group AB lacks both anti-A and anti-B antibodies in plasma (Universal Recipient).",
        "In Rh incompatibility (Erythroblastosis fetalis): an Rh-NEGATIVE mother carrying an Rh-POSITIVE fetus is usually safe during the 1st pregnancy, because maternal and fetal blood are separated by the placenta. At delivery, fetal Rh+ blood can sensitize the mother to form anti-Rh antibodies, threatening the 2nd Rh+ pregnancy unless treated with anti-Rh antibodies right after the 1st birth!"
      ]
    },
    {
      "heading": "Heart Conducting System & Cardiac Cycle (0.8 Seconds)",
      "paragraphs": [
        "Human heart is myogenic (auto-excitable). The nodal pathway runs strictly in order: SA Node (pacemaker, 70–75 action potentials/min) → AV Node → AV Bundle (Bundle of His) → Left & Right Bundle Branches → Purkinje Fibres.",
        "During each 0.8-second Cardiac Cycle, every ventricle pumps ~70 mL (Stroke Volume)."
      ],
      "formulaBox": {
        "label": "Cardiac Output Formula",
        "formula": "Cardiac Output = Stroke Volume × Heart Rate",
        "example": "70 mL × 72 beats/min = 5,040 mL/min (~5 Liters/minute). Athletes have higher stroke volume, so resting heart rate is lower!"
      },
      "bullets": [
        {
          "lead": "First Heart Sound (LUB)",
          "text": "Closure of Tricuspid and Bicuspid (Mitral) valves at start of ventricular systole."
        },
        {
          "lead": "Second Heart Sound (DUB)",
          "text": "Closure of Semilunar valves (Pulmonary & Aortic) at start of ventricular diastole."
        }
      ]
    },
    {
      "heading": "Decoding the Standard ECG (P, QRS, T Waves)",
      "paragraphs": [
        "An Electrocardiograph records electrical activity of the heart using 3 standard leads (left wrist, right wrist, left ankle). Never confuse electrical depolarization with mechanical contraction!"
      ],
      "table": {
        "caption": "ECG Wave Components & Clinical Meaning",
        "headers": [
          "ECG Wave",
          "Electrical Event",
          "Mechanical Link"
        ],
        "rows": [
          [
            "P-wave",
            "Depolarization (excitation) of Atria",
            "Leads to contraction of both atria"
          ],
          [
            "QRS Complex",
            "Depolarization of Ventricles",
            "Initiates ventricular contraction (marks systole start; counting QRS gives Heart Rate)"
          ],
          [
            "T-wave",
            "Repolarization of Ventricles",
            "Return from excited to normal state; end of T-wave marks end of systole"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Excretory System & Nephron Diagram Guide",
        "href": "/neet-excretory-system-nephron-diagram-based-scoring"
      }
    },
    {
      "heading": "How NTA Frames Statement & Match Traps in Heart Diagram & Circulation NEET",
      "paragraphs": [
        "In recent NEET UG exams, direct 1-line recall questions on Heart Diagram & Circulation NEET have been replaced by Statement I / Statement II, Assertion-Reason, and 4-row Match-the-Following grids.",
        "Even if you know 95% of NCERT, missing one qualifier word like 'only', 'always', 'generally', or 'except' turns an easy +4 into -1."
      ],
      "table": {
        "caption": "NTA Question Formats & Fast Solving Rules for Heart Diagram & Circulation NEET",
        "headers": [
          "Question Format",
          "Common Student Mistake",
          "Topper Solving Habit"
        ],
        "rows": [
          [
            "Statement I & Statement II",
            "Assumes Statement II is true because it sounds familiar",
            "Verify each statement independently against exact NCERT lines"
          ],
          [
            "How Many Are Correct?",
            "Skims fast and misses one subtle exception",
            "Mark ✔ or ✘ next to each numbered statement before counting"
          ],
          [
            "Match-the-Following",
            "Matches all 4 rows blindly under time pressure",
            "Lock 2 certain pairs first and eliminate wrong option rows"
          ],
          [
            "INCORRECT / NOT TRUE",
            "Picks the first true statement by habit",
            "Underline 'INCORRECT' / 'EXCEPT' before reading Option A"
          ]
        ]
      }
    },
    {
      "heading": "NCERT Diagram & Active-Recall Checklist for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Passive re-reading gives a false sense of confidence. Instead, use the 1-3-7-21 active-recall rhythm for Heart Diagram & Circulation NEET so every diagram label, number, and exception stays sharp until exam day.",
        "Cover textbook labels with a sheet of paper and practice writing every term from memory."
      ],
      "bullets": [
        {
          "lead": "Day 1 — Blank-Page Recall",
          "text": "Close NCERT and write down all key tables, numbers, and examples from memory, then check what you missed."
        },
        {
          "lead": "Day 3 — Diagram Labeling",
          "text": "Test yourself on every NCERT figure arrow and caption without peeking."
        },
        {
          "lead": "Day 7 — 30-PYQ Timed Sprint",
          "text": "Solve 30 past NEET questions (2016–2026) in 15 minutes to build speed."
        },
        {
          "lead": "Day 21 — Sunday Mock Audit",
          "text": "Record any missed line in a compact Mistake Notebook for Saturday revision."
        }
      ]
    },
    {
      "heading": "Exam-Hall Speed & OMR Protocol for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "With 180 compulsory questions in 180 minutes, finishing Biology in 40 to 45 minutes gives you a huge cushion for Physics and Chemistry.",
        "Spend no more than 25–30 seconds per question on Heart Diagram & Circulation NEET, and bubble your OMR sheet in clean 15-question blocks so you never shift a row by mistake."
      ],
      "table": {
        "caption": "NEET Exam-Hall Pacing Targets",
        "headers": [
          "Subject",
          "Questions",
          "Ideal Time Budget",
          "Target Accuracy"
        ],
        "rows": [
          [
            "Biology (Botany + Zoology)",
            "90 Questions",
            "40 – 45 Minutes",
            "95%+ (345–360 / 360)"
          ],
          [
            "Chemistry",
            "45 Questions",
            "45 – 50 Minutes",
            "90%+ (160–175 / 180)"
          ],
          [
            "Physics",
            "45 Questions",
            "65 – 75 Minutes",
            "85%+ (150–170 / 180)"
          ],
          [
            "Pass-2 & OMR Buffer",
            "Review Marked Qs",
            "10 – 15 Minutes",
            "Zero careless row-shifts"
          ]
        ]
      },
      "mustRead": {
        "label": "NEET Biology Chapter-Wise Weightage (2024–2026): 360/360 Blueprint",
        "href": "/neet-biology-chapter-wise-weightage-2024-2025-2026"
      }
    },
    {
      "heading": "How 1:1 AIIMS/GMC Mentorship Boosts Your Heart Diagram & Circulation NEET Score",
      "paragraphs": [
        "Most NEET aspirants hovering around 520–580 already work hard—they simply lack a structured weekly error-audit system and consistent daily NCERT targets for Heart Diagram & Circulation NEET.",
        "On Mentskool, a verified ranker from AIIMS or a top Government Medical College guides you 1-on-1 every week, checks your Sunday mock mistakes line by line, and helps you push calmly toward 650+.",
        "Claim your Free 1:1 Strategy Session (₹0) on Mentskool to get a customized 2027 NEET plan."
      ],
      "bullets": [
        {
          "lead": "Daily NCERT Tracking",
          "text": "Stay consistent with daily solved MCQ & revision logs."
        },
        {
          "lead": "AIIMS & GMC Rankers",
          "text": "Learn directly from seniors who scored 660–705 in NEET UG."
        },
        {
          "lead": "Zero Long Lock-Ins",
          "text": "Flexible month-to-month mentorship with strict 30-student mentor caps."
        }
      ]
    },
    {
      "heading": "Class 11 vs Class 12 vs Dropper Study Plan for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Your exact weekly approach to Heart Diagram & Circulation NEET depends on how many months remain before NEET UG. Fresh Class 11/12 students need slow, visual understanding first, while droppers need high-speed Statement I/II accuracy.",
        "Use the table below to set a realistic weekly target without burning out."
      ],
      "table": {
        "caption": "Stage-Wise Study Schedule for Heart Diagram & Circulation NEET",
        "headers": [
          "Aspirant Stage",
          "Primary Goal",
          "Weekly Practice Target"
        ],
        "rows": [
          [
            "Class 11 Student",
            "Read NCERT line by line & label every diagram from memory",
            "40 NCERT-based MCQs + 1 blank-page recall"
          ],
          [
            "Class 12 Student",
            "Pair with board prep & revise Class 11 tables every weekend",
            "50 mixed PYQs + Saturday mistake-log scan"
          ],
          [
            "NEET Dropper",
            "Eliminate silly -1 slips on Statement & Match-the-Following Qs",
            "75 timed MCQs under 30 mins + full error audit"
          ]
        ]
      }
    },
    {
      "heading": "Top 5 Myths About Heart Diagram & Circulation NEET That Cost NEET Aspirants Marks",
      "paragraphs": [
        "Misleading coaching advice often pushes students to memorize out-of-syllabus facts for Heart Diagram & Circulation NEET while ignoring simple NCERT sentences.",
        "Keep these five ground realities in mind while revising."
      ],
      "bullets": [
        {
          "lead": "Myth 1 — Coaching Modules Are Better Than NCERT",
          "text": "Nearly 99% of NEET Biology questions come directly from NCERT lines, tables, and diagrams."
        },
        {
          "lead": "Myth 2 — Reading 10 Times Guarantees 360/360",
          "text": "Active recall and timed PYQ testing beat passive highlighting every single time."
        },
        {
          "lead": "Myth 3 — Deleted Chapters Still Need Full Study",
          "text": "Always check the latest NMC rationalized syllabus before investing hours into removed topics."
        },
        {
          "lead": "Myth 4 — Diagrams Are Only for Board Exams",
          "text": "NTA routinely lifts unlabeled figures and arrows straight from NCERT into 4-mark MCQs."
        },
        {
          "lead": "Myth 5 — Negative Marks Are Unavoidable",
          "text": "Underlining 'INCORRECT' and using a Mistake Notebook cuts silly -1 errors by over 75%."
        }
      ]
    },
    {
      "heading": "Quick Pre-Exam Checklist for Heart Diagram & Circulation NEET (Final 48 Hours)",
      "paragraphs": [
        "In the final two days before NEET UG, never open unfamiliar study material on Heart Diagram & Circulation NEET. Stick to calm, high-confidence consolidation.",
        "Scan your highlighted NCERT tables, verify commonly swapped pairs, and trust your preparation."
      ],
      "table": {
        "caption": "48-Hour Final Revision Checklist",
        "headers": [
          "Time Window",
          "Action Item",
          "Purpose"
        ],
        "rows": [
          [
            "T-48 Hours",
            "Scan NCERT tables, summary boxes & bold terms",
            "Refresh high-frequency numbers & names"
          ],
          [
            "T-24 Hours",
            "Review your 1-page Mistake Notebook for this topic",
            "Prevent repeating past -1 errors"
          ],
          [
            "Exam Morning",
            "Light 10-minute glance at tricky pairs only; stay calm",
            "Keep mind fresh for 180-minute focus"
          ]
        ]
      }
    },
    {
      "heading": "How Parents & Students Can Track Weekly Progress on Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Consistent small wins in Heart Diagram & Circulation NEET add up quickly across 180+ NEET chapters. Tracking weekly accuracy percentage rather than just hours studied keeps stress low and confidence high.",
        "Aim for 90%+ accuracy on timed 30-question PYQ drills before marking the chapter complete."
      ],
      "bullets": [
        {
          "lead": "Track Accuracy, Not Just Hours",
          "text": "85%+ accuracy on 50 MCQs is far better than passively reading 4 hours."
        },
        {
          "lead": "Weekly Mock Review",
          "text": "Every Sunday evening, log every missed question from your mock test into your error sheet."
        },
        {
          "lead": "Stay Consistent",
          "text": "Daily 45-minute revision blocks prevent last-month panic."
        }
      ]
    },
    {
      "heading": "Final Takeaways & Quick Action Plan for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Mastering Heart Diagram & Circulation NEET comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
        "Avoid jumping between too many resources; lock the core tables and formulas above first, test yourself under timed conditions, and review every mistake weekly.",
        "If you want a senior who has already cracked IIT JEE or AIIMS/NEET to review your mock test strategy and build your weekly study plan, book a free 15-minute senior chat on Mentskool."
      ],
      "bullets": [
        {
          "lead": "1. Verify Official Data",
          "text": "Always cross-check cutoffs, syllabus updates, and exam rules directly against NTA / JoSAA / MCC releases."
        },
        {
          "lead": "2. Practice Under a Timer",
          "text": "Timed PYQ sprints build far stronger exam-hall confidence than passive reading."
        },
        {
          "lead": "3. Talk to a Senior (₹0)",
          "text": "Use Mentskool's free 1:1 mentor session whenever you feel stuck on backlogs or rank targets."
        }
      ]
    },
    {
      "heading": "Common Mistakes Students Make Regarding Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Heart Diagram & Circulation NEET due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Heart Diagram & Circulation NEET",
        "headers": [
          "Common Mistake",
          "Impact on Score / Seat",
          "Smart Topper Fix"
        ],
        "rows": [
          [
            "Relying on outdated 2022–2023 data",
            "Wrong target score or missed cutoff shift",
            "Verify 2024–2026 official NTA / JoSAA / MCC trends"
          ],
          [
            "Skipping weekly mock error audits",
            "Repeating the exact same -1 slips",
            "Maintain a compact Saturday Mistake Notebook"
          ],
          [
            "Ignoring category / quota rules",
            "Overlooking Home State, EWS, or AIQ edge",
            "Check both Round 1 and Final/CSAB closing ranks"
          ],
          [
            "Studying without daily accountability",
            "Backlogs pile up before exam month",
            "Log daily solved questions & talk 1:1 with a senior"
          ]
        ]
      }
    },
    {
      "heading": "Step-by-Step Verification & Planning Checklist for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Before locking your next monthly milestone around Heart Diagram & Circulation NEET, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Heart Diagram & Circulation NEET targets."
        },
        {
          "lead": "2. Protect Core High-Yield Hours",
          "text": "Reserve 45 minutes daily strictly for active recall, PYQs, and error-log revision."
        },
        {
          "lead": "3. Cross-Check Official Notices",
          "text": "Always confirm dates, seat matrices, and syllabus updates directly on official portals."
        },
        {
          "lead": "4. Get a 15-Min Senior Reality Check",
          "text": "Chat free 1:1 with an AIIMS/GMC topper on Mentskool to validate your plan."
        }
      ]
    },
    {
      "heading": "Weekly Study Rhythm & Time Allocation Around Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Even the best notes on Heart Diagram & Circulation NEET fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
        "Top rankers protect small daily review slots instead of cramming everything in the last month before the exam."
      ],
      "table": {
        "caption": "Recommended Weekly Revision Cadence",
        "headers": [
          "Day",
          "Activity",
          "Time Needed"
        ],
        "rows": [
          [
            "Monday / Wednesday",
            "Fresh concept + 25 untimed PYQs",
            "45–60 Mins"
          ],
          [
            "Friday",
            "Timed 20-question sprint + formula/table recall",
            "30 Mins"
          ],
          [
            "Sunday",
            "Full-syllabus mock + Mistake Notebook update",
            "45 Mins review"
          ]
        ]
      }
    },
    {
      "heading": "Parent & Student Decision Guide: Next Steps After Reading Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around Heart Diagram & Circulation NEET, clarity comes from speaking to someone who has already walked this exact path.",
        "Avoid relying on random social media rumors or unverified coaching claims when making high-stakes exam or counseling decisions.",
        "Use Mentskool's free 15-minute 1:1 chat to get direct, honest feedback from an IIT or AIIMS senior before locking your next study block or preference sheet."
      ],
      "bullets": [
        {
          "lead": "Zero Guesswork",
          "text": "Compare your current mock score directly against verified 2024–2026 benchmarks."
        },
        {
          "lead": "Friendly Senior Support",
          "text": "Ask anything freely — from backlog stress to branch vs college trade-offs."
        },
        {
          "lead": "Direct Access",
          "text": "Book your free 15-minute chat or browse verified mentors anytime."
        }
      ]
    },
    {
      "heading": "Self-Study vs Mass Coaching vs 1:1 Mentorship for Heart Diagram & Circulation NEET",
      "paragraphs": [
        "Knowing how to study Heart Diagram & Circulation NEET is important, but your daily study environment determines whether you actually stick to the plan for 6 to 12 months.",
        "Compare the three common preparation setups before committing your time."
      ],
      "table": {
        "caption": "Preparation Environment Comparison",
        "headers": [
          "Factor",
          "Pure Self-Study / Mass Batch",
          "1:1 Senior Mentorship (Mentskool)"
        ],
        "rows": [
          [
            "Weekly Target Clarity",
            "Generic batch schedule; easy to fall behind",
            "Tailored weekly task sheet built around your weak topics"
          ],
          [
            "Mock Error Analysis",
            "Automated percentile graph only",
            "1:1 question-by-question rough-sheet review with an IIT/AIIMS senior"
          ],
          [
            "Backlog Recovery",
            "Overwhelming piled-up lectures",
            "Structured weekend clearance blocks without missing current classes"
          ],
          [
            "Accountability",
            "Zero daily verification",
            "Daily dashboard tracking + friendly senior check-ins (30-student cap)"
          ]
        ]
      }
    }
  ],
  "faqs": [
    {
      "question": "Which WBC is most abundant and which is least abundant?",
      "answer": "Neutrophils (60–65%) are the most abundant WBCs, whereas Basophils (0.5–1%) are the least abundant."
    },
    {
      "question": "What does the T-wave in an ECG represent?",
      "answer": "The T-wave represents ventricular repolarization (return of ventricles from excited to normal state); the end of the T-wave marks the end of ventricular systole."
    },
    {
      "question": "Which heart valve closure produces the 'LUB' sound?",
      "answer": "Closure of the Tricuspid and Bicuspid (Mitral) valves produces the first heart sound (LUB)."
    },
    {
      "question": "Why is Erythroblastosis fetalis dangerous mainly in the second pregnancy?",
      "answer": "During the 1st delivery of an Rh+ baby to an Rh- mother, fetal blood can enter maternal circulation, causing the mother to build anti-Rh antibodies that attack a subsequent Rh+ fetus."
    },
    {
      "question": "What is the role of Basophils vs Eosinophils?",
      "answer": "Basophils secrete histamine, serotonin, and heparin (inflammatory reactions). Eosinophils resist infections and are associated with allergic reactions."
    },
    {
      "question": "What is the Cardiac Output of a normal human?",
      "answer": "Approximately 5,000 mL (5 Liters) per minute (70 mL stroke volume × 72 beats/min)."
    },
    {
      "question": "Which protein in plasma is needed for blood clotting?",
      "answer": "Fibrinogen (converted into insoluble Fibrin threads by Thrombin in the presence of Ca²⁺ ions)."
    },
    {
      "question": "What is the difference between Blood Plasma and Serum?",
      "answer": "Serum is simply Blood Plasma minus clotting factors."
    },
    {
      "question": "Where is the SA Node (Pacemaker) located?",
      "answer": "In the right upper corner of the right atrium."
    },
    {
      "question": "How can Mentskool help me score 350+ in NEET Biology?",
      "answer": "Mentskool AIIMS/GMC mentors walk you through NCERT Physiology diagrams and weekly mock error audits 1-on-1."
    }
  ],
  "relatedGuides": [
    {
      "label": "Human Physiology Mark-Wise Guide",
      "href": "/neet-human-physiology-most-important-topics-mark-wise",
      "tag": "Zoology"
    },
    {
      "label": "Excretory System & Nephron",
      "href": "/neet-excretory-system-nephron-diagram-based-scoring",
      "tag": "Physiology"
    },
    {
      "label": "Breathing & Spirometry Data",
      "href": "/neet-breathing-and-exchange-of-gases-spirometry-data",
      "tag": "Physiology"
    },
    {
      "label": "Book Free 1:1 Strategy Call (₹0)",
      "href": "/free-mentorship-session",
      "tag": "Free"
    }
  ]
};

export const metadata: Metadata = {
  title: config.metaTitle,
  description: config.metaDescription,
  keywords: config.keywords,
  alternates: {
    canonical: `https://mentskool.com/${config.slug}`,
  },
  openGraph: {
    title: config.metaTitle,
    description: config.metaDescription,
    url: `https://mentskool.com/${config.slug}`,
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: config.h1,
      },
    ],
  },
};

export default function Page() {
  return <EditorialGuideTemplate config={config} />;
}
