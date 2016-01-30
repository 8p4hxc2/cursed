define(["component"], function(Component) {
  "use strict";

  function Position(_params) {
    Component.prototype.constructor.call(this, "position");

    this.x = _params.x || 0;
    this.y = _params.y || 0;
  }

  Position.prototype = Object.create(Component);

  return Position;
});
