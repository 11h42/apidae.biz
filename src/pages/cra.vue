<template>
    <div class="core-cra">
		<navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>
	</div>
</template>

<script type="text/ecmascript-6">
	import Navbar from "./../components/navbar";

	export default {
        components: {
			Navbar,
		}
    }
</script>

<style scoped>

</style>
