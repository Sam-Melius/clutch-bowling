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
          50: "#F0F6FC",
          100: "#D9EAF9",
          200: "#C0DEF5",
          300: "#A7D2F2",
          400: "#8EC6EE",
          500: "#75BAEB",
          600: "#5CAEE7",
          700: "#43A2E4",
          800: "#2A96E0",
          900: "#118AD7",
        },
        primaryDark: "#101010",
      },
    },
  },
  plugins: [],
};
