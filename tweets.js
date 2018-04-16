require("dotenv").config();
var keys = require("./keys.js");
var twitter = require("twitter");
var moment = require("moment");
var client = new twitter(keys.twitter);


function getTweets() {
    var params = { screen_name: 'Elisa_Penn18', count: 20 };

    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (error) throw error;
        for (var i = 0; i < tweets.length; i++) {
            console.log(moment(tweets[i].created_at).format("dddd, MMMM DD, YYYY @ hh:mma") + ": " + tweets[i].text);
        };
    });
};

module.exports = getTweets;