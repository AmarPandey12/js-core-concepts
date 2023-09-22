// Problem 1
// console.log(loud)
// var loud = 'Me loud';

// Problem 2
// var a = 10;
// function varScope(){
//     var b=11;
//     console.log(b);
//     console.log(a);
// }

// varScope();
// console.log(b);

// Problem 3
// var can be redeclared and reassigned both
var a=0;
// for(var a=2; a<=10; a++){
//     setTimeout(function(){
//         console.log(a);
//     },1000);
// }


console.log(typeof (new(class{class(){}})));

const obj = { sam:1 }
obj.pam = 2;

delete obj.sam;

console.log(obj);