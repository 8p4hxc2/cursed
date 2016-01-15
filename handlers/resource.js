"use strict";

const opengl = alias.require("@opengl");

class ResourceHandler {
  constructor() {}

  add(system) {
    this.systems[system] = alias.require("@systems/" + system);
  }

  get(texture) {
    return opengl.loader.resources[texture].texture;
  }

  run() {
    return new Promise(function(resolve) {
      opengl.loader.add('tile', './resources/tile.jpg').load(resolve);
    });
  }
}

module.exports = new ResourceHandler();
