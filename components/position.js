"use strict";

const Component = alias.require("@component");

class Position extends Component {
	constructor(x, y) {
		super("position");

		this.x = x || 0;
		this.y = y || 0;
	}
}

module.exports = Position;
