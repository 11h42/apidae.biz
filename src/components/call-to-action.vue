<template>
	<article id="call-to-action" class="mx-auto text-xs-center">

		<div class="row">
			<div class="col-xs-12">
				<h2>
					Envie d’un <em class="text-warning">devis</em> ou simplement de poser une <em class="text-primary">question</em>
					?
				</h2>
			</div>
		</div>

		<hr>

		<div class="row justify-content-center">
			<a href="mailto:contact@apidae.biz" class="btn btn-lg">
				<b>Contactez-nous</b>
			</a>
		</div>
	</article>
</template>
<script type="text/ecmascript-6">
	import Continue from "./continue";

	export default {
		components: {
			Continue
		}
	};
</script>
<style>
	#call-to-action {
		position: relative;
		margin-bottom: 100px;
	}

	#call-to-action h2 {
		font-weight: bold;
	}

	#call-to-action .btn {
		background-color: #1b6d85;
	}

	.text-warning {
		color: #f25224 !important;
	}

	.text-primary {
		color: #246d84 !important;
	}
</style>
