<template>
	<section class="cover">
		<div class="container-fluid">
			<div class="catchline row">
				<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
					<h1 class="maintitle">
						<slot name="header"></slot>
					</h1>
					<br/>
					<h4 class="text-muted subtitle">
						<slot name="header-subtitle"></slot>
					</h4>

					<a @click="scroll_to_signup" class="btn btn-lg" id="cover-trial-button">
						<i class="fa fa-arrow-circle-o-right"></i>
						&nbspEssayer gratuitement notre solution APIDAE !
					</a>
				</div>
				<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 row">
					<iframe class="center" width="560" height="315" src="https://www.youtube.com/embed/-49EYn9eFtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
			<hr class="catchline"/>
			<div class="row card-deck catchline">
				<product-information v-for="productInformation in productInformations"
						 class="col-xl-4">
					<span class="title" slot="title">{{productInformation.title}}</span>
					<p class="information" slot="information">{{productInformation.information}}</p>
				</product-information>
			</div>
		</div>
	</section>
</template>

<script type="text/ecmascript-6">
	import ProductInformation from "./product-information";

	export default {
		components: {
			ProductInformation,
		},
		props: {
			scroll_to_signup: {type: Function, required: true}
		},
		data() {
			return {
				productInformations: [
					{
						title: "DIGITILISATION DE VOTRE ENTREPRISE",
						information:
								"Vous accompagner dans la digitalisation de votre entreprise, " +
								"c'est ce que vous promet notre application RH Apidae",
					},
					{
						title: "SIMPLIFIEZ VOS PROCESS RH",
						information:
								"Automatiser vos processus RH et faite gagner du temps à vos collaborateurs"
					},
					{
						title: "UNE SOLUTION TOUT-EN-UN",
						information:
								"Gérez vos notes de frais, vos comptes-rendus d'actovités, vos congés et vos temps " +
								"de travail depuis une seule application web ou mobile"
					}
				]
			};
		},
	}
</script>
<style>
	hr {
		margin-top: 2em;
		border-top-width: 3px;
	}

	.catchline {
		margin-top: 7vh;
		position: relative;
	}

	.maintitle {
		font-weight: bold;
	}

	.subtitle {
		font-weight: lighter;
	}

	.cover {
		position: relative;
		padding: 0 4em;
	}

	@media screen and (max-height: 638px) {
		.cover {
			background-size: cover;
		}
	}

	@media screen and (max-width: 991px) {
		.cover {
			background-size: auto;
		}
	}

	#cover-trial-button {
		display: block;
		width: fit-content;
		width: -moz-fit-content;
		color: white;
		margin-top: 60px;
		margin-bottom: 40px;
		padding-left: 50px;
		padding-right: 50px;
		background-color: #fcce21;
	}
</style>
