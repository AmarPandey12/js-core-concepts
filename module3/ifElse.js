// function numOpp(num){
//     return !num;
// }
// console.log(numOpp(false));

numOpp2 = (num) => {
    return 1-num;
}
console.log(numOpp2(0));

let num1=2;
let num2=3;
if(num1==num2)
 console.log("true");
else
 console.log("false");


 function checkAge(data) {
    if (data === { age: 18 }) {
    console.log("You are an adult!");
    } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
    } else {
    console.log(`Hmm.. You don't have an age I guess`);
    }
   }
   
checkAge({ age: 18 });