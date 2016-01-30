define([], function() {
  "use strict";

  function Entity(id) {
    this.id = id + "_" + new Date().getTime();
    this.components = [];
  }

  Entity.prototype.get = function(_component) {
    return this.components[_component];
  };

  Entity.prototype.add = function(_component, _params) {
    var that = this;
    require(["components/" + _component], function(Component) {
      if (typeof(Component) === 'function') {
        that.components[_component] = new Component(_params);
      } else {
        that.components[_component] = Component;
      }
    });
  };

  Entity.prototype.contain = function(_component) {
    return typeof(this.components[_component]) !== "undefined";
  };

  return Entity;
});
