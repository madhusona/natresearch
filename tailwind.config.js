module.exports = {
  purge: ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/banner.jpg')",
      
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
