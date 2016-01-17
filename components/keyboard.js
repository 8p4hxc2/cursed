"use strict";

const Component = alias.require("@component");

class Keyboard extends Component {
  constructor(x, y) {
    super("keyboard");

    this.keys = [];
  }
}

module.exports = new Keyboard();
