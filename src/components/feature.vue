<template>
	<article :id="id" class="feature">
		<div class="card-block text-xs-center">
			<h4 class="card-title">
				<slot name="title"></slot>
			</h4>
			<h6 class="card-subtitle text-muted">
				<slot name="subtitle"></slot>
			</h6>
		</div>
		<div class="m-x-auto text-xs-center illustration">
			<img :src="illustrationPath" alt="Card image" class="img-fluid  m-x-auto d-block">
		</div>
		<div class="card-block">
			<div class="card-text">
				<slot name="description"></slot>
			</div>
		</div>
	</article>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			illustration: {type: String, required: true},
			id: {type: String, required: true}
		},
		computed: {
			illustrationPath: function () {
				return require('../' + this.illustration)
			}
		}
	}
</script>
<style>
	.feature .title {
		text-transform: uppercase;
	}
	.feature .subtitle {
		/*text-transform: capitalize;*/
	}
	.feature .illustration {
		padding: 2em;
	}
</style>
