<template>
	<div class="core-app" >
		 <!--onresize="resizeEvent()" onload="loadEvent()"-->
		<div id="app">
			<navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

			<cover :scroll_to_signup="scroll_to_signup" :is_with_video="true"
				   :is_with_information="true" :is_main_title="true">
				<span slot="header" class="m-x-auto">
					Apidae : Solution de management des ressources
				</span>
				<small slot="header-subtitle">Apidae est le logiciel de management des ressources en entreprise idéal pour le TPE/PME.
					Vous allez pouvoir centraliser et automatiser des procédures administratives telle que la
					<b>gestion des notes de frais</b>, <b>la gestion des congés et des absneces</b> des salariés ainsi
					que la <b>gestion du suivi d'activité</b> au sein de l'entreprise. Des solutions RH dans une seule
					application, c'est ce que Apidae vous propose &nbsp!
				</small>
				<small slot="text_button_free" class="size-btn-cover">
					<i class='fa fa-arrow-circle-o-right'/>&nbspEssayer gratuitement notre solution APIDAE !
				</small>
			</cover>

			<div class="container-fluid">
				<solution></solution>

				<advantage :showbtntry="true" :scroll_to_signup="scroll_to_signup"></advantage>

				<pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

				<signup :scroll_to_price="scroll_to_price"></signup>

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
	import Advantage from "./components/advantage"
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
			Advantage,
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
			},
			scroll_to_price: function () {
				$("html, body").animate(
					{
						scrollTop: $("#pricing-form").offset().top
					},
					1000
				);
			}
		}
	};

	// function resizeEvent(){
	// 	changeSizeSubTitle();
	// 	changeSizeTitleInformation();
	// }
    //
	// function loadEvent(){
	// 	changeSizeSubTitle();
	// 	changeSizeTitleInformation();
	// }
    //
    // function  changeSizeTitleInformation() {
    	// if (window.innerWidth > 768) {
	// 		var baseHeight = 0;
	// 		for (var id in window.heightTitleInformation) {
	// 			var subTitle = window.heightTitleInformation[id];
	// 			if (subTitle.offsetHeight > baseHeight) {
	// 				baseHeight = subTitle.offsetHeight
	// 			}
	// 		}
	// 		for (var id in window.heightTitleInformation) {
	// 			var subTitle = window.heightTitleInformation[id];
	// 			if(subTitle.style)
	// 			{
	// 				subTitle.style.height = baseHeight + 'px';
	// 			}
	// 		}
	// 	}
	// }
    //
	// function  changeSizeSubTitle() {
    	// if (window.innerWidth > 768) {
	// 		var baseHeight = 0;
	// 		for (var id in window.heightSubTitle) {
	// 			var subTitle = window.heightSubTitle[id];
	// 			if (subTitle.clientHeight > baseHeight) {
	// 				baseHeight = subTitle.clientHeight
	// 			}
	// 		}
	// 		for (var id in window.heightSubTitle) {
	// 			var subTitle = window.heightSubTitle[id];
	// 			if(subTitle.style)
	// 				subTitle.style.height = baseHeight + 'px';
	// 		}
	// 	}
	// }
    //
	// window.onresize = resizeEvent;
	// window.onload = loadEvent;
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
		overflow: auto;
		width: 100%;
		height: 100%;
	}

	.center {
		text-align : center;
	}

	.core-app {
		width: 100%;
	}

	.size-btn-cover {
		font-size: 1em;
	}

</style>
