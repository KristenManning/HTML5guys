// Import MySQL connection.
var connection = require("../config/connection.js");

var orm  = {

	all: function(table, cb){
		var querStr = "SELECT * FROM " + table + "; "; 
		connection.query(querStr, function(err, result) {
      if (err) {
        throw err;
      }
	    cb(result);

		});
	}, 


	create: function(table, columns, values, cb){
		// Select Table
		var querStr = "INSERT INTO " + table + " ";
		// Select Columns
		querStr += columns + " ";
		// Input data 
		querStr += "VALUES " + values + ";";
		connection.query(querStr, function(err, result) {
			console.log(querStr)
      if (err) {
        throw err;
      }
	    cb(result);

		});
	},

	update: function(table, columns, values, conditions, cb){
		// Select Table
		var querStr = "UPDATE " + table + " ";
		// Select Columns
		querStr += columns + " ";
		// Input data 
		querStr += "VALUES " + values + " ";
		// Specify conditions 
		querStr += "WHERE " + conditions + ";";

		connection.query(querStr, function(err, result) {
			console.log(querStr)
      if (err) {
        throw err;
      }
	    cb(result);

		});
	}, 

}


module.exports = orm;