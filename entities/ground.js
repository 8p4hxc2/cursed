"use strict";

const Entity = alias.require("@entity");

class Ground extends Entity {
  constructor(_params) {
    super("ground_" + _params.id);

    this.add("position", {
      x: 0,
      y: 0
    });

    this.add("size", {
      width: 8,
      height: 4
    });

    this.add("sprite", {
      texture: "tile3"
    });

    this.add("body", {
      type: "static",
      density: 1.0,
      friction: 0.3,
      restitution: 0.0
    });
  }
}

module.exports = Ground;
