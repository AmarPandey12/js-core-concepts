// Basic function
function samOne(){
    console.log('M basic old school function');
}
samOne();

// Old school to arrow now
let a = ()=>{
    // console.log('Got promoted from old school');
    return 'Got promoted from old school';
}
console.log(a());


// Can remove {} if only single line is inside arrow function
let b = ()=> console.log('Got promoted from old school like this as well');
    // return 'Got promoted from old school';
b();

