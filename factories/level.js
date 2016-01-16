"use strict";

const opengl = alias.require("@opengl");
const Tile = alias.require("@entities/tile");
const Background = alias.require("@entities/background");
const Player = alias.require("@entities/player");
const systemHandler = alias.require("@handlers/system");

class Level {
  constructor() {}

  create(resources) {
    /*systemHandler.register(new Background("background", resourceHandler.get("background")));

    var bottom = window.innerHeight - 128;

    systemHandler.register(new Tile("1", 0, bottom, resourceHandler.get("tile")));
    systemHandler.register(new Tile("2", 128, bottom, resourceHandler.get("tile2")));
    systemHandler.register(new Tile("3", 256, bottom, resourceHandler.get("tile3")));*/


    systemHandler.register(new Player("player", 0, 0, "cat_walk"));
    /*for (let y = 0; y < 1; y++) {
      for (let x = 0; x < 1; x++) {
        systemHandler.register(new Tile("1", 0, 0, resourceHandler.get("tile")));
      }
    }*/
  }
}

module.exports = new Level();
