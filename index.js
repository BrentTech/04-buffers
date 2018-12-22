'use strict';

const fs = require('fs');


let artStart = new Buffer('<article>');
let artEnd = new Buffer('</article>');

let hTwoStart = new Buffer('<h2>');
let hTwoEnd = new Buffer('</h2>');

let liStart = new Buffer('<li>');
let liEnd = new Buffer('</li>');

let hThreeStart = new Buffer('<h3>');
let hThreeEnd = new Buffer('</h3>');


fs.readFile('./files/pair-programming.txt', (err, data) => {
  if(err) { throw err; }

  let bestBuffer = Buffer.concat([artStart, data, artEnd]);

  fs.writeFile('./files/pair-programming.html', bestBuffer, err => {
    if(err) { throw err; }
    console.log('It has been written!');
  });
});

// data is a buffer -> we shoudl concat the needed things to it.

// let testArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// data.slice(index)
// Algorithm
// - Identify the unique characters that end sentences and lines (., !, ?, \)
// - Create buffers for all html character tags required
// - Copy the data buffer to a new array that will be mutated
// - Iterate over that new array and seperate it into smaller arrays at the unique characters, pushing into an array
// - Consider splice?
// - When iterating over the array ensure that only the new array is mutated
// - Iterate over this new array of arrays and insert (splice) the html tag buffers where appropriate
// - Concatinate this all back together
// - Write file, passing in this newly modified buffer