// require("dotenv").config();

var getTweets = require("./tweets.js");
var getSong = require("./spotify.js");
var getMovie = require("./movies.js");
var doIt = require("./random.js");
// var keys = require("./keys.js");
// var twitter = require("twitter");
// var spotify = require("node-spotify-api");
// var request = require("request");
var fs = require("fs");
// var moment = require("moment");
// var spot = new spotify(keys.spotify);
// var client = new twitter(keys.twitter);


function readPrompts(){
switch (process.argv[2]) {
    case "my-tweets":
        getTweets();
        break;

    case "spotify-this-song":
        getSong();

        break;
    case "movie-this":
        getMovie();

        break;
    case "do-what-it-says":
        doIt();
};
};

readPrompts();

module.exports = readPrompts;