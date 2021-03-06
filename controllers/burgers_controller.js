var express = require('express')

var burger = require('../models/burger.js')

var router = express.Router()

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		}
		console.log(hbsObject)
		res.render("index", hbsObject)
	})
})

router.post("/api/burgers", function(req, res) {
	console.log(req.body)
	burger.insertOne(req.body.burger_name, function(result){res.json({id: result.insertId})
	})		

})

router.put("/api/burgers/:id", function(req, res) {
	var ate = "id = " + req.params.id;

	console.log("Devoured", ate)
	
	burger.updateOne(ate, function(result){
	if (result.changedRows ===0) {
		return res.status(404).end();
		}
		res.status(200).end()
	})
})

module.exports = router
