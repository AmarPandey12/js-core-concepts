console.log(a);

var a = 10;
callMe();

// Functions are stored completely in memory during memory allocation phase
// Variables are only initialised during memory allocation phase but no value is assigned.

function callMe(){
    console.log('Hi. Welcome to hoisting');
}