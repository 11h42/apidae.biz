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
						subtitle: "Gain de temps, plus d'oubli",
						description:
								"C'est l\'heure du bilan d'activité mensuel. L\'un de vos collaborateurs (ou peut-être tous) ne se rappelle plus ce qu\'il a fait le vendredi 12 après-midi ? Plus de prise de tête : les tâches peuvent être saisies au jour le jour en toute simplicité. Coté manager, vous avez une vision globale du planning et de l\'organisation de vos équipes."
					},
					{
						id: "congés-et-absences",
						title: "Congés et absences",
						illustration: "fa fa-3x fa-plane",
						subtitle: "Rapide, simple et efficace",
						description:
								"En quelques clics, les collaborateurs posent leurs prévisions de congés ou renseignent leurs absence (RTT, déplacements ...). Ils reçoivent la réponse par email dès que le manager a répondu. Dès la validation, les périodes concernées sont automatiquement renseignées dans le rapport d'activité du collaborateur heureux qui va partir en vacances. Le calendrier global des absences vos permet de visualiser mois par mois le planning prévu."
					},
					{
						id: "notes-de-frais",
						title: "Notes de frais",
						illustration: "fa fa-3x fa-credit-card",
						subtitle: "Fini la paperasse inutile",
						description:
								"A la fin du repas avec le client, et depuis son smartphone, le collaborateur crée et vous envoie la note de frais en quelques clics. Plus besoin de rechercher les justificatifs égarés ou rangés au fond d'un tiroir. De votre coté, vous optimisez le délai de remboursement et avez une vision globale des frais liés à chacun des services de l'entreprise."
					},
					{
						id: "time-tracking",
						title: "Time tracking",
						illustration: "fa fa-3x fa-clock-o",
						subtitle: "Traçabilité des tâches à venir ou en cours",
						description:
								"Suivez en temps réel les temps d'activité de chacun de vos collaborateurs, par tâche et par projet, et obtenez des synthèses significatives et détaillées. Idéal pour l\'organisation du travail et pour disposer d'une vue globale de l\'activité de chacun des membres de votre équipe. Le collaborateur, lors d'une nouvelle tâche sur un projet, peut déclencher un chronomètre en début d\'activité, et l'arrêter selon ses besoins ou contraintes, ou bien tout simplement lorsque la tâche est terminée."
					},
					{
						id: "ordre-de-mission",
						title: "Ordres de missions",
						illustration: "fa fa-3x fa-file-export",
						subtitle: "Ordres de missions",
						description:
								"Chacun des opérationnels de votre équipe crée et soumet l'ordre de mission au manager pour validation, avant le déplacement prévu. Dès la demande validée, les périodes concernées sont automatiquement renseignées dans le rapport d'activité du collaborateur."
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
		font-family: "Ubuntu", sans-serif !important;
		font-weight: 400;
		width: 100%;
	}

	#call-to-action {
		padding-top: 50px;
	}
</style>
