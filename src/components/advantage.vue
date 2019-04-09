<template>
	<div class="row advantage-container">
		<div class="col-lg-5 col-mg-12 col-xs-12">
			<div class="main-advantage">
				<h2 class="title-advantage">Les avantages du logiciel RH Apidae</h2>
				<span class="main-text">
					Apidae est une solution de gestion d'entreprise facile à mettre en place au sein de vos équipes.
					Apidae vous accompagne dans la digitalisation des tâches administratives pour faciliter la gestion du
					personnel. Avec Apidae vous faites gagner du temps à tous vos collaborateurs &nbsp!
				</span>
				<br/>
				<div class="place-button">
					<a class="btn btn-lg btn-yellow col-xs-12" v-if="showbtntry" @click="scroll_to_signup">Essayez dés maintenant</a>
				</div>
			</div>
		</div>
		<div class="col-lg-7 col-mg-6 col-xs-12">

		</div>
	</div>
</template>

<script>
	export default {
		props: {
			showbtntry: {type: Boolean, required: true},
			scroll_to_signup: {type: Function, required: true}
		},
	}
</script>

<style scoped>
	.advantage-container {
		text-align: left;
	}

	.main-advantage {
		margin-left: 10%;
		margin-bottom: 8em;
		width: 80%;
	}

	.place-button {
		bottom: 0;
		position: absolute;
		left: 50%;
	}

	.btn-yellow {
		position: relative;
		left: -50%;
		margin-top: 2em;
		font-weight: bold;
		font-size: x-large;
		background-color: #fcce21;
	}

	.main-text {
		font-size: x-large;
	}

	.title-advantage {
		font-size: 3.6em;
	}
</style>
