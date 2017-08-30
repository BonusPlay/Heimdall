<template lang="pug">
	.col-3.p-0
		b-list-group.container
			bookmark(v-for="(app, index) in appList" v-bind:key="index" v-bind:app="app")
				| {{ app.name }}
</template>

<script>
	import Bookmark from './Bookmark.vue'

	export default {
		name: 'sidebar',
		components: {
			Bookmark
		},
		methods: {
			selectApp: function(index) {
				console.log(index);
			}
		},
		computed: {
			appList () {
				let appList = this.$store.state.App.appList;
				return appList ? appList : [];
			}
		}
	}
</script>

<style scoped lang="sass">

</style>