"use strict";

const opengl = alias.require("@opengl");
const Tile = alias.require("@entities/tile");
const Background = alias.require("@entities/background");
const Player = alias.require("@entities/player");
const Ground = alias.require("@entities/ground");
const Ennemy = alias.require("@entities/ennemy");
const systemHandler = alias.require("@handlers/system");

class Level {
  constructor() {}
  add() {
    let oPlayer = new Player({
      id: Math.random() * 500,
      position: {
        x: Math.random()*10,
        y: 10
      },
      size: {
        width: 4,
        height: 4
      },
      sprite: {
        texture: "tile1"
      }
      /*,
            animation: {
              name: "cat_walk",
              frames: 10
            }*/
    });
    systemHandler.register(oPlayer);
  }
  create(resources) {
    this.add();

    /*systemHandler.register(new Background("background", resourceHandler.get("background")));

    var bottom = window.innerHeight - 128;

    systemHandler.register(new Tile("1", 0, bottom, resourceHandler.get("tile")));
    systemHandler.register(new Tile("2", 128, bottom, resourceHandler.get("tile2")));
    systemHandler.register(new Tile("3", 256, bottom, resourceHandler.get("tile3")));*/


    let oGround = new Ground({
      id: "1"
    });

    /*for (var i = 0; i < 2; i++) {
      let oPlayer = new Player({
        id: i,
        position: {
          x: Math.random() * 1280,
          y: Math.random() * 500
        },
        size: {
          width: 128,
          height: 128
        },
        sprite: {
          texture: "tile1"
        }
        ,
              animation: {
                name: "cat_walk",
                frames: 10
              }
  });
systemHandler.register(oPlayer);
} */
    systemHandler.register(oGround);


    /*systemHandler.register(new Ennemy("ennemy1", 300, 0, "cat_walk"));
    systemHandler.register(new Ennemy("ennemy2", 0, 300, "cat_walk"));
    systemHandler.register(new Ennemy("ennemy3", 300, 300, "cat_walk"));*/
    /*for (let y = 0; y < 1; y++) {
      for (let x = 0; x < 1; x++) {
        systemHandler.register(new Tile("1", 0, 0, resourceHandler.get("tile")));
      }
    }*/
  }
}

module.exports = new Level();
