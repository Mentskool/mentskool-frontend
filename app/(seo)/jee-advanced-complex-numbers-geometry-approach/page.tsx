import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-advanced-complex-numbers-geometry-approach",
  "breadcrumbLabel": "Complex Numbers Geometry Approach",
  "examFocus": "JEE",
  "metaTitle": "JEE Advanced Complex Numbers: Geometry Approach, Rotation & Locus Tricks",
  "metaDescription": "Stop solving JEE Advanced Complex Numbers with painful x + iy algebra. Master Argand plane geometry, Coni's rotation theorem, Apollonius circles, and cube roots of unity.",
  "keywords": [
    "JEE Advanced complex numbers geometry approach",
    "Coni rotation theorem JEE",
    "complex numbers locus shortcuts",
    "cube roots of unity omega JEE",
    "Argand plane geometry JEE Advanced"
  ],
  "h1": "JEE Advanced Complex Numbers: The Visual Geometry Approach",
  "readTime": "12 min read",
  "quickSummary": "Putting z = x + iy into a JEE Advanced Complex Numbers problem is almost always a trap that creates 2 pages of messy algebra. Instead, treating complex numbers as vectors and rotations on the Argand plane turns circle, perpendicular bisector, and triangle problems into clean 3-line geometry.",
  "sections": [
    {
      "heading": "Why Putting z = x + iy Fails in JEE Advanced",
      "paragraphs": [
        "In school boards and simple JEE Main problems, substituting z = x + iy works fine. In JEE Advanced, IIT professors intentionally design expressions with |z - z₁| / |z - z₂| = k or arg((z - z₁)/(z - z₂)) = π/3 so that x + iy expansion explodes into degree-4 polynomials.",
        "The visual geometry approach replaces brute-force algebra with three geometric primitives: distance (|z₁ - z₂|), rotation (multiplying by e^(iθ)), and reflection/conjugation."
      ],
      "table": {
        "caption": "Algebraic vs Geometric Approach in Complex Numbers",
        "headers": [
          "Problem Type",
          "Slow Algebraic Route (z = x + iy)",
          "Fast Argand Geometry Route"
        ],
        "rows": [
          [
            "|z - z₁| = |z - z₂|",
            "Expands (x-x₁)² + (y-y₁)² on both sides",
            "Immediate Perpendicular Bisector of z₁ and z₂"
          ],
          [
            "|z - z₁| / |z - z₂| = k (k ≠ 1)",
            "Cross-multiplies & completes squares",
            "Immediate Apollonius Circle"
          ],
          [
            "arg((z - z₁)/(z - z₂)) = π/2",
            "Computes tan⁻¹ slope fractions",
            "Circle with z₁z₂ as diameter (excluding z₁, z₂)"
          ],
          [
            "Equilateral triangle vertices",
            "Solves 3 distance equations",
            "Applies z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Maths Chapter-Wise Weightage (2025–2027)",
        "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027"
      }
    },
    {
      "heading": "Coni's Rotation Theorem: Turning Triangles Into 1-Line Algebra",
      "paragraphs": [
        "Multiplying a complex vector (z₂ - z₁) by e^(iθ) rotates it counter-clockwise by angle θ around z₁ without changing its length. This single geometric fact—Coni's Theorem—solves almost every triangle, square, and polygon problem in JEE Advanced.",
        "Always check the rotation direction (anti-clockwise = +θ, clockwise = -θ) from the perspective of looking at the pivot vertex z₁."
      ],
      "formulaBox": {
        "label": "Coni's Rotation Theorem",
        "formula": "(z₃ - z₁) / |z₃ - z₁| = [(z₂ - z₁) / |z₂ - z₁|] · e^(±iθ)",
        "example": "If z₁, z₂, z₃ form an isosceles right triangle right-angled at z₁ (counter-clockwise from z₂ to z₃), then (z₃ - z₁) = i (z₂ - z₁) immediately!"
      },
      "bullets": [
        {
          "lead": "90° Counter-Clockwise",
          "text": "Multiply the vector by i (since e^(iπ/2) = i)."
        },
        {
          "lead": "60° Equilateral Rotation",
          "text": "Multiply by -ω² = e^(iπ/3), which directly yields z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁."
        },
        {
          "lead": "120° Rotation",
          "text": "Multiply by ω = e^(i2π/3) — super useful for regular hexagons!"
        }
      ]
    },
    {
      "heading": "Standard Argand Plane Loci Reference Table",
      "paragraphs": [
        "Recognizing standard loci on sight saves 3 to 4 minutes per question in Paper 1 and Paper 2. Pay special attention to strict inequalities and open-arc vs full-circle argument conditions."
      ],
      "table": {
        "caption": "Must-Know Complex Number Loci on the Argand Plane",
        "headers": [
          "Complex Equation",
          "Exact Geometric Locus",
          "Critical Edge-Case Trap"
        ],
        "rows": [
          [
            "|z - z₀| = r",
            "Circle centered at z₀, radius r",
            "Inside: < r; Outside: > r"
          ],
          [
            "|z - z₁| + |z - z₂| = 2a (> |z₁ - z₂|)",
            "Ellipse with foci z₁, z₂",
            "If 2a = |z₁ - z₂|, locus is ONLY the line segment z₁z₂!"
          ],
          [
            "||z - z₁| - |z - z₂|| = 2a (< |z₁ - z₂|)",
            "Hyperbola with foci z₁, z₂",
            "If 2a = |z₁ - z₂|, locus is two opposite rays"
          ],
          [
            "arg((z - z₁)/(z - z₂)) = α (0 < α < π)",
            "Major/minor circular arc",
            "ONLY one arc (NOT full circle!), excluding z₁, z₂"
          ],
          [
            "Re(āz) + c = 0 (c real)",
            "Straight line in Argand plane",
            "Normal vector along complex number a"
          ]
        ]
      }
    },
    {
      "heading": "Cube Roots (1, ω, ω²) & nth Roots of Unity Shortcuts",
      "paragraphs": [
        "Whenever you see x² + x + 1 = 0 or a⁴ + a² + 1 = 0, immediately substitute ω and ω². Remember that 1 + ω + ω² = 0 and ω³ = 1 collapse high powers like ω²⁰²⁷ in two seconds.",
        "For nth roots of unity (1, α, α², ..., αⁿ⁻¹), visualize them as vertices of a regular n-gon inscribed in the unit circle |z| = 1. Their sum is always 0, and their product is (-1)^(n-1)."
      ],
      "formulaBox": {
        "label": "Factorization via nth Roots",
        "formula": "(1 - α)(1 - α²)...(1 - αⁿ⁻¹) = n",
        "example": "Using zⁿ - 1 = (z - 1)(z - α)...(z - αⁿ⁻¹), divide by (z - 1) and put z = 1 directly to prove the product equals n in 10 seconds!"
      }
    },
    {
      "heading": "Triangle Inequality & Max/Min Modulus Problems",
      "paragraphs": [
        "JEE Advanced loves asking for the maximum and minimum values of |z - z₁| given |z - z₂| ≤ r. Never use calculus derivatives on this!",
        "Draw the circle centered at z₂ with radius r and plot the point z₁. The shortest distance from z₁ to the circle is ||z₁ - z₂| - r| (or 0 if z₁ lies inside the circle!), and the longest distance is |z₁ - z₂| + r."
      ],
      "bullets": [
        {
          "lead": "Check if z₁ is Inside",
          "text": "If |z₁ - z₂| ≤ r, the minimum value of |z - z₁| is 0 (at z = z₁ itself), NOT r - |z₁ - z₂|!"
        },
        {
          "lead": "Maximum Distance",
          "text": "Always equals |z₁ - z₂| + r along the line joining z₁ and z₂."
        }
      ],
      "mustRead": {
        "label": "JEE Advanced Topic-Wise Analysis (2020–2026)",
        "href": "/jee-advanced-topic-wise-analysis-2020-to-2026"
      }
    },
    {
      "heading": "How to Practice Complex Numbers for JEE Advanced",
      "paragraphs": [
        "Spend 70% of your Complex Numbers study time drawing Argand diagrams beside every equation. Once your brain instinctively converts |z - 2i| = 3 into a circle centered at (0, 2) of radius 3, multi-concept JEE Advanced questions become surprisingly straightforward.",
        "Book a free 1:1 strategy session on Mentskool to have an IIT Bombay or IIT Delhi mentor review your Algebra & Geometry mock errors."
      ],
      "table": {
        "caption": "4-Day Complex Numbers Mastery Plan",
        "headers": [
          "Day",
          "Focus Area",
          "Target Output"
        ],
        "rows": [
          [
            "Day 1",
            "Modulus, Conjugate & Triangle Inequality",
            "Solve 20 max/min distance circle problems"
          ],
          [
            "Day 2",
            "Coni's Rotation & Equilateral Triangles",
            "Solve 15 rotation & polygon vertex PYQs"
          ],
          [
            "Day 3",
            "nth Roots of Unity & Polynomials",
            "Master (1-α) products & ω substitutions"
          ],
          [
            "Day 4",
            "2020–2026 JEE Advanced PYQ Sprint",
            "Solve 15 multi-correct & integer PYQs"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in Complex Numbers Geometry Approach (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for Complex Numbers Geometry Approach is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for Complex Numbers Geometry Approach",
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
      "heading": "Step-by-Step 7-Day Revision Plan for Complex Numbers Geometry Approach",
      "paragraphs": [
        "You do not need to solve 400 random problems to master Complex Numbers Geometry Approach. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for Complex Numbers Geometry Approach",
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
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for Complex Numbers Geometry Approach",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of Complex Numbers Geometry Approach accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
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
      "heading": "How 1:1 IITian Mentorship Fixes Complex Numbers Geometry Approach Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for Complex Numbers Geometry Approach. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
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
      "heading": "Worked Example Walkthroughs for Complex Numbers Geometry Approach",
      "paragraphs": [
        "Seeing a rule in action makes Complex Numbers Geometry Approach far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling Complex Numbers Geometry Approach, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for Complex Numbers Geometry Approach",
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
      "heading": "Booklist & Resource Priority for Complex Numbers Geometry Approach (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for Complex Numbers Geometry Approach and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
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
      "heading": "Mock Test Score Impact: What Mastering Complex Numbers Geometry Approach Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning Complex Numbers Geometry Approach into a 100% accuracy zone creates an immediate percentile cushion.",
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
      "heading": "Final Takeaways & Quick Action Plan for Complex Numbers Geometry Approach",
      "paragraphs": [
        "Mastering Complex Numbers Geometry Approach comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding Complex Numbers Geometry Approach",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on Complex Numbers Geometry Approach due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for Complex Numbers Geometry Approach",
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
      "heading": "Step-by-Step Verification & Planning Checklist for Complex Numbers Geometry Approach",
      "paragraphs": [
        "Before locking your next monthly milestone around Complex Numbers Geometry Approach, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to Complex Numbers Geometry Approach targets."
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
      "heading": "Weekly Study Rhythm & Time Allocation Around Complex Numbers Geometry Approach",
      "paragraphs": [
        "Even the best notes on Complex Numbers Geometry Approach fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
      "question": "Why should I avoid z = x + iy in JEE Advanced Complex Numbers?",
      "answer": "Substituting z = x + iy often turns simple circles, lines, and rotations into degree-4 algebraic equations that waste 5+ minutes. Argand geometry solves them in 2–3 lines."
    },
    {
      "question": "What is Coni's Rotation Theorem?",
      "answer": "It states that rotating a complex vector (z₂ - z₁) by angle θ around z₁ scales and rotates it via (z₃ - z₁)/|z₃ - z₁| = [(z₂ - z₁)/|z₂ - z₁|] · e^(iθ)."
    },
    {
      "question": "What is the locus of arg((z - z₁)/(z - z₂)) = π/3?",
      "answer": "It represents a single circular arc (major arc) joining z₁ and z₂ on one side of the chord z₁z₂, excluding the endpoints z₁ and z₂."
    },
    {
      "question": "What happens if |z - z₁| + |z - z₂| = |z₁ - z₂|?",
      "answer": "Because the sum equals the exact distance between z₁ and z₂, the locus is NOT an ellipse — it collapses to the straight line segment joining z₁ and z₂."
    },
    {
      "question": "What is the condition for z₁, z₂, z₃ to form an equilateral triangle?",
      "answer": "z₁² + z₂² + z₃² = z₁z₂ + z₂z₃ + z₃z₁, or equivalently 1/(z₁-z₂) + 1/(z₂-z₃) + 1/(z₃-z₁) = 0."
    },
    {
      "question": "How do you find the maximum value of |z| when |z + 4/z| = 2?",
      "answer": "Apply the reverse triangle inequality: ||z| - 4/|z|| ≤ |z + 4/z| = 2, then solve the simple quadratic in r = |z|."
    },
    {
      "question": "What is the value of 1 + ωⁿ + ω²ⁿ?",
      "answer": "It equals 3 if n is a multiple of 3, and 0 if n is not a multiple of 3."
    },
    {
      "question": "How many questions come from Complex Numbers in JEE Advanced?",
      "answer": "Usually 1 to 2 questions (4–8 marks), frequently combined with Matrices, Determinants, or Coordinate Geometry."
    },
    {
      "question": "What is the reflection of z across the real axis vs imaginary axis?",
      "answer": "Reflection across the real axis is z̄; reflection across the imaginary axis is -z̄."
    },
    {
      "question": "How can Mentskool help with JEE Advanced Mathematics?",
      "answer": "Mentskool pairs you 1:1 with IITian rankers who audit your mock test rough sheets and help replace slow brute-force algebra with geometric shortcuts."
    }
  ],
  "relatedGuides": [
    {
      "label": "JEE Advanced Differential Equations",
      "href": "/jee-advanced-differential-equations-trick-problems",
      "tag": "Calculus"
    },
    {
      "label": "JEE Main Matrices & Determinants",
      "href": "/jee-main-matrices-determinants-fastest-approach",
      "tag": "Algebra"
    },
    {
      "label": "JEE Advanced 7-Year Analysis",
      "href": "/jee-advanced-topic-wise-analysis-2020-to-2026",
      "tag": "Advanced"
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
