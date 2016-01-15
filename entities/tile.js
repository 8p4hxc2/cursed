"use strict";

const Entity = alias.require("@entity");

class Tile extends Entity {
	constructor(x, y, texture) {
		super("tile");

		/*this.addComponent("sprite", 50, 250, resource);*/
		this.addComponent("position", x, y);
	}
}

module.exports = Tile;
