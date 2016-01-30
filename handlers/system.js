"use strict";

function SystemHandler() {
  this.systems = [];
}

SystemHandler.prototype.add = function(system) {
  this.systems[system.name] = system;
};

SystemHandler.prototype.register = function(entity) {
  for (var system in this.systems) {
    this.systems[system].register(entity);
  }
};

SystemHandler.prototype.run = function() {
  for (var system in this.systems) {
    this.systems[system].run();
  }
};

module.exports = new SystemHandler();
