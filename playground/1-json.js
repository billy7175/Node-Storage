const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// console.log(bookJSON);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);
//

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user =JSON.parse(dataJSON);
user.name ='Gunther';
user.age = 54;

console.log(dataBuffer);
console.log(dataJSON);
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);