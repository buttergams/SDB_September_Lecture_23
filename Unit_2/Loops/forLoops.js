/* 
    ? Loops

    Loops loop through a block of code a number of times.

    ! If stuck in an accidental infinite loop:
        ctrl+c, ctrl+z

    ? For Loops
        Take in 3 parameters 
            - initial expression
            - condition
            - increment expression
    
    Structure:
    for (initial expression ; condition ; increment expression) {
        block of code
    }
*/

// Start at 0 and increase to 10
for ( i = 0; i <= 10; i++ ) {
    console.log(i)
}

console.log("Finished for loop.")

// Start at 0 and increase by 2 to 20
for (i = 0; i <= 20; i += 2) {
    console.log(i)
    //console.log("You get a 50% off coupon!")
}

for ( i = 10; i >= 0; i-=1 ) {
    console.log(i)
}

console.log("Finished for loop.")

// If using a straight return: We don't need to use {}
for ( i = 5; i >= 0; i--) console.log(i);

// Spell out a word letter for letter
let firstName = "Brandon";
console.log(firstName.length);

for ( i = 0; i < firstName.length; i++ ) {
    console.log( i, firstName[i])
}

// Change the value of a variable with a for loop
let sum = 0;

console.log(`Sum equals ${sum} before the for loop.`)

for ( let i = 1; i <= 5; i++ ) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}

console.log(`Sum equals ${sum} after the for loop.`)

/* 
    ? For In Loops

    - Loop through the properties of an object

    Structure:
    for ( key in object ) {
        code to run
    }

    key is a random variable name
    object refers to the variable name of the object being targeted.
*/

let student = {
    name: "Harry",
    animal: "Owl",
    house: "gryffindor",
    boyWhoLived: true
}

console.log(student.name); // Harry, dot notation
console.log(student["name"]); // Harry, sq. brackets

for (item in student) {
    console.log(item); // log each key name in the object
    console.log(student[item]); // log each value of each key
}

// Array is considered an object by JS

let catArray = [
    "tabby",
    "maine coon",
    "rag doll",
    "russian gray"
];

for ( cat in catArray ) {
    //console.log(cat);
    console.log(catArray[cat]);
}

/* 
    For in loops can be used on objects and arrays.
    But if array index array is important, it's better to use a:
        - for loop
        - for of loop
        - Array.forEach()
*/

/* 
    ? For Of Loops:

    - Loops through the values of an iterable object
        iterable - an object that has values it can go through
    
    structure:
    for ( variable of iterableData ) {
        code to run
    }

    Can loop over arrays, strings, etc.

    For of does not work with objects
    for (item of student2) {
        console.log(item);
    }
*/

let dogArray = [
    "husky",
    "pitbull",
    "corgi",
    "golden retriever"
];

//for (dog of dogArray ) {
//    console.log("For of loop: ", dog);
//}

for (doggo of dogArray ) {
    // use an if conditional to make a separate console.log for husky
    if (doggo === "husky") {
        console.log(`I think the ${doggo} is yappin for his breakfast`)
    } else if (doggo === "pitbull") {
        console.log(`The ${doggo} is nappin in the sunlight`)
    } else {
        console.log(`The ${doggo} is sitting there quietly`)
    }
}