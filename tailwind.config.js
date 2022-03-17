//const colors = require("tailwindcss/colors");

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
    screens: {
      // sm: '680px',
      // // => @media (min-width: 680px) { ... }
      // md: '920px',
      // // => @media (min-width: 920px) { ... }
      // lg: '1o24px',
      // // => @media (min-width: 1280px) { ... }
      // xl: '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    fontfamily: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
