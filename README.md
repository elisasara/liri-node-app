# liri-node-app

A command line app that takes in different arguments. Each argument accesses a different API and returns specific information from each one.

All command line arguments will be logged in log.txt

#### my-tweets
This command will show up to two of the most recent tweets in my twitter timeline.

#### spotify-this-song <song name>
This will search the spotify API and return key information about the song you are searching for. A song name, or song and artist name together can be entered.

If no specific song name is entered then the default song returned will be "The Sign" by Ace of Base.

#### movie-this <movie name>
This accesses the OMDB API and returns key information about the movie entered.

If no specific movie is entered then the default movie returned will be "Mr. Nobody."

#### do-what-it-says
This will access the random.txt file, read it, and pass what it says along as a command line argument to be run.