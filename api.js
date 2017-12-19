var rp = require('request-promise-native');

async function google() { 
	return new Promise( async function(resolve, reject) {
		await rp("http://www.google.com/")
		.then(function(response) {  
			resolve(response);
		})
		.catch(function(e) { 
			reject("Google-Fu failed. Have you tried Yahoo?");
			console.log(e);
		});
	});
}

var api = {};
api.google = google;
module.exports = api;