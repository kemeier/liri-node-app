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
            break;
            
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

function concertThis(band)  {
    if (userRequest === 'concert-this') {
        var band = "";
        for (var i = 3; i < process.argv.length; i++)   {
            band += process.argv[i];
        }
        console.log(band);
    }  else {
        band = userSpecific;
}

    axios.get(https://rest.bandsintown.com/artists/"+artist+"/events?app_id=codingbootcamp").then(

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