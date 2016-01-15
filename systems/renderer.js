"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");

class Renderer extends System {
	constructor() {
		super({
			"position": true
		});
		/*this.canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
			backgroundColor: 0x1099bb
		});
		document.body.appendChild(this.canvas.view);

		this.screen = new opengl.Container();*/
	}

	run() {
		super.run();
		//this.canvas.render(this.screen);
	}

	process(entity) {
    //console.log(entity);
		/*if (!entity.addedToScreen) {
			this.addToScreen(entity.components.sprite);
			entity.addedToScreen = true;
		}

		entity.components.sprite.ref.position.x = entity.components.position.x;
		entity.components.sprite.ref.position.y = entity.components.position.y;*/
	}

	addToScreen(sprite) {
		this.screen.addChild(sprite.ref);
	}
}
module.exports = new Renderer();
