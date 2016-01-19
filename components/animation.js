"use strict";

const Component = alias.require("@component");

class Animation extends Component {
  constructor(_params) {
    super("animation");

    this.name = _params.name;
    this.frames = _params.frames;
    this.current = 1;
  }
}

module.exports = Animation;
