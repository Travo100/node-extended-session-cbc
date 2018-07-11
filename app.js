require('dotenv').config();

var keys = require("./keys.js");

var Twitter = require('twitter');
 
var client = new Twitter(keys.twitter);
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("Tweets from: @" + tweets[0].user.screen_name);
    for(var i = 0; i < tweets.length; i++) {
        console.log("---------");
        console.log("Tweet: " + tweets[i].text);
        console.log("Date of Tweet " + tweets[i].created_at);
    }
  }
});