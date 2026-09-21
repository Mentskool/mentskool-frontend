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
        paper: "var(--paper)",
        ink: {
          DEFAULT: "var(--ink)",
          muted: "#4A5260",
          faint: "#8A94A6",
        },
        brand: {
          DEFAULT: "var(--indigo)",
          hover: "#212D52",
          light: "#EBEFF9",
        },
        moss: {
          DEFAULT: "var(--moss)",
          hover: "#328559",
          light: "#EAF5EF",
        },
        amber: {
          DEFAULT: "var(--amber)",
          hover: "#D6922F",
          light: "#FDF5E8",
        },
        mist: {
          DEFAULT: "var(--mist)",
          dark: "#D4D7DE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Satoshi", "General Sans", "sans-serif"],
      },
      borderRadius: {
        control: "7px", // 6-8px for inputs and buttons
        card: "11px",    // 10-12px for content cards
      },
      boxShadow: {
        none: "none",
      },
    },
  },
  plugins: [],
};

export default config;
