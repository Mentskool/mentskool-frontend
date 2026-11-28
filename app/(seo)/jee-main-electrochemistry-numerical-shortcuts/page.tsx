import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "JEE Main Electrochemistry Numerical Shortcuts: Nernst, Conductance & Faraday Laws",
  description: "Solve JEE Main Electrochemistry numericals in half the time. Master 0.0591/n Nernst shortcuts, Latimer E\u00b0 reduction addition, Kohlrausch law, and Faraday equivalent weights.",
  keywords: ["JEE Main electrochemistry numerical shortcuts", "Nernst equation 0.0591 trick", "Latimer diagram E\u00b0 calculation", "Kohlrausch law JEE Main", "Faraday electrolysis numericals"],
  alternates: {
    canonical: "https://mentskool.com/jee-main-electrochemistry-numerical-shortcuts",
  },
  openGraph: {
    title: "JEE Main Electrochemistry Numerical Shortcuts: Nernst, Conductance & Faraday Laws",
    description: "Solve JEE Main Electrochemistry numericals in half the time. Master 0.0591/n Nernst shortcuts, Latimer E\u00b0 reduction addition, Kohlrausch law, and Faraday equivalent weights.",
    url: "https://mentskool.com/jee-main-electrochemistry-numerical-shortcuts",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Electrochemistry Numerical Shortcuts",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "jee-main-electrochemistry-numerical-shortcuts",
  "breadcrumbLabel": "Electrochemistry Numerical Shortcuts",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Electrochemistry Numerical Shortcuts: Nernst, Conductance & Faraday Laws",
  "metaDescription": "Solve JEE Main Electrochemistry numericals in half the time. Master 0.0591/n Nernst shortcuts, Latimer E° reduction addition, Kohlrausch law, and Faraday equivalent weights.",
  "keywords": [
    "JEE Main electrochemistry numerical shortcuts",
    "Nernst equation 0.0591 trick",
    "Latimer diagram E° calculation",
    "Kohlrausch law JEE Main",
    "Faraday electrolysis numericals"
  ],
  "badgeText": "PHYSICAL CHEM NUMERICALS",
  "h1Prefix": "Electrochemistry Numericals:",
  "h1Highlight": "Nernst, Latimer & Conductance Shortcuts",
  "heroDescription": "Electrochemistry is one of the highest-yielding Physical Chemistry chapters in JEE Main, frequently appearing in the Numerical Value section where decimal precision determines whether you score +4 or 0. Master the 0.0591 ≈ 0.06 approximation traps, ΔG° additive Latimer potentials, Kohlrausch's ion-mobility equations, and 1-line Faraday equivalents.",
  "serviceTitle": "Losing Numerical Marks to Decimal Slips and Log Approximations?",
  "serviceDescription": "Learn exact rounding thresholds and rapid Physical Chemistry calculation strategies with an IITian mentor on Mentskool.",
  "quickStats": [
    {
      "label": "JEE Main Weightage",
      "value": "8 Marks (2 Qs)",
      "hint": "1 Galvanic/Nernst + 1 Conductance/Faraday"
    },
    {
      "label": "Top Formula",
      "value": "0.0591 / n",
      "hint": "Use 0.0591 unless prompt states 0.06"
    },
    {
      "label": "Non-Additive Trap",
      "value": "E° ≠ E₁° + E₂°",
      "hint": "Always add ΔG° = -nFE° (multiply by n!)"
    },
    {
      "label": "Faraday Constant",
      "value": "96,500 C/mol",
      "hint": "1 Faraday deposits 1 Gram Equivalent"
    }
  ],
  "overviewHeading": "Executive Summary: Precision Calculation Methods for Physical Chemistry",
  "overviewIntro": "In JEE Main numerical-value questions, Electrochemistry tests multi-step arithmetic involving logarithms (log 2 = 0.301, log 3 = 0.477), molar conductivities, and Faraday equivalents. Knowing when you can safely round (2.303RT/F = 0.0591 vs 0.06) and avoiding the fatal mistake of directly adding non-intensive E° values makes Electrochemistry an effortless +8 mark powerhouse.",
  "overviewPoints": [
    {
      "title": "Never Add E° Directly (Latimer Trap)",
      "detail": "Electrode potential E° is an intensive property; ALWAYS convert to extensive ΔG° = -nFE° so n₃E₃° = n₁E₁° + n₂E₂°."
    },
    {
      "title": "The Nernst 0.0591 vs 0.06 Check",
      "detail": "Check the question's given constants carefully! For integer answers, NTA explicitly writes 'Take 2.303RT/F = 0.06 V' when rounding is intended."
    },
    {
      "title": "1-Line Faraday Equivalence",
      "detail": "Moles of electrons passed = (I × t) / 96500 = Equivalents deposited. Never write full balanced half-reactions when n-factor is obvious!"
    },
    {
      "title": "Kohlrausch Weak Electrolyte Trick",
      "detail": "Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl); combine with α = Λ_m / Λ°_m to extract K_a = cα²/(1-α)."
    },
    {
      "title": "Concentration Cell & pH Electrode",
      "detail": "For a Hydrogen Electrode at 298 K and 1 atm H₂: E_red = -0.0591 × pH directly!"
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "Day 1 (Galvanic & Latimer)",
      "phaseTitle": "Cell Notation, E°_cell & ΔG° Addition",
      "description": "Master anode-cathode IUPAC notation, E°_cell = E°_red(cathode) - E°_red(anode), and Latimer half-cell combinations.",
      "deliverables": [
        "Memorize E° = E°_cathode - E°_anode",
        "Solve 15 Latimer n₃E₃° = n₁E₁° + n₂E₂° Qs",
        "Master ΔG° = -nFE°_cell = -RT ln K",
        "Verify spontaneity (E_cell > 0)"
      ]
    },
    {
      "timeframe": "Day 2 (Nernst & pH)",
      "phaseTitle": "Nernst Equation, K_sp & Concentration Cells",
      "description": "Master log Q reaction quotients (ignoring pure solids/liquids), pH-coupled electrodes, and solubility product (K_sp) cells.",
      "deliverables": [
        "Solve 20 Nernst numerical PYQs",
        "Master E_H+/H2 = -0.0591 pH shortcut",
        "Compute K_sp from Ag|AgCl|Cl⁻ electrodes",
        "Practice log 2, 3, 5, 7 mental arithmetic"
      ]
    },
    {
      "timeframe": "Day 3 (Conductance)",
      "phaseTitle": "κ, Λ_m, Cell Constant & Kohlrausch Law",
      "description": "Master unit conversions between S cm⁻¹ and S m⁻¹ (1000/M vs 1/(1000M) trap!), Debye-Huckel plots, and weak acid K_a.",
      "deliverables": [
        "Lock Λ_m = κ × 1000 / M (in S cm² mol⁻¹)",
        "Master cell constant G* = R × κ",
        "Solve 15 Kohlrausch K_a numericals",
        "Analyze dilution curves (strong vs weak)"
      ]
    },
    {
      "timeframe": "Day 4 (Faraday & Batteries)",
      "phaseTitle": "Electrolysis Products, Faraday & Fuel Cells",
      "description": "Master preferential discharge (aqueous vs molten NaCl, CuSO₄), H₂-O₂ fuel cell efficiency, and 2020–2026 PYQs.",
      "deliverables": [
        "Predict electrolysis products (Pt vs Cu)",
        "Solve 15 series-cell Faraday numericals",
        "Review Lead Storage & Fuel Cell reactions",
        "Complete timed 20-PYQ sprint"
      ]
    }
  ],
  "comparisonTitle": "Common Electrochemistry Mistakes vs Topper Numerical Shortcuts",
  "comparisonSubtitle": "Preventing unit-conversion and intensive-property blunders in JEE Main",
  "comparisonRows": [
    {
      "aspect": "Combining Half-Cell Potentials",
      "genericCoaching": "Adds E₁° + E₂° directly to get E₃°",
      "mentskool1on1": "Weights by electrons transferred: E₃° = (n₁E₁° + n₂E₂°) / n₃"
    },
    {
      "aspect": "Molar Conductivity Units (κ × 1000 / M)",
      "genericCoaching": "Mixes up multiplying vs dividing by 1000",
      "mentskool1on1": "If κ is in S cm⁻¹, multiply by 1000/M; if S m⁻¹, divide by (1000×M)"
    },
    {
      "aspect": "Pure Solids in Nernst Q",
      "genericCoaching": "Includes electrode mass or AgCl(s) in log Q",
      "mentskool1on1": "Sets activity of pure solids & liquids = 1; includes only ions & gases"
    },
    {
      "aspect": "Hydrogen Electrode Reduction",
      "genericCoaching": "Substitutes [H⁺] = 10^(-pH) into full Nernst every time",
      "mentskool1on1": "Directly writes E(H⁺/H₂) = -0.0591 × pH (at P_H2 = 1 bar)"
    },
    {
      "aspect": "Series Electrolytic Cells",
      "genericCoaching": "Calculates mass in Cell 1, converts back to Coulombs, repeats",
      "mentskool1on1": "Equates Gram Equivalents directly: w₁/E₁ = w₂/E₂"
    },
    {
      "aspect": "Aqueous NaCl Electrolysis",
      "genericCoaching": "Deposits Na metal at cathode",
      "mentskool1on1": "Water reduces at cathode (H₂ gas); Cl₂ evolves at anode (overpotential)"
    },
    {
      "aspect": "Weak Electrolyte Λ_m Dilution",
      "genericCoaching": "Applies linear Λ_m = Λ°_m - A√c",
      "mentskool1on1": "Linear law is ONLY for strong electrolytes; weak rises steeply near c→0"
    },
    {
      "aspect": "Mercury / Button Cell E_cell",
      "genericCoaching": "Assumes cell voltage drops steadily with use",
      "mentskool1on1": "Only solid/liquid reactants/products (Q=1) → constant voltage over lifetime"
    }
  ],
  "sections": [
    {
      "heading": "1. The Latimer Potential Rule: Why E° Is Never Additive",
      "subheading": "Converting to ΔG° = -nFE° before combining half-reactions",
      "paragraphs": [
        "Suppose a question gives E°(Fe³⁺/Fe²⁺) = +0.77 V and E°(Fe²⁺/Fe) = -0.44 V, and asks for E°(Fe³⁺/Fe). Adding 0.77 + (-0.44) = +0.33 V is DEAD WRONG—and it is always waiting as Option A!",
        "Because electrode potential E° represents energy PER electron (Joules/Coulomb), it is an intensive property like temperature or density. You cannot add intensive properties directly; you must add extensive Gibbs Free Energies: ΔG₃° = ΔG₁° + ΔG₂°.",
        "Substituting ΔG° = -nFE° and canceling -F gives the universal 1-line Latimer shortcut: n₃ E₃° = n₁ E₁° + n₂ E₂°. Here, n₁ = 1 (Fe³⁺→Fe²⁺), n₂ = 2 (Fe²⁺→Fe), and n₃ = 3 (Fe³⁺→Fe). Thus E₃° = [1(0.77) + 2(-0.44)] / 3 = -0.11 / 3 = -0.037 V!",
        "What about when balancing two half-cells to form a complete net redox cell (no net electrons remaining)? In that case ONLY, E°_cell = E°_cathode - E°_anode works directly without n-weighting because the same number of electrons cancels between oxidation and reduction!"
      ],
      "keyTakeaways": [
        {
          "title": "Half-Cell + Half-Cell = Half-Cell",
          "detail": "Always weight by n₁, n₂, n₃ when forming a new half-reaction: n₃E₃° = n₁E₁° + n₂E₂°."
        },
        {
          "title": "Full Redox Cell",
          "detail": "When combining oxidation + reduction into a full cell, E°_cell = E°_red(cathode) - E°_red(anode)."
        }
      ]
    },
    {
      "heading": "2. Nernst Equation Shortcuts: pH Electrodes & Equilibrium Constants",
      "subheading": "Mastering log approximations and K_eq = 10^(nE°/0.0591)",
      "paragraphs": [
        "At 298 K, the Nernst equation is E_cell = E°_cell - (0.0591 / n) log₁₀ Q. To save time in JEE Main, memorize key log values: log 2 = 0.301, log 3 = 0.477, log 5 = 0.699, log 7 = 0.845, and log(e) = 0.4343.",
        "Always verify 'n' cleanly by balancing the electrons transferred in the written cell reaction! For instance, in Zn + 2Ag⁺ → Zn²⁺ + 2Ag, n = 2, and Q = [Zn²⁺] / [Ag⁺]² (never forget the squared exponent on Ag⁺!).",
        "For any Hydrogen Electrode (2H⁺ + 2e⁻ → H₂) at 1 atm H₂ pressure, E_red = 0 - (0.0591/2) log(1/[H⁺]²) = -0.0591 × pH! This turns pH-electrode concentration cell problems into 10-second mental arithmetic.",
        "At chemical equilibrium, E_cell = 0 and Q = K_eq, giving log₁₀ K_eq = (n E°_cell) / 0.0591. If an integer question states 'Take 2.303RT/F = 0.06 V', use 0.06 strictly so your integer matches NTA's exact key!"
      ],
      "keyTakeaways": [
        {
          "title": "Check Exponent in Q",
          "detail": "Coefficients in the balanced equation become exponents in reaction quotient Q."
        },
        {
          "title": "10-Second pH Formula",
          "detail": "E(H⁺/H₂) = -0.0591 × pH at 298 K and 1 bar H₂ pressure."
        }
      ]
    },
    {
      "heading": "3. Conductance Units Trap & Kohlrausch's Law",
      "subheading": "Never confusing 1000/M vs 1/(1000M) in Molar Conductivity",
      "paragraphs": [
        "In Electrolytic Conductance, the #1 cause of wrong numericals is mixing cm and meters. Remember: Conductivity κ = G × G* = (1/R) × (l/A). If length l is in cm and area A in cm², κ is in S cm⁻¹ (or Ω⁻¹ cm⁻¹).",
        "When κ is in S cm⁻¹ and Molarity M is in mol/L, Molar Conductivity (in S cm² mol⁻¹) MUST multiply by 1000: Λ_m = (κ × 1000) / M. However, if NTA gives κ in SI units (S m⁻¹), Molar Conductivity (in S m² mol⁻¹) is Λ_m = κ / (1000 × M)!",
        "Kohlrausch's Law of Independent Migration of Ions states that at infinite dilution, Λ°_m(A_x B_y) = x λ°(A^y+) + y λ°(B^x-). Notice the distinction between Molar Conductivity (Λ_m) and Equivalent Conductivity (Λ_eq = Λ_m / n-factor)!",
        "For weak electrolytes like acetic acid, combine degree of dissociation α = Λ_m / Λ°_m with Ostwald's dilution law: K_a = (c α²) / (1 - α) = c (Λ_m / Λ°_m)² / (1 - Λ_m / Λ°_m)."
      ],
      "keyTakeaways": [
        {
          "title": "S cm⁻¹ vs S m⁻¹ Rule",
          "detail": "Use (κ × 1000)/M for S cm⁻¹; use κ/(1000 × M) for SI units S m⁻¹."
        },
        {
          "title": "Λ_m vs Λ_eq Ratio",
          "detail": "Λ_m = (n-factor) × Λ_eq; always check whether data is given per mole or per equivalent."
        }
      ]
    },
    {
      "heading": "4. Faraday's Laws of Electrolysis & Series Cell Shortcuts",
      "subheading": "Solving mass, gas volume, and residual pH in 3 lines",
      "paragraphs": [
        "Faraday's First Law states: 1 Faraday (96,500 C) deposits or liberates exactly 1 Gram Equivalent of any substance. Therefore, Equivalents = (I × t) / 96500 = w / E_eq, where E_eq = Molar Mass / n-factor.",
        "Don't forget current efficiency! If a problem states '80% current efficiency', multiply (I × t) by 0.80 immediately before dividing by 96,500.",
        "When multiple electrolytic cells are connected in SERIES, the exact same charge passes through every cell (Faraday's Second Law). Never calculate total Coulombs if you don't need them—simply set w₁ / E_eq1 = w₂ / E_eq2 = Moles of O₂ × 4 = Moles of H₂ × 2!",
        "For aqueous electrolysis pH questions (e.g., electrolyzing aqueous NaCl or CuSO₄ with inert Pt electrodes): every Faraday producing H₂ at the cathode generates 1 mole of OH⁻ (raising pH), whereas every Faraday producing O₂ at the anode generates 1 mole of H⁺ (lowering pH)!"
      ],
      "keyTakeaways": [
        {
          "title": "Gas Volume Per Faraday",
          "detail": "1 Faraday liberates 11.2 L of H₂ (n=2) or Cl₂ (n=2), and 5.6 L of O₂ (n=4) at STP (22.4 L/mol)."
        },
        {
          "title": "Series Cells = Equal Equiv",
          "detail": "Equate w₁/E₁ = w₂/E₂ directly for series cells without solving for Coulombs."
        }
      ]
    },
    {
      "heading": "5. Preferential Discharge & Commercial Batteries/Fuel Cells",
      "subheading": "High-frequency NCERT memory facts tested in JEE Main",
      "paragraphs": [
        "When electrolyzing aqueous solutions with inert Pt electrodes, check competing species: at the cathode, species with HIGHER E°_red reduces first (e.g., Cu²⁺ > H₂O > Na⁺, so Cu deposits instead of H₂, whereas in NaCl(aq), H₂ evolves instead of Na). At the anode, species with LOWER E°_red (higher oxidation tendency) oxidizes—except Cl⁻ vs H₂O, where Cl₂ evolves from concentrated brine due to oxygen overpotential.",
        "If active electrodes are used (like CuSO₄(aq) with Cu anode), the Copper anode itself dissolves (Cu → Cu²⁺ + 2e⁻) instead of O₂ evolving!",
        "Review NCERT's 4 battery reactions: (1) Dry cell (Zn anode, MnO₂+C cathode, NH₄Cl+ZnCl₂ paste, ~1.5 V), (2) Mercury cell (Zn-Hg anode, HgO+C cathode, constant ~1.35 V), (3) Lead storage battery (Pb anode, PbO₂ cathode, 38% H₂SO₄; H₂SO₄ is consumed during discharge and regenerated during charging), and (4) H₂-O₂ Fuel cell (efficiency ΔG/ΔH ≈ 70–83%)."
      ],
      "keyTakeaways": [
        {
          "title": "Overpotential Rule",
          "detail": "Concentrated aqueous NaCl liberates Cl₂ (not O₂) at the anode and H₂ at the cathode, turning solution basic."
        },
        {
          "title": "Lead Battery Density",
          "detail": "During discharge, H₂SO₄ is consumed into PbSO₄(s) + H₂O, dropping electrolyte density."
        }
      ]
    },
    {
      "heading": "Exam Execution: Locking 100% Accuracy in Physical Chemistry Numericals",
      "subheading": "Eliminating rounding errors in JEE Main's Numerical Value section",
      "paragraphs": [
        "In JEE Main's 5-question Numerical Value section (where you type an integer), Physical Chemistry problems are engineered to land cleanly on an integer if you use the exact constants provided in the prompt.",
        "Always read the end of the question FIRST to check: 'Given: F = 96500 C/mol, 2.303RT/F = 0.059 V or 0.06 V, log 2 = 0.30'. Using 96485 instead of 96500 can shift a final answer from 40 to 39.99 and ruin your integer.",
        "Keep a clean rough-sheet layout separating given data, n-factor, and unit conversions before multiplying.",
        "Want an IITian mentor to review your Physical Chemistry calculation speed? Book a free 1:1 strategy session on Mentskool today."
      ],
      "keyTakeaways": [
        {
          "title": "Use Given Constants Strictly",
          "detail": "Match NTA's specified 96500 / 0.059 / 0.06 values so your numerical lands cleanly on the integer."
        },
        {
          "title": "Verify n-Factor Twice",
          "detail": "A wrong n-factor invalidates Nernst, ΔG°, and Faraday answers simultaneously."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in Electrochemistry Numerical Shortcuts",
      "subheading": "How top IITians eliminate preventable -1 errors under strict 180-minute pressure",
      "paragraphs": [
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling Electrochemistry Numerical Shortcuts, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins. Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in Electrochemistry Numerical Shortcuts, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
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
    },
    {
      "heading": "Active PYQ Practice & Spaced Revision Blueprint for Electrochemistry Numerical Shortcuts",
      "subheading": "Building permanent speed and pattern recognition without burnout",
      "paragraphs": [
        "Simply watching solution videos or reading solved examples creates an illusion of competence that collapses in the actual NTA CBT interface. True mastery of Electrochemistry Numerical Shortcuts comes from timed, unaided problem solving using official 2019–2026 JEE Main and Advanced PYQs.",
        "Structure your practice in three tiers: Tier 1 (Concept Locking) — solve 25 foundational problems untimed while verifying every step from first principles. Tier 2 (Speed Conditioning) — solve 20 mixed PYQs under a strict 40-minute stopwatch to build rapid pattern recognition.",
        "Tier 3 (Mistake Archiving) — maintain a concise Mistake & Edge-Case Notebook recording every problem you got wrong or took too long to solve. Re-solving those exact marked problems 7 days and 21 days later permanently rewires your problem-solving reflexes.",
        "Avoid jumping blindly between five different reference books; solving one quality source and official PYQs three times builds far stronger exam confidence than skimming ten books once."
      ],
      "keyTakeaways": [
        {
          "title": "Timed 40-Minute Sprints",
          "detail": "Practice PYQs under strict stopwatch pressure to train real NTA CBT decision speed."
        },
        {
          "title": "Re-Solve Marked Errors",
          "detail": "Re-attempting your Mistake Notebook at 7-day and 21-day intervals locks long-term retention."
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "Why can't I add two half-cell E° values directly to find a third half-cell E°?",
      "answer": "Electrode potential E° is an intensive property. You must convert to extensive Gibbs energy (ΔG° = -nFE°), giving n₃E₃° = n₁E₁° + n₂E₂°."
    },
    {
      "question": "When do I use 1000/M vs 1/(1000M) in Molar Conductivity?",
      "answer": "Use Λ_m = (κ × 1000) / M when conductivity κ is in S cm⁻¹. Use Λ_m = κ / (1000 × M) when κ is in SI units S m⁻¹."
    },
    {
      "question": "What is the Nernst equation shortcut for a Hydrogen Electrode?",
      "answer": "At 298 K and 1 bar H₂ pressure, the reduction potential of a hydrogen electrode simplifies directly to E(H⁺/H₂) = -0.0591 × pH."
    },
    {
      "question": "How much gas is liberated by 1 Faraday of electricity at STP?",
      "answer": "1 Faraday (96,500 C) liberates 1 gram equivalent: 11.2 L of H₂ or Cl₂ (n=2), and 5.6 L of O₂ (n=4) at 22.4 L/mol STP."
    },
    {
      "question": "Why does the voltage of a Mercury cell remain constant throughout its life?",
      "answer": "Because the net cell reaction Zn(Hg) + HgO(s) → ZnO(s) + Hg(l) involves only pure solids and liquids whose concentrations do not change (Q = 1)."
    },
    {
      "question": "What happens during electrolysis of concentrated aqueous NaCl with Pt electrodes?",
      "answer": "Hydrogen gas evolves at the cathode, Chlorine gas evolves at the anode (due to oxygen overpotential), and NaOH remains in solution (pH increases)."
    },
    {
      "question": "How is Kohlrausch's Law used to find K_a of a weak acid?",
      "answer": "First compute Λ°_m of the weak acid from strong electrolytes, find degree of dissociation α = Λ_m / Λ°_m, and plug into K_a = cα² / (1 - α)."
    },
    {
      "question": "What is the relationship between E°_cell and equilibrium constant K_eq?",
      "answer": "At 298 K, log₁₀ K_eq = (n E°_cell) / 0.0591, derived from ΔG° = -nFE° = -2.303 RT log K_eq."
    },
    {
      "question": "Should I include pure solid electrodes in the Nernst reaction quotient Q?",
      "answer": "No! Pure solids and pure liquids have unit activity (1) and are omitted from Q; include only aqueous ion molarities and gas partial pressures."
    },
    {
      "question": "How can Mentskool help improve my JEE Main Physical Chemistry score?",
      "answer": "Mentskool IITian mentors audit your numerical calculation errors every week, helping you master unit conversions, log approximations, and time management."
    }
  ],
  "relatedLinks": [
    {
      "label": "JEE Main Chemistry Weightage",
      "href": "/jee-main-chemistry-chapter-wise-weightage-analysis",
      "badge": "Guide"
    },
    {
      "label": "Chemical Bonding Pattern",
      "href": "/jee-main-chemical-bonding-mcq-pattern-analysis",
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
