"use strict";

class SystemHandler {
	constructor() {
		this.systems = [];
	}

	add(system) {
		this.systems[system] = alias.require("@systems/" + system);
	}

	register(entity) {
		for (let system of this.systems) {
			system.Register(entity);
		}
	}

	run() {
		for (let system of this.systems) {
			system.run();
		}
	}
}

module.exports = new SystemHandler();
