"use strict";

const Entity = alias.require("@entity");

class Tile extends Entity {
	constructor(id, x, y, texture) {
		super("tile_" + id);

		this.addComponent("sprite", x, y, texture);
		/*this.addComponent("sprite", x, y);*/
	}
}

module.exports = Tile;
