var express = require('express');
var request = require('request');
var router = express.Router();

function verifyOauthToken(req, callback) {
	var token = req.query.token;
	var options = {
		url: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + token,
		method: 'GET'
	};
	request(options, function(error, response, body) {
		if(body.indexOf("aud") == -1) {
			callback(body, null);
		}		
		callback(null, token);
	});
}

router.get('/tasks', function(req, res) {
	verifyOauthToken(req, function(err, token){
		if(err) {
			res.status(500);
			res.json(err);
			return;
		}

		res.json([
			{title: "title", content: "content"},
		]);
	});
});

router.post('/tasks', function(req, res) {
	verifyOauthToken(req, function(err, token){
		if(err) {
			res.status(500);
			res.json(err);
			return;
		}

		console.log(req.body);
		res.status(200);
		res.json("ok");
	});
});

module.exports = router;