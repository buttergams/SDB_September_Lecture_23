let hulu = {
    id: 1,
    movies: [
        {
            title: `Tropic Thunder`,
            genre: ["Action", "Comedy"],
            rating: "PG-13",
            runTime: 121,
            released: 2008,
        },
        {
            title: `Ready Player One`,
            genre: [`Sci-Fi`],
            rating: `PG-13`,
            runTime: 140,
            released: 2018,
        },
    ]
}

//* Object.keys() - returns back an array of keys 
console.log(Object.keys(hulu));

const listKeys = Object.keys(hulu);
console.log(listKeys);

//* Object.values() - returns an array of values.
console.log(Object.values(hulu));

//* Object.assign() - copies all enumerable properties from one or more sources.

let objOne = {name: `bo`};
let objTwo = {work: `manger`};

let newObject = Object.assign(objOne, objTwo);
console.log(newObject);

//* delete object.key
console.log(`BEFORE: `, Object.keys(futurama));
console.log(`AFTER: `, Object.keys(futurama));
