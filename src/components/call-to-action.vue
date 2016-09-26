<template>
	<article id="call-to-action" class="m-x-auto text-xs-center">
		<div class="row">
			<continue target="#call-to-action"></continue>
		</div>

		<div class="row">
			<div class="col-xs-12">
				<h1 class="display-5">
					Envie d’un <em class="text-warning">devis</em> ou simplement de poser une <em class="text-primary">question</em>
					?
				</h1>
			</div>
		</div>

		<hr>

		<div class="row">
			<div class="col-xs-12">
				<a href="mailto:contact@apidae.biz" class="btn btn-success btn-lg">
					<b>Contactez-nous</b>
				</a>
			</div>
		</div>
	</article>
</template>
<script type="text/ecmascript-6">
	import Continue from './continue';

	export default {
		components: {
			Continue
		}
	}
</script>
<style>
	#call-to-action {
		position: relative;
	}

	#call-to-action .continue {
		top: 0;
		opacity: .5;
	}
</style>
