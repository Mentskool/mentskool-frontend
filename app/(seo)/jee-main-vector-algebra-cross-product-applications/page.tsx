import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-vector-algebra-cross-product-applications",
  "breadcrumbLabel": "Vector Cross Product Applications",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Vector Algebra: Cross Product, Lagrange's Identity & Triple Product Tricks",
  "metaDescription": "Master JEE Main Vector Algebra cross product applications: triangle/parallelogram area, Lagrange's identity, scalar/vector triple products, and solving vector equations.",
  "keywords": [
    "JEE Main vector algebra cross product",
    "Lagrange identity vectors JEE",
    "vector triple product BAC CAB rule",
    "scalar triple product tetrahedron volume",
    "vectors JEE Main shortcuts"
  ],
  "h1": "JEE Main Vector Algebra: Cross Product & Triple Product Applications",
  "readTime": "11 min read",
  "quickSummary": "Vector Algebra is a guaranteed +8 mark pillar in JEE Main. Almost every tough vector question tests three core tools: Lagrange's Identity linking dot and cross products, area/volume via triple products, and solving unknown vector equations like r⃗ × a⃗ = b⃗ using a single cross-product trick.",
  "sections": [
    {
      "heading": "Why Cross Product & Triple Products Dominate JEE Main Vectors",
      "paragraphs": [
        "Basic dot product (a⃗ · b⃗ = |a||b| cosθ) is rarely tested alone anymore. NTA combines cross products with unknown vector magnitudes, unit vector constraints, and 3D tetrahedron geometry.",
        "Mastering the exact algebraic bridge between dot and cross products lets you solve 90% of JEE Main vector questions in under 60 seconds."
      ],
      "table": {
        "caption": "Core Cross Product Geometric Applications",
        "headers": [
          "Geometric Quantity",
          "Exact Vector Formula",
          "Key Reminder"
        ],
        "rows": [
          [
            "Area of Triangle (sides a⃗, b⃗)",
            "½ |a⃗ × b⃗|",
            "With vertices A, B, C: ½ |AB⃗ × AC⃗|"
          ],
          [
            "Area of Parallelogram (diagonals d₁⃗, d₂⃗)",
            "½ |d₁⃗ × d₂⃗|",
            "With adjacent sides a⃗, b⃗: |a⃗ × b⃗| (no ½!)"
          ],
          [
            "Unit Vector ⊥ to both a⃗ and b⃗",
            "± (a⃗ × b⃗) / |a⃗ × b⃗|",
            "Always include ± unless direction is fixed"
          ],
          [
            "Volume of Parallelepiped",
            "| [a⃗ b⃗ c⃗] |",
            "Absolute value of 3×3 determinant"
          ],
          [
            "Volume of Tetrahedron",
            "(1/6) | [a⃗ b⃗ c⃗] |",
            "With 4 vertices A, B, C, D: (1/6) |[AB⃗ AC⃗ AD⃗]|"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main 3D Geometry: Direction Cosines & 90-Second Shortcuts",
        "href": "/jee-main-3d-geometry-direction-cosines-shortcuts"
      }
    },
    {
      "heading": "Lagrange's Identity: The Fastest Way to Convert |a⃗ × b⃗| to Dot Products",
      "paragraphs": [
        "Whenever a question gives |a⃗ × b⃗| alongside |a⃗|, |b⃗|, or a⃗ · b⃗, never compute 3×3 components if vectors aren't given in î, ĵ, k̂! Apply Lagrange's Identity immediately."
      ],
      "formulaBox": {
        "label": "Lagrange's Identity",
        "formula": "|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|²",
        "example": "If |a⃗| = 3, |b⃗| = 4, and |a⃗ × b⃗| = 6, then (a⃗ · b⃗)² = 9×16 - 36 = 108 → |a⃗ · b⃗| = 6√3 in 10 seconds!"
      },
      "bullets": [
        {
          "lead": "Unit Vector Cross Norm",
          "text": "For any unit vector r̂, |r̂ × î|² + |r̂ × ĵ|² + |r̂ × k̂|² = 2 always!"
        },
        {
          "lead": "Dot Norm Sum",
          "text": "Similarly, (r̂ · î)² + (r̂ · ĵ)² + (r̂ · k̂)² = |r̂|² = 1."
        }
      ]
    },
    {
      "heading": "Vector Triple Product: The BAC - CAB Rule (Watch Parentheses!)",
      "paragraphs": [
        "Vector triple product is NOT associative: a⃗ × (b⃗ × c⃗) ≠ (a⃗ × b⃗) × c⃗. Always memorize the 'Middle Minus Outer' (BAC - CAB) expansion relative to the vector outside the bracket."
      ],
      "formulaBox": {
        "label": "BAC - CAB Expansion",
        "formula": "a⃗ × (b⃗ × c⃗) = (a⃗ · c⃗) b⃗ - (a⃗ · b⃗) c⃗",
        "example": "Notice a⃗ × (b⃗ × c⃗) is a linear combination of b⃗ and c⃗ — meaning it ALWAYS lies in the plane of b⃗ and c⃗ and is perpendicular to a⃗!"
      },
      "table": {
        "caption": "Scalar vs Vector Triple Product Comparison",
        "headers": [
          "Property",
          "Scalar Triple Product [a⃗ b⃗ c⃗]",
          "Vector Triple Product a⃗ × (b⃗ × c⃗)"
        ],
        "rows": [
          [
            "Output Type",
            "Scalar number",
            "Vector lying in plane of b⃗ & c⃗"
          ],
          [
            "Cyclic Shift",
            "[a⃗ b⃗ c⃗] = [b⃗ c⃗ a⃗] = [c⃗ a⃗ b⃗]",
            "NOT cyclic; brackets decide plane"
          ],
          [
            "Zero Condition",
            "Zero if any two are parallel or all 3 coplanar",
            "Zero if b⃗ ∥ c⃗ or a⃗ ⊥ plane(b⃗, c⃗)"
          ],
          [
            "Special Identity",
            "[a⃗+b⃗  b⃗+c⃗  c⃗+a⃗] = 2 [a⃗ b⃗ c⃗]",
            "a⃗×(b⃗×c⃗) + b⃗×(c⃗×a⃗) + c⃗×(a⃗×b⃗) = 0⃗"
          ]
        ]
      }
    },
    {
      "heading": "Solving Vector Equations Like r⃗ × a⃗ = b⃗ (The 2-Step Trick)",
      "paragraphs": [
        "JEE Main regularly asks you to find an unknown vector r⃗ satisfying r⃗ × a⃗ = b⃗ along with an extra dot condition like r⃗ · c⃗ = d (where a⃗ · c⃗ ≠ 0).",
        "Never assume r⃗ = x î + y ĵ + z k̂ and solve 3 simultaneous equations! Instead, take the cross product of the entire equation with c⃗ from the left: c⃗ × (r⃗ × a⃗) = c⃗ × b⃗."
      ],
      "bullets": [
        {
          "lead": "Step 1 — Cross with c⃗",
          "text": "Expand c⃗ × (r⃗ × a⃗) = (c⃗ · a⃗)r⃗ - (c⃗ · r⃗)a⃗ = c⃗ × b⃗."
        },
        {
          "lead": "Step 2 — Substitute r⃗ · c⃗ = d",
          "text": "Rearrange directly to get r⃗ = (d·a⃗ + c⃗ × b⃗) / (c⃗ · a⃗) in 20 seconds!"
        }
      ],
      "mustRead": {
        "label": "JEE Main Matrices & Determinants: Fastest 60-Second Shortcuts",
        "href": "/jee-main-matrices-determinants-fastest-approach"
      }
    },
    {
      "heading": "4-Vector Scalar & Vector Products (Important Check)",
      "paragraphs": [
        "Note that while Scalar Triple Product was trimmed in some textbook summaries, JEE Main still frequently tests cross-product expansions and Lagrange-style 4-vector dot identities like (a⃗ × b⃗) · (c⃗ × d⃗).",
        "Write it cleanly as a 2×2 determinant of dot products: (a⃗·c⃗)(b⃗·d⃗) - (a⃗·d⃗)(b⃗·c⃗)."
      ]
    },
    {
      "heading": "Exam Execution & Practice Plan",
      "paragraphs": [
        "Whenever a vector problem looks abstract with 3–4 arbitrary vectors a⃗, b⃗, c⃗, check if you can assign simple coordinate axes (e.g., a⃗ = î, b⃗ = ĵ) to test MCQ options quickly.",
        "Book a free 1:1 strategy call on Mentskool to have an IITian mentor audit your Vector & 3D speed."
      ],
      "table": {
        "caption": "2-Day Vector Cross Product Sprint",
        "headers": [
          "Day",
          "Drill Set",
          "Target Speed"
        ],
        "rows": [
          [
            "Day 1",
            "Lagrange's Identity, Area & [a⃗ b⃗ c⃗] determinants",
            "15 PYQs in 20 mins"
          ],
          [
            "Day 2",
            "BAC - CAB & Solving r⃗ × a⃗ = b⃗ vector equations",
            "15 PYQs in 22 mins"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in Vector Cross Product Applications (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for Vector Cross Product Applications is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for Vector Cross Product Applications",
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
      "heading": "Step-by-Step 7-Day Revision Plan for Vector Cross Product Applications",
      "paragraphs": [
        "You do not need to solve 400 random problems to master Vector Cross Product Applications. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for Vector Cross Product Applications",
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
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for Vector Cross Product Applications",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of Vector Cross Product Applications accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
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
      "heading": "How 1:1 IITian Mentorship Fixes Vector Cross Product Applications Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for Vector Cross Product Applications. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
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
      "heading": "Worked Example Walkthroughs for Vector Cross Product Applications",
      "paragraphs": [
        "Seeing a rule in action makes Vector Cross Product Applications far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling Vector Cross Product Applications, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for Vector Cross Product Applications",
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
      "heading": "Booklist & Resource Priority for Vector Cross Product Applications (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for Vector Cross Product Applications and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
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
      "heading": "Mock Test Score Impact: What Mastering Vector Cross Product Applications Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning Vector Cross Product Applications into a 100% accuracy zone creates an immediate percentile cushion.",
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
      "heading": "Final Takeaways & Quick Action Plan for Vector Cross Product Applications",
      "paragraphs": [
        "Mastering Vector Cross Product Applications comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding Vector Cross Product Applications",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Vector Cross Product Applications due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Vector Cross Product Applications",
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
      "heading": "Step-by-Step Verification & Planning Checklist for Vector Cross Product Applications",
      "paragraphs": [
        "Before locking your next monthly milestone around Vector Cross Product Applications, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Vector Cross Product Applications targets."
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
      "heading": "Weekly Study Rhythm & Time Allocation Around Vector Cross Product Applications",
      "paragraphs": [
        "Even the best notes on Vector Cross Product Applications fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
    }
  ],
  "faqs": [
    {
      "question": "How many questions come from Vector Algebra in JEE Main?",
      "answer": "Vector Algebra consistently delivers 1 to 2 direct questions (4–8 marks), and combines with 3D Geometry for 12–16 marks total."
    },
    {
      "question": "What is Lagrange's Identity in Vectors?",
      "answer": "|a⃗ × b⃗|² + (a⃗ · b⃗)² = |a⃗|² |b⃗|², allowing instant conversion between cross product magnitude and dot product."
    },
    {
      "question": "What is the BAC - CAB formula for Vector Triple Product?",
      "answer": "a⃗ × (b⃗ × c⃗) = (a⃗ · c⃗)b⃗ - (a⃗ · b⃗)c⃗."
    },
    {
      "question": "What is the area of a parallelogram with diagonals d₁⃗ and d₂⃗?",
      "answer": "Area = ½ |d₁⃗ × d₂⃗| (note the factor of ½ for diagonals, whereas adjacent sides use |a⃗ × b⃗| without ½)."
    },
    {
      "question": "How do you check if three vectors are coplanar?",
      "answer": "Three vectors a⃗, b⃗, c⃗ are coplanar if and only if their scalar triple product [a⃗ b⃗ c⃗] = 0."
    },
    {
      "question": "What is the value of [a⃗ + b⃗  b⃗ + c⃗  c⃗ + a⃗]?",
      "answer": "It always equals 2 [a⃗ b⃗ c⃗], whereas [a⃗ - b⃗  b⃗ - c⃗  c⃗ - a⃗] always equals 0."
    },
    {
      "question": "How do you solve r⃗ × a⃗ = b⃗ given r⃗ · c⃗ = d?",
      "answer": "Take cross product with c⃗ on both sides and expand via BAC - CAB to isolate r⃗ = (d·a⃗ + c⃗ × b⃗) / (c⃗ · a⃗)."
    },
    {
      "question": "What is the volume of a tetrahedron with coterminous edges a⃗, b⃗, c⃗?",
      "answer": "Volume = (1/6) | [a⃗ b⃗ c⃗] |."
    },
    {
      "question": "What is |r̂ × î|² + |r̂ × ĵ|² + |r̂ × k̂|² for a unit vector r̂?",
      "answer": "It always equals 2."
    },
    {
      "question": "How can Mentskool help improve my JEE Maths score?",
      "answer": "Mentskool pairs you 1:1 with verified IIT rankers who audit your mock rough sheets weekly and teach fast algebraic/vector shortcuts."
    }
  ],
  "relatedGuides": [
    {
      "label": "3D Geometry 90-Second Shortcuts",
      "href": "/jee-main-3d-geometry-direction-cosines-shortcuts",
      "tag": "3D"
    },
    {
      "label": "Complex Numbers Geometry Approach",
      "href": "/jee-advanced-complex-numbers-geometry-approach",
      "tag": "Advanced"
    },
    {
      "label": "JEE Main Maths Weightage 2027",
      "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027",
      "tag": "Weightage"
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
