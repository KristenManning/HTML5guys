// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var mysql = require("mysql")

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cb){
  	orm.create("burgers", function(res) {
  		cb(res);
  	});
  },
  update: function(cb) {
  	orm.update("burgers", function(res){
  		console.log("database update")
  		cb(res);
  	});
  }
};

// Export the database functions for the controller
module.exports = burger;