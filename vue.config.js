const path = require('path');
module.exports = {
  outputDir: path.resolve(__dirname, 'dist'),
  css: {
    extract: {
      filename: 'style-guide.css',
      chunkFilename: 'style-guide-vendors.css'
    }
  },
  configureWebpack: {
    output: {
      filename: "style-guide.js",
      chunkFilename: "style-guide-vendors.js"
    }
  }
}