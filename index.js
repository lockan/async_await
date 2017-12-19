var express = require('express');
var api = require('./api.js');

var app = express();

app.listen(4000, function () { 
	console.log("Server listening on port 4000");
});

app.get('/', async function (req, resp) {
	await api.google()
	.then(function(r) { 
		resp.send(r);
	})
	.catch(function(e) { 
		resp.send(e);
	});
});
