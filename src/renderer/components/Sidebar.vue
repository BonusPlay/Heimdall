<template lang="pug">
	.col-3.p-0
		b-list-group.container
			bookmark(v-for="(app, index) in this.$parent.apps" v-bind:key="index" v-bind:app="app")
</template>

<script>
	import Bookmark from './Bookmark.vue'

	export default {
		name: 'sidebar',
		components: {
			Bookmark
		}
	}
</script>

<style scoped lang="sass">

</style>