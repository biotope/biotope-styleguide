
var path = require('path'), fs = require('fs');
const config = require('./../config');

const fromDir = (startPath, filter) => {

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
                ...fromDir(filePath, filter)
            ]
        }
        else if (filter.test(filePath)) {
            return [
                ...aggregated,
                filePath
            ]
        };
    }, []);
};

const mergeComponentDefinitions = (origin) => {
    const packages = fromDir(origin, /package\.json$/);


    const contents = packages.map((package) => JSON.parse(fs.readFileSync(package, 'utf8')));

    return contents.map(content => content);
};

const writeComponentDefinitionsFromTo = (origin, target) => {
    fs.writeFileSync(target, JSON.stringify(mergeComponentDefinitions(origin))
        .replace(/\\n/g, '')
        .replace(/\\r/g, '')
        .replace(/\\t/g, '')
    );
}

writeComponentDefinitionsFromTo(config.styleGuide.scanPath, config.styleGuide.outputFile)



