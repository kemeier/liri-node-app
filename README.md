# liri-node-app

LIRI (Language Interpretation and Recognition Interface) is a command line node application that takes user input and returns data from API's.

The commands below allow the user the capability to obtain information about concerts, songs, and movies:


concert-this: will search the Bands in Town Artist Events           API for an artist and render the following                          information about each event to the terminal:

                   -Name of the venue
                   -Venue location
                   -Date of the Event 

spotify-this-song: will show the following information about        the song in the terminal/bash window:

                   -Artist(s)
                   -The song's name
                   -A preview link of the song from Spotify
                   -The album that the song is from

movie-this: uses the OMDB API to take a movie name and              outputs the following information to the                            terminal/bash window:
                
                   -Title of the movie.
                   -Year the movie came out.
                   -IMDB Rating of the movie.
                   -Rotten Tomatoes Rating of the movie.
                   -Country where the movie was produced.
                   -Language of the movie.
                   -Plot of the movie.
                   -Actors in the movie.

do-this: uses the fs Node package, LIRI will take the               text inside of random.txt and then use it to                        call one of LIRI's commands.

