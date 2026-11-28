import React from "react";
import type { Metadata } from "next";
import {
  EditorialGuideTemplate,
  EditorialGuideConfig,
} from "@/components/seo/EditorialGuideTemplate";

const config: EditorialGuideConfig = {
  "slug": "jee-advanced-optics-common-mistakes-and-shortcuts",
  "breadcrumbLabel": "JEE Advanced Optics Guide",
  "examFocus": "JEE",
  "metaTitle": "JEE Advanced Optics: Common Mistakes, Sign Shortcuts, Silvered Lenses & YDSE Traps",
  "metaDescription": "Master JEE Advanced Ray & Wave Optics without sign errors. Learn silvered lens power algebra, oblique incidence YDSE, thin-film phase shifts, and Newton's formula.",
  "keywords": [
    "JEE Advanced optics common mistakes",
    "silvered lens shortcut JEE",
    "YDSE oblique incidence JEE Advanced",
    "thin film interference phase shift JEE",
    "ray optics sign convention JEE"
  ],
  "h1": "JEE Advanced Optics: Sign Shortcuts, Silvered Lenses & Wave Traps",
  "readTime": "12 min read",
  "quickSummary": "Optics (Ray + Wave) contributes 8% to 12% of total marks in JEE Advanced and is famous for heartbreaking negative marks. Why? A single flipped sign in 1/v - 1/u = 1/f, a missed π phase shift upon denser-medium reflection, or a forgotten medium refractive index in YDSE completely ruins an otherwise brilliant derivation. Master the algebraic shortcuts that lock 100% accuracy.",
  "sections": [
    {
      "heading": "Executive Summary: Eliminating Sign Errors and Path-Difference Traps",
      "paragraphs": [
        "Unlike Rotational Mechanics, Optics requires very little physical intuition—once you set up the equations cleanly, it is pure geometry and algebra. Yet JEE Advanced candidates consistently underperform in Optics because they apply incomplete memorized shortcuts (like P = P₁ + P₂) outside their valid boundaries."
      ],
      "bullets": [
        {
          "lead": "Vector-Ray Sign Convention",
          "text": "Always define the direction of incident light as POSITIVE (+). Never substitute signs for unknown variables (like final v or R being solved)."
        },
        {
          "lead": "The Silvered Lens Power Formula",
          "text": "For a thin lens silvered on one face: P_eq = 2P_lens + P_mirror, where f_eq = -1 / P_eq (acting as a mirror)."
        },
        {
          "lead": "Curved Refraction & Apparent Depth",
          "text": "μ₂/v - μ₁/u = (μ₂ - μ₁)/R applies to EVERY curved interface; watch which medium holds the incident ray (μ₁) vs refracted ray (μ₂)."
        },
        {
          "lead": "YDSE Optical Path Difference",
          "text": "Inserting a glass slab of thickness t shifts fringes toward that slab by Δx = (μ - 1)t · D/d. In liquid (μ₀), replace μ with μ/μ₀!"
        },
        {
          "lead": "Denser-Medium Reflection = λ/2 Shift",
          "text": "In thin-film interference, reflecting off a higher refractive index adds an extra π phase (λ/2 path) jump, flipping bright and dark conditions."
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
            "Combined Optics Share",
            "8% - 12% Marks",
            "2 to 4 multi-concept questions across Papers 1 & 2"
          ],
          [
            "Top Ray Optics Trap",
            "Moving Mirrors/Lenses",
            "Relative velocity of image vs ground frame"
          ],
          [
            "Top Wave Optics Trap",
            "YDSE Medium / Slabs",
            "Optical path difference (μ-1)t & π phase jump"
          ],
          [
            "Power Shortcut",
            "P_eq = 2P_L + P_M",
            "Solves silvered lenses in 20 seconds"
          ]
        ]
      },
      "mustRead": {
        "label": "JEE Main Maths Chapter Weightage (2025–2027)",
        "href": "/jee-main-maths-chapter-wise-weightage-2025-2026-2027"
      }
    },
    {
      "heading": "Step-by-Step Action Roadmap for JEE Advanced Optics Guide",
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
            "Week 1 (Reflection & Refraction)",
            "Sign Convention & Curved Interfaces",
            "Master spherical mirror equations, Newton's formula (x₁x₂ = f²), image velocity differentiation, and multi-slab apparent depth.",
            "Lock incident-ray positive sign rule; Solve 20 moving mirror/object velocity Qs; Master μ₂/v - μ₁/u = (μ₂-μ₁)/R; Solve 15 multi-layer slab shift problems"
          ],
          [
            "Week 2 (Lenses, Prisms & Silvering)",
            "Thick Lenses, Silvered Surfaces & Prisms",
            "Master Lens Maker's formula with different media on left/right, silvered lenses, minimum deviation, and grazing emergence.",
            "Derive P_eq = 2P_L + P_M and verify signs; Solve different-media lens problems (μ₁ | μ₂ | μ₃); Master prism critical angle condition A > 2C; Solve 20 displacement method problems"
          ],
          [
            "Week 3 (Wave Optics - YDSE)",
            "Standard, Oblique & Slab-Shifted YDSE",
            "Master oblique incidence (d sinα + d sinθ), bichromatic coincidence, glass slabs, and YDSE submerged in liquid.",
            "Compute exact fringe shift (μ-1)t D/d; Solve 15 oblique-beam YDSE problems; Master Fresnel biprism & Lloyd's mirror; Verify large-angle sinθ ≠ tanθ cases"
          ],
          [
            "Week 4 (Thin Films & PYQs)",
            "Thin-Film Interference, Diffraction & PYQs",
            "Master Stokes' phase-shift rule in soap films and Newton's rings, single-slit diffraction, and 2016–2026 JEE Advanced papers.",
            "Master 0 vs π reflection phase jumps; Solve 15 anti-reflective coating Qs; Complete 2020-2026 Advanced Optics PYQs; Review error checklist with IITian mentor"
          ]
        ]
      }
    },
    {
      "heading": "Common Optics Traps vs Bulletproof Advanced Methods",
      "paragraphs": [
        "Fixing the exact algebraic blunders that cost JEE Advanced aspirants easy Optics marks"
      ],
      "table": {
        "caption": "Common Optics Traps vs Bulletproof Advanced Methods",
        "headers": [
          "Parameter / Aspect",
          "Standard / Common Approach",
          "Verified Benchmark / Mentskool Edge"
        ],
        "rows": [
          [
            "Silvered Lens Focal Length",
            "Uses 1/f = 1/f_L + 1/f_M (forgets double pass through lens)",
            "Applies P_eq = 2P_L + P_M with P_L = +1/f_L and P_M = -1/f_M"
          ],
          [
            "Image Velocity in Mirrors",
            "Uses v_im = -m² v_obj directly without frame check",
            "Applies (v_i - v_m) = -m² (v_o - v_m) relative to moving mirror"
          ],
          [
            "Lens with Different Media (μ1, μ2, μ3)",
            "Blindly uses 1/f = (μ-1)(1/R1 - 1/R2)",
            "Applies μ3/v - μ1/u = (μ2-μ1)/R1 + (μ3-μ2)/R2 directly"
          ],
          [
            "YDSE with Large Angular Screen",
            "Assumes y = nλD/d even when θ > 10°",
            "Uses exact d sinθ = nλ and y = D tanθ without small-angle approximation"
          ],
          [
            "YDSE Submerged in Liquid (μ₀)",
            "Keeps slab shift as (μ - 1)t",
            "Replaces optical path with (μ - μ₀)t and wavelength λ/μ₀"
          ],
          [
            "Lloyd's Mirror Central Fringe",
            "Assumes central fringe at zero geometric path is bright",
            "Grazing reflection adds π phase shift, making central fringe DARK"
          ],
          [
            "Thin-Film Interference",
            "Always uses 2μt cos r = nλ for constructive",
            "Checks both interfaces: 1 denser reflection flips condition to 2μt cos r = (n - ½)λ"
          ],
          [
            "Sign of Unknown Variable",
            "Manually puts negative sign in front of unknown 'v'",
            "Never puts signs on unknowns; lets algebra output the true sign"
          ]
        ]
      }
    },
    {
      "heading": "The Universal Sign Convention & Moving Mirror/Lens Velocity Trap",
      "paragraphs": [
        "Why relative-frame differentiation eliminates 100% of sign mistakes.",
        "Every single sign error in Ray Optics stems from two habits: failing to lock a coordinate origin at the pole/optical center, and inserting guessed minus signs into unknown variables.",
        "Follow this ironclad rule: draw the arrow of the INCIDENT ray first. That arrow's direction is ALWAYS the POSITIVE (+x) direction.",
        "Measure all distances (u, v, f, R) from the pole/optical center. Plug known values in with their signs, and leave EVERY unknown variable strictly positive symbolically—let the equation solve for its sign.",
        "When mirrors or lenses move with velocity v_m or v_L, NEVER apply v_image = -m² v_object blindly! Differentiating 1/v + 1/u = 1/f gives (dv/dt)/v² + (du/dt)/u² = 0, where u and v are measured RELATIVE to the mirror.",
        "Therefore, always write: (v_image - v_mirror) = -m² (v_object - v_mirror) along the principal axis for mirrors, and (v_image - v_lens) = +m² (v_object - v_lens) for thin lenses. Note the crucial sign difference: mirrors invert longitudinal velocity (-m²), whereas lenses preserve longitudinal velocity direction (+m²)!"
      ],
      "bullets": [
        {
          "lead": "Incident Ray = Positive",
          "text": "Always align +x along the incoming light ray, even after reflections reverse ray direction."
        },
        {
          "lead": "Mirror (-m²) vs Lens (+m²)",
          "text": "Longitudinal image velocity is -m² v_obj/mirror for mirrors, but +m² v_obj/lens for lenses."
        }
      ]
    },
    {
      "heading": "Silvered Lenses & Multi-Media Curved Surfaces",
      "paragraphs": [
        "Solving complex compound optical systems in 30 seconds without intermediate images.",
        "When one face of a thin lens is silvered, incoming light refracts through the lens, reflects off the curved silvered mirror, and refracts back out through the lens a second time—emerging back into the incident medium like a mirror.",
        "Instead of tracing 3 separate image formations, use the unified Power Algebra: P_eq = 2 P_lens + P_mirror. Here, define P_lens = +1/f_lens (positive for converging convex lens, negative for diverging concave) and P_mirror = -1/f_mirror (positive for converging concave mirror, negative for diverging convex).",
        "Compute P_eq = 2 P_lens + P_mirror. Since the combined system behaves as an equivalent mirror, its focal length is simply f_eq = -1 / P_eq!",
        "If P_eq > 0, f_eq is negative (behaves like a converging concave mirror); if P_eq < 0, behaves like a diverging convex mirror.",
        "What if a thin lens (μ₂) has air (μ₁ = 1) on the left and water (μ₃ = 4/3) on the right? You CANNOT use a single focal length f!",
        "Instead, add the two surface refraction equations directly to get the 1-line master formula: μ₃/v - μ₁/u = (μ₂ - μ₁)/R₁ + (μ₃ - μ₂)/R₂."
      ],
      "bullets": [
        {
          "lead": "Silvered Lens Power",
          "text": "P_eq = 2P_L + P_M (converging powers positive) immediately gives equivalent mirror f_eq = -1/P_eq."
        },
        {
          "lead": "Asymmetric Media Formula",
          "text": "When μ_left ≠ μ_right, use μ3/v - μ1/u = (μ2-μ1)/R1 + (μ3-μ2)/R2 directly."
        }
      ],
      "mustRead": {
        "label": "Best Mentorship Program for JEE (Mains & Advanced)",
        "href": "/best-jee-mentorship"
      }
    },
    {
      "heading": "Prisms: Critical Angle, Grazing Incidence & Dispersion-Without-Deviation",
      "paragraphs": [
        "Mastering angle bounds and internal total reflection limits.",
        "In prism problems, four equations govern everything: r₁ + r₂ = A, δ = i + e - A, sin i = μ sin r₁, and μ sin r₂ = sin e. The most common JEE Advanced twist is asking for the condition where NO ray emerges from the second face regardless of incidence angle i.",
        "Even at grazing incidence (i = 90°), r₁ reaches its maximum possible value equal to the critical angle C (where sin C = 1/μ). For the ray to undergo Total Internal Reflection at the second face for ALL incidence angles, we need r₂ > C, which requires A - r₁ > C, or A > 2C!",
        "Conversely, for a ray to emerge at some angle i, we need A < 2C. If C < A < 2C, rays emerge only when the angle of incidence exceeds a minimum threshold i_min.",
        "For two thin prisms combined for 'deviation without dispersion', equate angular dispersions: (μ_v1 - μ_r1)A₁ + (μ_v2 - μ_r2)A₂ = 0 (opposite apex directions). For 'dispersion without deviation', equate mean deviations: (μ₁ - 1)A₁ + (μ₂ - 1)A₂ = 0."
      ],
      "bullets": [
        {
          "lead": "No-Emergence Bound",
          "text": "If prism angle A > 2θ_c, zero light can ever exit the second face for any incidence angle."
        },
        {
          "lead": "Grazing Limit",
          "text": "Minimum incidence angle i_min corresponds to grazing emergence e = 90° (r2 = θ_c)."
        }
      ]
    },
    {
      "heading": "YDSE Traps: Oblique Incidence, Glass Slabs & Submerged Setups",
      "paragraphs": [
        "Handling optical path differences accurately when geometry tilts.",
        "In a standard Young's Double Slit Experiment (YDSE), path difference is Δx = d sinθ ≈ dy/D. JEE Advanced routinely breaks three standard assumptions to test deeper understanding.",
        "First, Oblique Incidence: if the incoming plane wavefront hits the slits at angle α above the horizontal, the lower slit receives the wave earlier/later by d sinα. Total path difference at angle θ on the screen becomes Δx = d sinα ± d sinθ (depending on whether θ is on the same or opposite side of the central axis).",
        "Check where Δx = 0 to locate the shifted Central Maximum!",
        "Second, Glass Slab Insertion: placing a thin transparent slab of thickness t and refractive index μ in front of the upper slit adds an extra optical path (μ - 1)t to the upper ray. The entire interference pattern shifts TOWARD the slab by Δy = (μ - 1)t · D / d.",
        "Third, Submerged YDSE: if the entire apparatus is immersed in a liquid of refractive index μ₀, the wavelength drops to λ' = λ / μ₀ (shrinking fringe width β' = β / μ₀). And if a slab of index μ sits inside that liquid, the slab's extra optical path is (μ - μ₀)t, NOT (μ - 1)t!"
      ],
      "bullets": [
        {
          "lead": "Shift Toward Slab",
          "text": "Inserting a transparent slab shifts the central maximum toward the covered slit by (μ-1)t D/d."
        },
        {
          "lead": "Liquid Medium Adjustment",
          "text": "In liquid μ₀, wavelength becomes λ/μ₀ and slab optical difference becomes (μ - μ₀)t."
        }
      ]
    },
    {
      "heading": "Thin-Film Interference & The Stokes π Phase-Jump Rule",
      "paragraphs": [
        "Why soap bubbles look dark at zero thickness and anti-reflective coatings work.",
        "Whenever a light wave reflects off a boundary going from a RARER to a DENSER medium (n₁ < n₂), it undergoes an abrupt phase inversion of π radians—equivalent to adding an extra path difference of λ/2. Reflection off a rarer medium (n₁ > n₂) or transmission NEVER causes a phase jump.",
        "Consider a soap film (n = 1.33) in air (n = 1.0). Ray 1 reflects off the front air-soap interface (rarer to denser → +λ/2 jump).",
        "Ray 2 transmits into the film, reflects off the back soap-air interface (denser to rarer → 0 jump), and exits. Total path difference = 2μt cos r + λ/2.",
        "Therefore, Constructive interference (bright reflection) requires 2μt cos r = (n - ½)λ, while Destructive interference (dark reflection) requires 2μt cos r = nλ! This explains why an ultra-thin soap film (t → 0) appears completely black in reflected light.",
        "For an anti-reflective coating (e.g., MgF₂ with n = 1.38) on glass (n = 1.5), BOTH reflections (air→MgF₂ and MgF₂→glass) are rarer-to-denser! Both rays receive a π phase jump, so the two jumps cancel out—returning the destructive reflection condition to 2μt = λ/2, or minimum thickness t = λ / (4μ)."
      ],
      "bullets": [
        {
          "lead": "Count Denser Reflections",
          "text": "0 or 2 denser reflections cancel out; 1 denser reflection adds λ/2 and flips bright/dark formulas."
        },
        {
          "lead": "Quarter-Wave Coating",
          "text": "When n_air < n_coat < n_glass, minimum non-reflective thickness is λ / (4 n_coat)."
        }
      ]
    },
    {
      "heading": "Large-Angle YDSE & Circular Fringes on Perpendicular Screens",
      "paragraphs": [
        "Counting total maxima when D is comparable to d.",
        "Many JEE Advanced questions set slit separation d = 3λ or 5λ and ask: 'How many total bright fringes are formed on an infinitely large screen?' Here, the small-angle approximation sinθ ≈ tanθ ≈ y/D is completely invalid!",
        "You must use the exact condition: d sinθ = nλ. Since |sinθ| ≤ 1, the maximum integer order n_max is simply the floor of (d / λ).",
        "Notice whether the screen goes to infinity: at sinθ = 1 (θ = 90°), light runs parallel to the screen and doesn't actually hit a finite-distance screen at finite y, so strictly |sinθ| < 1.",
        "For example, if d = 3.5λ, valid integer n values are -3, -2, -1, 0, +1, +2, +3, giving 7 total maxima. If d = 3λ exactly, n = ±3 lies at θ = ±90° (at infinity), leaving 5 maxima on a flat screen.",
        "If the screen is placed perpendicular to the line joining the two point sources (end-on configuration), the path difference is d cosθ = nλ, producing circular concentric fringes around the source axis!"
      ],
      "bullets": [
        {
          "lead": "Drop Small-Angle Approx",
          "text": "When counting total fringes for d ~ few λ, always use exact |d sinθ| < d rather than y = nλD/d."
        },
        {
          "lead": "End-On Circular Fringes",
          "text": "When slits are aligned along the screen normal, path difference is d cosθ, forming circular rings."
        }
      ]
    },
    {
      "heading": "Exam Execution: Keeping Optics 100% Error-Free",
      "paragraphs": [
        "A 3-step verification protocol for Ray and Wave Optics.",
        "Optics is one of the cleanest scoring opportunities in JEE Advanced because every problem can be visually verified with a rough ray diagram.",
        "First, sketch the physical setup and trace one qualitative ray (e.g., 'real object in front of convex lens outside 2f must form a real inverted image between f and 2f'). If your algebra returns a positive or negative v that contradicts your sketch, catch the sign mistake immediately.",
        "Second, in Wave Optics, always check whether the question asks for Intensity in REFLECTED light or TRANSMITTED light—energy conservation requires that bright reflection corresponds to dark transmission.",
        "Third, connect 1:1 with an IITian mentor on Mentskool to run mock test audits on your Ray & Wave Optics mistakes and lock in effortless 90%+ accuracy."
      ],
      "bullets": [
        {
          "lead": "Qualitative Ray Check",
          "text": "Verify your calculated image position (real/virtual, magnified/diminished) against standard ray tracing."
        },
        {
          "lead": "Reflected vs Transmitted",
          "text": "Check whether the thin-film prompt asks for reflected or transmitted intensity."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in JEE Advanced Optics Guide",
      "paragraphs": [
        "How top IITians eliminate preventable -1 errors under strict 180-minute pressure.",
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling JEE Advanced Optics Guide, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins.",
        "Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in JEE Advanced Optics Guide, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
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
    }
  ],
  "faqs": [
    {
      "question": "What is the equivalent focal length of a thin lens silvered on one face?",
      "answer": "Use P_eq = 2P_lens + P_mirror (treating converging powers as positive), then f_eq = -1 / P_eq. The system acts as an equivalent mirror."
    },
    {
      "question": "Why does my mirror velocity formula give the wrong answer when the mirror moves?",
      "answer": "Because 1/v + 1/u = 1/f is measured relative to the mirror. You must use (v_image - v_mirror) = -m² (v_object - v_mirror)."
    },
    {
      "question": "How does a glass slab affect YDSE fringes?",
      "answer": "Inserting a slab of thickness t and refractive index μ in front of one slit shifts the entire fringe pattern toward that slab by Δy = (μ - 1)t · D / d without changing fringe width."
    },
    {
      "question": "What happens to YDSE fringe width when the setup is immersed in water?",
      "answer": "Wavelength shrinks to λ/μ_water, so the fringe width shrinks proportionally to β_water = β_air / μ_water."
    },
    {
      "question": "Why is the central fringe dark in Lloyd's mirror experiment?",
      "answer": "The reflected ray undergoes grazing reflection off a denser mirror surface, adding a π phase shift (λ/2 path difference) even at zero geometrical path difference."
    },
    {
      "question": "When does a ray fail to emerge from a prism for any angle of incidence?",
      "answer": "When the prism's apex angle A is greater than twice the critical angle (A > 2θ_c), total internal reflection occurs at the second face for all incidence angles."
    },
    {
      "question": "Can I use small-angle approximation (sinθ ≈ y/D) to count total maxima on a screen?",
      "answer": "No! To count total maxima when d is small (e.g., d = 4λ), use the exact bound |d sinθ| < d, meaning n_max < d/λ."
    },
    {
      "question": "How do you handle a lens with different media on its left and right sides?",
      "answer": "You cannot use a single focal length f. Apply μ₃/v - μ₁/u = (μ₂ - μ₁)/R₁ + (μ₃ - μ₂)/R₂ directly."
    },
    {
      "question": "Does a reflection off a rarer medium cause a π phase shift?",
      "answer": "No. Only reflection from a rarer to a denser medium (n_1 < n_2) causes a π phase jump (λ/2 optical path)."
    },
    {
      "question": "How can Mentskool help me avoid sign mistakes in JEE Advanced Optics?",
      "answer": "Mentskool IITian mentors review your rough sheets 1-on-1, training you on incident-ray coordinate locking and fast algebraic verification."
    }
  ],
  "relatedGuides": [
    {
      "label": "JEE Advanced 7-Year Analysis",
      "href": "/jee-advanced-topic-wise-analysis-2020-to-2026",
      "tag": "Guide"
    },
    {
      "label": "Electrostatics & Gauss's Law",
      "href": "/jee-advanced-electrostatics-gauss-law-applications",
      "tag": "Guide"
    },
    {
      "label": "Claim Free Strategy Call (₹0)",
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
