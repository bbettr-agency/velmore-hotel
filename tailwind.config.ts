import type { Config } from "tailwindcss";

/**
 * Velmoré design tokens — from docs/12-VISUAL-LANGUAGE.md.
 * One accent (champagne), reserved for the primary CTA.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./config/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        estate: {
          900: "#141f18",
          800: "#1a2a20",
          700: "#2E402F", // primary brand green
          600: "#3a5139",
          100: "#E8EDE6",
        },
        champagne: {
          DEFAULT: "#C0973F", // accent — primary CTA only
          light: "#E3CD97",
          dark: "#A67F31",
          tint: "#EAD9B0",
        },
        sage: "#6E7C63",
        ink: "#1c1b18",
        charcoal: "#3D3A34",
        steel: "#6B675C",
        stone: "#B8B2A5",
        mist: "#EFEADE",
        ivory: "#FAF6EE",
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Iowan Old Style", "Palatino", "Georgia", "serif"],
        sans: ["var(--font-inter)", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: { sm: "8px", md: "10px", lg: "16px", xl: "24px" },
      boxShadow: {
        card: "0 20px 50px -28px rgba(28,27,24,.20)",
        lift: "0 24px 60px -24px rgba(28,27,24,.26)",
        accent: "0 18px 44px -20px rgba(192,151,63,.55)",
        ink: "0 30px 80px -30px rgba(20,19,17,.55)",
      },
      maxWidth: { container: "1280px" },
      letterSpacing: { eyebrow: "0.26em" },
    },
  },
  plugins: [],
};
export default config;
