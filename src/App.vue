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
			<feature v-for="feature in features">
				<span slot="header">{{feature.header}}</span>
				<span slot="catch">{{feature.catch}}</span>
				<p slot="description">{{feature.description}}</p>
			</feature>
		</section>
	</div>
</template>

<script>
	import Navbar from './components/navbar'
	import MastHead from './components/mast-head'
	import Feature from './components/feature'

	export default {
		data () {
			return {
				features: [
					{
						title: 'Congés et absences',
						catch: 'Rapide et efficace',
						description: 'en quelques clics demandez vos congés et recevez la réponse par email dès que votre manager a répondu.'
					},
					{
						title: 'Notes de frais',
						catch: 'Fini la paperasse inutile',
						description: 'sur votre smartphone à la fin du repas avec votre client envoyez la note de frais à votre employeur.'
					},
					{
						title: 'Suivi d’activité',
						catch: 'Gain de temps',
						description: 'c’est l’heure du bilan d’activité mensuel mais qu’avez-vous fait le vendredi 12 après-midi ? Plus de prise de tête : déclarez votre activité au jour le jour en toute simplicité.'

					}
				]
			}
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
