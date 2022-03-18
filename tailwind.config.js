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
  },
  plugins: [require('@tailwindcss/forms')],
}
