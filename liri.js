require("dotenv").config();

var keys = require("./keys.js");
var twitter = require("twitter");
// var spotify = require("node-spotify-api")
// var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);
var params = {screen_name: 'Elisa_Penn18'}



switch (process.argv[2]) {
    case "my-tweets": 
    getTweets();
    break;
    case "spotify-this-song":

    break;
    case "movie-this":

    break;
    case "do-what-it-says":

};  

function getTweets (){
    client.get("statuses/user_timeline", params, function (error, response, tweets){
            console.log (tweets);
            for (var i = 0; i<tweets.length; i++){
                console.log(JSON.parse(tweets[i]).created_at);
                console.log(JSON.parse(tweets[i]).text);
            };
    });
};

