var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      cats: data
    };
    console.log(hbsObject);
    // res.render("index", hbsObject);
    res.json(hbsObject)
  });
});

// Export routes for server.js to use.
module.exports = router;