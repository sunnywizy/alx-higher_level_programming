#!/usr/bin/node

const files = require('files');
let contents = '';

contents = contents.concat(files.readFileSync(process.argv[2]));
contents = contents.concat(files.readFileSync(process.argv[3]));
files.writeFileSync(process.argv[4], contents);
