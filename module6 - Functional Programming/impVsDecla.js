// we will be givemn a number. Need to check if square of that number is even or not

// Imperative way
// const a = 6;
// const aSquare = a*a;
// let isEven;

// if(aSquare %2 == 0){
//     isEven = true;
// }else{
//     isEven = false;
// }

// console.log(isEven);

// // Modern day declarative way
// function checkSquare(num){
//     let sq = num*num;
//     let evenSq = sq%2 === 0;
//     return evenSq ? true : false
//     // console.log(evenSq ? true : false);
// }
// console.log(checkSquare(11))

// More precisely declarative
let isSquareEven = (num)=>{
    return num*num%2 === 0 ? true : false;

}

console.log(isSquareEven(12));