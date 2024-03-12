#!/usr/bin/node

// Parse arguments into integers and sort them
const integers = process.argv.slice(2).map(arg => parseInt(arg)).sort((a, b) => b - a);

// Check if there are at least two integers
if (integers.length < 2) {
  console.log(0);
} else {
  console.log(integers[1]);
}
