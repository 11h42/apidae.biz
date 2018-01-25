<template>
	<article :id="id" class="feature">
		<div class="text-xs-center">
			<h4 class="card-title">
				<slot name="title"></slot>
			</h4>
			<h6 class="card-subtitle text-muted">
				<slot name="subtitle"></slot>
			</h6>
		</div>
		<div class="m-x-auto text-xs-center illustration">
			<i :class="illustrationClass"></i>
		</div>
		<hr>
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
			illustrationClass: function () {
				return this.illustration
			}
		}
	}
</script>
<style>
	.feature {
		text-align: center;
		border: none;
	}
	.feature .illustration {
		padding: 25px;
		padding-top: 40px;
	}
	.feature .subtitle {
		/*text-transform: capitalize;*/
	}
</style>
