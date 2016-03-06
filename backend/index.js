var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res) {
	console.log("can I do this?");
	res.json([
		{title: "title", content: "content"},
		]);
});

module.exports = router;