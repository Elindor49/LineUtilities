// save-json-api.js
const fs = require('node-fs');
const getDb = require('../db');

const db = getDb();

fs.mkdir('./build/static/db');
fs.copy('./src/server/db/data.json', './build/static/db/data.json');

// package.json
"scripts": {
  "deploy": "npm run build && npm run save-json-api && gh-pages -d build"
},
"homepage": "https://elindor49.github.io/LineUtilities/",
