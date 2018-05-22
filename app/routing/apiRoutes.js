var friends = require("../data/friends");
module.exports = function (app) {

// request json response
app.get("/api", function(req, res){
  	res.json(friends);
  });

// saves as newFriend, pushes the newFriend to the friends array,
  app.post("/api", function(req, res){
   	console.log(req.body);
    	var newFriend = req.body;
      friends.push(newFriend);
  });
};

