<template>
	<div id="app">
		<navbar :features="features" :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

		<cover class="masthead" :scroll_to_signup="scroll_to_signup">
			<span slot="header" class="m-x-auto">
				Ne perdez plus votre temps&nbsp!
			</span>
			<small slot="header-subtitle">Apidae, c'est 4 logiciels R.H. en 1 ! Gérez
				vos notes de frais, vos comptes-rendus d'activités, vos congés et vos temps de travail
				depuis une seule application web ou mobile.
			</small>
		</cover>

		<div class="container-fluid">
			<section id="fonctionnalités" class="row">
				<features-list :features="features"></features-list>
			</section>

			<pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

			<signup></signup>

			<section id="nous-contacter" class="row">
				<call-to-action class="col-xs-12"></call-to-action>
			</section>
		</div>

		<my-footer></my-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import Navbar from "./components/navbar";
	import Cover from "./components/cover";
	import FeaturesList from "./components/features-list";
	import CallToAction from "./components/call-to-action";
	import MyFooter from "./components/footer";
	import Continue from "./components/continue.vue";
	import Pricing from "./Pricing.vue";
	import Signup from "./Signup.vue";

	export default {
		components: {
			Navbar,
			Continue,
			FeaturesList,
			CallToAction,
			MyFooter,
			Cover,
			Pricing,
			Signup
		},
		data() {
			return {
				features: [
					{
						id: "suivi-d’activité",
						title: "Suivi d’activité",
						illustration: "fa fa-3x fa-line-chart",
						subtitle: "Gain de temps",
						description:
								"C’est l’heure du bilan d’activité mensuel mais qu’avez-vous fait le vendredi 12 après-midi ? Plus de prise de tête : déclarez votre activité au jour le jour en toute simplicité."
					},
					{
						id: "congés-et-absences",
						title: "Congés et absences",
						illustration: "fa fa-3x fa-plane",
						subtitle: "Rapide et efficace",
						description:
								"En quelques clics demandez vos congés ou renseignez vos absences prévues et recevez la réponse par email dès que votre manager a répondu."
					},
					{
						id: "notes-de-frais",
						title: "Notes de frais",
						illustration: "fa fa-3x fa-credit-card",
						subtitle: "Fini la paperasse inutile",
						description:
								"Sur votre smartphone à la fin du repas avec votre client, créez envoyez la note de frais à votre employeur en quelques clics."
					},
					{
						id: "time-tracking",
						title: "Time tracking",
						illustration: "fa fa-3x fa-clock-o",
						subtitle: "Traçabilité de vos tâches",
						description:
								"Suivez en temps réel vos temps d'activité par tâche et par projet et obtenez des synthèses détaillées par période et par projet. Idéal pour organiser votre travail."
					}
				]
			};
		},

		methods: {
			scroll_to_signup: function () {
				$("html, body").animate(
						{
							scrollTop: $("#signup-form").offset().top
						},
						1000
				);
			}
		}
	};
</script>

<style>
	@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
	@import "../node_modules/font-awesome/css/font-awesome.min.css";
	@import "../node_modules/hint.css/hint.min.css";

	body,
	html {
		font-family: "Raleway", sans-serif !important;
		font-weight: 400;
		width: 100%;
	}

	#call-to-action {
		padding-top: 50px;
	}
</style>
