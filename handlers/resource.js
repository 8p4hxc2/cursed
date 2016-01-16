"use strict";

const opengl = alias.require("@opengl");

class ResourceHandler {
  constructor() {}

  add(system) {
    this.systems[system] = alias.require("@systems/" + system);
  }

  get(texture, frame) {
    return opengl.loader.resources[texture].textures[texture + "(" + frame + ")"];
  }

  run() {
    return new Promise(function(resolve) {
      opengl.loader.add('tile', './resources/Tiles/1.png');
      opengl.loader.add('tile2', './resources/Tiles/2.png');
      opengl.loader.add('tile3', './resources/Tiles/3.png');
      opengl.loader.add('background', './resources/BG/1.png');
      opengl.loader.add('cat_idle', './resources/cat/idle.json');
      opengl.loader.add('cat_walk', './resources/cat/walk.json');

      opengl.loader.load(resolve);
    });
  }
}

module.exports = new ResourceHandler();
