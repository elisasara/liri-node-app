// Get all requirements for this component
require("dotenv").config();
var keys = require("./keys.js");
var spotify = require("node-spotify-api")
var spot = new spotify(keys.spotify);

// Function to search for a song and display necessary information.
// If no song is entered then it will automatically use "The Sign" by Ace of Base
function getSong() {
    var song = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        song = "The Sign Ace of Base";
    };

    spot.search({ type: "track", query: song, limit: 1 })
        .then(function (response) {
            var info = response.tracks.items[0];
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

// Export this information for use in liri.js
module.exports = getSong;