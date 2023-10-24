//! Objects

let marvelHero = {
    fullName: `Peter Parker`,
    codeName: `Spider-Man`,
    age: 25,
    active: true 
}

/* 
* Object Literal
    when our values are written within our keys,
        - Hard Coded

* Structure
    keyword objectName = {
        key: value,
    }

* Objects are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    //genre: `animated`,
    seasons: {
        "season one": [
            {
                episode_title: `Simpsons Roasting on an Open Fire`,
                aired: `1989-12-17`
            },
        ],
        "season two": [/* ... */],
        "season three": [/* ... */]
    },
    currentlyRunning: true,
}

//console.log(theSimpsons.genre); // dot notation
//console.log(theSimpsons[`genre`]); // square bracket notation

theSimpsons.characters = [`Homer`,`Marge`,`Bart`,`Lisa`,`Maggie`];
console.log(theSimpsons);

/* 
    - Use an array method to add another character to the the character array.
    - console.log just the characters from theSimpson object.
*/

theSimpsons.characters.push(`Ned Flanders`);
console.log(theSimpsons.characters)

/*
    - Navigate to season one, episode two, and change the date to reflect a date of 1990-01-14. 
*/

theSimpsons.seasons["season one"][1].aired = `1990-01-14`;