<template>
	<div id="app">
		<nav class="navbar navbar-full navbar-dark bg-inverse">
			<ul class="nav navbar-nav">
				<a class="navbar-brand" href="#">Apidae</a>
				<li class="nav-item active">
					<a class="nav-link" href="#">Accueil<span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Solutions</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
			</ul>
		</nav>

		<section class="masthead">
			<h1 class="display-1 text-sm-center catchline">
				Solution <abbr title="Solution Informatique de Resources Humaines">SIRH</abbr> :
				3 logiciels RH en 1
			</h1>
		</section>

		<section class="features">
			<section class="features">
				<feature>
					<span slot="header">blabla</span>
					<span slot="catch">super catchy</span>
				</feature>
			</section>
		</section>
	</div>
</template>

<script>
	import Feature from './components/feature'

	export default {
		data () {
			return {
			}
		},
		components: {
			Feature
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import '../node_modules/hint.css/hint.min.css';

	.masthead {
		background-image: url('assets/banner.jpg');
		background-size: cover;
		height: 80vh;
	}

	.catchline {
		top: 50vh;
		position: relative;
		color: white;
		text-shadow: .25rem .25rem 1rem #000;
	}

</style>
