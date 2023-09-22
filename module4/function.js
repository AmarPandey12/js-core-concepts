// function checkAge(data) {
//     if (data === { age: 18 }) {
//     console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//     console.log("You are still an adult.");
//     } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//     }
//    }
   
// checkAge({ age: 18 });


// Basic old school function declaration
// function callMe(){
//     console.log('Hi dude');
// }
// callMe();

// Basic old school function declaration ver2
// function callMe(){
//     return 'Hi dude';
// }
// console.log(callMe());


// // function as expression
var outPut = function callMe(){
    return 'HI dude';
}
console.log(outPut);
callMe();
// console.log(callMe());

// function as expression as anonymous
// var outPut = function (){
//     return 'HI anonymous dude';
// }

// console.log(outPut());

function Add(){
    console.log(answer)
    var answer = 2
};
Add()

// To avoid this type of memory leak, you can use the “Function Scoping” technique

// Variables can be declared and initialized without the var or let keywords. 
// However, a value must be assigned to a variable declared without the var keyword. 
// The variables declared without the var keyword become global variables, irrespective of where they are declared.

// let num121 = 32;
// function cal() {
//     var num1=6;
//     var num2=5;
//     var num3=num2*num1;
//     console.log(num121);
// }
// cal();