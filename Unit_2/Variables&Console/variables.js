// Single line comment: ctrl+/
/*
Multi line comment:
shift+alt+a
*/

// Variables

/*
    Variable are named containers for storing data values.

    We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable through 3 different keywords:
    1. var
    2. let
    3. const
    4. (none)
*/

let a = 2;

//  (1)    (2)  (3) (4)
    let     b    =   1;

/*
    1. Use JS keyword to denote the creation of a variable.
    2. The name of the variable. What the dev refers to/calls on to access the stored value
    3. Assignment operator.
    4. The initial variable value. 
*/

// Variable Declaration vs Initialization

// Declaration: declaring the variable but not assigning it.
let x;

let apple;

//Initialization: variable is give/set a value.
let y = 4;
let life = 42;

//Reassign a variable value, reassign declared or initialized variable (not const keyword values):
x = 20;
console.log("Initialization 1: ", x);

x = 100;
console.log("Initialization 2: ", x)

apple = 12;

// Assigning to Other Variables / create variables from variables

let firstName = "Brandon"; //string datatype
let lastName = "Blumenberg";

let fullName = firstName + " " + lastName;
let fullN = firstName + lastName;

/*
    CONSOLE

    - A place to see  text output/code results.
    - There is a console object attached to the browser (web).
    - We have a console in VSC to view results/logs.

    .log(), this is the log method of the console, log will print whatever is passed
*/

console.log(fullName); // Brandon Blumenberg

console.log(2+2); // 4

console.log(x); //Last initialization

// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

today = "Super!";
javaScript = "Meh."; // TypeError: Assignment to constant variable.

console.log(today, javaScript);