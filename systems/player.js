"use strict";

const System = alias.require("@system");
const referential = alias.require("@referential");

class Player extends System {
	constructor() {
		super({
			"animation": true,
			"keyboard": true
		});

		this.test = 1;
	}

	process(entity) {
		var keys = entity.components.keyboard.keys;

		if (keys[referential.Keyboard.Right]) {
			entity.components.animation.name = "cat_walk";
			entity.components.sprite.ref.scale.x = 1;
			entity.components.sprite.ref.pivot.x = 0;
			return;
		}

		if (keys[referential.Keyboard.Left]) {
			entity.components.sprite.ref.scale.x = -1;
			entity.components.sprite.ref.pivot.x = 547;
			entity.components.animation.name = "cat_walk";
			return;
		}

		entity.components.animation.name = "cat_idle";
	}

	addToScreen(sprite) {
		this.screen.addChild(sprite.ref);
	}
}

module.exports = new Player();
