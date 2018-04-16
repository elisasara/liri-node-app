var request = require("request");

function getMovie() {
    var movieName = process.argv.slice(3).join(" ");
    if (process.argv.length < 4) {
        movieName = "Mr. Nobody";
    };
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + movieName, function(error, response, body){
    if (error) throw error;
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Released);
    console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Starring: " + JSON.parse(body).Actors)
    });
};

module.exports = getMovie;