"use strict";

var Entity = require("entity");

function Tile(_params) {
	Entity.prototype.constructor.call(this, "tile_" + _params.id);

	this.add(require("../components/position"), _params.position || {});
	this.add(require("../components/sprite"), _params.sprite || {});
}

Tile.prototype = Object.create(Entity.prototype);

module.exports = Tile;
