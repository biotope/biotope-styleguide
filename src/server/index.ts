import { Application } from 'express';
import createComponentsRoute from './createComponentsRoute';

const express = require('express');
const app: Application = express();
const path = require('path');
const componentsFolder = '../../demo/components';

app.use(express.static(path.join(__dirname, '../../dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.get('/components', createComponentsRoute({ componentsFolder }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


