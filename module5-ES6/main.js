// Concept of modules and modularity

// function add(a,b){
//     console.log(a+b);
// }

// function sub(a,b){
//     console.log(a-b);
// }

// function mult(a,b){
//     console.log(a*b);
// }

// function div(a,b){
//     console.log(a/b);

// }

// add(2,3);
// sub(2,1);
// mult(4,5);
// div(16,4);

// Above mentioned code can be combined as independent module in seperate file

const calculator = require('./calc')

calculator.addition(2,3)

