import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#00A9FF", // Dark blue, representing the detective theme
        primaryHover: "#0487C8", // Darker blue for primary color hover effect
        secondary: "#1A202C", // Lighter blue for secondary elements
        onPrimary: "#FFFFFF", // Dark text for primary color backgrounds
        onSecondary: "#FFFFFF",
        onSurfaceVariant1: "#1A202C",
        onSurfaceVariant2: "#5CB5F5",
        onSurfaceVariant3: "#C5C5C5",
        onSurfaceVariant4: "#FAF9F9",
        success: "#2F855A", // Green for success messages
        error: "#E53E3E", // Red for error messages
        warning: "#F6AD55", // Yellow for warning messages
        primaryLight: "#F3FAFF", // Blue for informational messages
        // Custom Detective Theme Colors
        detectiveRed: "#B91C1C", // A dark red color for detective-specific elements
        detectiveYellow: "#FBBF24", // A yellow color for highlights and call-to-action
        detectiveGray: "#2D3748", // A dark gray color for certain UI elements
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
      },
      animation: {
        spaceship: '/animation/spaceship.json',
        astro: '/animation/astro.json',
        astro2: '/animation/astro2.json',
        astro3: '/animation/astro3.json'

      },
      image: {
        placeholder_image: 'url(/image/placeholder.png)'
      },
      backgroundImage: {
        project_bg: 'url(/image/star.png)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config