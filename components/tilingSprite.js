"use strict";

var Sprite = require("./sprite");
var Component = require("component");
var opengl = require("opengl");
var resourceHandler = require("handlers/resource");

function TilingSprite(_params) {
	Component.prototype.constructor.call(this, "sprite");
	var texture = resourceHandler.get(_params.texture, _params.frame);
	this.ref = new opengl.extras.TilingSprite(texture, texture.baseTexture.width, texture.baseTexture.height);
}

TilingSprite.prototype = Object.create(Sprite.prototype);

module.exports = TilingSprite;
