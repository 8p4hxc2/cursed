define(["handlers/system"], function(systemHandler) {
	"use strict";

	function animate() {
		systemHandler.run();
		requestAnimationFrame(animate);
	}

	//const level = alias.require("@factories/level");
	//const systemHandler = alias.require("@handlers/system");
	//const resourceHandler = alias.require("@handlers/resource");
	//const keyboardHandler = alias.require("@handlers/keyboard");

	//systemHandler.add("physic");
	//systemHandler.add("animation");
	systemHandler.add("renderer").then(animate);
	//systemHandler.add("player");

	//resourceHandler.run().then(function() {
	//level.create();
	//animate();
	//});
});
