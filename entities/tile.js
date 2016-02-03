"use strict";

var Entity = require("entity");

function Tile(_params) {
	Entity.prototype.constructor.call(this, "tile_" + _params.id);

	this.add(require("../components/position"), _params.position || {});
	this.add(require("../components/size"), _params.size || {});
	this.add(require("../components/sprite"), _params.sprite || {});
	this.add(require("../components/body"), {
		type: "dynamic",
		density: 1.0,
		friction: 0.3,
		restitution: 0.0
	});
}

Tile.prototype = Object.create(Entity.prototype);

module.exports = Tile;
