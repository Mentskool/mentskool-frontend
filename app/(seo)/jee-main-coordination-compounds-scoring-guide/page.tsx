import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-main-coordination-compounds-scoring-guide",
  "breadcrumbLabel": "Coordination Compounds Guide",
  "examFocus": "JEE",
  "metaTitle": "JEE Main Coordination Compounds Scoring Guide: CFT, Isomerism, VBT & Synergic Bonding",
  "metaDescription": "Score 100% in JEE Main Coordination Compounds (8–12 marks). Master Crystal Field Splitting (CFSE), strong/weak ligand exceptions, geometrical/optical isomerism counts, and metal carbonyls.",
  "keywords": [
    "JEE Main coordination compounds scoring guide",
    "crystal field theory CFSE JEE",
    "optical geometrical isomerism coordination",
    "metal carbonyl synergic bonding JEE",
    "coordination chemistry shortcuts"
  ],
  "h1": "Coordination Compounds: CFSE, Isomerism & Synergic Bonding Scoring Guide",
  "readTime": "12 min read",
  "quickSummary": "Coordination Compounds is the highest-ROI chapter in Inorganic Chemistry for JEE Main, contributing 2 to 3 questions (8–12 marks) in nearly every single shift. Unlike broad descriptive chapters, Coordination Compounds is completely logical and rule-based: once you master spectrochemical pairing thresholds, stereoisomer counting matrices, and CFSE calculations, you can lock 12/12 marks in under 2 minutes.",
  "sections": [
    {
      "heading": "Executive Summary: Mastering the 4 Pillars of Coordination Chemistry",
      "paragraphs": [
        "NTA's JEE Main question bank for Coordination Compounds revolves around four predictable pillars: (1) Hybridization & Magnetic Moment (spin-only BM), (2) Crystal Field Splitting Energy (CFSE) in Octahedral vs Tetrahedral complexes, (3) Stereoisomerism counts (Geometrical + Optical), and (4) Synergic π-backbonding in Metal Carbonyls."
      ],
      "bullets": [
        {
          "lead": "Pairing Exceptions (Co³⁺ & 4d/5d Metals)",
          "text": "ALL ligands act as strong field (low spin) with 4d/5d metals (Pt, Pd, Ir, Rh); Co³⁺ pairs even with H₂O and C₂O₄²⁻ (except CoF₆³⁻)!"
        },
        {
          "lead": "Octahedral vs Tetrahedral Splitting",
          "text": "Δ_t = (4/9) Δ_o; because Δ_t < P always, tetrahedral complexes are virtually ALWAYS high spin!"
        },
        {
          "lead": "The Isomerism Counting Matrix",
          "text": "Never draw 3D octahedra under exam pressure—memorize exact GI and OI counts for Ma₄b₂, Ma₃b₃, M(AA)₂b₂, and M(AB)₃."
        },
        {
          "lead": "Synergic Bonding in Carbonyls",
          "text": "Higher negative charge on metal → stronger M→C π-backbonding → stronger M-C bond, WEAKER C≡O bond (longer C-O length)."
        },
        {
          "lead": "Color & Spectrochemical Order",
          "text": "Stronger ligand → larger Δ_o → shorter wavelength absorbed (λ) → higher frequency absorbed!"
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
            "JEE Main Weightage",
            "8 - 12 Marks",
            "2-3 direct MCQs in every single shift"
          ],
          [
            "Top Tested Topic",
            "CFT & Magnetic Moment",
            "μ = √(n(n+2)) BM & CFSE calculations"
          ],
          [
            "Key Exception",
            "Co³⁺ + H₂O / C₂O₄²⁻",
            "Acts as STRONG field ligand with Co³⁺!"
          ],
          [
            "Target Accuracy",
            "100%",
            "Purely rule-based, minimal rote memory"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Maths Chapter Weightage (2025–2027)",
        "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027"
      }
    },
    {
      "heading": "Step-by-Step Action Roadmap for Coordination Compounds Guide",
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
            "Day 1 (Nomenclature & EAN)",
            "IUPAC Naming, Werner's Theory & EAN",
            "Master primary/secondary valency, AgNO₃ precipitation counts, IUPAC alphabetical naming rules, and Effective Atomic Number (EAN).",
            "Solve 15 AgNO₃ ion-count PYQs; Master IUPAC '-ate' anionic complex suffixes; Compute EAN = Z - OS + 2(CN); Verify ambidentate linkage ligands (NO₂⁻, SCN⁻)"
          ],
          [
            "Day 2 (VBT & CFT)",
            "Hybridization, CFSE & Magnetic Moment",
            "Master spectrochemical series, d-orbital splitting (t2g vs eg), pairing energy P, and Jahn-Teller distortion (d⁹, high-spin d⁴).",
            "Memorize Co³⁺, Ni²⁺, Cu²⁺ pairing exceptions; Compute CFSE = (-0.4 n_t2g + 0.6 n_eg)Δ_o; Master μ = √(n(n+2)) BM spin-only values; Verify [NiCl₄]²⁻ tetrahedral vs [Ni(CN)₄]²⁻ square planar"
          ],
          [
            "Day 3 (Isomerism Matrix)",
            "Geometrical & Optical Isomerism Counts",
            "Master 2-letter pairing notation for counting geometrical and optical isomers in CN=4 and CN=6 complexes.",
            "Memorize Ma₄b₂ (2 GI), Ma₃b₃ (2 GI: fac/mer); Master M(AA)₂b₂ (2 GI, cis is optically active = 3 total); Verify square planar complexes have ZERO OI; Solve 25 isomerism counting PYQs"
          ],
          [
            "Day 4 (Carbonyls & PYQs)",
            "Metal Carbonyls, Organometallics & Drills",
            "Master synergic bonding bond-length trends, bridged Fe₂(CO)₉ / Co₂(CO)₈ structures, and 2020–2026 JEE Main PYQs.",
            "Rank C-O bond length across [V(CO)₆]⁻ to [Mn(CO)₆]⁺; Memorize Ziegler-Natta, Wilkinson & Cisplatin; Solve 30 recent Coordination PYQs; Review exception card with mentor"
          ]
        ]
      }
    },
    {
      "heading": "Common Coordination Chemistry Traps vs Verified Rules",
      "paragraphs": [
        "Avoiding the ligand-pairing and isomerism mistakes that appear in every JEE Main shift"
      ],
      "table": {
        "caption": "Common Coordination Chemistry Traps vs Verified Rules",
        "headers": [
          "Parameter / Aspect",
          "Standard / Common Approach",
          "Verified Benchmark / Mentskool Edge"
        ],
        "rows": [
          [
            "[Co(H₂O)₆]³⁺ & [Co(C₂O₄)₃]³⁻",
            "Treats H₂O and C₂O₄²⁻ as weak field → predicts paramagnetic",
            "Co³⁺ pairs with H₂O and oxalate → d²sp³ diamagnetic (only [CoF₆]³⁻ is high spin!)"
          ],
          [
            "4d & 5d Metal Complexes (Pt²⁺, Pd²⁺)",
            "Checks weak Cl⁻/Br⁻ and predicts tetrahedral sp³",
            "4d/5d metals have huge Δ_o → ALL ligands act strong field ([PtCl₄]²⁻ is dsp² square planar)"
          ],
          [
            "[Cu(NH₃)₄]²⁺ Hybridization",
            "Promotes d⁹ electron to 4p, claiming dsp²",
            "Square planar dsp², with unpaired e⁻ in d_x²-y² or promoted (paramagnetic, μ ≈ 1.73 BM)"
          ],
          [
            "Tetrahedral Complexes (e.g., [FeCl₄]⁻)",
            "Looks for pairing energy P < Δ_t",
            "Δ_t = (4/9)Δ_o is ALWAYS smaller than P → tetrahedral is virtually ALWAYS high spin"
          ],
          [
            "[Ni(CO)₄] vs [Ni(CN)₄]²⁻",
            "Marks both as dsp² square planar because both have strong ligands",
            "In Ni(CO)₄, Ni is 0 oxidation state (3d⁸4s² → 3d¹⁰) → sp³ TETRAHEDRAL!"
          ],
          [
            "CO Bond Strength in [Fe(CO)₄]²⁻",
            "Assumes higher negative charge strengthens C≡O",
            "More negative metal donates MORE into CO π* antibonding → WEAKER, LONGER C-O bond"
          ],
          [
            "Optical Isomerism in [Pt(NH₃)₂Cl₂]",
            "Checks cis-isomer for chirality",
            "Square planar molecules have the molecular plane as a Plane of Symmetry → ZERO optical activity"
          ],
          [
            "Color Absorption vs Observed",
            "Assumes complex is the color of wavelength absorbed",
            "Observed color is COMPLEMENTARY to absorbed color (stronger ligand = shorter λ absorbed)"
          ]
        ]
      }
    },
    {
      "heading": "1. Ligand Strength & The 4 Pairing Exceptions You Must Know",
      "paragraphs": [
        "Predicting inner-orbital (d²sp³) vs outer-orbital (sp³d²) with 100% accuracy.",
        "In the Spectrochemical Series, ligands increase Δ_o roughly in order: I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO. Halides up to H₂O are generally weak-field (high spin), while NH₃, en, CN⁻, and CO are strong-field (low spin).",
        "However, JEE Main loves testing four exact exceptions where pairing switches unexpectedly:",
        "(1) Co³⁺ (3d⁶): High +3 charge increases Δ_o so much that H₂O and C₂O₄²⁻ pair up electrons! Both [Co(H₂O)₆]³⁺ and [Co(C₂O₄)₃]³⁻ are d²sp³ DIAMAGNETIC.",
        "Only halides like [CoF₆]³⁻ remain sp³d² paramagnetic!",
        "(2) Fe³⁺ (3d⁵) and Mn²⁺ (3d⁵): With H₂O and NH₃, they stay high-spin (5 unpaired electrons). Only CN⁻ and CO pair them up! (3) Ni²⁺ (3d⁸) in CN=4: [NiCl₄]²⁻ is sp³ tetrahedral (2 unpaired), [Ni(CN)₄]²⁻ is dsp² square planar (0 unpaired), and [Ni(CO)₄] (Ni⁰, 3d¹⁰) is sp³ tetrahedral (0 unpaired)! (4) ALL 4d and 5d metals (Pd, Pt, Rh, Ir) are ALWAYS low-spin even with Cl⁻."
      ],
      "bullets": [
        {
          "lead": "Co³⁺ + H₂O/Oxalate = Paired",
          "text": "[Co(H₂O)₆]³⁺ and [Co(C₂O₄)₃]³⁻ are both diamagnetic (n = 0)."
        },
        {
          "lead": "[Ni(CO)₄] is Tetrahedral",
          "text": "Because Ni has 0 oxidation state (3d¹⁰), [Ni(CO)₄] uses sp³ hybridization, NOT dsp²."
        }
      ]
    },
    {
      "heading": "2. Crystal Field Splitting Energy (CFSE) & Color Wavelengths",
      "paragraphs": [
        "Calculating Δ_o, Δ_t, and pairing energy terms cleanly.",
        "In an octahedral field, the five d-orbitals split into three lower-energy t₂g orbitals (-0.4 Δ_o each) and two higher-energy e_g orbitals (+0.6 Δ_o each). Thus: CFSE = (-0.4 × n_t2g + 0.6 × n_eg) Δ_o + (extra paired electrons) × P.",
        "Wait: when do you add '+ m P' (pairing energy)? Only count the NEW pairs forced by strong-field splitting that did NOT exist in the free gaseous ion!",
        "For example, low-spin d⁶ (t₂g⁶ e_g⁰) has 3 pairs, whereas free d⁶ has 1 pair → add +2P (CFSE = -2.4 Δ_o + 2P). High-spin d⁵ (t₂g³ e_g²) has CFSE = 0!",
        "In a tetrahedral field, the splitting inverts: two lower e orbitals (-0.6 Δ_t each) and three upper t₂ orbitals (+0.4 Δ_t each), with Δ_t = (4/9) Δ_o.",
        "For color questions: a complex absorbs photon energy Δ_o = hc / λ. Stronger ligand → larger Δ_o → smaller wavelength λ absorbed!",
        "Remember d⁰ (Ti⁴⁺, Sc³⁺) and d¹⁰ (Zn²⁺, Cu⁺) complexes are typically colorless due to zero d-d transitions (exceptions like MnO₄⁻ and Cr₂O₇²⁻ are colored due to Ligand-to-Metal Charge Transfer, LMCT!)."
      ],
      "bullets": [
        {
          "lead": "Count Only Forced Pairs",
          "text": "Add +mP only for pairs created above the free-ion Hund's rule count."
        },
        {
          "lead": "Charge Transfer Exception",
          "text": "MnO₄⁻ (Mn⁷⁺, d⁰) and Cr₂O₇²⁻ (Cr⁶⁺, d⁰) are intensely colored via LMCT, not d-d transitions."
        }
      ],
      "mustRead": {
        "label": "Best Mentorship Program for JEE (Mains & Advanced)",
        "href": "/best-jee-mentorship"
      }
    },
    {
      "heading": "3. The 10-Second Stereoisomerism Counting Matrix",
      "paragraphs": [
        "Counting Geometrical (GI) and Optical (OI) isomers without 3D sketching errors.",
        "Instead of sketching 3D octahedra and guessing mirror planes during the exam, use the 'Pairing Method': group the 6 monodentate ligands into 3 opposite (trans) pairs!",
        "For example, in Ma₄b₂: pairs can be (aa)(aa)(bb) or (aa)(ab)(ab) → 2 Geometrical Isomers (cis & trans), 0 Optical Isomers (total 2 stereoisomers). In Ma₃b₃: (aa)(ab)(bb) [meridional] and (ab)(ab)(ab) [facial] → 2 GI, 0 OI.",
        "For bidentate symmetrical ligands (AA, like ethylenediamine 'en'): M(AA)₃ (e.g., [Co(en)₃]³⁺) has 0 GI, but is optically active (d & l pair = 2 stereoisomers). M(AA)₂b₂ has 2 GI: trans is optically inactive, while cis is optically active (d & l), giving 3 total stereoisomers!",
        "M(AA)₂ab also has 2 GI and cis is optically active (3 stereoisomers).",
        "For unsymmetrical bidentate ligands M(AB)₃ (like [Co(gly)₃]): 2 GI (fac and mer), and BOTH fac and mer lack planes of symmetry—making all 4 forms (2 d + 2 l) optically active (4 total stereoisomers)!"
      ],
      "bullets": [
        {
          "lead": "M(AA)₂b₂ = 3 Stereoisomers",
          "text": "Trans is inactive; cis exists as a d/l enantiomeric pair."
        },
        {
          "lead": "M(AB)₃ = 4 Stereoisomers",
          "text": "Both facial and meridional isomers of [Co(gly)₃] are optically active."
        }
      ]
    },
    {
      "heading": "4. Metal Carbonyls & Synergic π-Backbonding",
      "paragraphs": [
        "Linking oxidation state to C-O bond length and IR stretching frequency.",
        "In metal carbonyls like [Ni(CO)₄], [Fe(CO)₅], and [Cr(CO)₆], bonding works via a two-way synergic mechanism: (1) CO donates a lone pair from Carbon into an empty metal d/s/p hybrid orbital (forming a M←C σ-bond), and (2) the filled metal d-orbital donates electron density back into CO's empty π* ANTIBONDING molecular orbital (forming a M→C π-bond).",
        "Because back-donation populates the π* ANTIBONDING orbital of CO, stronger back-bonding simultaneously STRENGTHENS the M-C bond (shorter M-C length) and WEAKENS the C≡O bond (longer C-O length, lower IR stretching frequency)!",
        "Therefore, when comparing an isoelectronic series like [V(CO)₆]⁻, [Cr(CO)₆], and [Mn(CO)₆]⁺: higher negative charge on the metal pushes MORE electron density into CO π*. Thus [V(CO)₆]⁻ has the LONGEST (weakest) C-O bond and SHORTEST (strongest) M-C bond, while [Mn(CO)₆]⁺ has the SHORTEST (strongest) C-O bond!",
        "Also remember bridged carbonyl structures: Fe₂(CO)₉ has 3 bridging COs and 1 Fe-Fe bond; Co₂(CO)₈ has 2 bridging COs and 1 Co-Co bond; Mn₂(CO)₁₀ has ZERO bridging COs and 1 Mn-Mn bond."
      ],
      "bullets": [
        {
          "lead": "Inverse M-C vs C-O Trend",
          "text": "More negative charge on metal → stronger M-C bond, weaker/longer C-O bond."
        },
        {
          "lead": "Mn₂(CO)₁₀ Has Zero Bridges",
          "text": "Mn₂(CO)₁₀ consists solely of two Mn(CO)₅ units joined by a direct Mn-Mn bond."
        }
      ]
    },
    {
      "heading": "5. Stability Constant, Chelate Effect & NCERT Applications",
      "paragraphs": [
        "Why polydentate ligands and macrocycles dominate biological & industrial complexes.",
        "Complexes containing chelating (ring-forming) ligands like ethylenediamine (en) or EDTA⁴⁻ are orders of magnitude more stable than analogous complexes with monodentate NH₃. This 'Chelate Effect' is driven primarily by a large positive ENTROPY change (ΔS > 0): replacing 6 monodentate H₂O molecules with 3 'en' molecules increases the total number of free particles in solution from 4 to 7!",
        "5- and 6-membered chelate rings are the most stable; highly strained 4-membered rings (like carbonate CO₃²⁻) are much less stable.",
        "Review NCERT's high-frequency real-world applications: Cisplatin cis-[Pt(NH₃)₂Cl₂] for chemotherapy (note: ONLY the cis isomer is active, trans is inactive!), EDTA⁴⁻ for water hardness (Ca²⁺/Mg²⁺) and lead poisoning, DMG (dimethylglyoxime) forming a rosy-red square planar complex with Ni²⁺ stabilized by H-bonding, and Wilkinson's catalyst [Rh(PPh₃)₃Cl] for alkene hydrogenation."
      ],
      "bullets": [
        {
          "lead": "Entropy Drives Chelation",
          "text": "Releasing multiple monodentate ligands boosts ΔS_sys > 0, stabilizing chelate complexes."
        },
        {
          "lead": "Cis-Platin Specificity",
          "text": "Only cis-[Pt(NH₃)₂Cl₂] is an effective anti-cancer agent; trans-platin is inactive."
        }
      ]
    },
    {
      "heading": "Exam Execution: Locking 12/12 Marks in Inorganic Chemistry",
      "paragraphs": [
        "A quick verification routine before clicking Save & Next.",
        "Before finalizing any Coordination Compounds answer, run a 5-second oxidation-state check: neutral ligands (NH₃, H₂O, CO, en, PPh₃) contribute 0, while NO⁺ in Brown Ring Complex [Fe(H₂O)₅(NO)]SO₄ makes Iron +1 (3d⁷, 3 unpaired electrons, μ = 3.87 BM)!",
        "Never confuse Coordination Number with number of ligands! In [Co(en)₃]³⁺, there are 3 bidentate ligands, so the Coordination Number is 6 (Octahedral), NOT 3.",
        "In IUPAC naming, watch the metal suffix: if the complex sphere is cationic or neutral, use the standard English name (cobalt, iron); if the complex sphere is ANIONIC (e.g., K₄[Fe(CN)₆]), change the metal to '-ate' (ferrate, cobaltate, platinate).",
        "Need structured weekly Chemistry target sheets and active recall audits? Book a free 1:1 strategy call with a Mentskool IITian mentor."
      ],
      "bullets": [
        {
          "lead": "Brown Ring Iron = Fe⁺",
          "text": "In [Fe(H₂O)₅NO]SO₄, NO exists as NO⁺, leaving Fe in +1 oxidation state with 3 unpaired electrons."
        },
        {
          "lead": "CN Counts Donor Atoms",
          "text": "Multiply ligand count by denticity (en=2, ox=2, edta=6) to get true Coordination Number."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in Coordination Compounds Guide",
      "paragraphs": [
        "How top IITians eliminate preventable -1 errors under strict 180-minute pressure.",
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling Coordination Compounds Guide, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins.",
        "Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in Coordination Compounds Guide, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
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
      "heading": "Active PYQ Practice & Spaced Revision Blueprint for Coordination Compounds Guide",
      "paragraphs": [
        "Building permanent speed and pattern recognition without burnout.",
        "Simply watching solution videos or reading solved examples creates an illusion of competence that collapses in the actual NTA CBT interface. True mastery of Coordination Compounds Guide comes from timed, unaided problem solving using official 2019–2026 JEE Main and Advanced PYQs.",
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
      "question": "How many questions come from Coordination Compounds in JEE Main?",
      "answer": "Coordination Compounds consistently yields 2 to 3 questions (8 to 12 marks) in almost every JEE Main shift."
    },
    {
      "question": "Is [Co(H₂O)₆]³⁺ paramagnetic or diamagnetic?",
      "answer": "It is diamagnetic! Due to Co's +3 oxidation state, H₂O acts as a strong-field ligand, pairing all 6 d-electrons into t₂g⁶ (d²sp³ hybridization, 0 unpaired electrons)."
    },
    {
      "question": "Why is [Ni(CO)₄] tetrahedral while [Ni(CN)₄]²⁻ is square planar?",
      "answer": "In [Ni(CO)₄], Nickel is in 0 oxidation state (3d¹⁰), leaving no empty inner 3d orbital, forcing sp³ tetrahedral geometry. In [Ni(CN)₄]²⁻, Ni²⁺ is 3d⁸, which pairs up to free one 3d orbital for dsp² square planar."
    },
    {
      "question": "How many total stereoisomers does [Co(en)₂Cl₂]⁺ have?",
      "answer": "3 stereoisomers: 1 trans isomer (optically inactive) and 2 optical enantiomers (d and l) of the cis isomer."
    },
    {
      "question": "Which has the longest C-O bond: [V(CO)₆]⁻, [Cr(CO)₆], or [Mn(CO)₆]⁺?",
      "answer": "[V(CO)₆]⁻ has the longest (weakest) C-O bond because its negative charge drives maximum π-backbonding into CO's π* antibonding orbital."
    },
    {
      "question": "Why are tetrahedral complexes almost always high spin?",
      "answer": "Because tetrahedral splitting Δ_t = (4/9) Δ_o is always smaller than the electron pairing energy P, making it easier for electrons to occupy upper t₂ orbitals."
    },
    {
      "question": "What is the oxidation state of Iron in the Brown Ring complex [Fe(H₂O)₅NO]SO₄?",
      "answer": "Iron is in the +1 oxidation state (3d⁷), because NO coordinates as a nitrosyl cation (NO⁺), leaving 3 unpaired electrons (μ = 3.87 BM)."
    },
    {
      "question": "Do square planar complexes show optical isomerism?",
      "answer": "Generally no (unless ligands themselves are chiral), because the flat molecular plane acts as a plane of symmetry."
    },
    {
      "question": "Why are MnO₄⁻ and Cr₂O₇²⁻ intensely colored despite having d⁰ configuration?",
      "answer": "Their color arises from Ligand-to-Metal Charge Transfer (LMCT) transitions from oxygen lone pairs to empty metal d-orbitals, not d-d transitions."
    },
    {
      "question": "How can Mentskool mentors help me master Inorganic Chemistry?",
      "answer": "Mentskool IITian mentors provide structured weekly exception drills and review your mock test mistakes 1-on-1 to turn Inorganic Chemistry into a 100% accuracy section."
    }
  ],
  "relatedGuides": [
    {
      "label": "JEE Main Chemistry Weightage",
      "href": "/jee-main-chemistry-chapter-wise-weightage-analysis",
      "tag": "Guide"
    },
    {
      "label": "Chemical Bonding Pattern",
      "href": "/jee-main-chemical-bonding-mcq-pattern-analysis",
      "tag": "Guide"
    },
    {
      "label": "Find Your IITian Mentor",
      "href": "/mentors",
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
