"use strict";

var Component = require("component");
var box2D = require("box2dweb");
var b2Body = box2D.Dynamics.b2Body;
var B2Vec2 = box2D.Common.Math.b2Vec2;
var B2BodyDef = box2D.Dynamics.b2BodyDef;
var B2FixtureDef = box2D.Dynamics.b2FixtureDef;
var B2World = box2D.Dynamics.b2World;
var B2PolygonShape = box2D.Collision.Shapes.b2PolygonShape;


function Body(_params) {
  Component.prototype.constructor.call(this, "body");

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

Body.prototype = Object.create(Component.prototype);

Body.prototype.Impulse = function(forceX, forceY) {
  var impulse = new B2Vec2(forceX, forceY);
  this.objet.ApplyImpulse(impulse, this.objet.GetWorldCenter());
};

Body.prototype.Force = function(forceX, forceY) {
  var impulse = new B2Vec2(forceX, forceY);
  this.objet.SetLinearVelocity(impulse);
};

module.exports = Body;
