/*! Operators
    These are what help us manipulate our data so that we can update, increase, separate, or simply change it all together.
    - Plus        +
    - Times       *
    - Power       **
    - Dot         .
    - Assignment  =
    - Comparison  ==
    
    Used to:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditional

    Expressions & Statement:

    keyword name (expression) {
        code block that runs
    }
*/

/* 
    Comparison Operators
    - JS implements 'coercion' when comparing values.
        - Coercion is the process of converting on value from one type to another.
*/

// Equal To, ==
// JS assumed we wanted to check if 3 = 3, this is checking values

console.log("3" == 3);

// Strict Equal To, ===
// Check if the two values and the two datatypes are equal.
// Equal value and of the same datatype.

console.log(3 === 3); // true
console.log("3" === 3); // false

// Not Equal To, !=, only checking values

console.log("3" != 3); // false
console.log("3" != 4); // true

//Strict Not Equal To, !==, compare/check both datatypes and values

console.log("3" !== 3); // false
console.log("3" !== 4); // true

// Greater THan
3 > 2;

// Less Than
4 < 6;

// Greater Than or Equal To
// ! >= <= NOT => =<

console.log( 3 >= 2 ); // true

// Less Than or Equal To

console.log( 1 <= 3 ); // true

// And, &&

2 && 3;

// Or, ||

2 || 3;

/* 
    Logical Operators
*/

// Addition Operator
let r = 4;
console.log(r += 1); // r = r + 1, answer: 5
console.log(r); // 5

// Subtraction Operator
r -= 3; // r = r - 3

// Multiplication Operator
r *= 2; // r = r * 2

// Division Operator
r /= 1 // r = r / 1

// Remainder Operator
r %= 1; // r = r % 1

// Exponential Operator
r **= 1; // r = r ** 1;