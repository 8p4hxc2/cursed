"use strict";

const opengl = alias.require("@opengl");
const Tile = alias.require("@entities/tile");
const systemHandler = alias.require("@handlers/system");

class Map {
	constructor() {}

	create(resources) {
		for (var i = 0; i < 10; i++) {
			systemHandler.register(new Tile(i, Math.random() * 500, Math.random() * 500, opengl.loader.resources.tile.texture));
		}
	}
}

module.exports = new Map();
