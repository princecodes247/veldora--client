module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FDBB30",
      },
      fontFamily: {
        'body': ['"Poppins"', ],
        'header': ['"Poppins"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
