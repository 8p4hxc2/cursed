"use strict";

(function() {
  var systemHandler = require("handlers/system");
  var resourceHandler = require("handlers/resource");
  var keyboardHandler = require("handlers/keyboard");
  var level = require("./factories/level");

  systemHandler.add(require("systems/physic"));
  systemHandler.add(require("systems/renderer"));
  systemHandler.add(require("systems/animation"));
  systemHandler.add(require("systems/player"));

  resourceHandler.run().then(function() {
    level.create();
    animate();
  });

  //  function initialize() {
  /*systemHandler.add("physic");
  systemHandler.add("animation");

  systemHandler.add("player");

  */

  //  }

  function animate() {
    systemHandler.run();
    requestAnimationFrame(animate);
  }
}());
