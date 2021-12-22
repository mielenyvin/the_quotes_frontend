module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['first'],
      display: ['first']
    },
  },
  plugins: [],
}

