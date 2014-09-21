var jsSHA = require('jssha');
var _ = require('lodash');

var Kupka = function() {
	var elements = document.querySelectorAll('.kupka-wrapper');

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

	var generateThumbnail = function(IDString, width, height) {
		var index = 0;
		var canvasWidth = width;
		var canvasHeight = height;
		var hash = new jsSHA(IDString, "TEXT").getHash("SHA-512", "HEX");
		var styleStack = hash.match(/.{8}/g);
		var canvas = document.createElement('canvas');
		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);
		var translateX = 0;
		var translateY = 0;
		var context = canvas.getContext('2d');
		context.globalAlpha = 0.5;
		var contextWidth = width * 0.25;
		var contextHeight = height * 0.25;

		_.each(styleStack, function(styleDescriptor) {
			var colour = generateFillColour(styleDescriptor);
			context.fillStyle = colour;
			context.fillRect(translateX, translateY, contextWidth, contextHeight);
			index++;
			translateX = ((index % 4.0) * contextWidth);
			if((index % 4.0) == 0) {
				translateY += contextHeight;
			}
		})

		return canvas;
	};

	_.each(elements, function(element) {
		var width = element.getAttribute('data-kupka-width');
		var height = element.getAttribute('data-kupka-height');
		var IDString = element.getAttribute('data-kupka-string-identifier');
		var canvas = generateThumbnail(IDString, width, height);
		element.appendChild(canvas);
	});
}

window.Kupka = Kupka;
