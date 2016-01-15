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

const map = alias.require("@factories/map");
const systemHandler = alias.require("@handlers/system");
const resourceHandler = alias.require("@handlers/resource");

function initialize() {
  systemHandler.add("renderer");

  resourceHandler.run().then(function() {
    map.create();
    animate();
  });
}

function animate() {
  //	STATS.Start();
  requestAnimationFrame(animate);
  //	movement_engine.run();
  systemHandler.run();
  //	STATS.End();
}

exports.Initialize = initialize;
