<template lang="pug">
	b-list-group-item(v-on:click="onClick(app)")
		img.rounded(v-bind:src="app.icon", height="32", width="32")
		| {{app.name}}
</template>

<script>
	export default {
		name: 'bookmark',
		props: ['app'],
		methods: {
			onClick: function() {
				this.$store.dispatch('setApp', this.app);
			}
		}
	}
</script>

<style scoped lang="sass">
	.list-group-item
		-webkit-user-select: none
		-webkit-app-region: no-drag
		cursor: default

		border-top-left-radius: 0

		&.active
			color: black
			background-color: white

		&:hover
			color: white
			background: #FFA000
			-webkit-transition: background-color 250ms cubic-bezier(0.4, 0.0, 0.2, 1), color 250ms cubic-bezier(0.4, 0.0, 0.2, 1)
			transition: background-color 250ms cubic-bezier(0.4, 0.0, 0.2, 1), color 250ms cubic-bezier(0.4, 0.0, 0.2, 1)


		@-webkit-keyframes fadein
			0%
				opacity: 0
			100%
				opacity: 1
</style>