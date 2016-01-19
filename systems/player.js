"use strict";

const System = alias.require("@system");
const referential = alias.require("@referential");
const test = alias.require("@factories/level");

class Player extends System {
  constructor() {
    super({
      "body": true,
      "keyboard": true/*,
      "animation": true*/
    });
  }

  process(entity) {
    var keys = entity.components.keyboard.keys;

    if (keys[referential.keyboard.ok]) {
      //entity.components.body.Impulse(0, 1);
      test.add();
      return;
    }

    if (keys[referential.keyboard.right]) {
      entity.components.animation.name = "cat_walk";
      entity.components.sprite.ref.scale.x = 1;
      entity.components.sprite.ref.pivot.x = 0;
      entity.components.body.Force(10, 0);
      return;
    }

    if (keys[referential.keyboard.left]) {
      entity.components.sprite.ref.scale.x = -1;
      entity.components.sprite.ref.pivot.x = 547;
      entity.components.body.Force(-10, 0);
      entity.components.animation.name = "cat_walk";
      return;
    }

    //entity.components.animation.name = "cat_idle";
  }
}

module.exports = new Player();
