/*

!   Challenge Details:
    - Create an object called "hulu".
    - This object will have 3 main keys:
        - id, movies, and shows.
    - id will simply be an integer.
    - movies will be an array of objects that represent individual movies.
        These objects will have:
                - title will be a string
                - genre will be an array of strings
                - rating will be a string
                - run time will be an integer representing total minutes (whole number)
                - year released will be an integer.
    - shows will be an array of objects that represent individual shows.
        - These shows will have the following keys:
            - title will be a string
            - number of seasons an integer
            - seasons will be an array of objects that will represent individual seasons.
                - A season will have the following keys:
                    - season will be an integer
                    - number of episodes will be an integer
                    - episodes will be an array of objects that hold individual episodes.
                        - Episodes will only detail the title of the episode and an original aired date.
    
    - There should be at least 2 movie objects.
    - There will only need to be 1 show object.
        - The show should detail 2 seasons with only 2 episodes each season.
    
    * This information can be 100% fabricated
    
    - After the hulu object has been created:
        - write 3 console logs
            - detail the array of movies
            - show the title of the first show
            - show the title of episode 1 of the second season of the first show.
*/

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
    ],
    shows: [
        {
            title: `Futurama`,
            seasons: {
                "season 1": [
                    {
                        seasonNum: 1,
                        episodes: [
                            {
                                title: `Space Pilot 3000`,
                                aired: `03-28-1999`
                            },
                            {
                                title: `The Series Has Landed`,
                                aired: `04-04-1999`
                            }
                        ]
                    }
                ],
                "season 2": [
                    {
                        seasonNum: 2,
                        episodes: [
                            {
                                title: `A Flight to Remember`,
                                aired: `09-26-1999`
                            },
                            {
                                title: `Mars University`,
                                aired: `10-03-1999`
                            }
                        ]
                    }
                ]
            }
        }
    ]
};

console.log(`Movie List`);
console.log(hulu.movies);

console.log(`First Show`);
console.log(hulu.shows[0].title);

console.log(hulu.shows[0].seasons[1].episodes[0].title);