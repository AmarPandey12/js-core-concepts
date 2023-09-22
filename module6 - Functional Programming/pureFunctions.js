// 
// let a = 4;
// function add(x){
//     console.log(x+a);
// }

// add(2);

// If we change value of a but value of input is same, should produce same output. This 'A' is external factor
// affecting the output.

// let b = 4;
// function addi(x){
//     console.log(x+b);
//     b++;
// }

// add(2);

// This is impure function above

// Converting above one to pure function. This will give same output for same input.
function addPurePartial(x,a){
    console.log(x+a);
}

addPure(2,3);

// Above one is also partially impure as it has dependency on 'console'. which is external resource. Ideally there should
// be no dependency. It should only do the operation and return the output. 
// So below one is pure completely.

function addPure(x,a){
    return x+a;
}

console.log(addPure(2,3))