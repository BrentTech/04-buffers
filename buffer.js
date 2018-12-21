'use strict';

const fs = require('fs');

let bufferOne = new Buffer('\'use strict\';\n');
let bufferTwo = new Buffer('let array = [\'Brent\', \'Kristin\', \'Chewy\', \'Wicket\'];\n');
let bufferThree = new Buffer('array.forEach(name => {\n');
let bufferFour = new Buffer('console.log(name);\n');
let bufferFive = new Buffer('});\n');

let buffer = Buffer.concat([bufferOne, bufferTwo, bufferThree, bufferFour, bufferFive]);


fs.writeFile('./files/loop.js', buffer, err => {
  if(err) { throw err; }
  console.log('a thing has been made!');
});
