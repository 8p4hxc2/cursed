"use strict";

const opengl = alias.require("@opengl");
const System = alias.require("@system");
const resourceHandler = alias.require("@handlers/resource");

class Movement extends System {
  constructor() {
    super({
      "keyboard": true
    });
  }

  process(entity) {

  }
}

module.exports = new Movement();
