var friends = require("../app/data/friends");

module.exports = function(app) {
  // Get all friends found in friends.js
  app.get("/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/friends", function(req, res) {
    console.log(req.body.scores);

    // Getting user info
    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    var bestMatch = 0;
    var minimumDifference = 40;
  
    //Creating loop for difference in positive
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        bestMatch = i;
        minimumDifference = totalDifference;
      }
    }

    // Adding user to friend array
    friends.push(user);

    //Showing the best match
    res.json(friends[bestMatch]);
  });
};