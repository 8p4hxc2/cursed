define(["opengl", "system", "handlers/resource", "referential"], function(opengl, System, resourceHandler, referential) {
  "use strict";

  function Animation() {
    System.prototype.constructor.call(this, {
      "animation": true
    });

    this.lastTime = 0;
  }

  Animation.prototype = Object.create(System.prototype);

  Animation.prototype.run = function() {
    var now = Date.now();

    if (now - this.lastTime > referential.fps) {
      this.lastTime = Date.now();
      System.prototype.run.call(this);
    }
  };

  Animation.prototype.process = function(entity) {
    entity.components.animation.current++;
    if (entity.components.animation.current > entity.components.animation.frames) {
      entity.components.animation.current = 1;
    }

    entity.components.sprite.ref.texture = resourceHandler.get(entity.components.animation.name, entity.components.animation.current);
  };

  return new Animation();
});
