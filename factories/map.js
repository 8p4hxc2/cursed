"use strict";

const Tile = alias.require("@entities/tile");
const SystemHandler = alias.require("@handlers/system");

class Map {
	constructor() {}

	create() {
		for (var i = 0; i < 10; i++) {
			SystemHandler.register(new Tile(Math.random(500), Math.random(500)));
		}
	}
}

module.exports = new Map();
