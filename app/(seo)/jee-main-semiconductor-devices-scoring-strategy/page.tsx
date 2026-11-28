import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-semiconductor-devices-scoring-strategy",
  "breadcrumbLabel": "Semiconductor Devices Strategy",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Semiconductor Devices Scoring Strategy: Logic Gates, Zener Diode & 2027 Syllabus",
  "metaDescription": "Score guaranteed 4–8 marks in JEE Main's easiest Physics chapter: Semiconductors. Master Zener voltage regulator circuits, forward/reverse diode checks, and all 7 Logic Gates.",
  "keywords": [
    "JEE Main semiconductor devices scoring strategy",
    "Zener diode numericals JEE Main",
    "logic gates truth table NAND NOR",
    "transistor deleted JEE Main 2027",
    "semiconductors JEE Physics"
  ],
  "h1": "JEE Main Semiconductor Devices: Guaranteed 8-Mark Scoring Strategy",
  "readTime": "10 min read",
  "quickSummary": "With Bipolar Junction Transistors (BJT amplifiers and switches) deleted from the JEE Main syllabus, Semiconductor Devices has shrunk to just 4 ultra-easy topics: Energy Bands, p-n Junction Diodes/Rectifiers, Zener Voltage Regulators, and Logic Gates—delivering 4 to 8 guaranteed marks in under 2 minutes.",
  "sections": [
    {
      "heading": "NTA 2027 Syllabus Check: What Is IN vs What Is DELETED",
      "paragraphs": [
        "Do not waste 5 hours memorizing common-emitter current gain β, load lines, or transistor oscillator equations—NTA removed Transistors from JEE Main.",
        "Instead, concentrate 100% on the four retained pillars listed below."
      ],
      "table": {
        "caption": "JEE Main Semiconductor Syllabus Breakdown (Active vs Deleted)",
        "headers": [
          "Topic",
          "2027 JEE Main Status",
          "Expected Question Frequency"
        ],
        "rows": [
          [
            "Logic Gates (AND, OR, NOT, NAND, NOR, XOR)",
            "100% Active",
            "Almost EVERY single shift (4 marks)"
          ],
          [
            "Zener Diode as Voltage Regulator",
            "100% Active",
            "Very High (Numerical & MCQ)"
          ],
          [
            "p-n Junction Diode & Rectifiers (Half/Full)",
            "100% Active",
            "High (Current through network circuits)"
          ],
          [
            "Intrinsic/Extrinsic (n_e · n_h = n_i²)",
            "100% Active",
            "Moderate (Concept & Statement Qs)"
          ],
          [
            "Transistors (BJT Amplifiers & Switches)",
            "DELETED in Main",
            "Skip for JEE Main (Zero questions)"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Physics Chapter-Wise Weightage (Last 3 Years)",
        "href": "/jee-main-physics-chapter-wise-weightage-last-3-years"
      }
    },
    {
      "heading": "Logic Gates: De Morgan's Laws & Waveform Timing Diagrams",
      "paragraphs": [
        "Every shift practically gifts +4 marks via a combination of NAND/NOR gates. Never build giant 8-row truth tables manually if you can simplify the Boolean expression first using De Morgan's Laws!"
      ],
      "formulaBox": {
        "label": "De Morgan's Simplification Laws",
        "formula": "(A + B)' = A' · B'   and   (A · B)' = A' + B'",
        "example": "A NOR gate with both inputs tied together acts as NOT (A'). Feeding two NOTed inputs (A', B') into a NOR gate yields (A' + B')' = A · B (AND Gate) in 5 seconds!"
      },
      "bullets": [
        {
          "lead": "Universal Gates",
          "text": "NAND and NOR can build every other gate. Memorize: NAND-NAND = AND-OR; NOR-NOR = OR-AND."
        },
        {
          "lead": "Waveform Problems",
          "text": "Sample voltage levels (0 = Low, 5V = High) cleanly at each vertical time grid line instead of guessing visually."
        }
      ]
    },
    {
      "heading": "Zener Diode Voltage Regulator: The 3-Step Numerical Recipe",
      "paragraphs": [
        "Zener Diode regulator problems appear repeatedly in the Numerical Value section. Follow these three exact steps so you never get confused by load current vs Zener current:"
      ],
      "bullets": [
        {
          "lead": "Step 1 — Check Zener Breakdown",
          "text": "Temporarily remove the Zener and compute open-circuit voltage V_L = V_in × R_L / (R_s + R_L). If V_L ≥ V_z, the Zener IS in breakdown and locks V_load = V_z!"
        },
        {
          "lead": "Step 2 — Find Series Resistor Current",
          "text": "I_series = (V_in - V_z) / R_s."
        },
        {
          "lead": "Step 3 — Split at Node",
          "text": "Load current I_L = V_z / R_L, so Zener current I_z = I_series - I_L!"
        }
      ],
      "table": {
        "caption": "Special Purpose Diodes & Key Biasing Modes",
        "headers": [
          "Device",
          "Operating Bias",
          "Key JEE Fact"
        ],
        "rows": [
          [
            "Zener Diode",
            "Reverse Bias (Breakdown)",
            "Heavily doped → narrow depletion region; constant V_z"
          ],
          [
            "Photodiode",
            "Reverse Bias",
            "Reverse saturation current ∝ Incident Light Intensity"
          ],
          [
            "LED (Light Emitting)",
            "Forward Bias",
            "Heavily doped; Bandgap E_g ≈ 1.8–3 eV for visible light"
          ],
          [
            "Solar Cell",
            "Zero External Bias",
            "Photovoltaic EMF; operates in 4th quadrant of I-V curve"
          ]
        ]
      }
    },
    {
      "heading": "Ideal vs Practical Diode Circuit Networks",
      "paragraphs": [
        "In a multi-resistor diode circuit, treat an ideal forward-biased diode (V_p > V_n) as a ZERO-resistance wire, and a reverse-biased diode (V_p < V_n) as an OPEN switch (cut that branch out!).",
        "If the question specifies a Silicon barrier voltage (0.7 V) or Germanium (0.3 V), replace the forward-biased diode with a tiny 0.7 V opposing battery!"
      ],
      "mustRead": {
        "label": "Modern Physics Photoelectric Effect Numericals",
        "href": "/jee-main-modern-physics-photoelectric-effect-numericals"
      }
    },
    {
      "heading": "2-Hour Mastery Plan",
      "paragraphs": [
        "You can master the entire Semiconductor chapter in a single 2-hour evening block and guarantee +4 to +8 marks in every mock test. Book a free 1:1 strategy call on Mentskool for a complete Physics high-ROI schedule."
      ],
      "table": {
        "caption": "2-Hour Semiconductor Sprint",
        "headers": [
          "Block",
          "Task",
          "Outcome"
        ],
        "rows": [
          [
            "Hour 1",
            "Logic Gates Boolean & Waveform PYQs (2020–2026)",
            "Zero errors on gate combinations"
          ],
          [
            "Hour 2",
            "Zener Regulator + Diode Networks + n_e·n_h = n_i²",
            "Lock 100% numerical accuracy"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in Semiconductor Devices Strategy (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for Semiconductor Devices Strategy is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for Semiconductor Devices Strategy",
        "headers": [
          "Trap Type",
          "What Goes Wrong",
          "10-Second Safe Check"
        ],
        "rows": [
          [
            "Domain & Division by Zero",
            "Canceling a variable factor erases a valid root or solution",
            "Check if the canceled factor equals zero separately"
          ],
          [
            "Sign & Frame Convention",
            "Mixing up clockwise vs anti-clockwise or axis signs",
            "Draw a quick labeled sketch on your rough pad first"
          ],
          [
            "Unit & Constant Mismatch",
            "Using SI units in half the problem and CGS/eV in the rest",
            "Write units next to every given number before multiplying"
          ],
          [
            "Numerical Rounding",
            "Rounding intermediate steps shifts integer answers by ±1",
            "Keep fractions exact until the final calculation line"
          ]
        ]
      }
    },
    {
      "heading": "Step-by-Step 7-Day Revision Plan for Semiconductor Devices Strategy",
      "paragraphs": [
        "You do not need to solve 400 random problems to master Semiconductor Devices Strategy. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for Semiconductor Devices Strategy",
        "headers": [
          "Day",
          "Focus Task",
          "Target Output"
        ],
        "rows": [
          [
            "Day 1–2",
            "Review core formulas & solve 20 foundational problems untimed",
            "Zero concept gaps; clean derivation flow"
          ],
          [
            "Day 3–4",
            "Solve 25 JEE Main / Advanced PYQs (2020–2026) under a stopwatch",
            "Under 2 minutes per question"
          ],
          [
            "Day 5",
            "Audit every wrong or slow question in a Mistake Notebook",
            "Spot recurring sign or setup patterns"
          ],
          [
            "Day 6–7",
            "Take a 20-question mixed timed sprint & re-solve marked errors",
            "85%+ accuracy with zero silly slips"
          ]
        ]
      }
    },
    {
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for Semiconductor Devices Strategy",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of Semiconductor Devices Strategy accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
        "Respect the 2.5-minute cutoff rule: if a question stalls after 150 seconds, mark it for Review & Next and secure easier +4 marks elsewhere first."
      ],
      "bullets": [
        {
          "lead": "Number Your Rough Boxes",
          "text": "Write Q-numbers clearly in each box so Pass-2 verification never starts from scratch."
        },
        {
          "lead": "Test Extreme Cases",
          "text": "When choosing between symbolic options, plug in simple values like 0, 1, or 90° to eliminate wrong choices instantly."
        },
        {
          "lead": "Never Guess Blindly",
          "text": "Only mark an MCQ if you have narrowed it down cleanly; avoid -1 negative marks on wild guesses."
        }
      ],
      "mustRead": {
        "label": "JEE Main Integration Problems: Shortcut Methods & King's Rule",
        "href": "/jee-main-integration-problems-shortcut-methods"
      }
    },
    {
      "heading": "How 1:1 IITian Mentorship Fixes Semiconductor Devices Strategy Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for Semiconductor Devices Strategy. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
        "On Mentskool, your 1:1 mentor from IIT Bombay, IIT Delhi, or top IITs audits your weekly mock tests question by question, builds custom target sheets, and tracks your daily problem count on a live dashboard.",
        "If you want a personalized study roadmap without rigid annual lock-ins, book a Free 1:1 Strategy Call (₹0) on Mentskool today."
      ],
      "bullets": [
        {
          "lead": "94% Daily Accountability",
          "text": "Log solved problems every evening so backlogs never pile up."
        },
        {
          "lead": "Strict 30-Student Cap",
          "text": "Every mentor works with at most 30 students for real 1-on-1 attention."
        },
        {
          "lead": "Month-to-Month Freedom",
          "text": "Zero long-term contracts and instant mentor switching anytime."
        }
      ]
    },
    {
      "heading": "Worked Example Walkthroughs for Semiconductor Devices Strategy",
      "paragraphs": [
        "Seeing a rule in action makes Semiconductor Devices Strategy far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling Semiconductor Devices Strategy, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for Semiconductor Devices Strategy",
        "headers": [
          "Student Stage",
          "Primary Priority",
          "Weekly Time Allocation"
        ],
        "rows": [
          [
            "Class 11 Student",
            "Build strong first-principles intuition without rushing shortcuts",
            "3–4 Hours/week alongside coaching"
          ],
          [
            "Class 12 Student",
            "Balance school boards with timed JEE Main & Advanced PYQ sprints",
            "2–3 Hours/week focused drills"
          ],
          [
            "JEE Dropper / Repeater",
            "Eliminate recurring mock errors & hit sub-90-second solve speed",
            "Daily 45-min error-log practice"
          ]
        ]
      }
    },
    {
      "heading": "Booklist & Resource Priority for Semiconductor Devices Strategy (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for Semiconductor Devices Strategy and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
        "Solving one trusted resource three times beats skimming five books once."
      ],
      "bullets": [
        {
          "lead": "Step 1 — NCERT / Coaching Notes",
          "text": "Lock every core definition, sign rule, and standard derivation cleanly."
        },
        {
          "lead": "Step 2 — Official JEE Main PYQs",
          "text": "Solve the last 6 years of shift papers to build rapid pattern recognition."
        },
        {
          "lead": "Step 3 — JEE Advanced Archive",
          "text": "Practice multi-concept problems to stress-test your conceptual depth."
        }
      ]
    },
    {
      "heading": "Mock Test Score Impact: What Mastering Semiconductor Devices Strategy Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning Semiconductor Devices Strategy into a 100% accuracy zone creates an immediate percentile cushion.",
        "Track your accuracy percentage across 3 consecutive Sunday mocks before moving on."
      ],
      "table": {
        "caption": "Accuracy Target Progression",
        "headers": [
          "Mock Stage",
          "Target Accuracy",
          "Target Time Per Question"
        ],
        "rows": [
          [
            "Mock 1 (Baseline)",
            "60% – 70%",
            "2.5 – 3.0 Minutes"
          ],
          [
            "Mock 2 (Post-Error Audit)",
            "80% – 85%",
            "1.5 – 2.0 Minutes"
          ],
          [
            "Mock 3 (Exam Ready)",
            "90% – 100%",
            "60 – 90 Seconds"
          ]
        ]
      }
    },
    {
      "heading": "Final Takeaways & Quick Action Plan for Semiconductor Devices Strategy",
      "paragraphs": [
        "Mastering Semiconductor Devices Strategy comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding Semiconductor Devices Strategy",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Semiconductor Devices Strategy due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Semiconductor Devices Strategy",
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
      "heading": "Step-by-Step Verification & Planning Checklist for Semiconductor Devices Strategy",
      "paragraphs": [
        "Before locking your next monthly milestone around Semiconductor Devices Strategy, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Semiconductor Devices Strategy targets."
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
          "text": "Chat free 1:1 with an IITian on Mentskool to validate your plan."
        }
      ]
    },
    {
      "heading": "Weekly Study Rhythm & Time Allocation Around Semiconductor Devices Strategy",
      "paragraphs": [
        "Even the best notes on Semiconductor Devices Strategy fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
      "heading": "Parent & Student Decision Guide: Next Steps After Reading Semiconductor Devices Strategy",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around Semiconductor Devices Strategy, clarity comes from speaking to someone who has already walked this exact path.",
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
      "heading": "Self-Study vs Mass Coaching vs 1:1 Mentorship for Semiconductor Devices Strategy",
      "paragraphs": [
        "Knowing how to study Semiconductor Devices Strategy is important, but your daily study environment determines whether you actually stick to the plan for 6 to 12 months.",
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
      "question": "Are Transistors (BJT) in the JEE Main 2027 Physics syllabus?",
      "answer": "No! Transistors (amplifiers and switches) were deleted from the JEE Main Physics syllabus."
    },
    {
      "question": "How many questions come from Semiconductors in JEE Main?",
      "answer": "Expect 1 to 2 questions (4 to 8 marks) in almost every shift—most commonly one Logic Gate question and one Diode/Zener numerical."
    },
    {
      "question": "Which bias mode does a Zener diode operate in as a voltage regulator?",
      "answer": "Reverse bias in the breakdown region."
    },
    {
      "question": "Why are Photodiodes operated in reverse bias?",
      "answer": "Because fractional change in minority-carrier reverse current due to light-generated electron-hole pairs is far easier to measure accurately than in forward bias."
    },
    {
      "question": "What is the mass-action law for doped semiconductors?",
      "answer": "n_e · n_h = n_i² (holds true for intrinsic, n-type, and p-type semiconductors in thermal equilibrium)."
    },
    {
      "question": "What is the ripple frequency of a Full-Wave Rectifier vs Half-Wave Rectifier?",
      "answer": "For a 50 Hz AC input, Half-Wave Rectifier output ripple is 50 Hz, whereas Full-Wave Rectifier output ripple is 100 Hz (2f)."
    },
    {
      "question": "What is the forward barrier potential for Silicon vs Germanium?",
      "answer": "Approximately 0.7 V for Silicon and 0.3 V for Germanium."
    },
    {
      "question": "Which gates are called Universal Gates?",
      "answer": "NAND and NOR gates, because any Boolean function (AND, OR, NOT, XOR) can be constructed using only NAND or only NOR gates."
    },
    {
      "question": "Does a Solar Cell require an external battery bias?",
      "answer": "No! A solar cell operates without any external bias, generating EMF directly from incident light."
    },
    {
      "question": "How can Mentskool help improve my JEE Physics percentile?",
      "answer": "Mentskool IITian mentors sequence high-ROI chapters like Semiconductors & Modern Physics first and audit your mock tests weekly."
    }
  ],
  "relatedGuides": [
    {
      "label": "Modern Physics Photoelectric Numericals",
      "href": "/jee-main-modern-physics-photoelectric-effect-numericals",
      "tag": "Physics"
    },
    {
      "label": "JEE Main Physics Weightage",
      "href": "/jee-main-physics-chapter-wise-weightage-last-3-years",
      "tag": "Weightage"
    },
    {
      "label": "EMI Formula List JEE Main",
      "href": "/jee-main-electromagnetic-induction-formula-list",
      "tag": "Formulas"
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
