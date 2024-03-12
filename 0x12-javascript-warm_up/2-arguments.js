#!/usr/bin/node

// Check the number of arguments passed
const numOfArgs = process.argv.length - 2;

if (numOfArgs === 0) {
  console.log('No argument');
} else if (numOfArgs === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
