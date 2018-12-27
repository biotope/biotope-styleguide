const cwd = process.cwd();
const path = require('path');

module.exports = {
    styleGuide: {
        scanPath: './demo/components',
        outputFile: './public/componentList.json',
        distFolder: './examples/',
        distFolderLocation: './public/examples/'
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