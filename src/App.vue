<template>
	<div id="app">
		<navbar></navbar>

		<mast-head class="masthead">
			<span slot="header" class="m-x-auto ">
				Solution <abbr title="Solution Informatique de Resources Humaines">SIRH</abbr>
			</span>

			<small slot="header-subtitle">
				3 logiciels RH en <b>1</b>.
			</small>
		</mast-head>


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
	import Navbar from './components/navbar'
	import MastHead from './components/mast-head'
	import Feature from './components/feature'

	export default {
		data () {
			return {}
		},
		components: {
			Navbar,
			MastHead,
			Feature
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import '../node_modules/hint.css/hint.min.css';
</style>
