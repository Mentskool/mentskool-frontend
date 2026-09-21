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
        background: "#0B0F0D",
        paper: "#0B0F0D",
        surface: {
          DEFAULT: "#15191A",
          hover: "#1A201E",
          active: "#202724",
        },
        hairline: "#262B29",
        mist: {
          DEFAULT: "#262B29",
          dark: "#333A37",
        },
        mint: {
          DEFAULT: "#10C47C",
          hover: "#0EA668",
          light: "rgba(16, 196, 124, 0.1)",
        },
        moss: {
          DEFAULT: "#10C47C",
          hover: "#0EA668",
          light: "rgba(16, 196, 124, 0.1)",
        },
        amber: {
          DEFAULT: "#E8A23D",
          hover: "#D6922F",
          light: "rgba(232, 162, 61, 0.1)",
        },
        brand: {
          DEFAULT: "#10C47C",
          hover: "#0EA668",
          light: "rgba(16, 196, 124, 0.1)",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#9CA3AF",
          faint: "#6B7280",
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
