<template lang="pug">
	.col
		| {{ app.name }} {{ app.version }}
</template>

<script>
	export default {
		name: 'app-page',
		computed: {
			app () {
				let selected = this.$store.state.App.selected;
				return selected ? selected : {};
			}
		}
	}
</script>

<style scoped lang="sass">

</style>