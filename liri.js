// Get all requirements for this file

var getTweets = require("./tweets.js");
var getSong = require("./spotify.js");
var getMovie = require("./movies.js");
// var doIt = require("./random.js");
var fs = require("fs");
var moment = require("moment");


// Function to handle the arguments that are given through the command line
function readPrompts(){
switch (process.argv[2]) {
    case "my-tweets":
        getTweets();
        logIt();
        break;

    case "spotify-this-song":
        getSong();
        logIt()
        break;
    case "movie-this":
        getMovie();
        logIt();
        break;
    case "do-what-it-says":
        doIt();
        logIt();
};
};

// Function to read the random.txt file -- I tried to move this into a separate file and it did not work...
function doIt() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err){
            console.log(err);
        }
        console.log(data);
        var bsb = data.split(" ");
        process.argv.pop();
        for (var i = 0; i<bsb.length; i++) {
            process.argv.push(bsb[i]);
        };
        readPrompts();
    });
};

function logIt (){
    var toLog = process.argv.slice(2).join(" ");
    var time = moment().format("dddd, MMMM DD, YYYY @ hh:mma");
    fs.appendFile("log.txt", time + ": " + toLog + "\r\n", function (err) {
        if (err) throw err;
        console.log("This has been logged");
    });
};

readPrompts();

// module.exports = readPrompts;