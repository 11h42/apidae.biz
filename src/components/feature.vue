<template>
	<article class=" feature card">
		<div class="card-block text-xs-center">
			<h4 class="card-title">
				<slot name="title"></slot>
			</h4>
			<h6 class="card-subtitle text-muted">
				<slot name="subtitle"></slot>
			</h6>
		</div>
		<div class="m-x-auto text-xs-center">
			<img :src="illustrationPath" alt="Card image">
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
			illustration: {
				type: String,
				required: true
			}
		},
		computed: {
			illustrationPath: function () {
				return require('../' + this.illustration)
			}
		}
	}
</script>
