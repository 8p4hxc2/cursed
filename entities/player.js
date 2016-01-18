"use strict";

const Entity = alias.require("@entity");
const resourceHandler = alias.require("@handlers/resource");

class Player extends Entity {
	constructor(id, x, y, spriteId) {
		super("player_" + id);

		this.addComponent("sprite", x, y, resourceHandler.get(spriteId, "1"));
		this.addComponent("animation", spriteId, 10);
		this.addComponent("body", x, y, "", 1.0, 1.0, 1.0, 547, 481);
		this.addComponent("keyboard");
	}
}

module.exports = Player;
