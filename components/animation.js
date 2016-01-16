"use strict";

const Component = alias.require("@component");

class Animation extends Component {
  constructor(name, frames) {
    super("animation");

    this.name = name;
    this.current = 1;
    this.frames = frames;
  }
}

module.exports = Animation;
