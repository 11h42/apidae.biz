<template>
	<div class="continue d-block text-xs-center">
		<a :href="target">
			<span class="sr-only">{{target}}</span>
			<i class=" fa fa-angle-double-down fa-fw m-x-auto"></i>
		</a>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			target: {type: String, required: true}
		}
	}
</script>
<style>
	.continue, .continue a {
		color: #ddd;
	}

	.continue {
		position: absolute;
		width: 100%;
		height: 6em;
		z-index: 99;
		left: 0;
	}

	.continue .fa {
		font-size: 6em;
		text-shadow: .1rem .1rem .5rem #000;
		opacity: .25;
	}
</style>
