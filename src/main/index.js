import {app, BrowserWindow} from 'electron';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development')
	global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
	? `http://localhost:9080/index.html`
	: `file://${__dirname}/index.html`;

const loaderURL = process.env.NODE_ENV === 'development'
	? 'http://localhost:9080/loader.html'
	: 'file://${__dirname}/loader.html';

function createMainWindow() {
	return new Promise((resolve, reject) => {
		mainWindow = new BrowserWindow({
			height: 563,
			useContentSize: true,
			width: 1000,
			show: false,
			frame: false,
			resizable: true
		});

		mainWindow.loadURL(winURL);

		mainWindow.on('closed', () => {
			mainWindow = null;
		});

		mainWindow.on('ready-to-show', () => {
			resolve();
		});
	});
}

function createLoaderWindow() {
	return new Promise((resolve, reject) => {
		let loaderWindow = new BrowserWindow({
			width: 400,
			height: 200,
			frame: false,
			resizable: false
		});

		loaderWindow.on('closed', () => {
			loaderWindow = null;
			reject();
		});

		loaderWindow.loadURL(loaderURL);

		loaderWindow.show();

		setTimeout(() => {
			resolve();
			if(loaderWindow !== null)
				loaderWindow.close();
		}, 3000);
	});
}

app.on('ready', () => {
	Promise.all([createLoaderWindow(), createMainWindow()])
	.then(() => {
		mainWindow.show();
	})
	.catch(err => {
		console.error(err);
		process.exit();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin')
		app.quit();
});

app.on('activate', () => {
	if (mainWindow === null)
		createMainWindow();
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
