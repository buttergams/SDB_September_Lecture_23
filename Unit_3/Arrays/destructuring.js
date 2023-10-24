//! Array Destructuring
/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable
*/

const fullName = [`Jane`, `Doe`];

const [firstName, lastName] = fullName;

//! Spread
/* 
    - denoted by three consecutive periods: ...
    - pulls out all elements of an array and gives them to you as standalone list of elements

    * Concept of the spread operator - NOT syntax

    const fullName = [ `Rocket`, `Racoon` ];
    ...fullName // `Rocket`, `Racoon`
    const elements = ...fullName;
*/

const copiedFullName = [...fullName];
console.log(`Mrs.`);
console.log(fullName, copiedFullName);

const prices = [10,99,5.99,3.99,6.59];
console.log(Math.min(...prices));

//! Rest
const fullName2 = [
    `Jane`, `Doe`, `Mrs`, {month: 3, date: 22, year: 1973},
    `testOne`, 2, `test3`, 4, true, false
];

const [ fName, lName, , , ...otherInfo ] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);

const [,,,birthday] = fullName2;
console.log(birthday);