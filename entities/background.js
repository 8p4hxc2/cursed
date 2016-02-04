"use strict";

var Entity = require("entity");

function Background(_params) {
	Entity.prototype.constructor.call(this, "background_" + _params.id);

	this.add(require("../components/sprite"), {
		texture: "background"
	});

	this.add(require("../components/position"), {
		x: 31,
		y: -10
	});
}

Background.prototype = Object.create(Entity.prototype);

module.exports = Background;
