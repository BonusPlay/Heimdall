<template lang="pug">
	div
		.title Information
		.items
			.item
				.name Vue.js:
				.value {{ vue }}
			.item
				.name Electron:
				.value {{ electron }}
			.item
				.name Node:
				.value {{ node }}
			.item
				.name Platform:
				.value {{ platform }}
	</a>
</template>

<script>
	export default {
		data() {
			return {
				electron: process.versions['atom-shell'],
				node: process.versions.node,
				platform: require('os').platform(),
				vue: require('vue/package.json').version
			}
		}
	}
</script>

<style scoped lang="sass">
	.title
		color: #888
		font-size: 18px
		font-weight: initial
		letter-spacing: .25px
		margin-top: 10px

	.items
		margin-top: 8px

	.item
		display: flex
		margin-bottom: 6px
		.name
			color: #6a6a6a
			margin-right: 6px
		.value
			color: #35495e
			font-weight: bold
</style>
