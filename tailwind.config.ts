import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF9",
        paper: "#FAFAF9",
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F7F8F9",
          active: "#EDEFF2",
        },
        hairline: "#E7E9ED",
        mist: {
          DEFAULT: "#E7E9ED",
          dark: "#D2D6DC",
        },
        brand: {
          DEFAULT: "#2B3A67",
          hover: "#212D52",
          light: "rgba(43, 58, 103, 0.08)",
        },
        indigo: {
          DEFAULT: "#2B3A67",
          hover: "#212D52",
          light: "rgba(43, 58, 103, 0.08)",
        },
        moss: {
          DEFAULT: "#3C9D6B",
          hover: "#2E8B57",
          light: "rgba(60, 157, 107, 0.1)",
        },
        mint: {
          DEFAULT: "#3C9D6B",
          hover: "#2E8B57",
          light: "rgba(60, 157, 107, 0.1)",
        },
        amber: {
          DEFAULT: "#E8A33D",
          hover: "#D48F2A",
          light: "rgba(232, 163, 61, 0.1)",
        },
        ink: {
          DEFAULT: "#14181F",
          muted: "#4A5260",
          faint: "#8A94A6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Satoshi", "General Sans", "sans-serif"],
      },
      borderRadius: {
        control: "7px",
        card: "11px",
      },
      boxShadow: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
