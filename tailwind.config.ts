import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/**
 * Design tokens extraídos del logotipo Rey Poke.
 * Coral = energía de marca (REY), Teal = océano/olas (POKE).
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDFCFA",
        surface: "#FFFFFF",
        foreground: "#182635",
        coral: {
          DEFAULT: "#F0785F",
          dark: "#D9634C",
          soft: "#FCE3DC",
        },
        teal: {
          DEFAULT: "#2E8A9A",
          dark: "#1F6C7A",
          soft: "#DCEFF2",
        },
        sand: "#F3EEE6",
        muted: "#7C8A92",
        "border-subtle": "#E7E2D9",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-h1": [
          "clamp(2.75rem, 6vw, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "section-h2": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.05", fontWeight: "700" },
        ],
        "card-h3": [
          "clamp(1.25rem, 2vw, 1.75rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        "body-lg": [
          "clamp(1.125rem, 1.5vw, 1.375rem)",
          { lineHeight: "1.6" },
        ],
        caption: [
          "0.8125rem",
          {
            lineHeight: "1.4",
            letterSpacing: "0.08em",
            fontWeight: "600",
          },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "40": "10rem",
        "50": "12.5rem",
      },
      borderRadius: {
        sm: "12px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(20,22,19,0.04), 0 12px 32px rgba(20,22,19,0.06)",
        "soft-lg":
          "0 4px 12px rgba(20,22,19,0.06), 0 20px 48px rgba(20,22,19,0.08)",
        "soft-hover":
          "0 8px 20px rgba(20,22,19,0.08), 0 24px 56px rgba(20,22,19,0.1)",
        glass: "0 8px 32px rgba(20,22,19,0.08)",
      },
      maxWidth: {
        container: "1440px",
      },
      padding: {
        container: "clamp(1.5rem, 5vw, 6rem)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "scroll-line": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(200%) skewX(-15deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        float: "float 4s ease-in-out infinite",
        "scroll-line": "scroll-line 2s ease-in-out infinite",
        shine: "shine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
