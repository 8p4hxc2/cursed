define(["opengl", "component", "handlers/resource"], function(opengl, Component, resourceHandler) {
  "use strict";

  function Sprite(_params) {
    Component.prototype.constructor.call(this, "sprite");
    this.ref = new opengl.Sprite(resourceHandler.get(_params.texture, _params.frame));
    this.ref.anchor = {
      x: 0.5,
      y: 0.5
    };
  }

  Sprite.prototype = Object.create(Component);

  /*set position(value) {
    this.x = value.x;
    this.y = value.y;
  }

  get position() {
    return this.ref.position;
  }

  set rotation(value) {
    this.ref.rotation = value;
  }

  get rotation() {
    return this.ref.rotation;
  }

  set x(value) {
    this.ref.position.x = value * 32;
  }

  get x() {
    return this.ref.position.x;
  }

  set y(value) {
    this.ref.position.y = value * 32;
  }

  get y() {
    return this.ref.position.y;
  }


  get width() {
    return this.ref.width;
  }

  get height() {
    return this.ref.height;
  }*/

  return Sprite;
});
