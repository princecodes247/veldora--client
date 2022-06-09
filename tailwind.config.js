module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main' : "url('/images/bg.png')"
      },
      colors: {
        "primary": "#FDBB30",
      },
      fontFamily: {
        'body': ['"Poppins"', "sans-serif"],
        'header': ['"Poppins"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
