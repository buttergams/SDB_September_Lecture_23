/* 
    Ternary Conditional Statement
    - Neat syntax
    - A shortcut for writing an if/else or else/if
    - (condition) ? true result : false result;
    -Ternaries require the default/else catch all, needs not
*/

let num = 6;

// Ternary:

(num > 0) ? console.log('Yes') : console.log('No');

// Instead of:

if (num > 0) {
    console.log("Yes")
} else {
    console.log("No")
}

// Ternary with two conditions vs Else If statement

// let x = 1; // result in all goodbyes
// let x = -1 // result in all yes
let x = 0; //results in all hellos

// Else If statement
if (x == 0) {
    console.log("hello");
} else if ( x < 0 ) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary

(x == 0) ? console.log("Hello") : (x < 0) ? console.log("Hi") : console.log("Goodbye");

// Other way to write ternary

(x == 0) ? console.log("Hello!")
    : (x < 0) ? console.log("Hi!")
    : console.log("Goodbye!")