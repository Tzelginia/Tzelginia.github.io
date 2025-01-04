/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#86198f",
        dark: "#41144f",
        secondary: "#9c7ba6",
      },
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        rubik: ["Rubik"],
      },
      boxShadow: {
        "inner-xl": "inset 0 2px 4px 0 rgb(0 0 0 / 0.5)",
      },
    },
  },
  plugins: [],
};
