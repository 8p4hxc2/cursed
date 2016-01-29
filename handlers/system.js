define([], function() {
	"use strict";

	class SystemHandler {
		constructor() {
			this.systems = [];
		}

		add(system) {
			return new Promise((resolve) => {
				require(["systems/" + system], (loadedSystem) => {
					this.systems[system] = loadedSystem;
					resolve();
				});
			});
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

	return new SystemHandler();
});
