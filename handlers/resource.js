"use strict";

var opengl = require("opengl");

function ResourceHandler() {}

ResourceHandler.prototype.get = function(texture, frame) {
	if (frame) {
		return opengl.loader.resources[texture].textures[texture + "(" + frame + ")"];
	}

	return opengl.loader.resources[texture].texture;
};

ResourceHandler.prototype.run = function() {
	return new Promise(function(resolve) {
		opengl.loader.add('tile_desert', './resources/tiles/lol.png');
		opengl.loader.add('snow', './resources/tiles/desert.png');

		opengl.loader.load(resolve);
	});
};

module.exports = new ResourceHandler();
