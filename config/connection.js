var mysql = require('mysql');
var pw = require('./password.js');

var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: pw,
	database: 'burgers_db'

})

connection.connect( err => {
	if (err) {
		console.log(`error connecting ${err.stack}`)
	}
	console.log("connected as " + connection.threadId )

})

module.exports = connection
	
