"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");

class Renderer extends System {
  constructor() {
    super({
      "sprite": true
    });

    this.canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
      backgroundColor: 0x1099bb
    });
    document.body.appendChild(this.canvas.view);

    this.screen = new opengl.Container();
  }

  run() {
    super.run();
    this.canvas.render(this.screen);
  }

  process(entity) {
    if (!entity.addedToScreen) {
      this.addToScreen(entity.components.sprite);
      entity.addedToScreen = true;
    }
  }

  addToScreen(sprite) {
    this.screen.addChild(sprite.ref, 128, 128);
  }
}
module.exports = new Renderer();
