"use strict";

var Component = require("component");

function Keyboard(x, y) {
  Component.prototype.constructor.call(this, "keyboard");
  this.keys = [];
}

Keyboard.prototype=Object.create(Component.prototype);

module.exports = new Keyboard();
