require("dotenv").config();

var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("node-spotify-api")
var request = require("request");
var fs = require("fs");
var spot = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

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

function getTweets() {
    var params = { screen_name: 'Elisa_Penn18', count: 20 };

    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        // console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
            console.log(tweets[i].created_at + " " + tweets[i].text);
        };
    });
};

function getSong() {
    var song = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        song = "The Sign Ace of Base";
    };

    spot.search({ type: "track", query: song, limit: 1 })
        .then(function (response) {
            var info = response.tracks.items[0];
            console.log(info);
            console.log("Song name: " + info.name)
            if (info.artists.length > 1) {
                for (var i = 0; i < info.artists.length; i++) {
                    console.log("Artist(s): " + info.artists[i].name);
                };
            }
            else {
                console.log("Artist(s): " + info.artists[0].name);
            }

            console.log("Link: " + info.external_urls.spotify);

            console.log("Album Name: " + info.album.name);
        });
};

function getMovie() {
    var movieName = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        movieName = "Mr. Nobody";
    };
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + movieName, function(error, response, body){
    // console.log(body);
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Released);
    console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Starring: " + JSON.parse(body).Actors)
    })
}

function doIt() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err){
            console.log(err);
        }
        console.log(data);
        var bsb = data.split(" ");
        console.log(bsb);
        getSong();
    });
};