#!/usr/bin/node

let myCounter = 0;

exports.logMe = function count (item) {
  console.log(`${myCounter}: ${item}`);
  myCounter += 1;
};
