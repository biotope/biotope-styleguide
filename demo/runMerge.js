const mergePackageJson  = require('../src/mergePackageJson');
const Handlebars = require('handlebars');
const config = require('../config');
const hbsHelper = require('../demo/hb2-helpers');


mergePackageJson(config, Handlebars, hbsHelper);