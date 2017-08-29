<template lang="pug">
	#app.h-100.w-100
		topbar
		#wrapper.h-100.w-100.row
			sidebar
			app-page
</template>

<script>
	import Topbar from '@/components/Topbar';
	import Sidebar from '@/components/Sidebar';
	import AppPage from '@/components/AppPage';

	export default {
		name: 'app',
		components: {
			AppPage,
			Topbar,
			Sidebar
		},
		data() {
			return {
				apps: null
			}
		},
		created: function() {
			let vm = this;

			fetch('https://api.bonusplay.pl/apps')
			.then(function(resp) {
				if (resp.status !== 200)
					console.err('ABORT');

				resp.json().then(function(data) {
					vm.apps = data;
				});
			});
		}
	}
</script>

<style lang="sass">
	#wrapper
		padding-top: 60px
		margin: 0
</style>