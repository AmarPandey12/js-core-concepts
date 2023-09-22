console.log('Entering to read file operation synchrouly');

const fs = require('fs');

console.log('first');

console.log('Starting file read');
let fileData = fs.readFile('sample.txt', 'utf-8', callBack);

function callBack(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
}
// console.log(fileData);

console.log('second');

// let updateFileData = fs.appendFile('sample.txt', '/n This line has been appended', cb );

console.log('File updated successfully');

console.log('third');