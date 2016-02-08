"use strict";

var Component = require("component");
var opengl = require("opengl");
var resourceHandler = require("handlers/resource");

function Sprite(_params) {
	Component.prototype.constructor.call(this, "sprite");
	this.ref = new opengl.Sprite(resourceHandler.get(_params.texture, _params.frame));
	this.ref.anchor = {
		x: 0.5,
		y: 0.5
	};
}

Sprite.prototype = Object.create(Component.prototype);

Sprite.prototype.setPosition = function(value) {
	this.setX(value.x);
	this.setY(value.y);
};

Sprite.prototype.getPosition = function() {
	return this.ref.position;
};

Sprite.prototype.setRotation = function(value) {
	this.ref.rotation = value;
};

Sprite.prototype.getRotation = function() {
	return this.ref.rotation;
};

Sprite.prototype.setX = function(value) {
	this.ref.position.x = value;
};

Sprite.prototype.getX = function() {
	return this.ref.position.x;
};

Sprite.prototype.setY = function(value) {
	this.ref.position.y = value;
};

Sprite.prototype.getY = function() {
	return this.ref.position.y;
};

Sprite.prototype.getWidth = function() {
	return this.ref.width;
};

Sprite.prototype.getHeight = function() {
	return this.ref.height;
};

module.exports = Sprite;
