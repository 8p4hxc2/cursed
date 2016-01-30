"use strict";

var opengl = require("opengl");
var systemHandler = require("handlers/system");
var Ground = require("../entities/ground");
var Player = require("../entities/player");

function Level() {}

Level.prototype.add = function() {
  var oPlayer = new Player({
    id: Math.random() * 500,
    position: {
      x: Math.random() * 30,
      y: Math.random() * 10 + 10
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
};

Level.prototype.create = function(resources) {
  this.add();
  var oGround = new Ground({
    id: "1"
  });
  systemHandler.register(oGround);
};

module.exports = new Level();
