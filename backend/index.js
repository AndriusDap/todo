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
		var db = req.db;
		todos = [];
		db.get("todos").find({user: token}, {}, function(err, t){
			console.log(err);
			console.log(t);
			res.json(t);
		});
	});
});

router.post('/tasks', function(req, res) {
	verifyOauthToken(req, function(err, token){
		if(err) {
			res.status(500);
			res.json(err);
			return;
		}
		var db = req.db;
		db.get("todos").remove({user: token}, function(err, t){
			console.log(err);	
		});
		db.get("todos").insert({user: token, todos: req.body}, function(err, t){
			console.log(err);	
		});
		res.status(200);
		res.json("ok");
	});
});

module.exports = router;