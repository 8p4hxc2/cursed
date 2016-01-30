define(["opengl"], function(opengl) {
  "use strict";

  function ResourceHandler() {}

  ResourceHandler.prototype.get = function(texture, frame) {
    if (frame) {
      return opengl.loader.resources[texture].textures[texture + "(" + frame + ")"];
    }

    return opengl.loader.resources[texture].texture;
  };

  ResourceHandler.prototype.run = function(resolve) {
    return new Promise(function(resolve) {
      opengl.loader.add('tile', './resources/Tiles/1.png');
      opengl.loader.add('tile1', './resources/Tiles/2.png');
      opengl.loader.add('tile3', './resources/Tiles/3.png');
      opengl.loader.add('background', './resources/BG/1.png');
      opengl.loader.add('cat_idle', './resources/cat/idle.json');
      opengl.loader.add('cat_walk', './resources/cat/walk.json');

      opengl.loader.load(resolve);
    });
  };

  return new ResourceHandler();
});
