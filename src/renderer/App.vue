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

	import * as types from './store/mutation-types';

	export default {
		name: 'app',
		components: {
			AppPage,
			Topbar,
			Sidebar
		},
		created: function() {
			this.$store.dispatch(types.UPDATE_LIST);
		}
	}
</script>

<style lang="sass">
	#wrapper
		padding-top: 60px
		margin: 0
</style>