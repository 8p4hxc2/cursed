define(["handlers/system", "handlers/resource", "factories/level", "libs/promise"], function(systemHandler, resourceHandler, level) {
  "use strict";

  function animate() {
    systemHandler.run();
    requestAnimationFrame(animate);
  }

  //const level = alias.require("@factories/level");
  //const systemHandler = alias.require("@handlers/system");
  //const resourceHandler = alias.require("@handlers/resource");
  //const keyboardHandler = alias.require("@handlers/keyboard");

  //systemHandler.add("physic");
  //systemHandler.add("animation");

  //systemHandler.add("player");

  Promise.all([
    resourceHandler.run(),
    systemHandler.add("renderer"),
    systemHandler.add("animation"),
    systemHandler.add("physic"),
    systemHandler.add("player")
  ]).then(function() {
    animate();
    setTimeout(function() {
      level.create();
    }, 1000);

    //animate();
  });
});
