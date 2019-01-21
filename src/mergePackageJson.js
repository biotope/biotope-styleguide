var path = require('path'), fs = require('fs');
const styleGuideConfig = require('../config');

module.exports = function (config, Handlebars, hbsHelper) {
    const mkdirSync = function (dirPath) {
        try {
            fs.mkdirSync(dirPath)
        } catch (err) {
            if (err.code !== 'EEXIST') throw err;
        }
    }

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
                return [...aggregated]
            }
        },[]);
    };

    const mergeComponentDefinitions = (origin) => {

        var COMMENT_PSEUDO_COMMENT_OR_LT_BANG = new RegExp(
            '<!--[\\s\\S]*?(?:-->)?'
            + '<!---+>?'  // A comment with no body
            + '|<!(?![dD][oO][cC][tT][yY][pP][eE]|\\[CDATA\\[)[^>]*>?'
            + '|<[?][^>]*>?',  // A pseudo-comment
            'g');

        hbsHelper(Handlebars);
        let dir = config.global.dev;
        if (!fs.existsSync(dir)){
            mkdirSync(dir);
        }
        dir = path.join(config.global.dev, styleGuideConfig.styleGuide.variantDistFolderName);
        if (!fs.existsSync(dir)) {
            mkdirSync(dir);
        }
        const packages = fromDir(origin, /package\.json$/);
        const contents = packages.map((package) => {
            let expandedPackage = package;
            const packageUrl = package;
            expandedPackage = JSON.parse(fs.readFileSync(packageUrl, 'utf8'));
            expandedPackage.biotope.componentVariants.forEach((variant, index) => {
                let variantUrl = packageUrl.replace('package.json','');
                variantUrl = path.join(variantUrl, variant.file);
                const urlForPackage = path.join(styleGuideConfig.styleGuide.variantDistFolderName, expandedPackage.name + '.' + variant.file.replace('.hbs', '.html').replace('variants/', ''));
                const url = path.join(config.global.dev, styleGuideConfig.styleGuide.variantDistFolderName, expandedPackage.name + '.' + variant.file.replace('.hbs', '.html').replace('variants/', ''));
                expandedPackage.biotope.componentVariants[index].url = urlForPackage;
            
                fs.readFile(variantUrl, 'utf8', (err, data) => {
                    let result;
                    let template;
                    try {
                        template = Handlebars.compile(data);
                        result = template();
                        result = result.replace(COMMENT_PSEUDO_COMMENT_OR_LT_BANG, "");
                    } catch (err) {
                        console.log(err);
                        result = data; 
                    }
                    fs.writeFileSync(url, result);
                })
            });
            return expandedPackage;
        });

        return contents.map(content => content);
    };

    const writeComponentDefinitionsFromTo = (origin, target) => {
        fs.writeFileSync(target, JSON.stringify(mergeComponentDefinitions(origin))
            .replace(/\\n/g, '')
            .replace(/\\r/g, '')
            .replace(/\\t/g, '')
        );
    }

    writeComponentDefinitionsFromTo(styleGuideConfig.styleGuide.scanPath, path.join(config.global.dev, styleGuideConfig.styleGuide.outputFileName));
};