"use strict";

var System = require("system");
var box2D = require("box2dweb");
var B2Vec2 = box2D.Common.Math.b2Vec2;
var B2World = box2D.Dynamics.b2World;

function Physic() {
  System.prototype.constructor.call(this, "physic", {
    "body": true,
    "position": true,
    "size": true
  });

  this.world = new B2World(new B2Vec2(0, 9.8), true);
}

Physic.prototype = Object.create(System.prototype);

Physic.prototype.run = function() {
  this.world.Step(1 / 60, 10, 10);
  System.prototype.run.call(this);
  //this.world.ClearForces();
};

Physic.prototype.process = function(entity) {
  if (!entity.addedToWorld) {
    entity.components.body.definition.position = new B2Vec2(entity.components.position.x, -entity.components.position.y);
    var body = this.world.CreateBody(entity.components.body.definition);

    entity.components.body.fixture.shape.SetAsBox(entity.components.size.width / 2, entity.components.size.height / 2);
    body.CreateFixture(entity.components.body.fixture);
    entity.components.body.objet = body;
    entity.addedToWorld = true;
  }

  entity.components.position.x = entity.components.body.objet.GetPosition().x;
  entity.components.position.y = entity.components.body.objet.GetPosition().y;
  entity.components.sprite.setRotation(entity.components.body.objet.GetAngle());
};

module.exports = new Physic();
