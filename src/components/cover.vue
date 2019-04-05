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
		height: 80vh;
		position: relative;
		padding: 0 1em;
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
