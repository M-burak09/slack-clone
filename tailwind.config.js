/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'primary-color': '#1A1D21',
      'secondary-color': '#BBBCBD',
      'tertiary-color': '#000000',
      'quartinary-color': '#313437',
      'white': '#FFFFFF', 
    },
    extend: {},
  },
  plugins: [],
}
