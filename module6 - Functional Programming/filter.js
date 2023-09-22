// Problem statement: filter out all even numbers from an array

const _myArr = [20, 43, 34, 76, 98, 40, 28, 11, 45, 79];

// Solution 1: Imperative approach
// let _myEvenArr = [];
// for(i=0; i<_myArr.length; i++){
//     // _myArr[i]%2==0 ? _myEvenArr.push(_myArr[i]) : false
//     if(_myArr[i]%2==0) {
//         _myEvenArr.push(_myArr[i]);
//     }
    
// }

// console.log(_myEvenArr);

// Declarative approach : Functions method

// let myEvenArrDec = [];

let _myEvenArrDec = _myArr.filter((ele)=>{
    return ele%2==0;
});

console.log(_myEvenArrDec);


