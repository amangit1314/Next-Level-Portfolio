//const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
    screens: {
      mobile: '640px',
      // => @media (min-width: 680px) { ... }

      tablet: '920px',
      // => @media (min-width: 920px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      monitor: '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontfamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
