"use strict";

class SystemHandler {
	constructor() {
		this.systems = [];
	}

	add(system) {
		this.systems[system] = alias.require("@systems/" + system);
	}

	register(entity) {
		for (let system in this.systems) {
			this.systems[system].register(entity);
		}
	}

	run() {
		for (let system in this.systems) {
			this.systems[system].run();
		}
	}
}

module.exports = new SystemHandler();
