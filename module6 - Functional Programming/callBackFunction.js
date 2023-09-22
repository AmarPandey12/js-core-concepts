// // Function passed into another function as argument because functions are considered as object in JS.
// // This can be invoked at later point of time.

// // // Old school way and it's problem
// // function firstName(fName){
// //     return fName;
// // }

// // function lastName(lName){
// //     return lName;
// // }

// // console.log(firstName('Amar'), lastName('Pandey'));

// // Same thing as callback
// function firstName(fName, callback){
//     // callback('Pandey')
//     // console.log(fName, callback('Pandey'));
//     console.log(fName, callback('Pandey'));
//     // console.log(callback('Pandey'))
// }

// function lastName(lName){
//     // console.log('debug 1');
//     // console.log(lName);
//     return lName;
// }

// firstName('Amar', lastName);


// One more program

const isEven = (num)=>{
    return num%2 === 0 ? true : false
}

let printResult = (reqNum, n)=> {
    let res = reqNum(n);
    console.log(`Requested number ${n} is even ${res}`);
}

printResult(isEven, 8);