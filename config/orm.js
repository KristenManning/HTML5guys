// Import MySQL connection.
var connection = require("../config/connection.js");

var orm  = {

	all: function(table, cb){
		var querStr = "SELECT * FROM " + table + "; "; 
		connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
	    cb(result);

		});
	}, 
}


module.exports = orm;