"use strict";

var Entity = require("entity");

function Ground(_params) {
  Entity.prototype.constructor.call(this, "ground_" + _params.id);

  this.add(require("../components/position"), {
    x: 0,
    y: 0
  });

  this.add(require("../components/size"), {
    width: 8,
    height: 4
  });

  this.add(require("../components/sprite"), {
    texture: "tile3"
  });

  this.add(require("../components/body"), {
    type: "static",
    density: 1.0,
    friction: 0.3,
    restitution: 0.0
  });
}

Ground.prototype = Object.create(Entity.prototype);

module.exports = Ground;
