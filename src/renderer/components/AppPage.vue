<template lang="pug">
	.col
		button.button(v-on:click="hit") Test Button
</template>

<script>
	export default {
		name: 'app-page',
		methods: {
			hit: function() {
				console.log(this);
			}
		}
	}
</script>

<style scoped lang="sass">

</style>