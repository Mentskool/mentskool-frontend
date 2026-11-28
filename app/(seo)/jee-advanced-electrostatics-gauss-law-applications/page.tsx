import React from "react";
import type { Metadata } from "next";
import {
  BookCallPageTemplate,
  BookCallPageConfig,
} from "@/components/seo/BookCallPageTemplate";

export const metadata: Metadata = {
  title: "JEE Advanced Electrostatics: Gauss's Law, Cavity Charges & Self-Energy Applications",
  description: "Master JEE Advanced Electrostatics: non-uniform charge densities, eccentric spherical cavities, Gauss law symmetry limits, dipole torque, and electrostatic self-energy.",
  keywords: ["JEE Advanced electrostatics Gauss law", "spherical cavity electric field JEE", "non uniform charge density Gauss law", "electrostatic self energy sphere JEE", "electrostatics JEE Advanced problems"],
  alternates: {
    canonical: "https://mentskool.com/jee-advanced-electrostatics-gauss-law-applications",
  },
  openGraph: {
    title: "JEE Advanced Electrostatics: Gauss's Law, Cavity Charges & Self-Energy Applications",
    description: "Master JEE Advanced Electrostatics: non-uniform charge densities, eccentric spherical cavities, Gauss law symmetry limits, dipole torque, and electrostatic self-energy.",
    url: "https://mentskool.com/jee-advanced-electrostatics-gauss-law-applications",
    siteName: "Mentskool",
    images: [
      {
        url: "https://mentskool.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Gauss Law & Electrostatics JEE",
      },
    ],
  },
};

const config: BookCallPageConfig = {
  "slug": "jee-advanced-electrostatics-gauss-law-applications",
  "breadcrumbLabel": "Gauss Law & Electrostatics JEE",
  "examFocus": "JEE",
  "metaTitle": "JEE Advanced Electrostatics: Gauss's Law, Cavity Charges & Self-Energy Applications",
  "metaDescription": "Master JEE Advanced Electrostatics: non-uniform charge densities, eccentric spherical cavities, Gauss law symmetry limits, dipole torque, and electrostatic self-energy.",
  "keywords": [
    "JEE Advanced electrostatics Gauss law",
    "spherical cavity electric field JEE",
    "non uniform charge density Gauss law",
    "electrostatic self energy sphere JEE",
    "electrostatics JEE Advanced problems"
  ],
  "badgeText": "ELECTROMAGNETISM CORE",
  "h1Prefix": "JEE Advanced Electrostatics:",
  "h1Highlight": "Gauss's Law, Cavities & Self-Energy Mastery",
  "heroDescription": "Electrostatics serves as the conceptual gateway to the entire Electrodynamics unit (which accounts for over 32% of JEE Advanced Physics marks). Simply memorizing kQ/r² is nowhere near enough; JEE Advanced rigorously tests non-uniform volume charge densities, eccentric spherical cavities via superposition, conductor earthing redistribution, and electrostatic self-energy.",
  "serviceTitle": "Struggling with Cavity Fields and Non-Uniform Charge Integrals?",
  "serviceDescription": "Connect 1:1 with an IITian Physics mentor on Mentskool to master Gauss's Law symmetry, superposition tricks, and boundary conditions.",
  "quickStats": [
    {
      "label": "Electrostatics Share",
      "value": "8% - 12% Marks",
      "hint": "Plus direct links to Capacitors & Gravitation"
    },
    {
      "label": "Top Advanced Theme",
      "value": "Eccentric Cavities",
      "hint": "Uniform E-field inside off-center spherical cavity"
    },
    {
      "label": "Key Mathematical Tool",
      "value": "Shell Integration",
      "hint": "4πr²dr for radial ρ(r) distributions"
    },
    {
      "label": "Conductor Rule",
      "value": "Zero Internal E",
      "hint": "Shielding & earthing potential = 0"
    }
  ],
  "overviewHeading": "Executive Summary: Beyond Point Charges to Symmetry & Superposition",
  "overviewIntro": "In JEE Advanced, Electrostatics problems are rarely solved by brute-force Coulomb's Law integration over awkward shapes. Instead, IIT professors design setups that yield instantly to three master principles: Gaussian symmetry for radial/cylindrical/planar charges, negative-charge superposition for cavities, and potential conservation during conductor earthing.",
  "overviewPoints": [
    {
      "title": "Gauss's Law Symmetry Prerequisite",
      "detail": "∮ E·dA = Q_in/ε₀ is ALWAYS true for flux, but can ONLY calculate E directly when E is constant and normal/parallel over the Gaussian surface."
    },
    {
      "title": "The Cavity Superposition Theorem",
      "detail": "An off-center spherical cavity inside a uniform sphere (ρ) produces a completely UNIFORM electric field inside the cavity: E_cavity = (ρ d)/(3ε₀)."
    },
    {
      "title": "Conductor Earthing = Potential Zero",
      "detail": "Earthing a conducting shell sets its Potential V = 0, NOT its Charge q = 0! Induced charges adjust until total V = 0."
    },
    {
      "title": "Electrostatic Self-Energy & Pressure",
      "detail": "U_self = 3kQ²/(5R) for a solid uniform sphere and kQ²/(2R) for a hollow shell; electrostatic pressure on a conductor is σ²/(2ε₀)."
    },
    {
      "title": "Flux Through Finite Cones & Discs",
      "detail": "Master the solid-angle formula Φ = (q / 2ε₀)(1 - cosθ) for a point charge on the axis of a finite circular disc."
    }
  ],
  "timelinePhases": [
    {
      "timeframe": "Week 1 (Gauss & Flux)",
      "phaseTitle": "Symmetry, Flux & Solid Angle Mastery",
      "description": "Master Gauss's Law for non-uniform ρ(r), solid-angle flux through discs/cones, and cube-symmetry flux fractions (q/8ε₀, q/24ε₀).",
      "deliverables": [
        "Solve 20 radial ρ(r) = kr^n integrals",
        "Memorize solid angle flux Φ=(q/2ε₀)(1-cosθ)",
        "Master cube corner/edge/face flux cases",
        "Verify Gauss applicability vs flux validity"
      ]
    },
    {
      "timeframe": "Week 2 (Cavities & Potential)",
      "phaseTitle": "Superposition Cavities & Potential Integrals",
      "description": "Master spherical and cylindrical cavity fields, E = -∇V partial derivatives, and dipole potential/torque in non-uniform fields.",
      "deliverables": [
        "Derive E = ρd/(3ε₀) inside spherical cavity",
        "Solve 15 cylindrical off-axis cavity problems",
        "Compute potential V(r) inside solid spheres",
        "Master dipole force F = p(dE/dr)"
      ]
    },
    {
      "timeframe": "Week 3 (Conductors & Earthing)",
      "phaseTitle": "Concentric Shells, Shielding & Earthing",
      "description": "Master charge induction on inner/outer surfaces of nested spherical shells, switch closing, and heat dissipated during charge redistribution.",
      "deliverables": [
        "Solve 20 concentric shell earthing problems",
        "Verify total V=0 on earthed shells",
        "Compute heat lost ΔH = U_i - U_f",
        "Master electrostatic pressure σ²/(2ε₀)"
      ]
    },
    {
      "timeframe": "Week 4 (Self-Energy & PYQs)",
      "phaseTitle": "Self-Energy, Interaction & 2016–2026 PYQs",
      "description": "Master energy density ∫ ½ε₀E² dV, interaction vs self-energy separation, and complete 10-year JEE Advanced Electrostatics PYQs.",
      "deliverables": [
        "Derive U = 3kQ²/5R via energy density",
        "Compute work assembling concentric shells",
        "Solve 2020-2026 Advanced PYQs",
        "Review mistake log with IITian mentor"
      ]
    }
  ],
  "comparisonTitle": "Common Electrostatics Misconceptions vs JEE Advanced Reality",
  "comparisonSubtitle": "Why naive substitutions fail on Gauss's Law, cavities, and conductors",
  "comparisonRows": [
    {
      "aspect": "Gauss's Law Usage",
      "genericCoaching": "Tries to find E of a finite rod or disc using Gauss's Law",
      "mentskool1on1": "Only uses Gauss for E under spherical, infinite cylindrical, or infinite planar symmetry"
    },
    {
      "aspect": "Electric Flux vs Field",
      "genericCoaching": "Assumes Q_in = 0 implies E = 0 everywhere on Gaussian surface",
      "mentskool1on1": "Q_in = 0 implies net flux ∮E·dA = 0; external charges still create local E ≠ 0"
    },
    {
      "aspect": "Earthing a Conductor",
      "genericCoaching": "Sets total charge on earthed conductor to Q = 0",
      "mentskool1on1": "Sets Potential V = 0; solves for induced charge q_earth"
    },
    {
      "aspect": "Field Inside Spherical Cavity",
      "genericCoaching": "Applies kQ/r² around cavity center",
      "mentskool1on1": "Superimposes +ρ full sphere and -ρ cavity sphere: E = ρ·(C1C2)/(3ε₀)"
    },
    {
      "aspect": "Non-Uniform Sphere ρ(r)",
      "genericCoaching": "Writes Q_in = ρ × (4/3)πr³",
      "mentskool1on1": "Integrates Q_in = ∫₀ʳ ρ(r) 4πr² dr using thin spherical shells"
    },
    {
      "aspect": "Dipole in Non-Uniform E",
      "genericCoaching": "Assumes net force on dipole is always zero",
      "mentskool1on1": "Computes F = (p · ∇)E = p (dE/dx) along dipole orientation"
    },
    {
      "aspect": "Solid Sphere Potential",
      "genericCoaching": "Uses V = kQ/r inside the solid non-conducting sphere",
      "mentskool1on1": "Uses V(r) = kQ(3R² - r²)/(2R³) for r < R"
    },
    {
      "aspect": "Total Energy of 2 Shells",
      "genericCoaching": "Uses only interaction energy kQ1Q2/R_outer",
      "mentskool1on1": "Sums Self-Energy_1 + Self-Energy_2 + Mutual Interaction Energy"
    }
  ],
  "sections": [
    {
      "heading": "Gauss's Law Symmetry & Non-Uniform Charge Distributions",
      "subheading": "When ∮ E·dA = Q_in/ε₀ gives E directly vs when it only gives total flux",
      "paragraphs": [
        "Gauss's Law states that the net electric flux leaving any closed surface equals Q_enclosed / ε₀. While this law is universally valid for calculating FLUX—even for an asymmetric cube or irregular potato-shaped balloon—it can ONLY be used to solve for ELECTRIC FIELD E when symmetry forces E to have constant magnitude and fixed angle over the Gaussian surface.",
        "In JEE Advanced, non-uniform volume charge densities like ρ(r) = ρ₀ (r/R) or ρ(r) = ρ₀ (1 - r/R) appear regularly. Never multiply ρ(r) by (4/3)πr³! You must slice the sphere into concentric shells of volume dV = 4πr² dr and integrate Q_in = ∫₀ʳ ρ(r) 4πr² dr.",
        "Similarly, for a long non-uniform cylinder with ρ(r) = kr, take a coaxial cylindrical Gaussian surface of length L and integrate dV = 2πrL dr. Notice that L cancels out cleanly on both sides: E(2πrL) = Q_in / ε₀.",
        "Remember the subtle Q_in = 0 trap: if a charge is outside a closed surface, Q_in = 0, so total flux is zero—but the electric field at points ON the surface is definitely NOT zero! Electric field E on a Gaussian surface depends on ALL charges in the universe (both inside and outside), whereas flux depends ONLY on charges inside."
      ],
      "keyTakeaways": [
        {
          "title": "Field vs Flux Dependence",
          "detail": "Flux depends ONLY on Q_inside; local Electric Field E depends on ALL charges (inside + outside)."
        },
        {
          "title": "Shell & Cylinder Volumes",
          "detail": "Use dV = 4πr²dr for spheres and dV = 2πrL dr for cylinders when integrating ρ(r)."
        }
      ]
    },
    {
      "heading": "The Eccentric Cavity Superposition Trick (Spherical & Cylindrical)",
      "subheading": "Proving why the electric field inside an off-center spherical cavity is completely uniform",
      "paragraphs": [
        "Suppose a solid non-conducting sphere of uniform charge density +ρ and radius R has an off-center spherical cavity carved out, with vector d⃗ pointing from the sphere's center O₁ to the cavity's center O₂. JEE Advanced loves asking for the electric field and potential difference inside this cavity.",
        "Using superposition, treat the punctured sphere as a complete solid sphere of density +ρ PLUS a smaller solid sphere (filling the cavity) of negative density -ρ.",
        "At any point P inside the cavity (position r₁⃗ from O₁ and r₂⃗ from O₂), the field from the full +ρ sphere is E₁⃗ = (ρ / 3ε₀) r₁⃗, and from the -ρ cavity sphere is E₂⃗ = (-ρ / 3ε₀) r₂⃗. Summing them: E_net⃗ = (ρ / 3ε₀)(r₁⃗ - r₂⃗) = (ρ / 3ε₀) d⃗!",
        "This remarkable result shows that the electric field inside ANY eccentric spherical cavity is 100% UNIFORM in both magnitude and direction (parallel to O₁O₂)! For an eccentric cylindrical cavity, the exact same vector subtraction gives E_net⃗ = (ρ / 2ε₀) d⃗."
      ],
      "keyTakeaways": [
        {
          "title": "Spherical Cavity Field",
          "detail": "E_cavity = (ρ / 3ε₀) d⃗ is completely constant everywhere inside the cavity."
        },
        {
          "title": "Cylindrical Cavity Field",
          "detail": "Replacing 3 with 2 gives the exact uniform field inside an off-axis cylindrical cavity: (ρ / 2ε₀) d⃗."
        }
      ]
    },
    {
      "heading": "Solid-Angle Flux Through Finite Discs, Cones & Cube Symmetries",
      "subheading": "Replacing messy 2D surface integrals with Ω / 4π symmetry fractions",
      "paragraphs": [
        "When a point charge q sits at distance x on the axis of a circular disc of radius R, calculating electric flux ∫ E·dA directly requires trigonometric substitution. Instead, use the solid angle formula: a cone of half-angle θ (where cosθ = x / √(x² + R²)) subtends a solid angle Ω = 2π(1 - cosθ).",
        "Because total solid angle around a point is 4π, the fraction of flux passing through the disc is simply: Φ = (q / ε₀) × (Ω / 4π) = (q / 2ε₀)(1 - cosθ). This 1-line formula solves finite cylinder and frustum flux questions in 15 seconds.",
        "For cube symmetry problems: a charge q at the center of a cube sends q/(6ε₀) through each of the 6 faces. If q sits at one corner of a cube, imagine surrounding it with 8 identical cubes so q sits at the center of the 2×2×2 super-cube.",
        "The 3 faces touching the corner receive ZERO flux (E is parallel to those faces). The remaining 3 outer faces share the 1/8th total flux equally, giving q/(24ε₀) through each of the 3 opposite faces!"
      ],
      "keyTakeaways": [
        {
          "title": "Disc Flux Formula",
          "detail": "Φ = (q / 2ε₀)(1 - x/√(x²+R²)) solves axial disc and open-cylinder flux instantaneously."
        },
        {
          "title": "Corner of Cube = q/24ε₀",
          "detail": "Zero flux through 3 touching faces; q/(24ε₀) through each of the 3 opposite faces."
        }
      ]
    },
    {
      "heading": "Concentric Conducting Shells, Induced Charges & Earthing Rules",
      "subheading": "Navigating electrostatic shielding, switch closures, and heat generation",
      "paragraphs": [
        "Concentric conducting shells with switches and earthing wires are a staple of JEE Advanced Paper 1 and Paper 2. Follow three ironclad laws to never miss a step.",
        "Law 1 (Gaussian Shielding): Inside the bulk metal of any conductor in electrostatic equilibrium, E = 0. Drawing a Gaussian surface inside a shell proves that the inner surface of a shell MUST hold charge equal and opposite to the total charge enclosed inside its cavity.",
        "Law 2 (Conservation on Isolated Shells): Any isolated (un-earthed) conducting shell maintains constant total charge Q_inner + Q_outer = Q_initial.",
        "Law 3 (Earthing Means V = 0): When a shell is earthed, its charge is NO LONGER conserved—charge flows to/from the ground until the total electrostatic potential ON THAT SHELL equals zero (V_self + V_others = 0). Always write V_shell = 0 as your algebraic equation to solve for the unknown charge q on the earthed shell!"
      ],
      "keyTakeaways": [
        {
          "title": "Earthing = Zero Potential",
          "detail": "Never assume an earthed shell has zero charge; set its total potential V = 0 to solve for charge."
        },
        {
          "title": "Heat During Switch Closure",
          "detail": "Heat dissipated when earthing or connecting shells equals U_initial - U_final (energy is not conserved!)."
        }
      ]
    },
    {
      "heading": "Electrostatic Self-Energy, Energy Density & Conductor Pressure",
      "subheading": "Mastering U = ∫ ½ε₀E² dV and avoiding double-counting interaction energy",
      "paragraphs": [
        "The total electrostatic energy of a system can be computed in two equivalent ways: assembling charges piece by piece (½ ∫ ρ V dV), or integrating energy density over all space from r = 0 to ∞: U = ∫ ½ε₀ E² dV.",
        "Memorize the two foundational self-energies: for a hollow conducting/non-conducting shell of radius R and charge Q, U_self = kQ² / (2R). For a uniformly charged solid non-conducting sphere of radius R and charge Q, U_self = 3kQ² / (5R) (consisting of kQ²/10R stored inside r < R and kQ²/2R stored outside r > R).",
        "When assembling two concentric shells (inner radius a, charge q₁; outer radius b, charge q₂), total energy is U_total = kq₁²/(2a) + kq₂²/(2b) + kq₁q₂/b. Do NOT forget the self-energy terms when calculating work done to shrink or expand a charged shell!",
        "Finally, remember Electrostatic Pressure on the surface of any charged conductor: P_elec = σ² / (2ε₀) directed radially outward. Multiplying σ²/(2ε₀) by projected area πR² directly gives the bursting force across two hemispheres of a charged conducting bubble."
      ],
      "keyTakeaways": [
        {
          "title": "Solid vs Hollow Self-Energy",
          "detail": "Solid uniform sphere = 3kQ²/(5R); Hollow shell = kQ²/(2R)."
        },
        {
          "title": "Projected Area for Force",
          "detail": "Outward bursting force on a hemispherical shell equals Pressure (σ²/2ε₀) × Projected Area (πR²)."
        }
      ]
    },
    {
      "heading": "Electric Dipoles, Quadrupoles & Non-Uniform Field Forces",
      "subheading": "Calculating potential energy, oscillation frequency, and net force",
      "paragraphs": [
        "In a uniform electric field E, an electric dipole pexperiences zero net force (F = 0) and torque τ = p × E. For small angular displacements θ from stable equilibrium (θ = 0), it undergoes SHM with angular frequency ω = √(pE / I).",
        "In a NON-UNIFORM electric field (like the field of a point charge Q), a dipole experiences BOTH torque and net force! The net force along the field variation is F = p (dE/dr) when aligned with E, or more generally F⃗ = (p⃗ · ∇)E⃗ = -∇(U), where U = -p⃗ · E⃗.",
        "Notice the subtle distance scaling: a point charge field falls as 1/r², a dipole field falls as 1/r³ (and potential as 1/r²), and the force between two aligned dipoles scales as 1/r⁴!",
        "Always verify alignment angle: at an axial point of a dipole, E = 2kp/r³ (parallel to p⃗). At an equatorial point, E = kp/r³ (anti-parallel to p⃗). At general angle θ, E_net = (kp/r³) √(1 + 3cos²θ)."
      ],
      "keyTakeaways": [
        {
          "title": "Force via Potential Derivative",
          "detail": "For dipoles in non-uniform fields, compute U = -p⃗·E⃗ first, then take F = -dU/dr."
        },
        {
          "title": "Gravitation Analogy",
          "detail": "Replace q → m and k → -G to instantly reuse all shell, cavity, and self-energy formulas in Gravitation!"
        }
      ]
    },
    {
      "heading": "Advanced Problem Execution: Connecting Electrostatics to Gravitation & Capacitors",
      "subheading": "Leveraging structural analogies for double syllabus efficiency",
      "paragraphs": [
        "Mastering Gauss's Law and spherical shell potential in Electrostatics gives you a massive 2-for-1 return because every single radial field, cavity, and self-energy result transfers directly to Gravitation (simply replace +1/(4πε₀) with -G, and charge q with mass m).",
        "Similarly, concentric conducting shells are physically identical to spherical capacitors! Finding the potential difference ΔV = V_inner - V_outer when +Q is on the inner shell and -Q on the outer shell gives Capacitance C = Q/ΔV = 4πε₀ ab / (b - a).",
        "When tackling JEE Advanced Electrostatics problems, draw clear cross-sections showing inner and outer shell charge distributions before writing any potential equation. Double-check whether spheres are conducting (charge resides only on surface) or non-conducting (charge distributed throughout volume).",
        "To sharpen your Electrodynamics intuition and eliminate conceptual slips, connect 1:1 with a verified IITian mentor on Mentskool for targeted advanced problem sessions."
      ],
      "keyTakeaways": [
        {
          "title": "Conducting vs Non-Conducting",
          "detail": "Always underline whether a solid sphere is conducting (surface charge) or non-conducting (volume charge)."
        },
        {
          "title": "Spherical Capacitor Link",
          "detail": "Energy stored in concentric shells directly yields spherical capacitance via U = Q²/(2C)."
        }
      ]
    },
    {
      "heading": "Common Exam-Hall Mistakes & Negative-Marking Traps in Gauss Law & Electrostatics JEE",
      "subheading": "How top IITians eliminate preventable -1 errors under strict 180-minute pressure",
      "paragraphs": [
        "In both JEE Main and JEE Advanced, raw conceptual knowledge rarely separates a 97th percentiler from a 99.5th percentiler—execution accuracy does. When tackling Gauss Law & Electrostatics JEE, students routinely throw away 12 to 20 marks through avoidable rough-sheet slips: misreading boundary conditions, dropping minus signs, or skipping unit conversions.",
        "The first defense is structured rough-sheet discipline. Divide each scribble pad page cleanly into numbered boxes rather than writing diagonally across cluttered margins. Clean layout makes 5-second back-checking effortless and immediately exposes dropped factors or sign inversions.",
        "The second defense is Dimensional & Limiting-Case Sanity Checking. Whenever you derive a symbolic expression or select between numerical choices in Gauss Law & Electrostatics JEE, plug in extreme values (such as 0, 1, or ∞) or check physical dimensions—eliminating two or three distractor options in seconds.",
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
      "question": "Can Gauss's Law be used to find the electric field of a finite charged rod?",
      "answer": "No. Although total flux through any closed surface around the rod equals Q_in/ε₀, a finite rod lacks infinite translational symmetry, so E varies along the Gaussian surface and cannot be pulled outside the integral."
    },
    {
      "question": "What is the electric field inside an off-center spherical cavity of a uniform sphere?",
      "answer": "It is completely uniform everywhere inside the cavity and equals E = (ρ d)/(3ε₀), directed from the center of the sphere to the center of the cavity."
    },
    {
      "question": "Does earthing a conducting sphere mean its net charge becomes zero?",
      "answer": "No! Earthing forces the electric potential of the sphere to zero (V = 0). If other charges are nearby, the earthed sphere will hold a non-zero induced charge to keep V = 0."
    },
    {
      "question": "What is the electrostatic self-energy of a solid uniformly charged sphere?",
      "answer": "U = 3kQ² / (5R), where k = 1/(4πε₀). Of this, kQ²/(10R) resides inside the sphere (r < R) and kQ²/(2R) resides outside (r > R)."
    },
    {
      "question": "How do you calculate electric flux through a circular disc from an axial point charge?",
      "answer": "Use the solid angle formula Φ = (q / 2ε₀)(1 - cosθ), where cosθ = x / √(x² + R²)."
    },
    {
      "question": "What is the electric flux through one face if a charge q is at the corner of a cube?",
      "answer": "The 3 faces touching that corner receive zero flux. Each of the 3 opposite faces receives q / (24ε₀)."
    },
    {
      "question": "How do you find the force on a dipole in a non-uniform electric field?",
      "answer": "Compute its potential energy U = -p⃗ · E⃗ and differentiate with respect to position: F = -dU/dr = p(dE/dr) for aligned dipoles."
    },
    {
      "question": "Why is heat generated when two charged conducting spheres are connected by a wire?",
      "answer": "Charge redistributes until both spheres reach a common potential. Since the final electrostatic energy U_f is always strictly less than U_i, the difference U_i - U_f is dissipated as heat and radiation."
    },
    {
      "question": "What is the electrostatic pressure on the surface of a charged conductor?",
      "answer": "The outward normal force per unit area is σ² / (2ε₀), where σ is the local surface charge density."
    },
    {
      "question": "How does Mentskool help students master JEE Advanced Physics?",
      "answer": "Mentskool matches you 1:1 with top IITian rankers who walk you through symmetry tricks, cavity superpositions, and error audits on real JEE Advanced mock papers."
    }
  ],
  "relatedLinks": [
    {
      "label": "JEE Advanced 7-Year Analysis",
      "href": "/jee-advanced-topic-wise-analysis-2020-to-2026",
      "badge": "Guide"
    },
    {
      "label": "EMI Formula List JEE Main",
      "href": "/jee-main-electromagnetic-induction-formula-list",
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
