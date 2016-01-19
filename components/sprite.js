"use strict";

const Component = alias.require("@component");
const opengl = alias.require("@opengl");
const resourceHandler = alias.require("@handlers/resource");

class Sprite extends Component {
  constructor(_params) {
    super("sprite");
    this.ref = new opengl.Sprite(resourceHandler.get(_params.texture, _params.frame));
    this.ref.anchor = {
      x: 0.5,
      y: 0.5
    };
  }

  set position(value) {
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
  }
}

module.exports = Sprite;
