const firstName = require('./utils.js');
const add = require('./fn.js');
const sum = add(4,2);
const getNotes = require('./notes');
const msg = getNotes();

console.log(`my name is ${firstName}`);
console.log(`sum is ${sum}`);
console.log(`msg is ${msg}`)
