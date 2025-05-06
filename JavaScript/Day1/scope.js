{
    var a = 5;
    let b ="hello, World";
    const c = 1.5;
}

console.log(a)     // Global Scope
// console.log(b)  // Block Scope not accesible outside the block
// console.log(c)  // Block Scope not accesible outside the block

function scope_check(){
    var a = 5;
    let b ="hello, World";
    const c = 1.5;
}

// console.log(a)  // function scope can't access outside of the function
// console.log(b)  // function scope can't access outside of the function
// console.log(c)  // function scope can't access outside of the function

// Hoisting: Accesing Variable or Function before it's Declaration

console.log(x)
var x = 1;

// console.log(y)   // Cannot accesse 'y' before initialization. Because of TBZ error
// let y = 2;

// console.log(z);  // Cannot accesse 'z' before initialization. Because of TBZ error
// const z = 3;

// TBZ - Temporal Dead Zone has the defined variables
// let and const is Hoisted but with TBZ error