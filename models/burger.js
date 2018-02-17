var orm = require('../config/orm.js')

var burger = {

	selectAll: function(cb) {orm.selectAll(function(res) { cb(res) })},
	insertOne: function(name, cb) {orm.insertOne(name, function(res){
			cb(res) 
		})},
	updateOne: function(ate, cb) {orm.updateOne(ate, function(res) {
			cb(res)
			}
		)}

}


module.exports = burger
