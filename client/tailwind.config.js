/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}",
  "./public/index.html"
],
  theme: {
    fontFamily: {
      main: ['Cairo', 'sans-serif'],
    },
    extend: {
      width:{
        main: '1513px'
      },
      backgroundColor: {
        main: '#ee3131'
      },
      colors:{
        main: "#ee3131",
        extra: '#7fad39'
      }
    },
  },
  plugins: [],
}
