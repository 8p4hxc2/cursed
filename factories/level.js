"use strict";

var systemHandler = require("handlers/system");
var Tile = require("../entities/tile");

function Level() {}

Level.prototype.create = function(resources) {
	for (var y = 0; y < 50; y++) {
		for (var x = 0; x < 50; x++) {
			var oTile = new Tile({
				id: Math.random() * 500,
				position: {
					x: 800 + (x - y) * 54 / 2,
					y: (x + y) * 27 / 2
				},
				sprite: {
					texture: "tile_desert"
				}
			});
			systemHandler.register(oTile);
		}
	}
};

module.exports = new Level();
