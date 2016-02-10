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
		opengl.loader.add('tile_desert', './resources/tiles/desert.png');
		opengl.loader.add('wall_brick_b', './resources/walls/brick/bottom.png');
		opengl.loader.add('wall_brick_l', './resources/walls/brick/left.png');
		opengl.loader.add('wall_brick_bl', './resources/walls/brick/bottom_left.png');

		opengl.loader.add('monster_zombie', './resources/monsters/zombie.png');

		opengl.loader.load(resolve);
	});
};

module.exports = new ResourceHandler();
