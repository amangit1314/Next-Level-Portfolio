//const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    fontfamily: {
      //sans: "Helvetica, Arial, sans-serif",
    },
  },
  variants: {
    extend: {
      // ...
      //fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
};
