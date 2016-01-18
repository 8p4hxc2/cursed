"use strict";

const Entity = alias.require("@entity");
const resourceHandler = alias.require("@handlers/resource");

class Player extends Entity {
	constructor(id, x, y, spriteId) {
		super("player_" + id);

		this.addComponent("sprite", x, y, resourceHandler.get(spriteId, "1"));
		this.addComponent("animation", spriteId, 10);
	}
}

module.exports = Player;
