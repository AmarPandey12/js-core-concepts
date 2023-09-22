// Chaining is a concept where we can chain multiple HOF.
// It reduces complexity of code and calculations.

// Problem statement:

const _empData = [
    {empName: 'Amar', gender: 'M', age: 24},
    {empName: 'Ranjit', gender: 'M', age: 33},
    {empName: 'Sunil', gender: 'M', age: 20},
    {empName: 'Vismaya', gender: 'F', age: 32},
    {empName: 'Radha', gender: 'F', age: 44},
    {empName: 'Deepak', gender: 'M', age: 34}
];

// Return ages of all male 

let _maleEmp = _empData.filter((obj)=>{
    return obj.gender === 'M'
});

console.log(_maleEmp);

let _maleAges = _maleEmp.map((obj)=>{
    return obj.age;
});

console.log(_maleAges);
// Calculate sum of ages for all male employees

// Firstly we need to filter out all male employees
// Then we can sum of ages for filtered result



let _sumEmpAge = _maleEmp.reduce((acc, num)=>{
    let _sumAge = acc+ num.age;
    return _sumAge;
},0);

console.log('Sum of all male employees ' + _sumEmpAge);

// All these individual HOF can be combined using chaining

// Get male ages using chain
let _maleEmpCH = _empData.filter((obj)=>{
    return obj.gender === 'M'
}).map((obj)=>{
    return obj.age;
});

console.log('All male employees ages ' + _maleEmpCH);

// Get male ages sum using chain

let _maleEmpCHSum = _empData.filter((obj)=>{
    return obj.gender === 'M'
}).map((obj)=>{
    return obj.age;
}).reduce((acc, num)=>{
    // let _sumAge = acc+ num.age;
    let _sumAge = acc+ num;
    return _sumAge;
},0);

console.log('All male employees ages sum ' + _maleEmpCHSum);