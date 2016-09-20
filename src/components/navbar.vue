<template>
	<nav class="navbar navbar-full navbar-dark bg-inverse">
		<ul class="nav navbar-nav">
			<a class="navbar-brand" href="#">Apidae</a>
			<li class="nav-item">
				<a class="nav-link" href="#fonctionnalités">Fonctionnalités</a>
			</li>
			<li class="nav-item" v-for="feature in features">
				<a class="nav-link" :href="'#' + feature.id">
					<i>{{ feature.title}}	</i>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#nous-contacter">Contact</a>
			</li>
		</ul>
	</nav>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			features: {type: Array, required: true}
		},
	}
</script>
