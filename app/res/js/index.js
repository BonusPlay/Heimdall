const remote = require('electron').remote;

let vm = new Vue({
	el: '#app',
	data: {
		"status": "Loading",
		"error": false,

		"maximized": false,

		"isVisibleTopbar": false,
		"isVisibleMain": false,
		"isVisibleSplash": true,

		"apps": null
	},
	methods: {
		minimizeWindow: function() {
			remote.getCurrentWindow().minimize();
		},
		closeWindow: function() {
			remote.getCurrentWindow().close();
		},
		maximizeWindow: function () {
			let window = remote.getCurrentWindow();

			if (!this.maximized)
			{
				window.maximize();
				this.maximized = true;
			}
			else
			{
				window.unmaximize();
				this.maximized = false;
			}
		},
		showSplash: function() {
			remote.getCurrentWindow().setSize(400, 200, false);
			remote.getCurrentWindow().setResizable(false);
			this.isVisibleTopbar = false;
			this.isVisibleMain = false;
			this.isVisibleSplash = true;
		},
		showMain: function() {
			remote.getCurrentWindow().setSize(900, 600, false);
			remote.getCurrentWindow().setResizable(true);
			this.isVisibleTopbar = true;
			this.isVisibleMain = true;
			this.isVisibleSplash = false;
		}
	}
});

$( document ).ready(function() {
	$.get('https://api.bonusplay.pl/apps', function(data){
		vm.apps = data;
	}).fail(function() {
		vm.error = true;
		vm.status = "Error downloading data from server!";
	});

	setTimeout(vm.showMain, 3000);
});