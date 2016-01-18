"use strict";

const Component = alias.require("@component");
const box2D = require("box2dweb");
const b2Body = box2D.Dynamics.b2Body;
const B2Vec2 = box2D.Common.Math.b2Vec2;
const B2BodyDef = box2D.Dynamics.b2BodyDef;
const B2FixtureDef = box2D.Dynamics.b2FixtureDef;
const B2World = box2D.Dynamics.b2World;
const B2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


class Body extends Component {
	constructor(x, y, type, density, friction, restitution, width, height) {
		super("animation");

		this.addedToWorld = false;
		this.definition = null;
		this.fixture = null;
		this.objet = null;

		this.create(x, y, type, density, friction, restitution, width, height);
	}

	create(x, y, type, density, friction, restitution, width, height) {
		this.definition = new B2BodyDef();
		this.definition.position = new B2Vec2(x, y);
		if (type === "dynamic") {
			this.definition.type = b2Body.b2_dynamicBody;
		} else {
			this.definition.type = b2Body.b2_staticBody;
		}

		this.fixture = new B2FixtureDef();
		this.fixture.density = density;
		this.fixture.friction = friction;
		this.fixture.restitution = restitution;
		this.fixture.shape = new B2PolygonShape();
		this.fixture.shape.SetAsBox(width, height);
	}

	Impulse(force) {
		let impulse = new B2Vec2(0, force);
		this.objet.ApplyImpulse(impulse, this.objet.GetWorldCenter());
	}
}

module.exports = Body;
