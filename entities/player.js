"use strict";

var Entity = require("entity");


function Player(_params) {
	Entity.prototype.constructor.call(this, "player_" + _params.id);

	this.add(require("../components/keyboard"));
	this.add(require("../components/position"), _params.position || {});
	this.add(require("../components/size"), _params.size || {});
	this.add(require("../components/sprite"), _params.sprite || {});
	this.add(require("../components/animation"), _params.animation);
	this.add(require("../components/body"), {
		type: "dynamic",
		density: 1.0,
		friction: 0.3,
		restitution: 0.0
	});
}

Player.prototype = Object.create(Entity.prototype);

module.exports = Player;
