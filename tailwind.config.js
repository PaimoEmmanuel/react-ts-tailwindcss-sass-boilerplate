/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors,
      transparent: "transparent",
      current: "currentColor",
      black: {
        DEFAULT: "#000000",
      },
      white: "#FFFFFF",
      dark: {
        DEFAULT: "#1E1E1E",
        100: "#1B1B1A",
        200: "#222222"
      },
      yellow: {
        DEFAULT: "#FBF09C",
      },
    },
    fontFamily: {
      heading: ["Dahlia", "sans-serif"],
      body: ["Platform", "sans-serif"],
    },
  },
  plugins: [],
};
