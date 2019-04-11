<template>
    <div class="core-cra">
		<div id="app">
			<navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

			<cover class="masthead" :scroll_to_signup="scroll_to_signup" :is_main_page="false">
				<span slot="header" class="m-x-auto">
					Apidae : Logiciel de suivi d'activité pour TPE et PME
				</span>
				<small slot="header-subtitle">Simplifier la déclaration des temps de travail de vos collaborateurs.
					Avec Apidae vos équipes remplissent leurs activités mensuellement et à la fin du mois vous récupérez
					le bilan de chacun. Cela vous permet de faciliter la gestion RH et financière de votre entreprise.
					<br/>
					<br/>
					Avoir une vision globale des temps de travail de vos équipes par projet vous permet de gérer
					facilement la facturation client et de conaître la rentabilité des projets.
				</small>
				<small slot="text_button_free" class="size-btn-cover">
					<i class='fa fa-arrow-circle-o-right'/>&nbspEssayer gratuitement
				</small>
			</cover>

			<argument>
				<span slot="title">
					Nos solutions RH Apidae
				</span>
				<small slot="header-subtitle"> Apidae est la solution idéale pour favoriser le suivi d'activité de
					votre entreprise. Notre Logiciel de suivi d'activité vous permet d'avoir une vision à 360° sur
					l'activité de votre entreprise. Apidae, vous permet de connaître les temps d'activité de vos
					équipes par projet, et ainsi de faciliter la gestion de la facturation client.
				</small>
			</argument>

			<pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

			<signup :scroll_to_price="scroll_to_price"></signup>

			<section id="nous-contacter" class="row">
				<call-to-action class="col-xs-12"></call-to-action>
			</section>

			<my-footer></my-footer>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Navbar from "./../components/navbar";
	import Cover from "./../components/cover";
	import Argument from "./../components/argument"
	import CallToAction from "./../components/call-to-action";
	import Pricing from "./../Pricing.vue";
	import Signup from "./../Signup.vue";
	import MyFooter from "./../components/footer";

	export default {
        components: {
			Navbar,
			Cover,
			Argument,
			CallToAction,
			Pricing,
			Signup,
			MyFooter,
		},

		methods: {
			scroll_to_signup: function () {
				$("html, body").animate(
					{
						scrollTop: $("#signup-form").offset().top
					},
					1000
				);
			},
			scroll_to_price: function () {
				$("html, body").animate(
					{
						scrollTop: $("#pricing-form").offset().top
					},
					1000
				);
			}
		},
    }
</script>

<style scoped>
	.core-cra {
		width: 100%;
	}

	app {
		position: relative;
		overflow: auto;
		width: 100%;
		height: 100%;
	}

	.size-btn-cover {
		font-size: 1em;
	}

</style>
