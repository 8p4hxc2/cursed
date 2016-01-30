define([], function() {
  "use strict";

  function Test() {

  }

  Test.prototype.lol = function() {
    console.log("WTF");
  };
  return new Test();
});
