// Import MySQL connection.
var connection = require("../config/connection.js");

var orm  = {

	all_not_devoured: function(table, cb){
		var querStr = "SELECT * FROM " + table + " WHERE devoured = false; "; 
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	    cb(result);

		});
	}, 
	all_devoured: function(table, cb){
		var querStr = "SELECT * FROM " + table + " WHERE devoured = true;"; 
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	    cb(result);

		});
	}, 


	create: function(table, columns, values, cb){
		// Select Table
		// var querStr = "INSERT INTO " + table + " ";
		// var querStr = "INSERT INTO " + table + " ";
		// // Select Columns
		// querStr += columns + " ";
		// // Input data 
		// querStr += "VALUES " + values + ";";
		// connection.query(querStr, function(err, result) {
		// 	console.log(querStr)
  //     if (err) {
  //       throw err;
  //     }
	 //    cb("callback worked");
	 // 	console.log(table + " = table")
	 // 	console.log(columns + " = columns")
	 // 	console.log(values + " = values")
		// // });
	},

	// Switch a burger's 'devoured' value from false to true 
	update: function(burger_id, cb){
		var querStr = "UPDATE burgers SET devoured = false WHERE id = 2;";
		connection.query(querStr, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
		});
	}

}


module.exports = orm;