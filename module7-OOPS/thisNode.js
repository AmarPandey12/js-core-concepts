// strict vs non strict mode

// Here we will see 'this' in node js under non strict mode
// Scenario 1:
//console.log(this); // refers to blank object

// Scenario 2: this inside function
// If function being referenced is 'Regular function', 'This' refers to global object
// function thisFunc(){
//  console.log(this);   
// }

// thisFunc()

// Scenario 3: this inside obj->fuunction
// Function inside object is called 'Method'.
// If function being referenced is 'Method' in object, 'This' refers to object itself
// const obj = {
//     name: 'Amar',
//     age: 41,
//     fn: function(){
//         console.log(this);
//         console.log(this.name);
//     }

// }

// obj.fn();
// console.log(obj.fn());

// Scenario 4: this inside obj->function->function
// If function is inside obj->function->function, 'This' refers to global object
const objTwo = {
    name: 'Amar',
    age: 39,
    gender: 'M',
    fnOne: function(){
        console.log('obj->fn >>> '+this);
        function fnTwo(){
            console.log('obj->fn->fn >>> '+this);
        }
        fnTwo();
    }
}

objTwo.fnOne();
// console.log(_obj.name);



// Scenario 5: this inside obj->function->obj->function // Is this possible