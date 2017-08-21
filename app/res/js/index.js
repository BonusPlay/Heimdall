const remote = require('electron').remote;

function closeWindow() {
	remote.getCurrentWindow().close();
}

function maximizeWindow() {
	let window = remote.getCurrentWindow();
	let i = $('#topbar').find('> button:nth-child(2) > i');

	if (!window.isMaximized())
	{
		window.maximize();
		i.removeClass('fa-window-maximize');
		i.addClass('fa-window-restore');
	}
	else
	{
		window.unmaximize();
		i.removeClass('fa-window-restore');
		i.addClass('fa-window-maximize');
	}
}

function minimizeWindow() {
	remote.getCurrentWindow().minimize();
}

function showSplash() {
	remote.getCurrentWindow().setSize(400, 200, false);
	remote.getCurrentWindow().setResizable(false);
	$('#topbar').addClass('hidden');
	$('#main').addClass('hidden');
	$('#splash').removeClass('hidden');
}

function showMain() {
	remote.getCurrentWindow().setSize(900, 600, false);
	remote.getCurrentWindow().setResizable(true);
	$('#topbar').removeClass('hidden');
	$('#main').removeClass('hidden');
	$('#splash').addClass('hidden');
}

$( document ).ready(function() {
	setTimeout(function() {
		showMain();
	}, 3000);
});