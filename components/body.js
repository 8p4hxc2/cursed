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
  constructor(_params) {
    super("body");

    this.definition = null;
    this.fixture = null;
    this.objet = null;

    this.definition = new B2BodyDef();
    //this.definition.position = new B2Vec2(x, y);
    if (_params.type === "dynamic") {
      this.definition.type = b2Body.b2_dynamicBody;
    } else {
      this.definition.type = b2Body.b2_staticBody;
    }

    this.fixture = new B2FixtureDef();
    this.fixture.density = _params.density;
    this.fixture.friction = _params.friction;
    this.fixture.restitution = _params.restitution;
    this.fixture.shape = new B2PolygonShape();
    //this.fixture.shape.SetAsBox(width, height);
  }

  Impulse(forceX, forceY) {
    let impulse = new B2Vec2(forceX, forceY);
    this.objet.ApplyImpulse(impulse, this.objet.GetWorldCenter());
  }

  Force(forceX, forceY) {
    let impulse = new B2Vec2(forceX, forceY);
    this.objet.SetLinearVelocity(impulse);
  }
}

module.exports = Body;
