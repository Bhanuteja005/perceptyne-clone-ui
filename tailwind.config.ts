import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          900: "#0B0B0F",
          800: "#111114",
        },
        violet: {
          glow: "#7C3AED",
          400: "#8B5CF6",
          300: "#A78BFA",
        },
        mist: "#F2F2F2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        breathe: "breathe 5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        spinslow: "spinslow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
