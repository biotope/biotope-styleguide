const path = require('path');
module.exports = {
  outputDir: process.argv.indexOf('--targetFolder=dist') > 0 ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'demo/dist/styleGuide-resources'),
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