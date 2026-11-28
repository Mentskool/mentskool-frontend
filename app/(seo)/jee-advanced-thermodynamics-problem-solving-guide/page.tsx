import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "JEE Advanced Thermodynamics Problem-Solving Guide: Physics & Chemistry Unified",
  description: "Master JEE Advanced Thermodynamics across Physics and Chemistry. Learn sign conventions, cyclic P-V-T conversions, adiabatic mixing, and entropy/Gibbs calculations.",
  keywords: ["JEE Advanced thermodynamics problem solving", "Physics vs Chemistry thermodynamics sign convention", "adiabatic mixing JEE Advanced", "P-V to V-T graph conversion JEE", "Carnot cycle entropy JEE"],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-thermodynamics-problem-solving-guide",
  },
  openGraph: {
    title: "JEE Advanced Thermodynamics Problem-Solving Guide: Physics & Chemistry Unified",
    description: "Master JEE Advanced Thermodynamics across Physics and Chemistry. Learn sign conventions, cyclic P-V-T conversions, adiabatic mixing, and entropy/Gibbs calculations.",
    url: "https://mentskool.com/jee-advanced-thermodynamics-problem-solving-guide",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "JEE Advanced Thermodynamics Guide",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "jee-advanced-thermodynamics-problem-solving-guide",
  "breadcrumbLabel": "JEE Advanced Thermodynamics Guide",
  "examFocus": "JEE",
  "metaTitle": "JEE Advanced Thermodynamics Problem-Solving Guide: Physics & Chemistry Unified",
  "metaDescription": "Master JEE Advanced Thermodynamics across Physics and Chemistry. Learn sign conventions, cyclic P-V-T conversions, adiabatic mixing, and entropy/Gibbs calculations.",
  "keywords": [
    "JEE Advanced thermodynamics problem solving",
    "Physics vs Chemistry thermodynamics sign convention",
    "adiabatic mixing JEE Advanced",
    "P-V to V-T graph conversion JEE",
    "Carnot cycle entropy JEE"
  ],
  "badgeText": "DUAL-SUBJECT POWERHOUSE",
  "h1Prefix": "JEE Advanced Thermodynamics:",
  "h1Highlight": "Unified Physics & Chemistry Problem-Solving Guide",
  "heroDescription": "Thermodynamics is unique in JEE Advanced: it is heavily tested in BOTH Physics (KTG + Laws of Thermodynamics) and Physical Chemistry (Thermochemistry + 2nd/3rd Laws), representing 10% to 14% of the entire paper. Mastering the subtle sign convention bridge, non-quasi-static irreversible expansions, and cyclic graph transformations unlocks massive dual-subject marks.",
  "serviceTitle": "Confused Between Physics (+W) and Chemistry (-W) Sign Conventions?",
  "serviceDescription": "Pair with an IITian mentor on Mentskool to master unified First & Second Law problem solving without ever flipping a sign under exam pressure.",
  "quickStats": [
    {
      "label": "Combined Weightage",
      "value": "10% - 14% Marks",
      "hint": "Appears in both Physics and Chemistry papers"
    },
    {
      "label": "Top Trap Area",
      "value": "Irreversible Work",
      "hint": "Sudden piston release vs reversible isothermal"
    },
    {
      "label": "Graph Skill Tested",
      "value": "P-V ↔ T-V ↔ P-T",
      "hint": "Converting cycle shapes & calculating efficiency"
    },
    {
      "label": "Multi-Concept Link",
      "value": "Mechanics + Thermo",
      "hint": "Spring-loaded pistons & buoyant gas chambers"
    }
  ],
  "overviewHeading": "Executive Summary: Bridging Physics Intuition and Chemistry Rigor",
  "overviewIntro": "Because Physics focuses on heat engines doing work ON the surroundings while Chemistry focuses on work done ON the system, students frequently lose marks to flipped signs. Worse, JEE Advanced deliberately combines Thermodynamics with Mechanics—attaching springs, friction, and atmospheric pressure to movable pistons inside insulated cylinders.",
  "overviewPoints": [
    {
      "title": "Resolve Sign Conventions Permanently",
      "detail": "Physics uses ΔQ = ΔU + W (work by gas); Chemistry uses ΔU = q + w (work on gas). Anchor both physically via energy conservation."
    },
    {
      "title": "Reversible vs Irreversible Expansion",
      "detail": "In sudden free expansion or constant external pressure, W = P_ext ΔV applies—never use nRT ln(V2/V1) or PV^γ = const!"
    },
    {
      "title": "Molar Heat Capacity of Polytropic Processes",
      "detail": "For any process PV^x = const, C = C_v + R/(1 - x). This single formula eliminates deriving ΔQ for arbitrary linear or hyperbolic paths."
    },
    {
      "title": "Spring-Piston Coupled Mechanics",
      "detail": "Write Force Balance on the piston at every state: P_gas A = P_atm A + Mg + kx, then integrate mechanical work alongside ΔU."
    },
    {
      "title": "Entropy & Clausius Inequality",
      "detail": "Entropy is a state function: ΔS_system depends ONLY on endpoints (nCv ln(T2/T1) + nR ln(V2/V1)), even for irreversible processes!"
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "Week 1 (KTG & 1st Law)",
      "phaseTitle": "Degrees of Freedom & Energy Conservation",
      "description": "Master equipartition theorem, gas mixtures (Cv_mix, γ_mix), and First Law applications across isobaric, isochoric, isothermal, and adiabatic paths.",
      "deliverables": [
        "Compute C_v and γ for gas mixtures",
        "Solve 25 polytropic PV^x problems",
        "Master adiabatic vs isothermal slope ratio",
        "Eliminate Physics/Chem sign confusion"
      ]
    },
    {
      "timeframe": "Week 2 (Irreversible & Pistons)",
      "phaseTitle": "Mechanics-Coupled Pistons & Sudden Expansion",
      "description": "Solve JEE Advanced piston-spring cylinders, mercury-column traps, and sudden partition-removal mixing problems.",
      "deliverables": [
        "Solve 20 spring-loaded piston problems",
        "Master free expansion (W=0, ΔU=0) traps",
        "Analyze two-chamber adiabatic mixing",
        "Apply ΔU = 0 for isolated total system"
      ]
    },
    {
      "timeframe": "Week 3 (Cycles & Graphs)",
      "phaseTitle": "Graph Conversions & Engine Efficiency",
      "description": "Convert P-V cycles into P-T, V-T, and P-ρ graphs, and compute exact thermal efficiency η = W_net / Q_absorbed.",
      "deliverables": [
        "Convert 15 cyclic graphs across axes",
        "Identify heat-absorbed vs heat-rejected legs",
        "Master Carnot vs non-Carnot efficiency",
        "Verify ΔU_cycle = 0 in all closed loops"
      ]
    },
    {
      "timeframe": "Week 4 (2nd Law & Chem)",
      "phaseTitle": "Entropy, Gibbs Free Energy & PYQs",
      "description": "Master ΔS_sys, ΔS_surr, ΔS_universe ≥ 0, ΔG = ΔH - TΔS, and Kirchhoff's equation across 2016–2026 JEE Advanced papers.",
      "deliverables": [
        "Compute ΔS for irreversible mixing",
        "Master ΔG° = -RT ln(K) coupling",
        "Solve 2020-2026 Advanced Thermo PYQs",
        "Final formula & pitfall audit with mentor"
      ]
    }
  ],
  "comparisonTitle": "JEE Main Formulaic Thermo vs JEE Advanced Coupled Thermo",
  "comparisonSubtitle": "Why standard coaching formulas fail when piston mechanics and irreversibility enter",
  "comparisonRows": [
    {
      "aspect": "Adiabatic Process Formula",
      "genericCoaching": "Blindly applies PV^γ = const to every insulated cylinder",
      "mentskool1on1": "Checks reversibility first: sudden piston drop uses P_ext ΔV = -ΔU"
    },
    {
      "aspect": "Heat Engine Efficiency (η)",
      "genericCoaching": "Uses η = 1 - T_low/T_high for all cycles",
      "mentskool1on1": "Only Carnot uses 1 - T_c/T_h; general cycles require η = W_net / Q_in"
    },
    {
      "aspect": "Sign of Work (W)",
      "genericCoaching": "Confuses Physics (+W) and Chemistry (-W) formulas",
      "mentskool1on1": "Checks physical volume change: expansion always costs gas energy"
    },
    {
      "aspect": "Polytropic Heat Capacity",
      "genericCoaching": "Integrates P dV + dU separately for every curve",
      "mentskool1on1": "Applies C = C_v + R/(1 - x) directly for PV^x = const"
    },
    {
      "aspect": "Entropy of Irreversible Path",
      "genericCoaching": "Attempts ∫dq_irrev/T directly along irreversible path",
      "mentskool1on1": "Constructs an imaginary reversible path between same endpoints"
    },
    {
      "aspect": "Gas Mixing in Connected Bulbs",
      "genericCoaching": "Equates final temperatures directly as (T1+T2)/2",
      "mentskool1on1": "Conserves total internal energy (n1Cv1T1 + n2Cv2T2) and total moles"
    },
    {
      "aspect": "Spring-Piston Cylinder",
      "genericCoaching": "Treats gas pressure as constant",
      "mentskool1on1": "Includes ½kx² spring energy in total energy balance"
    },
    {
      "aspect": "Cyclic Graph Heat Input",
      "genericCoaching": "Uses net ΔQ = W_net as Q_absorbed",
      "mentskool1on1": "Sums ONLY legs where dQ > 0 for the efficiency denominator"
    }
  ],
  "sections": [
    {
      "heading": "Physics vs Chemistry Sign Conventions: Ending the Confusion Forever",
      "subheading": "A foolproof physical anchor so you never lose -2 marks to a minus sign",
      "paragraphs": [
        "In Physics, the First Law is written as ΔQ = ΔU + W, where W = ∫ P dV is the work done BY the gas. When a gas expands (dV > 0), W is positive; when compressed (dV < 0), W is negative.",
        "In Chemistry, IUPAC defines the First Law as ΔU = q + w, where w = -∫ P_ext dV is the work done ON the gas. When a gas expands (dV > 0), w is negative; when compressed (dV < 0), w is positive.",
        "Notice that both equations express the exact same physical truth: if you supply heat to a gas and it expands against an external piston, the energy gained by internal temperature (ΔU) equals Heat Supplied minus Energy Spent Pushing the Piston Outward.",
        "During JEE Advanced, never rely on blind algebraic memory alone. After calculating work, perform a 2-second sanity check: 'Did the gas expand? Then the gas lost energy doing work.' Anchor the sign to physical expansion/compression, and you will never flip a sign again."
      ],
      "keyTakeaways": [
        {
          "title": "Physical Expansion Check",
          "detail": "Gas expansion always transfers energy from gas to surroundings, regardless of subject convention."
        },
        {
          "title": "ΔU is Identical",
          "detail": "Internal energy change ΔU = n C_v ΔT has the exact same sign and value in both Physics and Chemistry."
        }
      ]
    },
    {
      "heading": "The Irreversible Trap: Why PV^γ = Constant Fails in Sudden Processes",
      "subheading": "Handling sudden pin-release, external weights, and free expansion accurately",
      "paragraphs": [
        "One of JEE Advanced's favorite conceptual traps is the insulated cylinder with a heavy piston held by pins, or suddenly loaded with a block of mass M. Because the cylinder is insulated (ΔQ = 0), 70% of students immediately write P_1 V_1^γ = P_2 V_2^γ.",
        "This is completely invalid! The equation PV^γ = constant ONLY holds for a REVERSIBLE (quasi-static) adiabatic process where internal gas pressure equals external pressure at every instant.",
        "When pins are suddenly removed or a weight is dropped onto a piston in an insulated cylinder, the process is IRREVERSIBLE. The gas expands or compresses against a CONSTANT final external pressure P_ext. Therefore, the correct First Law equation is: 0 = ΔU + W_by_gas = n C_v (T_2 - T_1) + P_ext (V_2 - V_1).",
        "Replace V_1 = nRT_1/P_1 and V_2 = nRT_2/P_2 (where P_2 = P_ext at final equilibrium) to solve for T_2 cleanly. Notice that the final temperature T_2 after irreversible adiabatic expansion is ALWAYS higher than the temperature reached by a reversible adiabatic expansion to the same final pressure!"
      ],
      "keyTakeaways": [
        {
          "title": "Quasi-Static Prerequisite",
          "detail": "PV^γ = const applies ONLY to reversible adiabatic processes—never sudden pin releases."
        },
        {
          "title": "Constant P_ext Formula",
          "detail": "For sudden adiabatic changes, solve nC_v(T2 - T1) = -P_ext(V2 - V1)."
        }
      ]
    },
    {
      "heading": "Spring-Loaded Pistons & Coupled Mechanics Problems",
      "subheading": "Integrating Newton's Laws and elastic potential energy into thermodynamics",
      "paragraphs": [
        "JEE Advanced frequently couples thermodynamics with mechanics by attaching a spring (stiffness k) to a frictionless piston inside a gas chamber, or submerging a gas cylinder vertically under a liquid column.",
        "Treat the gas + piston + spring as a unified mechanical-thermal system. First, write the mechanical equilibrium condition at any piston displacement x: P_gas A = P_atm A + Mg + kx (assuming spring is initially relaxed). Because P_gas varies linearly with x (and thus linearly with V = V_0 + Ax), the P-V graph is a straight line!",
        "For work done by the gas during displacement from x_1 to x_2, remember that total work equals work against atmosphere + work lifting piston + work stretching spring: W_gas = P_atm A(x_2 - x_1) + Mg(x_2 - x_1) + ½k(x_2² - x_1²).",
        "Combine this directly with ΔQ = n C_v ΔT + W_gas. If the cylinder is insulated (ΔQ = 0) and the piston has mass M, watch whether the question asks for equilibrium temperature (after oscillations damp out) or maximum compression (where piston velocity momentarily hits zero)."
      ],
      "keyTakeaways": [
        {
          "title": "Linear P-V Trajectory",
          "detail": "A spring-loaded piston produces a straight-line P-V graph whose area is a simple trapezoid."
        },
        {
          "title": "Oscillation vs Damped State",
          "detail": "Verify whether the prompt asks for maximum temporary displacement (KE=0) or final equilibrium."
        }
      ]
    },
    {
      "heading": "Polytropic Processes & Arbitrary Graph Efficiency Calculations",
      "subheading": "Using C = C_v + R/(1-x) and identifying Q_absorbed legs in cyclic loops",
      "paragraphs": [
        "When a thermodynamic process follows a straight line on a P-V graph or an unusual curve like P = α V², students waste minutes integrating ∫ P dV and summing ΔU to find heat capacity. For any polytropic curve PV^x = constant, the molar heat capacity is given universally by C = C_v + R/(1 - x).",
        "Check two special cases: for isobaric (P = const, x = 0), C = C_v + R = C_p. For isothermal (PV = const, x = 1), C approaches infinity. For P/V = const (x = -1), C = C_v + R/2.",
        "When computing thermal efficiency η of a closed cycle, remember: η = W_net / Q_absorbed. The biggest trap is the denominator: Q_absorbed is NOT Q_net! You must calculate ΔQ for EVERY individual leg of the cycle, sum ONLY the positive ΔQ values (where heat enters the gas), and ignore the negative ΔQ legs (heat rejected).",
        "Also remember the sign trick for closed loops on a P-V diagram: clockwise loops yield positive work (+Area); counter-clockwise loops yield negative work (-Area). Always double-check axis labels! If Volume is on the vertical axis and Pressure on the horizontal axis, clockwise vs counter-clockwise flips!"
      ],
      "keyTakeaways": [
        {
          "title": "Check Graph Axes First",
          "detail": "Verify whether P is on Y-axis or X-axis before judging clockwise positive work."
        },
        {
          "title": "Denominator = Positive ΔQ Only",
          "detail": "Efficiency η divides Net Work by total heat absorbed (sum of legs with ΔQ > 0), never ΔQ_net."
        }
      ]
    },
    {
      "heading": "Two-Chamber Gas Mixing & Piston Equilibrium Problems",
      "subheading": "Conserving total internal energy U and total moles in adiabatic chambers",
      "paragraphs": [
        "Another classic JEE Advanced scenario involves two rigid insulated chambers separated by a valve or a movable diathermal (heat-conducting) piston, holding different gases (e.g., monoatomic He at T_1 and diatomic N_2 at T_2).",
        "When the valve opens and the gases mix adiabatically inside rigid insulated walls, total work W = 0 and total heat ΔQ = 0. Therefore, Total Internal Energy U is strictly conserved: n_1 C_v1 T_1 + n_2 C_v2 T_2 = (n_1 C_v1 + n_2 C_v2) T_final.",
        "Once T_final is found, compute P_final using the Ideal Gas Law on the combined volume: P_final (V_1 + V_2) = (n_1 + n_2) R T_final.",
        "If instead the chambers are separated by a movable, frictionless, diathermal piston (no mixing), then at final equilibrium both sides share equal pressure (P_1f = P_2f) AND equal temperature (T_1f = T_2f). Combining energy conservation with V_1f + V_2f = V_total yields the final state effortlessly."
      ],
      "keyTakeaways": [
        {
          "title": "Rigid Insulated Mixing",
          "detail": "Zero work and zero heat mean total internal energy ∑n_i C_vi T_i is conserved."
        },
        {
          "title": "Diathermal Movable Piston",
          "detail": "Final equilibrium enforces both equal temperature (T1 = T2) and equal pressure (P1 = P2)."
        }
      ]
    },
    {
      "heading": "Second Law, Entropy (ΔS) & Gibbs Free Energy (ΔG) in Chemistry",
      "subheading": "Calculating ΔS_universe for irreversible transitions and phase changes",
      "paragraphs": [
        "Entropy S is a strict state function. This means ΔS_system between State A and State B depends ONLY on the initial and final P, V, T values—regardless of whether the actual path was reversible or irreversible! For any ideal gas transition: ΔS_sys = n C_v ln(T_2/T_1) + n R ln(V_2/V_1), or equivalently n C_p ln(T_2/T_1) - n R ln(P_2/P_1).",
        "In contrast, ΔS_surroundings equals -q_actual / T_surroundings (assuming the surroundings act as a constant-temperature reservoir at T_surr). Thus, for an isothermal free expansion into vacuum (q_actual = 0), ΔS_surr = 0 while ΔS_sys = nR ln(V_2/V_1) > 0, giving ΔS_universe > 0 (spontaneous).",
        "For phase transitions at equilibrium (e.g., ice melting at 0°C = 273 K), ΔS = ΔH_fusion / T_melting, and ΔG = 0. If supercooled water freezes below 0°C, you must design a 3-step reversible path (warm to 0°C, freeze at 0°C, cool back down) to compute exact ΔS_sys.",
        "Finally, anchor chemical spontaneity on ΔG = ΔH - TΔS and equilibrium on ΔG° = -RT ln(K_eq)."
      ],
      "keyTakeaways": [
        {
          "title": "State Function Advantage",
          "detail": "Always compute ΔS_system using reversible ideal gas formulas between endpoints, even for irreversible jumps."
        },
        {
          "title": "Surroundings Formula",
          "detail": "ΔS_surr = -q_actual / T_surr uses the actual heat exchanged with the constant-temperature bath."
        }
      ]
    },
    {
      "heading": "JEE Advanced Exam Strategy: Maximizing Dual-Subject Returns",
      "subheading": "How to tackle multi-concept Thermodynamics paragraphs and integer questions",
      "paragraphs": [
        "In JEE Advanced, Thermodynamics questions frequently appear as 2-question Comprehension Paragraphs or Multiple Correct MCQs. Because one sign error or wrong C_v value invalidates all subsequent parts, invest 20 seconds upfront listing every given variable clearly: number of moles n, atomicity (monoatomic C_v = 3R/2, diatomic 5R/2), wall type (adiabatic vs diathermal), and piston type (fixed vs movable).",
        "Always verify units! In Chemistry, R = 8.314 J/mol·K vs 2 cal/mol·K vs 0.0821 L·atm/mol·K—and 1 L·atm = 101.3 J. Mixing Joules with L·atm in ΔU = q + w is a classic numerical blunder.",
        "For graph-conversion questions (converting a P-V rectangle into a V-T diagram), trace the corners 1 → 2 → 3 → 4 using Ideal Gas Proportionality (T ∝ PV) and slope signs rather than guessing visually.",
        "Want an IITian ranker to audit your Physics & Chemistry thermodynamics approach? Book a free 1:1 strategy call on Mentskool to eliminate sign slips and boost your Advanced score."
      ],
      "keyTakeaways": [
        {
          "title": "Unit Consistency Check",
          "detail": "Keep Energy in Joules (R = 8.314) or Calories (R = 2) strictly consistent across ΔU, q, and w."
        },
        {
          "title": "Corner-by-Corner Graph Trace",
          "detail": "Plot states 1, 2, 3, 4 first via PV = nRT before connecting curves on V-T or P-T axes."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in JEE Advanced Thermodynamics Guide",
      "subheading": "How top IITians eliminate preventable -1 errors under strict 180-minute pressure",
      "paragraphs": [
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling JEE Advanced Thermodynamics Guide, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins. Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in JEE Advanced Thermodynamics Guide, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
        "Finally, respect the 2.5-minute rule in JEE Main: if a problem refuses to yield a clean path after 150 seconds, circle its number on your rough sheet and move on immediately. Protecting your composure for easier +4 questions later in the paper is worth far more than stubbornly fighting one calculation trap."
      ],
      "keyTakeaways": [
        {
          "title": "Boxed Rough-Sheet Layout",
          "detail": "Cleanly numbered rough-sheet boxes cut sign-flip and transcription errors by over 70%."
        },
        {
          "title": "Respect the 2.5-Min Cutoff",
          "detail": "Mark stalled questions for Pass 2 rather than draining time needed for easier +4 marks."
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Why is Thermodynamics so important for JEE Advanced?",
      "answer": "Thermodynamics and KTG are tested heavily in both Physics and Physical Chemistry, accounting for 10% to 14% of total JEE Advanced marks across Paper 1 and Paper 2."
    },
    {
      "question": "What is the exact difference between Physics and Chemistry First Law equations?",
      "answer": "Physics writes ΔQ = ΔU + W where W is work done BY the system (+P dV). Chemistry writes ΔU = q + w where w is work done ON the system (-P_ext dV). Both express identical energy conservation."
    },
    {
      "question": "Can I use PV^γ = constant for an insulated cylinder with a sudden weight drop?",
      "answer": "No! PV^γ = constant applies only to reversible (quasi-static) adiabatic processes. For sudden irreversible compression or expansion, use nC_v(T2 - T1) = -P_ext(V2 - V1)."
    },
    {
      "question": "How do I find the molar heat capacity of a process like PV² = constant?",
      "answer": "Use the polytropic formula C = C_v + R/(1 - x). Here x = 2, so C = C_v + R/(1 - 2) = C_v - R."
    },
    {
      "question": "How is entropy change calculated for an irreversible expansion?",
      "answer": "Since entropy S is a state function, ΔS_system depends only on initial and final states. Always compute ΔS_sys = nC_v ln(T2/T1) + nR ln(V2/V1) using endpoints."
    },
    {
      "question": "What is the efficiency formula for a non-Carnot thermodynamic cycle?",
      "answer": "For any general cycle, efficiency η = Net Work Done / Total Heat Absorbed. Sum only the positive ΔQ legs for the denominator, not net ΔQ."
    },
    {
      "question": "How does a spring attached to a piston affect thermodynamics calculations?",
      "answer": "The spring adds a force kx to piston equilibrium (P_gas A = P_atm A + Mg + kx) and stores ½k(x2² - x1²) energy during displacement."
    },
    {
      "question": "What happens to temperature during adiabatic free expansion of an ideal gas?",
      "answer": "In free expansion into a vacuum, P_ext = 0 so W = 0. Since ΔQ = 0, ΔU = 0, meaning the temperature of an ideal gas remains completely unchanged (ΔT = 0)."
    },
    {
      "question": "What are the degrees of freedom and C_v for a non-linear polyatomic gas?",
      "answer": "At room temperature, a non-linear polyatomic gas (like CH4 or H2O) has 3 translational + 3 rotational = 6 degrees of freedom, giving C_v = 3R and γ = 4/3."
    },
    {
      "question": "How can Mentskool help with JEE Advanced multi-concept Physics problems?",
      "answer": "Mentskool pairs you 1:1 with top 500 IITian rankers who dissect your mock test rough sheets and train you on coupled mechanics-thermodynamics problem solving."
    }
  ],
  "relatedLinks": [
    {
      "label": "JEE Advanced 7-Year Analysis",
      "href": "/jee-advanced-topic-wise-analysis-2020-to-2026",
      "badge": "Guide"
    },
    {
      "label": "JEE Main Physics Weightage",
      "href": "/jee-main-physics-chapter-wise-weightage-last-3-years",
      "badge": "Guide"
    },
    {
      "label": "Book Free Strategy Call (₹0)",
      "href": "/free-mentorship-session",
      "badge": "Free"
    }
  ]
};

export default function Page() {
  return <BookCallPageTemplate config={config} />;
}
