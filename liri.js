require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var userRequest = process.argv[2];
var userSpecific = process.argv[3];


function userInput()    {
    switch (userRequest)    {
        case 'concert-this':
            concertThis(userSpecific);
            break;

        case 'spotify-this-song':
            spotifySong(userSpecific);
            break;no
            
        case 'movie-this':
            movieThis(userSpecific);
            break;

        case 'do-what-it-says':
            asSays();
            break;

        default:
            console.log("Try again, punk");
            break;
    }
};

function concertThis(artist)  {
    if (userRequest === 'concert-this') {
        var artist = "";
        for (var i = 3; i < process.argv.length; i++)   {
            artist += process.argv[i];
        }
        console.log(artist);
    }  else {
        artist = userSpecific;
}

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(

        function(response)  {
            if (response.data[0].venue != undefined) {
                console.log("Name of Venue: " + response.data[0].venue.name);
                console.log("Venue Location: " + response.data[0].venue.city);

                var eventDate = moment(response.data[0].datetime);
                console.log("Date of Event: " + eventDate.format("MM/DD/YYYY"));
            }
            else {
                console.log("No results found.");
            }
        }
    ).catch(function (error) {
        console.log(error);
        console.log("Error");
    });
}
        

function spotifySong(userSpecific)  {

    var song;
    if (userSpecific === undefined) {
        song = "Bruce Springsteen born to run";
    } else {
        song = userSpecific;
    }

    spotify.search({
        type: 'track', query: song}, function (error, data) {
        if (error) {
            return console.log('Error: ' + error);
        } else {
            console.log("Artist: " + data.tracks.items[0].artists[0].name);
            console.log("Song: " + data.tracks.items[0].name);
            console.log("Preview: " + data.tracks.items[3].preview_url);
            console.log("Album: " + data.tracks.items[0].album.name);
        }
    });
};

function movieThis(movie)   {

    var movie;
    if  (userSpecific === undefined)    {
        movie = "Mr. Nobody";
        console.log('If you haven not watched "Mr. Nobody," then you should on Netflix!: http://www.imdb.com/title/tt0485947/');
    } else {
        movie = userSpecific;
    };


axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            //console.log(response.data);
            if (response.data.Title != undefined) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
                console.log("Country: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                
            }
        }
    ).catch(function (error) {
        console.log(error);
        console.log("Error");
    });
}

function asSays()   {
    fs.readFile("random.txt", "utf8", function (error, data)    {
        if (error)  {return console.log(error);}

        var dataArr = data.split(",");

        userRequest = dataArr[0];
        userSpecific = dataArr[1];

        userCommand(userRequest, userSpecific);
    });
};

userInput();
