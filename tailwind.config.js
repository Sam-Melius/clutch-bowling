/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clutchBlue: {
          50: "var(--clutchBlue-50)",
          100: "var(--clutchBlue-100)",
          200: "var(--clutchBlue-200)",
          300: "var(--clutchBlue-300)",
          400: "var(--clutchBlue-400)",
          500: "var(--clutchBlue-500)",
          600: "var(--clutchBlue-600)",
          700: "var(--clutchBlue-700)",
          800: "var(--clutchBlue-800)",
          900: "var(--clutchBlue-900)",
        },
        primaryDark: "#181818",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
