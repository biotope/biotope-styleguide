const path = require('path');
const fs = require('fs');

const filepathsFromDir = (startPath, filter) => {
  if (!fs.existsSync(startPath)) {
    console.log("no dir ", startPath);
    return;
  }

  const files = fs.readdirSync(startPath);
  return files.reduce((aggregated, filename) => {
    const filePath = path.join(startPath, filename);
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {

      return [
        ...aggregated,
        ...filepathsFromDir(filePath, filter)
      ]
    }
    else if (filter.test(filePath)) {

      return [
        ...aggregated,
        filePath
      ]
    }
    else {
      return [...aggregated]
    }
  }, []);
};

export default filepathsFromDir;
