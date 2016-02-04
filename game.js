"use strict";

(function() {
	var systemHandler = require("handlers/system");
	var resourceHandler = require("handlers/resource");
	var keyboardHandler = require("handlers/keyboard");
	var level = require("./factories/level");

	resourceHandler.run().then(function() {

		systemHandler.add(require("systems/physic"));
		systemHandler.add(require("systems/renderer"));
		systemHandler.add(require("systems/particule"));
		systemHandler.add(require("systems/animation"));
		systemHandler.add(require("systems/player"));

		level.create();
		animate();
	});

	function animate() {
		systemHandler.run();
		requestAnimationFrame(animate);
	}
}());
