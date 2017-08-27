<template lang="pug">
	#app.h-100
		.row.h-100.w-100.m-0.p-0
			.col-4.d-flex.align-items-center.justify-content-end.p-0
				img(src="~@/assets/logo.svg", height="100", width="100")
			.col-8.d-flex.flex-column.align-items-start.justify-content-center.p-0
				h1 Heimdall
				.d-inline-flex.align-items-center
					Stretch(background="#AC7301")
					| Loading...
</template>

<script>
	import Stretch from 'vue-loading-spinner/src/components/Stretch.vue';

	export default {
		name: 'loader',
		components: {
			Stretch
		}
	}
</script>

<style scoped lang="sass">
	#app
		background: #261302
		color: #AC7301
		-webkit-user-select: none
		-webkit-user-drag: none
		cursor: default

		img
			-webkit-user-drag: none
</style>