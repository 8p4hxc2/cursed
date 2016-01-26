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
		'@components': 'components/',

		/* CONFIG */
		'@referential': 'referential.js',

		/* REPERTOIRES */
		'@systems': 'systems/',
		'@entities': 'entities/',
		'@factories': 'factories/',
		'@handlers': 'handlers/'
	}
});

const level = alias.require("@factories/level");
const systemHandler = alias.require("@handlers/system");
const resourceHandler = alias.require("@handlers/resource");
const keyboardHandler = alias.require("@handlers/keyboard");

/*const prototest = {
	test: function() {
		console.log(this.lol);
	}
};

const test = () => {
	return Object.assign({});
};

Object.assign(test.prototype, prototest);*/

var haha = {
	test: {},
	autre: (context) => ({
		unefonction: () => {
			console.log(context.mavar1);
		}
	})
};

const hehehe = (state) => {
	uneautrefonction: () => console.log(state.name + "whut");
};

function initialize() {
	/*var a = test();
	a.lol = "1";
	var b = test();
	b.hehehe = "3";
	a.test();
	b.test();*/
	var b = Object.create(haha);
	var c = Object.create(hehehe);
	var e = {
		mavar1: "33"
	};
	var f = {};

	Object.setPrototypeOf(e, Object.assign({}, Object.getPrototypeOf(c), Object.getPrototypeOf(b)));
	Object.setPrototypeOf(f, Object.assign({}, Object.getPrototypeOf(b)));

	console.log(e);
	console.log(f);
	//e.uneautrefonction();
	e.autre(e).unefonction();
	//f.uneautrefonction();
	f.autre(f).unefonction();
	e.test.haha = "omg";
	//var ttt = Object.getPrototypeOf(e);
	haha.autre.unefonction = function() {
		console.log("===");
	};
	//Object.setPrototypeOf(e, ttt);
	/*console.log(e);
	console.log(f);*/

	e.autre(e).unefonction();
	f.autre(f).unefonction();
	//f.uneautrefonction();
	/*console.log(e.prototype);
	console.log(haha.prototype);*/
	//console.log(c.prototype);
	//e.uneautrefonction();
	/*Object.assign(e.prototype, b.prototype, c.prototype);*/
	//var f = Object.assign({}, haha, hehehe);
	//	Object.assign(e, b.prototype, c.prototype);
	//e.unefonction();
	/*f.unefonction = function() {
		console.log("no");
	};
	f.unefonction();
	e.unefonction();*/
	/*a.test();
	b.test();*/
	/*systemHandler.add("physic");
	systemHandler.add("animation");
	systemHandler.add("renderer");
	systemHandler.add("player");

	resourceHandler.run().then(function() {
	  level.create();
	  animate();
	});*/
}

function animate() {
	systemHandler.run();
	requestAnimationFrame(animate);
}

exports.Initialize = initialize;
