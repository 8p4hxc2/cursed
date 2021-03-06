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

function initialize() {
  systemHandler.add("physic");
  systemHandler.add("animation");
  systemHandler.add("renderer");
  systemHandler.add("player");

  resourceHandler.run().then(function() {
    level.create();
    animate();
  });
}

function animate() {
  systemHandler.run();
  requestAnimationFrame(animate);
}

exports.Initialize = initialize;
