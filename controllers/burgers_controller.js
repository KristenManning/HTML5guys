var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    // res.render("index", hbsObject);
    res.json(hbsObject)
  });
 });

router.post("/", function(req,res){
  burger.create(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.json(hbsObject)
  });
});

router.post("/put", function(req,res){
  burger.update(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.json(hbsObject)
  });
});

router.get("/test", function(req,res){
  res.render("index", {})
});



// Export routes for server.js to use.
module.exports = router;