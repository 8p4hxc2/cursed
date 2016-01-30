define(["opengl", "system"], function(opengl, System) {
  "use strict";

  function Renderer() {
    System.prototype.constructor.call(this, {
      "sprite": true,
      "position": true
    });

    this.canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
      backgroundColor: 0x1099bb
    });
    document.body.appendChild(this.canvas.view);

    this.screen = new opengl.Container();
  }

  Renderer.prototype = Object.create(System.prototype);

  Renderer.prototype.run = function() {
    //super.run();
    System.prototype.run.call(this);
    this.canvas.render(this.screen);
  };

  Renderer.prototype.process = function(entity) {
    if (!entity.addedToScreen) {
      this.addToScreen(entity.components.sprite);
      entity.addedToScreen = true;
    }

    entity.components.sprite.ref.position ={x:300,y:300};// entity.components.position;
    //entity.components.sprite.ref.position = entity.components.body.objet.GetPosition();

    /*if (entity.components.body.objet.m_type === 2) {
      entity.components.sprite.ref.position.x = entity.components.body.objet.GetPosition().x * 32;
      entity.components.sprite.ref.position.y = entity.components.body.objet.GetPosition().y * 32;
    }*/
    //entity.components.sprite.ref.rotation = entity.components.body.objet.GetAngle();
  };

  Renderer.prototype.addToScreen = function(sprite) {
    this.screen.addChild(sprite.ref);//, sprite.ref.width, sprite.ref.height);
  };

  return new Renderer();
});
