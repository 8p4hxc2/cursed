"use strict";

var opengl = require("opengl");
var systemHandler = require("handlers/system");
var Ground = require("../entities/ground");
var Background = require("../entities/background");
var Player = require("../entities/player");
var Tile = require("../entities/tile");

function Level() {}

Level.prototype.add = function() {
	var oTile = new Tile({
		id: Math.random() * 500,
		position: {
			x: Math.random() * 30,
			y: Math.random() * 10 + 10
		},
		size: {
			width: 2.4,
			height: 2.4
		},
		sprite: {
			texture: "tile1"
		}
	});
	systemHandler.register(oTile);
};

Level.prototype.create = function(resources) {
	var oBackground = new Background({
		id: "1"
	});
	systemHandler.register(oBackground);
	var oPlayer = new Player({
		id: Math.random() * 500,
		position: {
			x: Math.random() * 30,
			y: Math.random() * 10 + 10
		},
		size: {
			width: 17,
			height: 15
		},
		sprite: {
			texture: "cat_idle"
		},
		animation: {
			texture: "cat_walk",
			frames: 10
		}
	});
	systemHandler.register(oPlayer);

	var oGround = new Ground({
		id: "1"
	});
	systemHandler.register(oGround);
};

module.exports = new Level();
