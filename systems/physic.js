"use strict";

const System = alias.require("@system");
const box2D = require("box2dweb");
const B2Vec2 = box2D.Common.Math.b2Vec2;
const B2World = box2D.Dynamics.b2World;

class Physic extends System {
  constructor() {
    super({
      "body": true,
      "position": true,
      "size": true
    });

    this.world = new B2World(new B2Vec2(0, 9.8), true);
  }

  run() {
    this.world.Step(1 / 60, 10, 10);
    super.run();
    //this.world.ClearForces();
  }

  process(entity) {
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
    entity.components.sprite.rotation = entity.components.body.objet.GetAngle();
  }
}

module.exports = new Physic();
