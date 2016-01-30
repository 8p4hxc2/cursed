define(["entity"], function(Entity) {
  "use strict";

  function Ground(_params) {
    Entity.prototype.constructor.call(this, "ground_" + _params.id);

    this.add("position", {
      x: 0,
      y: 0
    });

    this.add("size", {
      width: 8,
      height: 4
    });

    this.add("sprite", {
      texture: "tile3"
    });

    /*this.add("body", {
      type: "static",
      density: 1.0,
      friction: 0.3,
      restitution: 0.0
    });*/
  }

  Ground.prototype = Object.create(Entity.prototype);

  return Ground;
});
