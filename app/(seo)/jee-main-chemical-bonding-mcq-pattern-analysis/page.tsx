import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-chemical-bonding-mcq-pattern-analysis",
  "breadcrumbLabel": "Chemical Bonding Pattern Analysis",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Chemical Bonding MCQ Pattern Analysis: VSEPR, MOT, Hybridization & Exceptions",
  "metaDescription": "Master JEE Main Chemical Bonding with 5-year MCQ pattern analysis. Covers VSEPR lone-pair geometries, Molecular Orbital Theory bond orders, dipole moments, and H-bonding traps.",
  "keywords": [
    "JEE Main chemical bonding MCQ pattern",
    "VSEPR theory shapes JEE",
    "MOT bond order O2 N2 JEE",
    "hybridization solid state PCl5 XeF6",
    "chemical bonding exceptions JEE"
  ],
  "h1": "Chemical Bonding in JEE Main: MCQ Pattern Analysis, MOT & Exception Blueprint",
  "readTime": "12 min read",
  "quickSummary": "Chemical Bonding is the undisputed foundation of JEE Chemistry, averaging 2 to 3 direct questions (8–12 marks) per shift—plus indirectly powering Coordination Compounds, GOC, and p-Block chemistry. Analyzing 5 years of NTA MCQs reveals clear repeating templates around VSEPR distortion, MOT magnetic behavior, solid-state hybridization shifts, and Fajan's rules.",
  "sections": [
    {
      "heading": "Executive Summary: Deconstructing NTA's Top 5 Chemical Bonding Templates",
      "paragraphs": [
        "In JEE Main Chemistry, Chemical Bonding questions are rarely open-ended; NTA rotates through five tightly defined question archetypes—Statement I/II assertions, Match-the-Following (Species vs Geometry), Increasing Bond Angle/Order sequences, Solid-State ionic shifts, and Dipole Moment comparisons."
      ],
      "bullets": [
        {
          "lead": "The Steric Number VSEPR Engine",
          "text": "SN = ½(V + M - C + A) immediately determines hybridization and electron geometry; lone-pair placement follows Bent's Rule."
        },
        {
          "lead": "MOT 14-Electron Mixing Switch",
          "text": "Remember the orbital energy switch between ≤14 electrons (σ2pz ABOVE π2px/π2py) and >14 electrons (σ2pz BELOW π2px/π2py)!"
        },
        {
          "lead": "Solid-State Auto-Ionization Traps",
          "text": "PCl₅(s) splits into [PCl₄]⁺(sp³) and [PCl₆]⁻(sp³d²); N₂O₅(s) splits into [NO₂]⁺(sp) and [NO₃]⁻(sp²)."
        },
        {
          "lead": "Back-Bonding & Drago's Rule",
          "text": "N(SiH₃)₃ is planar (sp²) due to pπ-dπ back-bonding, while PH₃/H₂S have ~92° bond angles via Drago's pure p-orbital overlap."
        },
        {
          "lead": "Dipole Moment Cancellation Geometry",
          "text": "Check NF₃ vs NH₃ (lone pair vs N-F vectors) and symmetrical shapes (XeF₄, SF₆, PCl₅, BF₃) having μ = 0."
        }
      ],
      "table": {
        "caption": "Quick Reference Snapshot",
        "headers": [
          "Key Metric",
          "Verified Data",
          "Context"
        ],
        "rows": [
          [
            "Direct Weightage",
            "8 - 12 Marks",
            "2-3 guaranteed MCQs in every single JEE Main shift"
          ],
          [
            "Top Tested Model",
            "MOT & Bond Order",
            "O2, O2+, O2-, N2, CO, NO+ magnetic & stability trends"
          ],
          [
            "High-Trap Topic",
            "Solid State PCl5/PBr5",
            "PCl5(s) = [PCl4]+ [PCl6]-; PBr5(s) = [PBr4]+ Br-"
          ],
          [
            "Avg Solve Time",
            "< 40 Seconds",
            "Instant positive marks boost for Chemistry"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Maths Chapter Weightage (2025–2027)",
        "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027"
      }
    },
    {
      "heading": "Step-by-Step Action Roadmap for Chemical Bonding Pattern Analysis",
      "paragraphs": [
        "Breaking your preparation or admission decisions into clear time-bound phases prevents last-minute panic and keeps weekly targets measurable.",
        "Follow this structured 4-stage execution table alongside your regular study schedule."
      ],
      "table": {
        "caption": "4-Phase Execution & Milestone Table",
        "headers": [
          "Stage / Timeframe",
          "Milestone",
          "Core Focus",
          "Actionable Deliverables"
        ],
        "rows": [
          [
            "Day 1 (VSEPR & Bent's)",
            "Steric Number, Shapes & Bond Angle Order",
            "Master all 16 VSEPR shapes (sp to sp³d³), Bent's rule (more electronegative atoms prefer axial/less-s positions), and Drago's rule.",
            "Memorize all lone-pair shape names; Master ClF₃ (bent T-shape) & XeF₄ (square planar); Solve 25 bond angle ranking PYQs; Verify PCl₃F₂ axial vs equatorial F placement"
          ],
          [
            "Day 2 (MOT & Magnetic)",
            "Molecular Orbital Theory & Bond Length/Energy",
            "Master 14-electron mixing, fractional bond orders (1.5, 2.5), paramagnetic vs diamagnetic species (B₂, O₂), and CO/NO⁺.",
            "Draw 1-14 vs 15-20 e⁻ MO diagrams; Master O₂²⁻, O₂⁻, O₂, O₂⁺ bond order order; Verify B₂ and O₂ paramagnetism; Solve 20 MOT Statement/Match PYQs"
          ],
          [
            "Day 3 (Exceptions & Solid)",
            "Solid-State Hybrids, Back-Bonding & Bridges",
            "Memorize auto-ionization of PCl₅, PBr₅, I₂Cl₆, Cl₂O₆, banana bonds (B₂H₆), and pπ-dπ vs pπ-pπ back-bonding.",
            "Memorize 8 solid-state ionic crystal pairs; Master B₂H₆ (3c-2e) vs Al₂Cl₆ (3c-4e); Compare N(CH₃)₃ pyramidal vs N(SiH₃)₃ planar; Check BF₃ > BCl₃ > BBr₃ Lewis acidity"
          ],
          [
            "Day 4 (Dipole, Fajan & H-Bond)",
            "Dipole Moments, Fajan's Rules & Mixed Drills",
            "Master Fajan's covalent character rules, ortho vs para nitrophenol boiling points, and timed 2020–2026 PYQ sets.",
            "Rank LiCl > NaCl > KCl covalent character; Master NH₃ vs NF₃ vector dipole addition; Solve 30 recent JEE Main Bonding PYQs; Review exception flash-sheet with mentor"
          ]
        ]
      }
    },
    {
      "heading": "Standard Textbook Rules vs High-Trap JEE Main Bonding Exceptions",
      "paragraphs": [
        "The exact exceptions NTA uses to separate 99+ percentilers from average scorers"
      ],
      "table": {
        "caption": "Standard Textbook Rules vs High-Trap JEE Main Bonding Exceptions",
        "headers": [
          "Parameter / Aspect",
          "Standard / Common Approach",
          "Verified Benchmark / Mentskool Edge"
        ],
        "rows": [
          [
            "PCl₅ vs PBr₅ Solid State",
            "Assumes sp³d trigonal bipyramidal in all phases",
            "PCl₅(s) = [PCl₄]⁺(sp³) + [PCl₆]⁻(sp³d²); PBr₅(s) = [PBr₄]⁺ + Br⁻"
          ],
          [
            "B₂ (10 e⁻) Magnetic Nature",
            "Pairs 10 electrons up to σ2pz and predicts diamagnetic",
            "s-p mixing puts degenerate π2px=π2py BELOW σ2pz → 2 unpaired e⁻ (Paramagnetic)"
          ],
          [
            "N(CH₃)₃ vs N(SiH₃)₃",
            "Marks both pyramidal (sp³) with 1 lone pair",
            "N(SiH₃)₃ is PLANAR (sp²) due to pπ-dπ back-bonding into empty Si 3d"
          ],
          [
            "BF₃ vs BBr₃ Lewis Acidity",
            "Assumes Fluorine's electronegativity makes BF₃ strongest acid",
            "2pπ-2pπ back-bonding fills B's empty orbital in BF₃ → BBr₃ > BCl₃ > BF₃"
          ],
          [
            "NH₃ vs NF₃ Dipole Moment",
            "Assumes higher electronegativity of F gives NF₃ higher μ",
            "In NF₃, lone pair opposes N-F vectors → NH₃ (1.47 D) >> NF₃ (0.24 D)"
          ],
          [
            "PH₃ / H₂S Bond Angles",
            "Predicts ~107° / ~104.5° via sp³ hybridization",
            "Drago's Rule: pure p-orbital overlap yields bond angles ~92°–93°"
          ],
          [
            "XeF₆ Gas Phase Shape",
            "Assumes symmetrical octahedral (sp³d²)",
            "Distorted octahedral (capped octahedron, sp³d³) due to 1 active lone pair"
          ],
          [
            "CO → CO⁺ Bond Order",
            "Predicts bond order drops from 3 to 2.5",
            "Electron leaves antibonding-like HOMO → CO⁺ bond order INCREASES to 3.5!"
          ]
        ]
      }
    },
    {
      "heading": "Pattern 1: VSEPR Match-the-Following & Bent's Rule Distortions",
      "paragraphs": [
        "Decoding sp³d, sp³d², and sp³d³ geometries with zero guesswork.",
        "The #1 most frequent JEE Main question type in Chemical Bonding is 'Match List I (Molecule/Ion) with List II (Shape/Hybridization)'. You can compute Steric Number in 5 seconds using: SN = ½ [Valence e⁻ of central atom + Monovalent atoms (H, F, Cl, Br, I) - Cationic charge + Anionic charge].",
        "Watch out for the tricky sp³d (SN=5) and sp³d³ (SN=7) shapes! For SN=5, lone pairs ALWAYS occupy equatorial positions to minimize 90° repulsions: 0 LP = Trigonal Bipyramidal (PCl₅), 1 LP = See-Saw (SF₄), 2 LP = Bent T-Shape (ClF₃, BrF₃), 3 LP = Linear (XeF₂, I₃⁻).",
        "In mixed-ligand TBP molecules like PCl₃F₂ or PCl₂F₃, apply Bent's Rule: more electronegative atoms (F) always take AXIAL positions (where s-character is 0%, pure p_z + d_z²), while less electronegative atoms and lone pairs take EQUATORIAL positions (sp², 33% s-character).",
        "For SN=7, XeF₆ (6 BP + 1 LP) is NOT a regular octahedron in the gas phase—it is a Distorted Octahedral (capped octahedron), whereas [XeF₆] in solid state or IF₇ (7 BP + 0 LP) is Pentagonal Bipyramidal."
      ],
      "bullets": [
        {
          "lead": "Axial = More Electronegative",
          "text": "In TBP (sp³d), place Fluorine and Chlorine strictly on axial sites and lone pairs on equatorial sites."
        },
        {
          "lead": "Zero LP Check on XeF₂/I₃⁻",
          "text": "SN=5 with 3 lone pairs always produces an exact 180° Linear geometry."
        }
      ]
    },
    {
      "heading": "Pattern 2: Molecular Orbital Theory (MOT) — Bond Order & Magnetism",
      "paragraphs": [
        "Mastering the 14-electron energy crossover and CO⁺ anomaly.",
        "MOT questions appear in nearly every shift asking to rank species by Bond Order, Bond Length (inversely proportional to Bond Order), Bond Dissociation Energy, or Paramagnetism (presence of unpaired electrons).",
        "Remember the crucial s-p mixing switch: for diatomic species with ≤ 14 total electrons (B₂, C₂, N₂, CO, NO⁺), the π2p_x = π2p_y orbitals lie LOWER in energy than σ2p_z. Consequently, B₂ (10 e⁻) has 2 unpaired electrons in π2p (Paramagnetic!), and C₂ (12 e⁻) has 4 electrons filling π2p completely (Diamagnetic, consisting purely of TWO π bonds and zero σ bonds!).",
        "For > 14 total electrons (O₂, F₂, Ne₂), σ2p_z drops BELOW π2p_x = π2p_y. Thus O₂ (16 e⁻) places 2 unpaired electrons in the antibonding π*2p orbitals, making O₂ Paramagnetic with Bond Order = 2.",
        "A classic JEE Main trick is comparing O₂⁺ (BO=2.5), O₂ (BO=2.0), O₂⁻ (BO=1.5), and O₂²⁻ (BO=1.0)—plus the famous CO anomaly: removing an electron from CO (BO=3.0) to form CO⁺ INCREASES the bond order to 3.5 because the HOMO has slight antibonding character!"
      ],
      "bullets": [
        {
          "lead": "C₂ Double-Pi Fact",
          "text": "C₂ has Bond Order 2 composed exclusively of two π bonds (zero σ bond) per MOT."
        },
        {
          "lead": "Odd Electrons = Paramagnetic",
          "text": "Any species with odd total electrons (NO, O₂⁻, O₂⁺) is guaranteed paramagnetic; even species B₂ & O₂ are also paramagnetic."
        }
      ],
      "mustRead": {
        "label": "Best Mentorship Program for JEE (Mains & Advanced)",
        "href": "/best-jee-mentorship"
      }
    },
    {
      "heading": "Pattern 3: Solid-State Auto-Ionization & Bridged Dimers",
      "paragraphs": [
        "Memorizing the exact crystal-phase ions tested in Statement I/II MCQs.",
        "NTA frequently asks for the hybridization of Phosphorus, Nitrogen, or Chlorine in the SOLID state. Unlike gas phase where covalent molecules remain discrete, several halides and oxides auto-ionize in the solid lattice.",
        "Lock these exact solid-state pairs: (1) PCl₅(s) exists as [PCl₄]⁺ (sp³, tetrahedral) and [PCl₆]⁻ (sp³d², octahedral). (2) PBr₅(s) exists as [PBr₄]⁺ (sp³) and Br⁻ (steric bulk prevents PBr₆⁻!). (3) I₂Cl₆(s/l) self-ionizes into [ICl₂]⁺ (sp³, bent) and [ICl₄]⁻ (sp³d², square planar).",
        "Similarly for oxides: (4) N₂O₅(s) is [NO₂]⁺ (sp, linear) and [NO₃]⁻ (sp², trigonal planar). (5) N₂O₄(s) is [NO]⁺ and [NO₃]⁻. (6) Cl₂O₆(s) is [ClO₂]⁺ (sp²) and [ClO₄]⁻ (sp³).",
        "For dimers: B₂H₆ features four terminal 2c-2e B-H bonds and two bridging 3c-2e 'banana' bonds (sp³ Boron, 4 non-planar/2 planar geometry). In contrast, Al₂Cl₆ and BeCl₂(s) form 3c-4e coordinate covalent chlorine bridges where octets are complete."
      ],
      "bullets": [
        {
          "lead": "PCl₅ vs PBr₅ Contrast",
          "text": "PCl₅(s) forms [PCl₄]⁺[PCl₆]⁻, whereas PBr₅(s) forms [PBr₄]⁺ Br⁻ due to Bromine's large size."
        },
        {
          "lead": "Banana Bonds (3c-2e)",
          "text": "B₂H₆ is electron-deficient (3-center 2-electron bridges); Al₂Cl₆ uses 3-center 4-electron coordinate bonds."
        }
      ]
    },
    {
      "heading": "Pattern 4: Back-Bonding, Drago's Rule & Bond Angle Ranking",
      "paragraphs": [
        "Understanding why Trisilylamine is planar and Ammonia > Phosphine.",
        "When comparing bond angles across hydrides (NH₃ = 107°, PH₃ = 93.6°, AsH₃ = 91.8°, SbH₃ = 91.3°), apply Drago's Rule: for Period 3+ central atoms bonded to low-electronegativity groups (H), the large energy gap between s and p orbitals makes hybridization energetically unfavorable. Bonding occurs via nearly pure p-orbitals (~90° angles).",
        "In Boron trihalides (BF₃, BCl₃, BBr₃, BI₃), Fluorine's 2p lone pair overlaps tightly with Boron's empty 2p orbital (2pπ-2pπ back-bonding), reducing Boron's electron deficiency. As halogen size grows (3p, 4p, 5p), back-bonding weakens rapidly—making BI₃ > BBr₃ > BCl₃ > BF₃ the exact order of Lewis acidity!",
        "Similarly, in Trisilylamine N(SiH₃)₃, Nitrogen's lone pair delocalizes into Silicon's empty 3d orbitals (pπ-dπ back-bonding), flattening Nitrogen from sp³ pyramidal to sp² trigonal planar—making it a dramatically weaker base than Trimethylamine N(CH₃)₃ (where Carbon has no d-orbitals).",
        "For oxygen-centered angles: Cl₂O (111°) > H₂O (104.5°) > F₂O (103°) because bulky Cl atoms repel strongly while electronegative F pulls bonding electrons away from O."
      ],
      "bullets": [
        {
          "lead": "BF₃ Weakest Lewis Acid",
          "text": "Strong 2pπ-2pπ back-bonding makes BF₃ the weakest Lewis acid among BX₃ halides."
        },
        {
          "lead": "Planar N(SiH₃)₃",
          "text": "pπ-dπ back-bonding turns Trisilylamine planar (sp²) with bond angle ~120°."
        }
      ]
    },
    {
      "heading": "Pattern 5: Dipole Moments, Fajan's Rules & Hydrogen Bonding",
      "paragraphs": [
        "Solving boiling point, solubility, and thermal stability comparisons cleanly.",
        "Dipole moment μ = q × d is a vector sum. In NH₃, the three N-H bond dipoles point toward N, adding constructively with the N lone pair dipole (μ = 1.47 D).",
        "In NF₃, the three N-F dipoles point away from N, opposing the lone pair (μ = 0.24 D). Also check cis vs trans alkenes and ortho/meta/para-dichlorobenzene (para = 0 D).",
        "Fajan's Rules govern covalent character in ionic compounds: smaller cation (high charge density) + larger, more polarizable anion + pseudo-noble gas configuration (18-electron shell like Cu⁺, Ag⁺, Zn²⁺) → higher covalent character, lower melting point, lower water solubility, and deeper color.",
        "For Hydrogen Bonding: H-F has the strongest individual H-bond, yet H₂O has a higher boiling point (100°C vs 19.5°C) because each H₂O molecule forms a 3D network of FOUR H-bonds (2 donors, 2 acceptors), whereas HF forms linear zig-zag chains of only two.",
        "Intramolecular H-bonding (e.g., o-nitrophenol) lowers boiling point and increases steam volatility compared to intermolecular H-bonding (p-nitrophenol)."
      ],
      "bullets": [
        {
          "lead": "18-Electron Pseudo-Shell",
          "text": "CuCl and AgCl are far more covalent (less soluble) than NaCl and KCl of similar size."
        },
        {
          "lead": "o-Nitrophenol Steam Volatility",
          "text": "Intramolecular chelation prevents association, making ortho-isomer steam-volatile with lower BP."
        }
      ]
    },
    {
      "heading": "Exam Execution: Turning Chemical Bonding Into a 30-Second +12 Mark Sweep",
      "paragraphs": [
        "Integrating NCERT tables and statement-reason logic.",
        "Chemical Bonding questions require zero lengthy numerical calculations, making them the fastest marks in your entire JEE Main paper.",
        "Whenever you encounter a 'Statement I / Statement II' question, verify Statement I and Statement II independently first. Many students get tricked by assuming Statement II is true just because it sounds chemically plausible (for instance, claiming He₂⁺ has zero bond order when its BO is actually 0.5!).",
        "Keep a 1-page laminated sheet of all 15 solid-state ions, MOT 14-electron exceptions, and VSEPR shapes for weekly 10-minute rapid recall.",
        "Need structured accountability and daily Chemistry target sheets? Connect 1:1 with an IITian mentor on Mentskool to systematically boost your Inorganic & Physical Chemistry accuracy."
      ],
      "bullets": [
        {
          "lead": "Check He₂⁺ & H₂⁻",
          "text": "Both He₂⁺ and H₂⁻ have 3 electrons in MOT, giving Bond Order = 0.5 (stable enough to exist!)."
        },
        {
          "lead": "Independent Statement Audit",
          "text": "Verify both statements separately in Assertion-Reason MCQs before checking linkage."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in Chemical Bonding Pattern Analysis",
      "paragraphs": [
        "How top IITians eliminate preventable -1 errors under strict 180-minute pressure.",
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling Chemical Bonding Pattern Analysis, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins.",
        "Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in Chemical Bonding Pattern Analysis, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
        "Finally, respect the 2.5-minute rule in JEE Main: if a problem refuses to yield a clean path after 150 seconds, circle its number on your rough sheet and move on immediately. Protecting your composure for easier +4 questions later in the paper is worth far more than stubbornly fighting one calculation trap."
      ],
      "bullets": [
        {
          "lead": "Boxed Rough-Sheet Layout",
          "text": "Cleanly numbered rough-sheet boxes cut sign-flip and transcription errors by over 70%."
        },
        {
          "lead": "Respect the 2.5-Min Cutoff",
          "text": "Mark stalled questions for Pass 2 rather than draining time needed for easier +4 marks."
        }
      ]
    },
    {
      "heading": "Active PYQ Practice & Spaced Revision Blueprint for Chemical Bonding Pattern Analysis",
      "paragraphs": [
        "Building permanent speed and pattern recognition without burnout.",
        "Simply watching solution videos or reading solved examples creates an illusion of competence that collapses in the actual NTA CBT interface. True mastery of Chemical Bonding Pattern Analysis comes from timed, unaided problem solving using official 2019–2026 JEE Main and Advanced PYQs.",
        "Structure your practice in three tiers: Tier 1 (Concept Locking) — solve 25 foundational problems untimed while verifying every step from first principles. Tier 2 (Speed Conditioning) — solve 20 mixed PYQs under a strict 40-minute stopwatch to build rapid pattern recognition.",
        "Tier 3 (Mistake Archiving) — maintain a concise Mistake & Edge-Case Notebook recording every problem you got wrong or took too long to solve. Re-solving those exact marked problems 7 days and 21 days later permanently rewires your problem-solving reflexes.",
        "Avoid jumping blindly between five different reference books; solving one quality source and official PYQs three times builds far stronger exam confidence than skimming ten books once."
      ],
      "bullets": [
        {
          "lead": "Timed 40-Minute Sprints",
          "text": "Practice PYQs under strict stopwatch pressure to train real NTA CBT decision speed."
        },
        {
          "lead": "Re-Solve Marked Errors",
          "text": "Re-attempting your Mistake Notebook at 7-day and 21-day intervals locks long-term retention."
        }
      ]
    }
  ],
  "faqs": [
    {
      "question": "How many questions come from Chemical Bonding in JEE Main?",
      "answer": "Chemical Bonding consistently contributes 2 to 3 direct MCQs (8–12 marks) per JEE Main shift, plus foundational concepts used across Coordination Chemistry and GOC."
    },
    {
      "question": "What is the hybridization of PCl₅ in the solid state?",
      "answer": "In the solid state, PCl₅ auto-ionizes into [PCl₄]⁺ (sp³ tetrahedral) and [PCl₆]⁻ (sp³d² octahedral)."
    },
    {
      "question": "Why is B₂ paramagnetic according to MOT?",
      "answer": "Due to 2s-2p orbital mixing in ≤14-electron systems, the degenerate π2px and π2py orbitals sit below σ2pz. By Hund's rule, the last 2 electrons occupy π2px and π2py unpaired."
    },
    {
      "question": "Why does NH₃ have a much higher dipole moment than NF₃?",
      "answer": "In NH₃, the N-H bond dipoles point toward Nitrogen and add to the lone pair dipole. In NF₃, the N-F bond dipoles point toward Fluorine, largely canceling the lone pair dipole."
    },
    {
      "question": "Why is Trisilylamine N(SiH₃)₃ planar while Trimethylamine N(CH₃)₃ is pyramidal?",
      "answer": "In N(SiH₃)₃, Nitrogen's lone pair delocalizes into empty 3d orbitals on Silicon (pπ-dπ back-bonding), changing hybridization from sp³ to sp² planar."
    },
    {
      "question": "What is the bond order of CO⁺ compared to CO?",
      "answer": "While CO has a bond order of 3.0, removing one electron from its slightly antibonding HOMO increases the bond order of CO⁺ to 3.5."
    },
    {
      "question": "What is Drago's Rule in Chemical Bonding?",
      "answer": "Drago's Rule states that for Period 3+ central atoms (like P, As, S, Se) bonded to low-electronegativity atoms like Hydrogen, negligible hybridization occurs and bond angles stay close to 90°."
    },
    {
      "question": "Which is a stronger Lewis acid: BF₃ or BBr₃?",
      "answer": "BBr₃ is stronger! Strong 2pπ-2pπ back-bonding between Fluorine and Boron stabilizes Boron's empty orbital in BF₃, reducing its Lewis acidity."
    },
    {
      "question": "What is the shape of ClF₃ and XeF₂?",
      "answer": "Both have Steric Number 5 (sp³d). ClF₃ has 2 lone pairs giving a Bent T-shape; XeF₂ has 3 lone pairs giving a Linear shape."
    },
    {
      "question": "How can Mentskool help me retain Inorganic Chemistry exceptions?",
      "answer": "Mentskool IITian mentors provide curated active-recall sheets and weekly 1:1 mock error audits to lock NCERT exceptions into long-term memory."
    }
  ],
  "relatedGuides": [
    {
      "label": "JEE Main Chemistry Weightage",
      "href": "/jee-main-chemistry-chapter-wise-weightage-analysis",
      "tag": "Guide"
    },
    {
      "label": "Coordination Compounds Guide",
      "href": "/jee-main-coordination-compounds-scoring-guide",
      "tag": "Guide"
    },
    {
      "label": "Book Free Strategy Call (₹0)",
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
