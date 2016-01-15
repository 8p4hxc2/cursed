"use strict";

const opengl = alias.require("@opengl");
const Tile = alias.require("@entities/tile");
const systemHandler = alias.require("@handlers/system");

class Map {
	constructor() {}

	create(resources) {
		for (let y = 0; y < 10; y++) {
			for (let x = 0; x < 10; x++) {
				systemHandler.register(new Tile(x + "_" + y, x * 256, y * 256, opengl.loader.resources.tile.texture));
			}
		}
	}
}

module.exports = new Map();
