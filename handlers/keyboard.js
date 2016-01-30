"use strict";

var cKeyboard = require("../components/keyboard");

function Keyboard() {
  this.keys = [];
  var that = this;
  window.addEventListener("keydown", function(e) {
    that.downHandler(e);
  }, false);
  window.addEventListener("keyup", function(e) {
    that.upHandler(e);
  }, false);
}

Keyboard.prototype.isUp = function(key) {
  return !this.keys[key];
};

Keyboard.prototype.isDown = function(key) {
  return this.keys[key];
};

Keyboard.prototype.downHandler = function(event) {
  cKeyboard.keys[event.keyCode] = true;
};

Keyboard.prototype.upHandler = function(event) {
  cKeyboard.keys[event.keyCode] = false;
};

module.exports = new Keyboard();
