define([], function() {
  "use strict";

  function SystemHandler() {
    this.systems = [];
  }

  SystemHandler.prototype.add = function(system) {
    var that = this;
    return new Promise(function(resolve) {
      require(["systems/" + system], function(loadedSystem) {
        that.systems[system] = loadedSystem;
				resolve();
      });
    });
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

  return new SystemHandler();
});
