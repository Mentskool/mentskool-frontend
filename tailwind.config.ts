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
        background: "#F8FAFC",
        paper: "#F8FAFC",
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F1F5F9",
          active: "#E2E8F0",
        },
        hairline: "#E2E8F0",
        mist: {
          DEFAULT: "#E2E8F0",
          dark: "#CBD5E1",
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
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          light: "rgba(37, 99, 235, 0.08)",
        },
        mint: {
          DEFAULT: "#0284C7",
          hover: "#0369A1",
          light: "rgba(2, 132, 199, 0.08)",
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
        soft: "0 2px 8px -2px rgba(20, 24, 31, 0.04), 0 1px 3px -1px rgba(20, 24, 31, 0.02)",
        card: "0 4px 20px -4px rgba(20, 24, 31, 0.07), 0 2px 6px -2px rgba(20, 24, 31, 0.03)",
        elevated: "0 14px 40px -10px rgba(20, 24, 31, 0.12), 0 4px 12px -3px rgba(20, 24, 31, 0.04)",
        glow: "0 0 32px -4px rgba(43, 58, 103, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
