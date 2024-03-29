#!/usr/bin/node

// Prints a Rectangle with the parameters passed

module.exports = class Rectangle {
  constructor (width, height) {
    if (typeof width === 'number' && typeof height === 'number' && width > 0 && height > 0) {
      this.width = width;
      this.height = height;
    }
  }

  print () {
    for (let i = 0; i < this.height; ++i) {
      let s = 0;

      for (; s < this.width; ++s) {
        process.stdout.write('X');
      }

      if (s === this.width) {
        console.log('');
      }
    }
  }
};
