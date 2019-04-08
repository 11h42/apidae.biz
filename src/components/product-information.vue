<template>
	<article>
		<div class="product-information">
			<div class="text-xs-left">
				<h4 class="information-title">
					<slot name="title"></slot>
				</h4>
			</div>
			<div class="information">
				<slot name="information"></slot>
			</div>
		</div>
	</article>
</template>

<script>
    export default {
    	props: {
			productInformations: {type: Array, required: true}
		},
    }
</script>

<style scoped>
	.product-information {
		text-align: left;
		border: none;
		padding: 0 0 2em 0;
		width: 80%;
		margin-left: 10%;
	}
</style>
