var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var methodOverride = require("method-override");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  
  burger.all_devoured(function(data) {
    var hbsObject = {}
    hbsObject["burgers"] = data;
    
      burger.all_not_devoured(function(data2) {
        hbsObject["devoured"] = data2;

        res.render("index", hbsObject);
    });
  });
});
      

router.post("/create", function(req,res){
  burger.create(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.json(hbsObject)
  });
  res.redirect("/")
});

router.post("/devour", function(req,res){
  burger.update( function(data) {
    res.redirect("/")
  }); 
});

router.get("/test", function(req,res){
  res.render("index", {})
});



// Export routes for server.js to use.
module.exports = router;