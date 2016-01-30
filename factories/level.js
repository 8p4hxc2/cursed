define(["opengl", "entities/ground", "handlers/system"], function(opengl, Ground, systemHandler) {
  "use strict";

  function Level() {}
  Level.prototype.create = function(resources) {
    //this.add();

    /*systemHandler.register(new Background("background", resourceHandler.get("background")));

    var bottom = window.innerHeight - 128;

    systemHandler.register(new Tile("1", 0, bottom, resourceHandler.get("tile")));
    systemHandler.register(new Tile("2", 128, bottom, resourceHandler.get("tile2")));
    systemHandler.register(new Tile("3", 256, bottom, resourceHandler.get("tile3")));*/


    var oGround = new Ground({
      id: "1"
    });

    /*for (var i = 0; i < 2; i++) {
      let oPlayer = new Player({
        id: i,
        position: {
          x: Math.random() * 1280,
          y: Math.random() * 500
        },
        size: {
          width: 128,
          height: 128
        },
        sprite: {
          texture: "tile1"
        }
        ,
              animation: {
                name: "cat_walk",
                frames: 10
              }
  });
systemHandler.register(oPlayer);
} */
setTimeout(function () {
  systemHandler.register(oGround);
}, 1000);



    /*systemHandler.register(new Ennemy("ennemy1", 300, 0, "cat_walk"));
    systemHandler.register(new Ennemy("ennemy2", 0, 300, "cat_walk"));
    systemHandler.register(new Ennemy("ennemy3", 300, 300, "cat_walk"));*/
    /*for (let y = 0; y < 1; y++) {
      for (let x = 0; x < 1; x++) {
        systemHandler.register(new Tile("1", 0, 0, resourceHandler.get("tile")));
      }
    }*/
  };

  return new Level();
});
