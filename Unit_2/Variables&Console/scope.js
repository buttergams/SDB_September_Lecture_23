//let
// CTRL+D ~ multi cursor
let letVariable = 12;

function varTest() {
    let letVariable = 32;

    console.log(`let - Outside If: ${letVariable}`);
    if(true) {
        let letVariable = 45;
        console.log(`let - Within If: ${letVariable}`);
    }
    console.log(`let - Outside If: ${letVariable}`);
}

varTest();
console.log(`let - Outside Function: ${letVariable}`);

//const

function constTest() {
    const scope = 1;

    if(true) {
        const scope = 2;
    }
    console.log(scope);
}
constTest()