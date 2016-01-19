"use strict";

const Entity = alias.require("@entity");


class Player extends Entity {
  constructor(_params) {
    super("player_" + _params.id);

    this.add("keyboard");
    this.add("position", _params.position);
    this.add("size", _params.size);
    this.add("sprite", _params.sprite);
    //this.add("animation", _params.animation);
    this.add("body", {
      type: "dynamic",
      density: 1.0,
      friction: 0.3,
      restitution: 0.0
    });
  }
}

module.exports = Player;
