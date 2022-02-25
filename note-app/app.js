const firstName = require('./utils.js');
const add = require('./fn.js');
const sum = add(4,2);
const getNotes = require('./notes');
const msg = getNotes();

const validator = require('validator')

console.log(`my name is ${firstName}`);
console.log(`sum is ${sum}`);
console.log(`msg is ${msg}`)

console.log(validator);
console.log(validator.isEmail('example@gmail.com'));
console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('https:/mead.io'))
