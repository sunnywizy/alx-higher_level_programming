#!/usr/bin/node

function add (a, b) {
  console.log(a + b);
}

const firstInteger = parseInt(process.argv[2]);
const secondInteger = parseInt(process.argv[3]);

if (!isNaN(firstInteger) && !isNaN(secondInteger)) {
  add(firstInteger, secondInteger);
} else {
  console.log('Please provide two valid integers.');
}
