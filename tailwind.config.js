//const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },

    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
  },
  plugins: [
    require("@tailwindcss/forms", "tailwindcss-filters", "tailwind-scrollbar"),
  ],
};
