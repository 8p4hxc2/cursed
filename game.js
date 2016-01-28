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

const rectangle = {
	width: 0,
	height: 0
};

const move = {
	move: function() {
		console.log(this.width + "," + this.height);
	}
};

//var move={methods:{move:function(){console.log("ohe");}}};

function initialize() {
	const e = {};
	const ee = Object.create(e);
	const mm = Object.create(move);

	Object.assign(ee, rectangle, {
		width: 50
	});
	Object.assign(Object.getPrototypeOf(ee), Object.getPrototypeOf(mm));
	ee.move();

	const f = {};
	const ff = Object.create(f);
	Object.assign(ff, rectangle, {
		width: 5,
		height: 11
	});
	Object.assign(Object.getPrototypeOf(ff), Object.getPrototypeOf(mm));

	Object.assign(Object.getPrototypeOf(mm), {
		move: function() {
			console.log("REDRAW");
		}
	});
	ff.move();
	ee.move();
}

function animate() {
	systemHandler.run();
	requestAnimationFrame(animate);
}

exports.Initialize = initialize;
