<template>
	<div id="app">
		<navbar :features="features" :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

		<cover class="masthead" :scroll_to_signup="scroll_to_signup">
			<span slot="header" class="m-x-auto">
				Ne perdez plus un temps précieux&nbsp!
			</span>
			<small slot="header-subtitle">Apidae, c'est notre solution SIRH : 4 logiciels R.H. en 1 ! <br/><br/>Gérez vos notes de frais, vos comptes-rendus d'activités, vos congés et vos temps de travail depuis une seule application web ou mobile.
			</small>
		</cover>

		<div class="container-fluid">
			<section id="fonctionnalités" class="row pictos">
				<div  class="col-xl-12 col-lg-6 col-md-6">
					<a href="./src/cra.html"><img src="src/assets/suivi-d-activité.png" alt="Apidae Gestion des activités"></a>
					<a href="./src/absences.html"><img src="src/assets/conges.png" alt="Apidae Gestion des absences"></a>
					<a href="./src/frais.html"><img src="src/assets/note-de-frais.png" alt="Apidae Notes de frais"></a>
					<a href="./src/time.html"><img src="src/assets/time-tracking.png" alt="Apidae Time Tracking"></a>
				</div>
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
								"C'est l\'heure du bilan d'activité mensuel.",
					},
					{
						id: "congés-et-absences",
						title: "Congés et absences",
						illustration: "fa fa-3x fa-plane",
						subtitle: "Rapide, simple et efficace",
						description:
								"L'heure des vacances approche..."
					},
					{
						id: "notes-de-frais",
						title: "Notes de frais",
						illustration: "fa fa-3x fa-credit-card",
						subtitle: "Fini la paperasse inutile",	
						description:
								"Un déjeuner avec un client, les frais de déplacements, de téléphone ..."
					},
					{
						id: "time-tracking",
						title: "Time tracking",
						illustration: "fa fa-3x fa-clock-o",
						subtitle: "Traçabilité des tâches à venir ou en cours",
						description:
								"Obtenez des synthèses significatives et détaillées des activités de vos équipes."
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

	.center {
		text-align : center;
	} 

</style>
