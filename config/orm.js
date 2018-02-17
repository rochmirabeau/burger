var connection = require('./connection.js')

	
let orm = {
	selectAll: function(cb) {
	//display all burgers	
		var queryString = "SELECT * FROM burgers;"
		console.log(queryString)
		connection.query(queryString, function(err, result) { cb(result) })
	},
	//add a burger
	insertOne: function(name, cb) {
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES ('" + name + "', false);"
		console.log(queryString)
		connection.query(queryString, name, function(err, result) {
			if (err) { throw err; }
			cb(result)
			}
		)}
	,
	//update the devourdness of a burger
	updateOne: function(ate, cb) {
		var queryString = "UPDATE burgers SET devoured = NOT devoured WHERE " + ate
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) { throw err; }
			cb(result)
			}
		)
	}
}


module.exports = orm
	
