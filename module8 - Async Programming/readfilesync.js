console.log('Entering to read file operation synchrouly');

const fs = require('fs');

console.log('first');

console.log('Starting file read');
let fileData = fs.readFileSync('sample.txt', 'utf-8');

console.log(fileData);

console.log('second');

let updateFileData = fs.appendFileSync('sample.txt', '/n This line has been appended', );

console.log('File updated successfully');

console.log('third');