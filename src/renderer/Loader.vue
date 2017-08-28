<template lang="pug">
	#app
		v-layout
			v-flex.text-xs-right(xs4)
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

<style lang="sass">
	html
		overflow: hidden

	#app
		background: #261302
		color: #AC7301
		-webkit-user-select: none
		-webkit-user-drag: none
		cursor: default

		img
			-webkit-user-drag: none
</style>