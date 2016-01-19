"use strict";

class Entity {
  constructor(id) {
    this._id = id + "_" + new Date().getTime();
    this.components = [];
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get(_component) {
    return this.components[_component];
  }

  add(_component, _params) {
    var Component = require("../components/" + _component);

    if (typeof(Component) === 'function') {
      this.components[_component] = new Component(_params);
    } else {
      this.components[_component] = Component;
    }
  }

  contain(_component) {
    return typeof(this.components[_component]) !== "undefined";
  }
}

module.exports = Entity;
