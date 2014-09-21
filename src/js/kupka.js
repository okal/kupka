var jsSHA = require('jssha');
var _ = require('lodash');

var Kupka = function() {
	var draw = function(IDString, width, height) {
		var canvasWidth = width;
		var canvasHeight = height;
		var hash = new jsSHA(IDString, "TEXT").getHash("SHA-512", "HEX");
		hash.match(/.{8}/g);
	};
}

window.Kupka = Kupka;
