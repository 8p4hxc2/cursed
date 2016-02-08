"use strict";

var opengl = require("opengl");
var System = require("system");
require("../libs/pixiparticles");
var renderer = require("./renderer");
var resourceHandler = require("handlers/resource");

function Particule() {
	System.prototype.constructor.call(this, "particule");
	this.elapsed = Date.now();
	this.emitter = new cloudkid.Emitter(
		// The DisplayObjectContainer to put the emitter in
		// if using blend modes, it's important to put this
		// on top of a bitmap, and not use the PIXI.Stage
		renderer.screen,

		// The collection of particle images to use
		[resourceHandler.get("tile_desert")],

		// Emitter configuration, edit this to change the look
		// of the emitter
		{
			"alpha": {
				"start": 0.73,
				"end": 0.46
			},
			"scale": {
				"start": 0.15,
				"end": 0.2,
				"minimumScaleMultiplier": 0.5
			},
			"color": {
				"start": "ffffff",
				"end": "ffffff"
			},
			"speed": {
				"start": 200,
				"end": 200
			},
			"startRotation": {
				"min": 50,
				"max": 70
			},
			"rotationSpeed": {
				"min": 0,
				"max": 200
			},
			"lifetime": {
				"min": 4,
				"max": 4
			},
			"blendMode": "normal",
			"ease": [{
				"s": 0,
				"cp": 0.379,
				"e": 0.548
			}, {
				"s": 0.548,
				"cp": 0.717,
				"e": 0.676
			}, {
				"s": 0.676,
				"cp": 0.635,
				"e": 1
			}],
			"frequency": 0.004,
			"emitterLifetime": 0,
			"maxParticles": 1000,
			"pos": {
				"x": 0,
				"y": 0
			},
			"addAtBack": false,
			"spawnType": "rect",
			"spawnRect": {
				"x": 0,
				"y": -300,
				"w": 900,
				"h": 20
			}
		});
}

Particule.prototype = Object.create(System.prototype);

Particule.prototype.run = function(entity) {
	System.prototype.run.call(this, entity);
	var now = Date.now();

	// The emitter requires the elapsed
	// number of seconds since the last update
	this.emitter.update((now - this.elapsed) * 0.001);
	this.elapsed = now;
};

module.exports = new Particule();
