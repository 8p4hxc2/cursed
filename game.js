"use strict";

(function() {
	var systemHandler = require("handlers/system");
	var resourceHandler = require("handlers/resource");
	var keyboardHandler = require("handlers/keyboard");
	window.Promise=require("./libs/promise");
	var level = require("./factories/level");

	resourceHandler.run().then(function() {
		systemHandler.add(require("systems/renderer"));
		//systemHandler.add(require("systems/particule"));
		//systemHandler.add(require("systems/animation"));
		systemHandler.add(require("systems/player"));

		level.generate(level.create(0, 0, 0));
		animate();
	});

	function animate() {
		systemHandler.run();
		requestAnimationFrame(animate);
	}
}());
