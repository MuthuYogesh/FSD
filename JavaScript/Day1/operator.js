let a = 1;
let b = "1";

let c = a !== b ? true: false;
console.log(c);

// " === " checks whether both the value and the datatype were same.

c = a !== b ? true: false;
console.log(c);
// " !=="  checks either the value or the datatype is different.

c = a == b ? true: false;
console.log(c);
// " == " checks only for same value

c = a !== b ? true: false;
console.log(c);
// " != " checks only for different vakue

console.log(typeof c)
// Typeof operator

// Operators in JS
// 1. Arithmetic Operator (  + | - | * | / | % | ++ | --  )
// 2. Logical Operator (&&, ||, !)
// 3. Comparison Operator (>, <, >=, <=, ==, ===)
// 4. Bitwise Operator (&, |, ^, ~, >>, <<, >>>)
// 5. Assignment Operator (=, +=, -+, *=, /=, %=)
// 6. Ternary Operator (condition) ? true : false
// 7. String Operator  Concatanation (+) operator overloading
// 8. Type Operator  (typeof var_name, obj_name instanceof class_name)


//Extra read: 
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables
// https://developer.mozilla.org/en-US/docs/Glossary/Scope 
// operator in js: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence