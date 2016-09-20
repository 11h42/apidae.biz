<template>
	<div id="app">
		<navbar :features="features"></navbar>

		<cover class="masthead">
			<span slot="header" class="m-x-auto ">
				Solution <abbr title="Solution Informatique de Resources Humaines">SIRH</abbr>
			</span>
			<small slot="header-subtitle">3 logiciels RH en <b>1</b>.</small>
		</cover>

		<div class="container-fluid">
			<section id="fonctionnalités" class="row">
				<features-list :features="features"></features-list>
			</section>

			<section id="nous-contacter" class="row">
				<call-to-action class="col-xs-12"></call-to-action>
			</section>
		</div>

		<my-footer></my-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import Navbar from './components/navbar';
	import Cover from './components/cover';
	import FeaturesList from './components/features-list';
	import CallToAction from './components/call-to-action';
	import MyFooter from './components/footer';
	import Continue from './components/continue.vue';

	export default {
		components: {
			Navbar,
			Continue,
			FeaturesList,
			CallToAction,
			MyFooter,
			Cover
		},
		data () {
			return {
				features: [
					{
						id: 'suivi-d’activité',
						title: 'Suivi d’activité',
						illustration: 'assets/suivi-d-activité.png',
						subtitle: 'Gain de temps',
						description: 'c’est l’heure du bilan d’activité mensuel mais qu’avez-vous fait le vendredi 12 après-midi ? Plus de prise de tête : déclarez votre activité au jour le jour en toute simplicité.'

					},
					{
						id: 'congés-et-absences',
						title: 'Congés et absences',
						illustration: 'assets/congés.png',
						subtitle: 'Rapide et efficace',
						description: 'en quelques clics demandez vos congés et recevez la réponse par email dès que votre manager a répondu.'
					},
					{
						id: 'notes-de-frais',
						title: 'Notes de frais',
						illustration: 'assets/note-de-frais.png',
						subtitle: 'Fini la paperasse inutile',
						description: 'sur votre smartphone à la fin du repas avec votre client envoyez la note de frais à votre employeur.'
					},
				]
			}
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import '../node_modules/hint.css/hint.min.css';

	#fonctionnalités, #nous-contacter {
		min-height: 60vh;
		margin-top: 5rem;
	}

	#fonctionnalités {
		padding: 0 5em;
	}

	#call-to-action {
		padding-top: 18vh;
	}

</style>
