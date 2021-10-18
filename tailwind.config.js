module.exports = {
  purge: ['./*.html','./js/index.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
      
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  
  ],
}
