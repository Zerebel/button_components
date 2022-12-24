/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
        noto: ['Noto Sans JP', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: '0px 2px 3px rgba(51, 51, 51, 0.2)',
      },
    },
  },
  plugins: [],
};
