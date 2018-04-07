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
    var params = { screen_name: 'Elisa_Penn18' };

    client.get("statuses/user_timeline", params, function (error, response, tweets) {
        // console.log(tweets.body);
        // for (var i = 0; i < 20; i++) {
            console.log(tweets.body[0].created_at);
            console.log(tweets.body[0].text);
        // };
    });
};

function getSong() {
    var song = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        song = "The Sign";
    };

    spot.search({ type: "track", query: song })
        .then(function (response) {
            var info = response.tracks.items;
            // console.log(info);

            console.log("Artist(s): " + info[0].artists);

            console.log("Song Name: " + info[0].name);

            console.log("Link: " + info[0].external_urls.spotify);

            console.log("Album Name: " + info[0].album.name);
        });
};