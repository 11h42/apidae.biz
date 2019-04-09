<template>
	<article>
		<div class="product-advantage">
			<div class="text-xs-left">
				<h4 >
					<slot name="title"></slot>
				</h4>
			</div>
			<div>
				<slot name="advantage"></slot>
			</div>
			<div>
				<slot name="advantage2"></slot>
			</div>
		</div>
	</article>
</template>

<script>
    export default {
    }
</script>

<style scoped>
	.product-advantage {
		text-align: justify;
		border: none;
		padding: 2em 0 2em 0;
		width: 80%;
		margin-left: 10%;
	}
</style>
