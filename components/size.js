"use strict";

const Component = alias.require("@component");

class Size extends Component {
  constructor(_params) {
    super("size");

    this.width = _params.width || 0;
    this.height = _params.height || 0;
  }
}

module.exports = Size;
