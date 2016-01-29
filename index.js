"use strict";

require.config({
	waitSeconds: 20,
	baseUrl: './',
	// urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		/* LIBS */
		"opengl": "libs/pixi",

		/* CORE */
		"system": "systems/_system",
		"entity": "entities/_entity",
		"component": "components/_component",

		/* CONFIG */
		"referential": "referential.js"
	},
	shim: {},
	map: {},
	config: {},
	bundles: {}
});

require(["game"]);
