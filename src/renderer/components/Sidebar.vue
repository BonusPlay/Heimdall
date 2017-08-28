<template lang="pug">
	.col-3.p-0
		#sidebar-header
			| This is a sidebar header
		b-list-group.container
			bookmark
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