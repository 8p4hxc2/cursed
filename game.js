"use strict";
var Alias = require('require-alias');

global.alias = new Alias({
	aliases: {
		/* LIBS */
		'@opengl': 'libs/pixi',
		/* CORE */
		'@system': 'systems/_system',
		'@entity': 'entities/_entity',
		'@component': 'components/_component',
		/* REPERTOIRES */
		'@systems': 'systems/',
		'@entities': 'entities/',
		'@factories': 'factories/',
		'@handlers': 'handlers/'
	}
});

const opengl = alias.require("@opengl");
const map = alias.require("@factories/map");
const systemHandler = alias.require("@handlers/system");

function initialize() {
	/*renderer.register(tt);
	renderer.register(tt2);
	movement_engine.register(tt);
	movement_engine.register(tt2);*/
	systemHandler.add("renderer");
	map.create();
	animate();
}

function animate() {
	//	STATS.Start();
	requestAnimationFrame(animate);
	//	movement_engine.run();
	systemHandler.run();
	//	STATS.End();
}

exports.Initialize = initialize;
