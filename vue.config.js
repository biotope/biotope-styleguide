const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, 'demo/dist/styleGuide-resources'),
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