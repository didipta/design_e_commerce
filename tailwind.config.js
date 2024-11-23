/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        // Define Heading styles
        h1: ["48px", { lineHeight: "1.3" }],
        h2: ["40px", { lineHeight: "1.3" }],
        h3: ["33px", { lineHeight: "1.3" }],
        h4: ["28px", { lineHeight: "1.3" }],
        h5: ["23px", { lineHeight: "1.3" }],
        h6: ["16px", { lineHeight: "1.3 " }],
        // Define Title styles
        title: ["19px", { lineHeight: "1.3" }],
        // Define Body styles
        body: ["16px", { lineHeight: "1.3" }],
        // Define Caption styles
        caption: ["13px", { lineHeight: "1.3" }],
        "caption-two": ["11px", { lineHeight: "1.3" }],
      },
      colors: {
        // General colors
        black: "#1D1D1D",
        white: "#FFFFFF",

        // Primary palette
        primary: {
          50: "#F6F5FD",
          100: "#EEECFB",
          200: "#E0DCF8",
          300: "#C8BFF3",
          400: "#AC9AEB",
          500: "#8F71E1",
          600: "#7E53D4",
          700: "#6F42C1",
          800: "#5C36A4",
          900: "#4D2E84",
          950: "#2F1C59",
        },

        // Text colors
        text: {
          base: "#1D1D1D", // Default text color
          muted: "#71717A", // Subtle text
          light: "#FFFFFF", // For light text
        },

        // Background colors
        background: {
          default: "#FFFFFF", // Light background
          dark: "#1D1D1D", // Dark background
          muted: "#F6F5FD", // Muted background
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [""],
  },
};
