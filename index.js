"use strict";
const app = require('app');
const BrowserWindow = require('browser-window');
let mainWindow;

function createMainWindow() {
	const win = new BrowserWindow({
		width: 1280,
		height: 720,
		resizable: false
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.openDevTools();
	win.on('closed', onClosed);

	return win;
}

function onClosed() {
	mainWindow = null;
}

app.on('window-all-closed', function() {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', function() {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', function() {
	mainWindow = createMainWindow();
});
