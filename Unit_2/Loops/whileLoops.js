/* 
    ? While Loops

    - loops through code while a specific condition is true

    Structure:
    while (condition) {
        code
    } 

    - The main purpose for while loops are when the iteration is uncertain

*/

let n = 1;

while(n<10) {
    console.log(`n before addition, start of loop: ${n}`); // string interpolation
    n++;
    console.log(`n after addition, end of loop: ${n}`);
    console.log("------------------------");
}

console.log(`While loop completed. Final value ${n}`);

// Use a while loop to create and log a string, pretend online cart

let cartMsg = ``;
let z = 0; // zero items in cart

while(z<5){
    z++;
    cartMsg = `You have ${z} item(s) in your cart.`;
    console.log(cartMsg);
}
console.log(`You have ${z} items in your cart, checkout now?`);


let city = [
    "building",
    "building",
    "light pole",
    "bridge",
    "building",
    "light pole",
    "tree",
    "light pole",
    "empty street",
];

let structure = city[0];
// console.log(structure); //building

let pos = 0;
// console.log(city[pos]); //building

console.log("Welcome to the Adventures of Spider-Man! Looks like there's a thief on the loose!");

while(structure != "empty street"){
    console.log(`Spider-Man swings from the ${structure} in pursuit of the thief!`);
    pos++;
    structure = city[pos];
    console.log(`Spier-Man lands on the ${structure}.`);
    console.log(`----------------`);
}

console.log(`Spider-Man lands in the ${structure}! He corners and confronts the thief! Spidey saves the day again!`);

/* 
    ? Do While Loops

    - Loop through code while a specified condition is true
        ! loop will run the code block once, before checking if the condition is true, and stays running if condition is not

    Structure:
    do {
        code
    } while ( condition )
*/

let num = 5;

do {
    console.log(`The number is ${num}`);
    num++;
} while (num < 10)

console.log(`Final total after do while ran: ${num}`);

// Do code block will run once, even if condition is not true.

let value = 20;

do {
    value *= 2;
    console.log("Do code block is running...")
} while (value > 100);

console.log(value);

// Mock switch a group of accounts from deactivated to active, use a boolean

// Declare and initialize an object called accounts
let accounts = {
    acct1: false,
    acct2: false,
    acct3: false,
    acct4: false,
    acct5: false,
};

// Use square bracket notation with the object's property key to get the t/f value
// Want a variable that starts at 1 (acct1, etc.) that can be incremented
let acctNum = 1;

do {
    // create a log message to prove the acct is currently inactive
    console.log(
        `acct${acctNum} is currently inactive: set to ${
        accounts[`acct${acctNum}`]}.`
);

    // Activating message and set acct to true
    console.log(`Activating...`);
    accounts[`acct${acctNum}`] = true;

    // Confirmation message
    console.log(
        `acct${acctNum} is currently active: set to ${
        accounts[`acct${acctNum}`]
        }.`
    );

    // After acct is activated, add 1 to acctNum to move to next acct
    acctNum++;
} while (accounts[`acct${acctNum}`] == false)

// Process message complete
console.log("All accounts are active.");
console.log(accounts);
console.table(accounts);