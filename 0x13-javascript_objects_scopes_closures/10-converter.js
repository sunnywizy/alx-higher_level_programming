#!/usr/bin/node

// Converts a number from base 10 to another base passed as argument
// with Closure

exports.converter = function (base) {
  function theConverter (n) {
    return n.toString(base);
  }

  return theConverter;
};
