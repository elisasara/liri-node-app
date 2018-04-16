var getTweets = require("./tweets.js");
var getSong = require("./spotify.js");
var getMovie = require("./movies.js");
// var doIt = require("./random.js");
var fs = require("fs");
var moment = require("moment");


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