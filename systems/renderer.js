"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");

class Renderer extends System {
  constructor() {
    super({
      "sprite": true,
      "position": true
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

    entity.components.sprite.position = entity.components.position;
    //entity.components.sprite.ref.position = entity.components.body.objet.GetPosition();

    /*if (entity.components.body.objet.m_type === 2) {
      entity.components.sprite.ref.position.x = entity.components.body.objet.GetPosition().x * 32;
      entity.components.sprite.ref.position.y = entity.components.body.objet.GetPosition().y * 32;
    }*/
    //entity.components.sprite.ref.rotation = entity.components.body.objet.GetAngle();
  }

  addToScreen(sprite) {
    this.screen.addChild(sprite.ref, sprite.width, sprite.height);
  }
}
module.exports = new Renderer();
