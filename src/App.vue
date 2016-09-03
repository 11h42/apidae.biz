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


		<section class="features card-group">
			<feature v-for="feature in features" :illustration="feature.illustration">
				<span slot="title">{{feature.title}}</span>
				<span slot="subtitle">{{feature.subtitle}}</span>
				<p slot="description">{{feature.description}}</p>
			</feature>
		</section>

		<my-footer></my-footer>
	</div>
</template>
<script>
	import Navbar from './components/navbar'
	import MastHead from './components/mast-head'
	import Feature from './components/feature'
	import MyFooter from './components/footer'

	export default {
		components: {
			Navbar,
			MastHead,
			Feature,
			MyFooter
		},
		data () {
			return {
				features: [
					{
						title: 'Congés et absences',
						illustration: 'assets/congés.png',
						subtitle: 'Rapide et efficace',
						description: 'en quelques clics demandez vos congés et recevez la réponse par email dès que votre manager a répondu.'
					},
					{
						title: 'Notes de frais',
						illustration: 'assets/note-de-frais.png',
						subtitle: 'Fini la paperasse inutile',
						description: 'sur votre smartphone à la fin du repas avec votre client envoyez la note de frais à votre employeur.'
					},
					{
						title: 'Suivi d’activité',
						illustration: 'assets/suivi-d-activité.png',
						subtitle: 'Gain de temps',
						description: 'c’est l’heure du bilan d’activité mensuel mais qu’avez-vous fait le vendredi 12 après-midi ? Plus de prise de tête : déclarez votre activité au jour le jour en toute simplicité.'

					}
				]
			}
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import '../node_modules/hint.css/hint.min.css';
</style>
