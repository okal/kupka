var jsSHA = require('jssha');
var _ = require('lodash');

var Kupka = function() {
	var generateFillColour = function(string) {
		var color = '#', hash = 0;
		for(var i = 0; i < string.length; i++) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}
		for(var i = 0; i < 3; i++) {
			var value = (hash >> (i * 8)) & 0xFF;
			color += ('00' + value.toString(16)).substr(-2);
		}
		return color;
	};

	var draw = function(IDString, width, height) {
		var canvasWidth = width;
		var canvasHeight = height;
		var hash = new jsSHA(IDString, "TEXT").getHash("SHA-512", "HEX");
		hash.match(/.{8}/g);
	};
}

window.Kupka = Kupka;
