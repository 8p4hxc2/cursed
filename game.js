"use strict";

(function() {
  const opengl = require("./libs/index");
  /*const systemHandler = alias.require("@handlers/system");
  const resourceHandler = alias.require("@handlers/resource");
  const keyboardHandler = alias.require("@handlers/keyboard");*/
  let ecran = null;
  let canvas = null;

  //  function initialize() {
  /*systemHandler.add("physic");
  systemHandler.add("animation");
  systemHandler.add("renderer");
  systemHandler.add("player");

  resourceHandler.run().then(function() {
    level.create();
    animate();
  });*/

  canvas = opengl.autoDetectRenderer(window.innerWidth, window.innerHeight, {
    backgroundColor: 0x1099bb
  });
  document.body.appendChild(canvas.view);

  ecran = new opengl.Container();
  //  }
  animate();
  function animate() {
    //systemHandler.run();
    canvas.render(ecran);
    requestAnimationFrame(animate);
  }
}());
