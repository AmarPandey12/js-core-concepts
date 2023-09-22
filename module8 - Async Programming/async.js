// Sample code running in sequence
console.log('first');
console.log('second');
console.log('third');
console.log('fourth');

// Sample code running asynchronously
console.log('first');
setTimeout(secondOp, 2000);
setTimeout(thirdOp, 2000);
console.log('fourth');

console.log('');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');

function secondOp(){
    console.log('second async');
}

function thirdOp(){
    console.log('third async');
}

console.log('');
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log('');
