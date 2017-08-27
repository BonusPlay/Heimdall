<template lang="pug">
	#topbar
		b-navbar.justify-content-between(sticky=true, variant="primary", type="dark")
			b-navbar-brand(href="#")
				img.rounded(src="~@/assets/logo.svg", height="32", width="32")
				span.p-1 Heimdall
			div
				button.nav-item.btn.btn-outline-danger(type="button", v-on:click="minimizeWindow")
					icon(name="window-minimize")
				button.nav-item.btn.btn-outline-danger(type="button", v-on:click="maximizeWindow")
					icon(name="window-restore", v-if="maximized")
					icon(name="window-maximize", v-else)
				button.nav-item.btn.btn-outline-danger(type="button", v-on:click="closeWindow")
					icon(name="window-close-o")
</template>

<script>
	const {remote} = require("electron");

	import 'vue-awesome/icons/window-minimize';
	import 'vue-awesome/icons/window-restore';
	import 'vue-awesome/icons/window-maximize';
	import 'vue-awesome/icons/window-close-o';

	export default {
		name: 'topbar',
		data() {
			return {
				maximized: false
			}
		},
		methods: {
			minimizeWindow: () => {
				remote.getCurrentWindow().minimize();
			},
			maximizeWindow: () => {
				let window = remote.getCurrentWindow();

				if (!this.maximized)
				{
					window.maximize();
					console.log(this);
					this.maximized = true;
				}
				else
				{
					window.unmaximize();
					console.log(this);
					this.maximized = false;
				}
			},
			closeWindow: () => {
				remote.getCurrentWindow().close();
			}
		}
	}
</script>

<style scoped lang="sass">
	#topbar
		-webkit-app-region: drag

	.bg-primary
		background-color: #FF8F00 !important

	button
		-webkit-app-region: no-drag
</style>