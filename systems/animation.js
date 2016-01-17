"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");
const resourceHandler = alias.require("@handlers/resource");

class Animation extends System {
  constructor() {
    super({
      "animation": true
    });

    this.test = 1;
  }

  process(entity) {
    if (entity.components.keyboard.keys[13]) {
      entity.components.animation.name = "cat_walk";
    }
    else {
      entity.components.animation.name = "cat_idle";
    }


    this.test += 0.3;
    entity.components.animation.current = Math.floor(this.test);
    if (entity.components.animation.current > entity.components.animation.frames) {
      entity.components.animation.current = 1;
      this.test = 1;
    }

    entity.components.sprite.ref.texture = resourceHandler.get(entity.components.animation.name, entity.components.animation.current);
  }

  addToScreen(sprite) {
    this.screen.addChild(sprite.ref);
  }
}

module.exports = new Animation();
