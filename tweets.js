// Get all requirements for this component
require("dotenv").config();
var keys = require("./keys.js");
var twitter = require("twitter");
var moment = require("moment");
var client = new twitter(keys.twitter);

// Function to get the last 20 tweets and display them appropriately
function getTweets() {
    var params = { screen_name: 'Elisa_Penn18', count: 20 };

    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (error) throw error;
        for (var i = 0; i < tweets.length; i++) {
            console.log(moment(tweets[i].created_at).format("dddd, MMMM DD, YYYY @ hh:mma") + ": " + tweets[i].text);
        };
    });
};

// Export this information for use in liri.js
module.exports = getTweets;