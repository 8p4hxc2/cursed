"use strict";

function System(name, blueprint) {
  this.name = name;
  this.blueprint = blueprint;
  this.entities = [];
}

System.prototype.register = function(entity) {
  var match = 0;
  var total = 0;

  for (var component in this.blueprint) {
    total++;
    if (entity.contain(component)) {
      match++;
    }
  }

  if (match === total) {
    this.entities[entity.id] = entity;
  }
};

System.prototype.run = function() {
  for (var entity in this.entities) {
    this.process(this.entities[entity]);
  }
};

System.prototype.process = function() {
};

module.exports = System;
