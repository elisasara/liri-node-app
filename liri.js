require("dotenv").config();

var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require("node-spotify-api")
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

        break;
    case "do-what-it-says":

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
        song = "The Sign";
    };

    spot.search({ type: "track", query: song, limit: 1 })
        .then(function (response) {
            var info = response.tracks.items;
            console.log(info);
            // if (info[0].artists.length > 1) {
            //     for (var i = 0; i < info[0].artists.length; i++) {
            //         console.log("Artist(s): " + info[0].artists[i].name);
            //     };
            // }
            // else {
            //     console.log("Artist(s): " + info[0].artists[0].name);
            // }

            // console.log("Song Name: " + info[0].name);

            // console.log("Link: " + info[0].external_urls.spotify);

            // console.log("Album Name: " + info[0].album.name);
        });
};