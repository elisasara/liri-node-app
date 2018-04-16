var getTweets = require("./tweets.js");
var getSong = require("./spotify.js");
var getMovie = require("./movies.js");
// var doIt = require("./random.js");
var fs = require("fs");


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
    fs.appendFile("log.txt", toLog, function (err) {
        if (err) throw err;
        console.log("This has been logged");
    });
};

readPrompts();

// module.exports = readPrompts;