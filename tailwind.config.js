//const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      mobile: '640px',
      // => @media (min-width: 680px) { ... }

      tablet: '920px',
      // => @media (min-width: 920px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1280px) { ... }

      monitor: '1600px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontfamily: {
      // display: ['Player Display', 'sans-serif'],
      // body: ['Poppins', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      // ...
      //fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
}
