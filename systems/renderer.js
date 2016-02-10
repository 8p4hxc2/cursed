"use strict";

var opengl = require("opengl");
var System = require("system");

function Renderer() {
	System.prototype.constructor.call(this, "renderer", {
		"sprite": true,
		"position": true
	});

	this.canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
		backgroundColor: 0x1099bb
	});
	document.body.appendChild(this.canvas.view);

	this.screen = new opengl.Container();
	//this.screen.scale={x:window.innerWidth/480,y:window.innerHeight/270};
}

Renderer.prototype = Object.create(System.prototype);
Renderer.prototype.run = function() {
	System.prototype.run.call(this);
	this.canvas.render(this.screen);
};

Renderer.prototype.process = function(entity) {
	if (!entity.addedToScreen) {
		this.addToScreen(entity.components.sprite);
		entity.addedToScreen = true;
	}

	if (entity.components.sprite.ref.tilePosition) {
		entity.components.sprite.ref.tilePosition.x -= 10;
	}
	entity.components.sprite.setPosition(entity.components.position);
};

Renderer.prototype.addToScreen = function(sprite) {
	this.screen.addChild(sprite.ref);
};

module.exports = new Renderer();
