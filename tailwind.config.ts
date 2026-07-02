import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          violet: "#7C3AED",
          "violet-light": "#A78BFA",
          "violet-dark": "#5B21B6",
          orange: "#F97316",
          "orange-light": "#FB923C",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F8F7FF",
          muted: "#F1F0F9",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 60% 50%, #EDE9FE 0%, #F5F3FF 40%, #FFF7ED 70%, #FFFFFF 100%)",
        "orb-gradient":
          "radial-gradient(circle at 50% 50%, #A78BFA 0%, #7C3AED 40%, #C4B5FD 80%)",
        "cta-gradient":
          "linear-gradient(135deg, #FED7AA 0%, #FCA5A5 30%, #C4B5FD 70%, #A78BFA 100%)",
        "violet-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        card: "0 2px 20px rgba(124, 58, 237, 0.06)",
        "card-hover": "0 8px 40px rgba(124, 58, 237, 0.14)",
        violet: "0 4px 24px rgba(124, 58, 237, 0.35)",
        "violet-lg": "0 8px 40px rgba(124, 58, 237, 0.45)",
        float: "0 20px 60px rgba(124, 58, 237, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
