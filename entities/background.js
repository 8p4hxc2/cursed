"use strict";

var Entity = require("entity");

function Background(_params) {
	Entity.prototype.constructor.call(this, "background_" + _params.id);

	this.add(require("../components/tilingSprite"), {
		texture: "background"
	});

	this.add(require("../components/position"), {
		x: 0,
		y: -25
	});
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
