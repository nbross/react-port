module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#191d2b",
        secondary: "#F28705"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}