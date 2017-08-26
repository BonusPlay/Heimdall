const {app, BrowserWindow} = require('electron');
require('electron-debug')({showDevTools: 'undocked'});
const Store = require('electron-store');

const path = require('path');
const url = require('url');

let win;
const store = new Store();

function createWindow () {
	win = new BrowserWindow({
		width: 400,
		height: 200,
		frame: false,
		resizable: false
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'app', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	if(store.has('development'))
		win.webContents.openDevTools();

	console.log(store.path);

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin')
		app.quit();
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null)
		createWindow();
});