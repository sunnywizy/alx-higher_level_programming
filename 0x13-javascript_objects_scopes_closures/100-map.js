#!/usr/bin/node

const myArray = require('./100-data').list;

console.log(myArray);
console.log(myArray.map((x, idx) => x * idx));
