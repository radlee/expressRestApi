'use strict';

var express = require('express');
// set up a new router
var router = express.Router();

// 1st route handler -- Executes when a request comes in that matches
// the route and verb
//GET /questions
router.get("/", function(req, res){
  res.json({response: "You sent me a GET request"});
});

//POST /questions
//Route for creating questions
router.post("/", function(req, res){
  res.json(
    {
      response: "You sent me a POST request",
      body: req.body //Send back the data we received
    }
  );
});

//GET /questions/:id
//Route for retreiving a specific question
router.get("/:id", function(req, res){
  res.json(
    {
      response: "You sent me a GET request for ID " + req.params.id
    }
  );
});


module.exports = router;
