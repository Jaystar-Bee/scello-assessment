/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        "body-color": "#E5E5E5",
        "light-purple": "#F4F2FF",
        primary: '#6D5BD0',
        'primary-variant': "#6E6893",
        red: '#D30000',
        "light-red": '#FFE0E0',
        green: "#007F00",
        "light-green": "#CDFFCD",
        yellow: "#CE8500",
        "light-yellow": "#FFECCC",

      }
    },
  },
  plugins: [],
}
