require("dotenv").config();

var keys = require("./keys.js");
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

var Spotify = new Spotify require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var userRequest = process.argv[2];
var userSpecific = process.argv[3];