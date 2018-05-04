<template>
	<section class="cover">
		<div class="container">
			<div class="catchline row">
				<div class="col-lg-6 col-md-12">
					<h1 class="maintitle">
						<slot name="header"></slot>
						<br>
					</h1>
					<br/>
					<h4 class="text-muted subtitle">
						<slot name="header-subtitle"></slot>
					</h4>

					<a @click="scroll_to_signup" class="btn btn-lg" id="cover-trial-button">
						<i class="fa fa-arrow-circle-o-right"></i>
						&nbspEssayer gratuitement !
					</a>

					<i class="text-muted">Période d'essai de deux mois gratuite <br/>et sans engagement.</i>
				</div>
			</div>
		</div>
	</section>
</template>

<script type="text/ecmascript-6">
	export default {
		props: {
			scroll_to_signup: {type: Function, required: true}
		},
	}
</script>
<style>
	.catchline {
		top: 15vh;
		position: relative;
	}

	.maintitle {
		font-weight: bold;
	}

	.subtitle {
		font-weight: lighter;
	}

	.cover {
		background-image: url('../assets/banner-mockups.png');
		background-repeat: no-repeat;
		background-size: contain;
		height: 80vh;
		position: relative;
		padding: 0 80px;
	}

	#cover-trial-button {
		display: block;
		width: fit-content;
		width: -moz-fit-content;
		color: white;
		margin-top: 80px;
		margin-bottom: 40px;
		padding-left: 50px;
		padding-right: 50px;
		background-color: #F4511E;
	}
</style>
