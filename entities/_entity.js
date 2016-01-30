"use strict";

function Entity(id) {
  this.id = id + "_" + new Date().getTime();
  this.components = [];
}

Entity.prototype.get = function(_component) {
  return this.components[_component];
};

Entity.prototype.add = function(Component, _params) {
  if (typeof(Component) === 'function') {
    Component = new Component(_params);
  }
  
  this.components[Component.name] = Component;
};

Entity.prototype.contain = function(_component) {
  return typeof(this.components[_component]) !== "undefined";
};

module.exports = Entity;
