/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'khaki': '#A39B8B',
        'raisinblack': '#302323',
        'chestnut': '#A04732',
        'lapisblue': '#2A628F',
      },
    },
  },
  plugins: [],
};