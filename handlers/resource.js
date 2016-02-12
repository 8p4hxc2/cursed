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
		opengl.loader.add('ground_desert', './resources/grounds/desert.png');
		opengl.loader.add('ground_pavement', './resources/grounds/pavement.png');

		// walls
		opengl.loader.add('wall_brick_b', './resources/walls/brick/bottom.png');
		opengl.loader.add('wall_brick_l', './resources/walls/brick/left.png');
		opengl.loader.add('wall_brick_bl', './resources/walls/brick/bottom_left.png');
		opengl.loader.add('wall_brick_br', './resources/walls/brick/bottom_right.png');
		opengl.loader.add('wall_brick_tl', './resources/walls/brick/top_left.png');
		opengl.loader.add('wall_brick_tr', './resources/walls/brick/top_right.png');

		// doors
		opengl.loader.add('door_wood_tp', './resources/doors/wood_topdown.png');

		// walls decos
		opengl.loader.add('wall_deco_skeleton_ns', './resources/walls_deco/skeleton_ns.png');
		opengl.loader.add('wall_deco_blood_ns', './resources/walls_deco/blood_ns.png');
		opengl.loader.add('wall_deco_blood_ew', './resources/walls_deco/blood_ew.png');

		// monsters
		opengl.loader.add('monster_zombie', './resources/monsters/zombie.png');

		opengl.loader.load(resolve);
	});
};

module.exports = new ResourceHandler();
