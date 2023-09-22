// HOF are functions that operate on other functions either by taking them as arguments or by returning them

// Basic approach for squaring an whole array

let myArr = [1,2,3,4,5]
// let squaredArr = [];

// for(i=0;i<myArr.length; i++){
//     squaredArr.push(myArr[i]*myArr[i]);
// }

// console.log(squaredArr);

// Using map
// Map iterates through each element in array and returns them as array

// let squaredArr = myArr.map((num)=>{
//     return num*num;
// });

// console.log(squaredArr);


// Convert INR to dollar
const INRSalary = [2000, 3500, 7876, 1034, 5487];

// Using map
let currentDollerRate = 80;
let _dollarSalary = INRSalary.map((amt)=>{
    return amt/currentDollerRate.toFixed(0);
});

console.log(_dollarSalary);

// Can do same thing with forEach also. 
// Difference is that forEach doesn't return any value. We need to console it and use within that scope only.


let _dollarSalaryAlt = INRSalary.forEach((amt)=>{
    // return amt/currentDollerRate.toFixed(0);
    console.log(amt/currentDollerRate.toFixed(0));
});

console.log('>>>>>>>>>>>>> ' + _dollarSalaryAlt);
