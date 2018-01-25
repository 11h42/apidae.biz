<template>
	<div id="features-list" class="container">
		<div class="col-lg-12 card-deck">
			<feature v-for="feature in features" :illustration="feature.illustration" :id="feature.id"
					 class="col-lg-3 col-md-6">
				<span class="title" slot="title">{{feature.title}}</span>
				<span class="subtitle" slot="subtitle">{{feature.subtitle}}</span>
				<p class="description" slot="description">{{feature.description}}</p>
			</feature>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import Continue from './continue';
	import Feature from './feature';

	export default {
		props: {
			features: {type: Array, required: true}
		},
		components: {
			Continue,
			Feature
		}
	}
</script>
<style>
</style>
