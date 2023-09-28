/* 
    CONDITIONALS
    - Evaluates an expression and responds if it is true.
        - Falsy
            - false
            - 0
            - empty strings
            - null
            - undefined
            - NaN (not a number)
*/

//IF Conditional Statements

let isOn = true;

if (isOn == true) {
    console.log('The light is on in the room!');
}

/* 
    Structure:
    if(condition evaluated) {
        code that runs if expression is true
    }
*/

if (isOn) {
    console.log('The light is on!');
}

let isOff = false;

if (isOff == false) {
    console.log('The light is off.')
}

// IF ELSE Conditional Statement

let temp = 75

if (temp < 70) {
    console.log('I will grab a sweater')
} else {
    console.log('Oh boy it is shorts weather!')
}

// AND, &&, check to see if both are equal

let username = 'myUsername';
let password = '1234'; // to see false else statement run, change pass

if (username == 'myUsername' && password == '1234' ) {
    console.log('Welcome user! You are logged in.')
} else {
    console.log('Login error, try again.')
}

// OR, ||, check if one statement is true OR the other.

let email = 'me@email.com';
let uName = 'buttergams';

if (email == 'me@email.com' || uName == 'buttergams' ) {
    console.log('Welcome user!')
} else {
    console.log('Login info was incorrect')
}

// NOT, !

// let rain = true; // Nothing in the console
let rain = false;

if (!rain) {
    console.log('It is a sunny day!')
}

if (rain != true) {
    console.log('It is a sunny day!')
}

// ELSE IF Conditional Statement
// This can let us check more than one condition
// Once one of the conditions is met, it will exit code

//let grade = 92; // This is a passing grade.
// let grade = 70; // Not passing. Reach out for help.
let grade = 50; // Needs to be reworked and resubmitted.

if (grade >= 75) {
    console.log('This is a passing grade.')
} else if (grade >=69) {
    console.log('Not passing. Reach out for help.')
} else {
    console.log('Needs to be reworked and resubmitted.')
}

