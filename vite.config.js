module.exports = {
   
    build: {
      outDir: 'docs',
      rollupOptions: {
        input:{
          index:'index.html',
          request:'request.html'
        }
      }
    }
  }
  