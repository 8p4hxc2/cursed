"use strict";

const Component = alias.require("@component");

class Position extends Component {
  constructor(_params) {
    super("position");

    this.x = _params.x || 0;
    this.y = _params.y || 0;
  }
}

module.exports = Position;
