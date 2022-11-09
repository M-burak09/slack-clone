/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1A1D21',
        'secondary-color': '#BBBCBD',
        'tertiary-color': '#000000',
        'quartinary-color': '#313437',
        'white': '#FFFFFF', 
      },
      fontFamily: {
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans]
      },
    },
    screens: {
      '3xl': '1760px'
    }
  },
  plugins: [],
}
