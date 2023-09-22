// sum of all the elements in array

const _myArr = [12,45,57,87,53,56];

// Imperative approach
let _myArrSum = [];
let sum = 0; // working as accumulator

for(let i=0; i<_myArr.length; i++){
    sum = sum + _myArr[i];
}

console.log('sum of my array is '+sum);

// Declarative approach. Using Reduce
// Reduce: always returns a single value.
        // usually takes 4 args as input. We need only 2 inputs to be passed.
        // accumulator and value is passed as params

let _myArrSumDecla = _myArr.reduce((acc, num)=>{
    let _arrSum = acc+num;
    return _arrSum;
}, 0 );

// This zero is accumulator or can say this is to start calculation.
// In case we need to multiply, this will be 1 to start.

console.log('sum of my array using reduce is '+ _myArrSumDecla);
                                                                 

// Similarly multiplication for all numbers
let _myArrMultDecla = _myArr.reduce((acc, num)=>{
    let _arrMulti = acc*num;
    return _arrMulti;
}, 1 );

console.log('Multi of my array using reduce is '+ _myArrMultDecla);