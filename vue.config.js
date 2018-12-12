module.exports = {
    css: {
        extract: {
          filename: 'app.css',
          chunkFilename: 'chunk-vendors.css'
        }
      },
configureWebpack: {
    output: {
      filename: "app.js",
      chunkFilename: "chunk-vendors.js"
    }
  }
}