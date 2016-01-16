"use strict";

const Entity = alias.require("@entity");

class Background extends Entity {
  constructor(id, texture) {
    super("background_" + id);

    this.addComponent("sprite", 0, 0, texture);
    /*this.addComponent("sprite", x, y);*/
  }
}

module.exports = Background;
