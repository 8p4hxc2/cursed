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
		opengl.loader.add('tile', './resources/Tiles/1.png');
		opengl.loader.add('tile1', './resources/Object/Crate.png');
		opengl.loader.add('tile3', './resources/Tiles/3.png');
		opengl.loader.add('background', './resources/BG/1.png');
		opengl.loader.add('cat_idle', './resources/cat/idle.json');
		opengl.loader.add('cat_walk', './resources/cat/walk.json');
		opengl.loader.add('snow', './resources/Snow100.png');

		opengl.loader.load(resolve);
	});
};

module.exports = new ResourceHandler();
