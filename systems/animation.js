"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");
const resourceHandler = alias.require("@handlers/resource");
const referential = alias.require("@referential");

class Animation extends System {
	constructor() {
		super({
			"animation": true
		});

		this.lastTime = 0;
	}

	run() {
		var now = Date.now();

		if (now - this.lastTime > referential.fps) {
			this.lastTime = Date.now();
			super.run();
		}
	}

	process(entity) {
		entity.components.animation.current++;
		if (entity.components.animation.current > entity.components.animation.frames) {
			entity.components.animation.current = 1;
		}

		entity.components.sprite.ref.texture = resourceHandler.get(entity.components.animation.name, entity.components.animation.current);
	}

	addToScreen(sprite) {
		this.screen.addChild(sprite.ref);
	}
}

module.exports = new Animation();
