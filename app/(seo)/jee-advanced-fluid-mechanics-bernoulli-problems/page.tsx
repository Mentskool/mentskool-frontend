import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-advanced-fluid-mechanics-bernoulli-problems",
  "breadcrumbLabel": "JEE Advanced Fluid Mechanics Guide",
  "examFocus": "JEE",
  "metaTitle": "JEE Advanced Fluid Mechanics: Bernoulli, Rotating Liquids & Coupled Buoyancy Problems",
  "metaDescription": "Master JEE Advanced Fluid Mechanics: accelerated/rotating fluid surfaces, Torricelli efflux recoil force, coupled SHM buoyancy, and capillary rise.",
  "keywords": [
    "JEE Advanced fluid mechanics Bernoulli",
    "rotating liquid parabola pressure JEE",
    "efflux velocity recoil force JEE",
    "buoyancy SHM fluid mechanics",
    "fluid mechanics JEE Advanced problems"
  ],
  "h1": "JEE Advanced Fluid Mechanics: Bernoulli, Rotating Fluids & Buoyancy",
  "readTime": "12 min read",
  "quickSummary": "Fluid Mechanics in JEE Advanced tests far more than P = ρgh and A₁v₁ = A₂v₂. IIT papers love combining fluids with Mechanics: rotating U-tubes, parabolic free surfaces, water-jet recoil forces on sliding tanks, and submerged blocks oscillating in SHM.",
  "sections": [
    {
      "heading": "Why Fluid Mechanics Connects Mechanics and Thermodynamics in JEE Advanced",
      "paragraphs": [
        "Fluid Mechanics sits right at the crossroads of Newton's Laws, Rotational Motion, SHM, and Energy Conservation. A single comprehension paragraph in JEE Advanced Paper 2 often tests Hydrostatic Torque, Bernoulli Efflux, and Surface Tension together.",
        "Keep track of your reference frame! When a fluid container accelerates or rotates, always include pseudo-force (ma or mω²r) to define the 'effective gravity' g_eff⃗."
      ],
      "table": {
        "caption": "Fluid Statics vs Fluid Dynamics Core Frameworks",
        "headers": [
          "Regime",
          "Governing Principle",
          "Classic JEE Advanced Twist"
        ],
        "rows": [
          [
            "Accelerated Tank (a)",
            "Free surface ⊥ g_eff⃗ = g⃗ - a⃗",
            "tanθ = a / g; pressure rises along -g_eff⃗"
          ],
          [
            "Rotating Cylinder (ω)",
            "Parabolic surface y = ω²r² / (2g)",
            "Volume of paraboloid = ½ × enclosing cylinder"
          ],
          [
            "Bernoulli Streamline",
            "P + ½ρv² + ρgh = Constant",
            "Applies ONLY along a streamline for ideal, incompressible, steady flow"
          ],
          [
            "Torricelli Efflux",
            "v = √(2gh) (when A_hole << A_tank)",
            "Horizontal recoil force F = ρ a v² = 2 ρ a g h"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Advanced Thermodynamics Problem-Solving Guide",
        "href": "/jee-advanced-thermodynamics-problem-solving-guide"
      }
    },
    {
      "heading": "Accelerated & Rotating Fluids: The Effective Gravity Shortcut",
      "paragraphs": [
        "In a tank accelerating horizontally at 'a', the free surface tilts backward at angle θ where tanθ = a/g, and isobars (lines of constant pressure) run strictly parallel to that tilted surface.",
        "In a vertical cylinder rotating at angular velocity ω, centrifugal pseudo-force pushes fluid outward, sculpting the free surface into a paraboloid: y = (ω² r²) / (2g)."
      ],
      "formulaBox": {
        "label": "Rotating Fluid Pressure & Paraboloid Volume",
        "formula": "P(r) = P₀ + ½ ρ ω² r²   |   V_paraboloid = ½ π R² H",
        "example": "Because a paraboloid has exactly HALF the volume of its enclosing cylinder (πR²H), the center liquid drops by H/2 while the wall liquid rises by H/2 until overflow!"
      }
    },
    {
      "heading": "Bernoulli's Equation Traps: Large Orifice & Water-Jet Recoil Force",
      "paragraphs": [
        "Almost every student memorizes v = √(2gh) for efflux speed. In JEE Advanced, if the hole area 'a' is NOT negligible compared to tank area 'A' (say a = A/3), the top surface speed v₁ = (a/A)v₂ cannot be ignored!",
        "Using Continuity + Bernoulli gives the exact efflux speed: v₂ = √[ 2gh / (1 - (a/A)²) ]."
      ],
      "bullets": [
        {
          "lead": "Time to Empty a Tank",
          "text": "T = (A/a) √(2/g) [√H₁ - √H₂] when a << A."
        },
        {
          "lead": "Recoil Thrust on Tank",
          "text": "Water exiting at speed v exerts horizontal thrust F = (dm/dt)v = ρ a v² = 2 ρ a g h (notice the factor of 2!)."
        },
        {
          "lead": "Layered Immiscible Liquids",
          "text": "Never use √(2gh) directly when oil floats above water! Convert upper oil pressure into an equivalent water height h_eq = (ρ_oil / ρ_water) h_oil."
        }
      ]
    },
    {
      "heading": "Buoyancy in Accelerated Frames & Submerged SHM Oscillations",
      "paragraphs": [
        "Buoyant force is simply the net pressure force from the surrounding fluid: F_B = V_submerged · ρ_fluid · g_eff (where g_eff = g ± a in an accelerating lift!).",
        "Consequently, if a cork floats in a bucket inside a freely falling elevator (g_eff = 0), Buoyancy vanishes completely to ZERO!"
      ],
      "table": {
        "caption": "Buoyancy & Surface Tension Quick Reference",
        "headers": [
          "Scenario",
          "Exact Formula",
          "Key Physical Insight"
        ],
        "rows": [
          [
            "Block oscillating at liquid surface",
            "ω = √(ρ_L A g / M)",
            "Time period T = 2π √(h_submerged / g)"
          ],
          [
            "Excess pressure in Soap Bubble",
            "ΔP = 4T / R",
            "Two air-liquid surfaces (4T/R); liquid drop = 2T/R"
          ],
          [
            "Coalescing two soap bubbles (isothermal)",
            "R_net = √(R₁² + R₂²) (in vacuum)",
            "With P_atm outside, conserve nRT = P₀V + (4T/R)V"
          ],
          [
            "Capillary rise in tube of insufficient length",
            "h' R' = h R = 2T / (ρg)",
            "Water never overflows; meniscus flattens (R' increases)"
          ]
        ]
      }
    },
    {
      "heading": "Viscosity, Terminal Velocity & Poiseuille's Law",
      "paragraphs": [
        "For a sphere of radius r and density ρ falling through a viscous fluid of density σ and viscosity η, balancing Weight = Buoyancy + Stokes Drag (6πηrv) gives Terminal Velocity v_T = [2 r² (ρ - σ) g] / (9 η).",
        "Notice the r² scaling: if 8 identical tiny raindrops coalesce into 1 big drop, radius doubles (r' = 2r), so terminal velocity quadruples (v' = 4 v_T)!"
      ],
      "mustRead": {
        "label": "JEE Advanced Rotational Dynamics & Angular Momentum",
        "href": "/jee-advanced-rotational-dynamics-angular-momentum"
      }
    },
    {
      "heading": "3-Day JEE Advanced Fluid Mechanics Sprint",
      "paragraphs": [
        "Practice drawing clean Free Body Diagrams of fluid elements and checking whether area ratio (a/A)² is negligible.",
        "Book a free 1:1 strategy call on Mentskool to review multi-concept Physics problems with an IITian mentor."
      ],
      "table": {
        "caption": "3-Day Fluid Mechanics Practice Schedule",
        "headers": [
          "Day",
          "Focus",
          "Goal"
        ],
        "rows": [
          [
            "Day 1",
            "Hydrostatics, Accelerated & Rotating Tanks",
            "15 problems with torque on dams/gates"
          ],
          [
            "Day 2",
            "Bernoulli, Large Orifice & Recoil Thrust",
            "15 JEE Advanced efflux & siphon problems"
          ],
          [
            "Day 3",
            "Surface Tension, Capillary & Viscosity",
            "15 bubbles + Stokes terminal velocity PYQs"
          ]
        ]
      }
    },
    {
      "heading": "How NTA Frames Traps in JEE Advanced Fluid Mechanics Guide (And How to Spot Them Fast)",
      "paragraphs": [
        "Knowing the formulas for JEE Advanced Fluid Mechanics Guide is only step one. In JEE Main and JEE Advanced, most lost marks happen because of small wording twists or hidden domain limits.",
        "Top rankers protect their score by running a 10-second sanity check before marking an option. Look closely at every sign, unit, and boundary condition."
      ],
      "table": {
        "caption": "Common Exam Traps vs Safe Checks for JEE Advanced Fluid Mechanics Guide",
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
      "heading": "Step-by-Step 7-Day Revision Plan for JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "You do not need to solve 400 random problems to master JEE Advanced Fluid Mechanics Guide. Solving 60 to 80 high-quality official PYQs with proper review builds far stronger accuracy.",
        "Split your revision across short, focused daily blocks so your speed stays sharp alongside school or coaching homework."
      ],
      "table": {
        "caption": "7-Day Mastery Schedule for JEE Advanced Fluid Mechanics Guide",
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
      "heading": "Rough-Sheet & Exam-Hall Time Strategy for JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "During the 180-minute CBT exam, messy rough work is the silent killer of JEE Advanced Fluid Mechanics Guide accuracy. Divide each scribble sheet into neat numbered boxes so you can re-check a step in 5 seconds.",
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
      "heading": "How 1:1 IITian Mentorship Fixes JEE Advanced Fluid Mechanics Guide Mistakes Faster",
      "paragraphs": [
        "Most JEE aspirants already have good lecture notes for JEE Advanced Fluid Mechanics Guide. What makes the difference between 95 percentile and 99.5+ percentile is having an IITian senior inspect your actual rough sheets.",
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
      "heading": "Worked Example Walkthroughs for JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Seeing a rule in action makes JEE Advanced Fluid Mechanics Guide far easier to remember than reading abstract theory. Study how a top ranker breaks down a typical exam question step by step.",
        "Notice how each step isolates the exact formula first before plugging in any numbers."
      ],
      "formulaBox": {
        "label": "3-Step Exam Solving Framework",
        "formula": "1. Identify Pattern  →  2. Apply Shortcut / Symmetry  →  3. Run Boundary Check",
        "example": "When tackling JEE Advanced Fluid Mechanics Guide, spend the first 15 seconds classifying the question type before writing algebra—this alone prevents 80% of wasted rough work."
      },
      "table": {
        "caption": "Class 11 vs Class 12 vs Dropper Strategy for JEE Advanced Fluid Mechanics Guide",
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
      "heading": "Booklist & Resource Priority for JEE Advanced Fluid Mechanics Guide (Don't Over-Collect)",
      "paragraphs": [
        "Many students buy five different books for JEE Advanced Fluid Mechanics Guide and finish none of them. Stick strictly to one primary coaching sheet or standard textbook plus official 2019–2026 PYQs.",
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
      "heading": "Mock Test Score Impact: What Mastering JEE Advanced Fluid Mechanics Guide Adds to Your Rank",
      "paragraphs": [
        "In a competitive exam where 10 marks can shift your All India Rank by thousands, turning JEE Advanced Fluid Mechanics Guide into a 100% accuracy zone creates an immediate percentile cushion.",
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
      "heading": "Final Takeaways & Quick Action Plan for JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Mastering JEE Advanced Fluid Mechanics Guide comes down to consistent daily execution, clean error tracking, and verifying every concept against official NTA data and standard textbooks.",
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
      "heading": "Common Mistakes Students Make Regarding JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Even well-prepared students often lose valuable rank or seat opportunities on JEE Advanced Fluid Mechanics Guide due to small avoidable mistakes during preparation or counseling.",
        "Review these four common pitfalls carefully before finalizing your study schedule or college preference order."
      ],
      "table": {
        "caption": "Pitfalls vs Smart Fixes for JEE Advanced Fluid Mechanics Guide",
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
      "heading": "Step-by-Step Verification & Planning Checklist for JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Before locking your next monthly milestone around JEE Advanced Fluid Mechanics Guide, walk through this short 4-step verification checklist with your parents or mentor.",
        "Having every number, document, and weekly target written down removes last-minute guesswork and keeps stress low."
      ],
      "bullets": [
        {
          "lead": "1. Benchmark Your Current Score",
          "text": "Check where your latest full-syllabus mock places you relative to JEE Advanced Fluid Mechanics Guide targets."
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
      "heading": "Weekly Study Rhythm & Time Allocation Around JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Even the best notes on JEE Advanced Fluid Mechanics Guide fail if you do not schedule regular active revision alongside your coaching classes or self-study.",
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
      "heading": "Parent & Student Decision Guide: Next Steps After Reading JEE Advanced Fluid Mechanics Guide",
      "paragraphs": [
        "Whether you are planning your next 30 days of preparation or shortlisting colleges around JEE Advanced Fluid Mechanics Guide, clarity comes from speaking to someone who has already walked this exact path.",
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
    }
  ],
  "faqs": [
    {
      "question": "When does Torricelli's formula v = √(2gh) fail in JEE Advanced?",
      "answer": "It fails when the hole area 'a' is comparable to tank area 'A' (use √[2gh / (1 - (a/A)²)]), or when two immiscible liquids of different densities are layered."
    },
    {
      "question": "What is the shape of a rotating liquid surface?",
      "answer": "A paraboloid given by y = (ω² r²) / (2g), whose volume equals half the volume of its enclosing cylinder."
    },
    {
      "question": "What happens to Buoyant force inside a freely falling elevator?",
      "answer": "Effective gravity g_eff = g - g = 0, so pressure gradient vanishes and Buoyant force drops to zero."
    },
    {
      "question": "What is the horizontal recoil force from a water jet exiting a tank?",
      "answer": "F = ρ a v² = 2 ρ a g h (twice the hydrostatic force ρ a g h on a closed plug of area a)."
    },
    {
      "question": "Does water overflow from a capillary tube shorter than the equilibrium rise height?",
      "answer": "No! The meniscus radius of curvature R' increases (flattens) so that h' cosθ' adjusts without overflowing."
    },
    {
      "question": "Why is excess pressure 4T/R in a soap bubble vs 2T/R in a water drop?",
      "answer": "A soap bubble has two spherical air-liquid interfaces (inner and outer), whereas a liquid drop in air has only one."
    },
    {
      "question": "How does terminal velocity scale with sphere radius?",
      "answer": "Terminal velocity scales as r² (v_T ∝ r²)."
    },
    {
      "question": "Can Bernoulli's equation be applied across a viscous or turbulent pipe?",
      "answer": "No! Ideal Bernoulli's equation requires steady, incompressible, non-viscous (inviscid), and irrotational flow along a streamline."
    },
    {
      "question": "What is the time period of vertical oscillation of a floating cylinder?",
      "answer": "T = 2π √(h_submerged / g) = 2π √(M / (ρ_liquid A g))."
    },
    {
      "question": "How can Mentskool help with JEE Advanced Physics?",
      "answer": "Mentskool pairs you 1:1 with top IIT rankers who walk through multi-concept Mechanics + Fluids setups and audit your mock errors."
    }
  ],
  "relatedGuides": [
    {
      "label": "JEE Advanced Rotational Dynamics",
      "href": "/jee-advanced-rotational-dynamics-angular-momentum",
      "tag": "Mechanics"
    },
    {
      "label": "JEE Advanced Thermodynamics Guide",
      "href": "/jee-advanced-thermodynamics-problem-solving-guide",
      "tag": "Thermal"
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
