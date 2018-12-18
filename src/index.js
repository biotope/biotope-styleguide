
var path = require('path'), fs = require('fs');
const config = require('./../config');
const Handlebars = require('handlebars');
const bioHelpers = require('./../src/hb2-helpers');
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
        }
        else {
            return []
        }
    }, []);
};

const mergeComponentDefinitions = (origin) => {
    bioHelpers(Handlebars);
    const packages = fromDir(origin, /package\.json$/);

    const contents = packages.map((package) => {
        let expandedPackage = package;
        const packageUrl = package;
        expandedPackage = JSON.parse(fs.readFileSync(packageUrl, 'utf8'));
        expandedPackage.biotope.componentVariants.forEach((variant, index) => {
            let variantUrl = packageUrl.replace('package.json','');
            variantUrl = variantUrl + variant.file.replace('/', '\\');
            const url = config.styleGuide.distFolder + expandedPackage.name + '.' + variant.file.replace('.hbs', '.html').replace('\\variants\\', '');
            expandedPackage.biotope.componentVariants[index].url = url;
            fs.readFile(variantUrl, 'utf8', (err, data) => {
                const template = Handlebars.compile(data);
                const result = template();
                console.log(expandedPackage.biotope.componentVariants[index]);
                fs.writeFileSync(url, result);
            })
        });
        return expandedPackage;
    });
    console.log(contents);
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



