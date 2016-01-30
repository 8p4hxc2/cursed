"use strict";

var opengl = require("opengl");
var System = require("system");
var resourceHandler = require("handlers/resource");
var referential = require("referential");

function Animation() {
  System.prototype.constructor.call(this, "animation", {
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

module.exports = new Animation();
