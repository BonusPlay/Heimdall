<template lang="pug">
	#app
		topbar
		sidebar
		app-page
</template>

<script>
	import Topbar from '@/components/Topbar';
	import Sidebar from '@/components/Sidebar';
	import AppPage from '@/components/AppPage';
	import LandingPage from '@/components/LandingPage';

	export default {
		name: 'app',
		components: {
			AppPage,
			Topbar,
			Sidebar,
			LandingPage
		}
	}
</script>

<style lang="sass">

</style>