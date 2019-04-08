<template>
	<article :id="id" class="feature">
		<div class="text-xs-center">
			<div class="card-title">
				<slot name="title"></slot>
			</div>
			<div class="card-subtitle text-muted">
				<slot name="subtitle"></slot>
			</div>
		</div>
		<div class="m-x-auto text-xs-center illustration">
			<i :class="illustrationClass"></i>
		</div>
		<div class="card-block">
			<div class="card-text">
				<slot name="description"></slot>
			</div>
		</div>
		<div class="card-block">
			<div class="card-text">
				<slot name="description2"></slot>
			</div>
		</div>
		<div class="card-block">
			<div class="card-text">
				<slot name="description3"></slot>
			</div>
		</div>
	</article>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			illustration: {type: String, required: true},
			link: {type: String, required: true},
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
		padding: 40px 0 25px 0;
	}
	.feature .card-title {
		font-size: xx-large;
	}
	.feature .card-subtitle {
		font-size: x-large;
	}
	.feature .subtitle {
		/*text-transform: capitalize;*/
	}
	.feature .image {
		with : 100%;
		padding: 25px;
		padding-top: 40px;
	}
</style>
