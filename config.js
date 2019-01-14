const cwd = process.cwd();
const path = require('path');

module.exports = {
    /* DEV_Note: use for local development 
    global: {
      dev: './public/'
    },
    styleGuide: {
      scanPath: './demo/components',
      outputFileName: 'componentList.json',
      variantDistFolderName: 'variants',
    }, */
    /* default settings for Biotope */
    styleGuide: {
      outputFileName: 'componentList.json',
      variantDistFolderName: 'variants',
      scanPath: 'src/components',
      language: 'en'
    } 
};

try {
    const projectConfig = require(path.join(cwd, 'projectConfig.js'));
    if (projectConfig) {
      const merge = require('lodash.merge');
      merge(module.exports, projectConfig);
    }
  } catch (e) {
    const colors = require('colors/safe');
    console.log(colors.red('Error: ', e));
}