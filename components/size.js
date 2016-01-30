define(["component"], function(Component) {
  "use strict";

  function Size(_params) {
    Component.prototype.constructor.call(this, "size");

    this.width = _params.width || 0;
    this.height = _params.height || 0;
  }

  Size.prototype = Object.create(Component);

  return Size;
});
