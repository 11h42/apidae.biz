<template>
	<article id="call-to-action" class="m-x-auto text-xs-center">

		<div class="row">
			<div class="col-xs-12">
				<h3>
					Envie d’un <span class="text-warning">devis</span> ou simplement de nous poser une <span class="text-primary">question</span>
					?
				</h3>
			</div>
		</div>

		<hr>
		<br>

		<div class="row">
			<div class="col-xs-12">
				<a href="mailto:contact@apidae.biz" class="btn">
					<b>Contactez-nous</b>
				</a>
			</div>
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
