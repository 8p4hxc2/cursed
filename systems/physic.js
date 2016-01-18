"use strict";

const System = alias.require("@system");
const box2D = require("box2dweb");
const B2Vec2 = box2D.Common.Math.b2Vec2;
const B2World = box2D.Dynamics.b2World;

class Physic extends System {
	constructor() {
		super({
			"body": true
		});

		this.world = new B2World(new B2Vec2(0, 9.8), true);
	}

	run() {
		this.world.Step(1 / 60, 10, 10);
		super.run();
		this.world.ClearForces();
	}

	process(entity) {
		if (!entity.addedToWorld) {
			var body = this.world.CreateBody(entity.components.body.definition);
			body.CreateFixture(entity.components.body.fixture);
			entity.components.body.objet = body;
			entity.addedToWorld = true;
		}

		entity.components.sprite.ref.position = entity.components.body.objet.GetPosition();
		entity.components.sprite.ref.rotation = entity.components.body.objet.GetAngle();
	}
}

module.exports = new Physic();
