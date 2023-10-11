// destructing assignment is a js expression that makes it possible to unpack values from
// array or properties from object into distinct variables

let arr = ['Hi', 'i', 'am', 'Amar'];

// to fetch 'i' and 'am'
// Old school way

// let a  = arr[1]
// let b  = arr[2]

// console.log(a);
// console.log(b);

// ES6 Way
// let [a,b,c,d] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Will be undefined since array limit has reached
// console.log(e);


// Destructing objects
// let myObj = {
//     name:'Amar',
//     age: 40,
//     gender: 'M'
// }

// {} to be used for object destructing
// It wont work as keys should be same
//let {aa,bb,cc} = myObj;

// let {name,age,gender} = myObj;

// console.log(name)
// console.log(age)
// console.log(gender)

// if we want ot give these keys specific name
// Like below

// let {name: N,age: A,gender: G} = myObj;

// console.log(N)
// console.log(A)
// console.log(G)

// If we have nested objects

let myObj = {
    name:'Sam',
    age: 40,
    gender: 'M',
    address: {
        country: 'India',
        City: 'Bangalore'
    }
}

let {name, age, gender, address: {country}} = myObj;

console.log(address);

// To destructure this nested object
console.log(country);