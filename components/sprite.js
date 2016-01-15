"use strict";

const OPENGL = alias.require("@opengl");
const Component = alias.require("@component");

class Sprite extends Component {
  constructor(x, y, texture) {
    super("sprite");

    this.ref = new OPENGL.Sprite(texture);
    this.ref.position.x = x;
    this.ref.position.y = y;
  }
}

module.exports = Sprite;
