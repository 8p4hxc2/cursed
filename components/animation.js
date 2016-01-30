"use strict";

var Component = require("component");

function Animation(_params) {
  Component.prototype.constructor.call(this, "animation");

  this.name = _params.name;
  this.frames = _params.frames;
  this.current = 1;
}

Animation.prototype = Object.create(Component.prototype);

module.exports = Animation;
