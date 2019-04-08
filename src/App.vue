<template>
	<div class="core-app">
		<div id="app">
			<navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

			<cover class="masthead" :scroll_to_signup="scroll_to_signup">
				<span slot="header" class="m-x-auto">
					Apidae : Solution de management des ressources
				</span>
				<small slot="header-subtitle">Apidae est le logiciel de management des ressources en entreprise idéal pour le TPE/PME.
					Vous allez pouvoir centraliser et automatiser des procédures administratives telle que la
					<b>gestion des notes de frais</b>, <b>la gestion des congés et des absneces</b> des salariés ainsi
					que la <b>gestion du suivi d'activité</b> au sein de l'entreprise. Des solutions RH dans une seule
					application, c'est ce que Apidae vous propose &nbsp!
				</small>
			</cover>

			<div class="container-fluid">
				<solution></solution>

				<pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

				<signup></signup>

				<section id="nous-contacter" class="row">
					<call-to-action class="col-xs-12"></call-to-action>
				</section>
			</div>

			<my-footer></my-footer>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	import Navbar from "./components/navbar";
	import Cover from "./components/cover";
	import CallToAction from "./components/call-to-action";
	import MyFooter from "./components/footer";
	import Solution from "./components/solution"
	import Continue from "./components/continue.vue";
	import Pricing from "./Pricing.vue";
	import Signup from "./Signup.vue";

	export default {
		components: {
			Navbar,
			Continue,
			CallToAction,
			MyFooter,
			Solution,
			Cover,
			Pricing,
			Signup
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
		height: 100%;
		position: absolute;
	}

	#call-to-action {
		padding-top: 50px;
	}

	#app {
		position: relative;
		overflow:scroll;
		width: 100%;
		height: 100%;
	}

	.center {
		text-align : center;
	}

	.core-app {
		position: fixed;
		width: 100%;
		height: 100%;
	}

</style>
