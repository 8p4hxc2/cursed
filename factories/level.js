"use strict";

var systemHandler = require("handlers/system");
var Tile = require("../entities/tile");

function Level() {
	this.nbRoom = 0;
}

Level.prototype.create = function(x, y, noD) {
	if (Math.floor(Math.random() * 4) !== 1 && this.nbRoom < 50 || this.nbRoom < 50) {
		this.nbRoom += 1;
		var rooms = [];
		var maxRoomWidth = 4;
		var maxRoomHeight = 4;
		var minRoomWidth = 1;
		var minRoomHeight = 1;


		var size = {
			width: Math.floor(Math.random() * maxRoomWidth) + minRoomWidth,
			height: Math.floor(Math.random() * maxRoomHeight) + minRoomHeight
		};

		var position = {
			x: x,
			y: y
		};

		var nTop = Math.round(Math.random() * 2) === 1 && noD !== "noup" ? this.create(x, y - 1, "nodown") : null;
		var nDown = Math.round(Math.random() * 2) === 1 && noD !== "nodown" ? this.create(x, y + 1, "noup") : null;
		var nLeft = Math.round(Math.random() * 2) === 1 && noD !== "noleft" ? this.create(x - 1, y, "noright") : null;
		var nRight = Math.round(Math.random() * 2) === 1 && noD !== "noright" ? this.create(x + 1, y, "noleft") : null;

		var neighbours = {
			up: nTop,
			down: nDown,
			left: nLeft,
			right: nRight
		};

		return Object.assign({}, position, size, neighbours);
	}

	return;
};

Level.prototype.drawRoom = function(x, y, width, height) {
	// sol
	for (var i = 0; i < height + 2; i++) {
		for (var j = 0; j < width + 2; j++) {
			systemHandler.register(this.createTile(j - 1, i - 1, "tile_desert"));
		}
	}
	
	// angle tl
	systemHandler.register(this.createTile(x - 1, y - 1, "wall_brick_tl"));

	// mur de gauche
	for (i = y; i < y + height; i++) {
		systemHandler.register(this.createTile(x - 1, i, "wall_brick_l"));
	}

	// angle bg
	systemHandler.register(this.createTile(x - 1, y + height, "wall_brick_bl"));

	// mur du haut
	for (i = x; i < x + width; i++) {
		systemHandler.register(this.createTile(i, y - 1, "wall_brick_b"));
	}

	// angle tr
	systemHandler.register(this.createTile(x + width, y - 1, "wall_brick_tr"));

	// mur du bas
	for (i = x; i < x + width; i++) {
		systemHandler.register(this.createTile(i, y + height, "wall_brick_b"));
	}

	// mur de droite
	for (i = y; i < y + height; i++) {
		systemHandler.register(this.createTile(x + width, i, "wall_brick_l"));
	}

	// angle br
	systemHandler.register(this.createTile(x + width, y + height, "wall_brick_br"));
};

Level.prototype.createTile = function(x, y, texture) {
	return new Tile({
		id: x + "_" + y + "_" + texture,
		position: {
			x: (x - y) * 28 + 300,
			y: (x + y) / 2 * 28 + 300
		},
		sprite: {
			texture: texture
		}
	});
};

Level.prototype.generate = function(rooms) {
	console.log(rooms);

	this.generateBranch(rooms);

	/*for (var y = 0; y < 50; y++) {
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
	}*/
};

Level.prototype.generateBranch = function(branch) {
	var oTile = null;

	/*if (branch) {
		oTile = new Tile({
			id: Math.random() * 500,
			position: {
				x: (branch.x - branch.y) * 28 + 500, // + branch.width * 32,
				y: (branch.x + branch.y) / 2 * 28 + 300 // + branch.height * 32
			},
			sprite: {
				texture: "tile_desert"
			}
		});
		systemHandler.register(oTile);

		this.generateBranch(branch.down);
		this.generateBranch(branch.up);
		this.generateBranch(branch.left);
		this.generateBranch(branch.right);
	} else {*/
	for (i = -10; i < 0; i++) {
		oTile = new Tile({
			id: Math.random() * 50000000,
			position: {
				x: (0 - i) * 28 + 100,
				y: (0 + i) / 2 * 28 + 100
			},
			sprite: {
				texture: "wall_brick_l"
			}
		});
		systemHandler.register(oTile);
	}

	oTile = new Tile({
		id: Math.random() * 50000000,
		position: {
			x: (0 - 0) * 28 + 100,
			y: (0 + 0) / 2 * 28 + 100
		},
		sprite: {
			texture: "wall_brick_bl"
		}
	});
	systemHandler.register(oTile);

	for (var i = 1; i < 10; i++) {
		oTile = new Tile({
			id: Math.random() * 50000000,
			position: {
				x: (i - 0) * 28 + 100,
				y: (i + 0) / 2 * 28 + 100
			},
			sprite: {
				texture: "wall_brick_b"
			}
		});
		systemHandler.register(oTile);
	}

	oTile = new Tile({
		id: Math.random() * 50000000,
		position: {
			x: (3 - -3) * 28 + 100,
			y: (3 + -3) / 2 * 28 + 100
		},
		sprite: {
			texture: "monster_zombie"
		}
	});
	systemHandler.register(oTile);
	//}
};

module.exports = new Level();
