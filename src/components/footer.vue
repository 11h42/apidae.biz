<template>
	<footer class="footer bg-inverse">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<our-address></our-address>
				</div>
				<div class="col-md-4">
					<contact-us></contact-us>
				</div>
				<div class="col-md-4">
					<our-services></our-services>
				</div>
			</div>
		</div>
	</footer>
</template>
<script type="text/ecmascript-6">
	import OurAddress from './our-address'
	import ContactUs from './contact-us'
	import OurServices from './our-services'

	export default {
		components: {
			OurAddress,
			ContactUs,
			OurServices,
		}
	}
</script>
<style>
	.bg-inverse {
		color: white;
	}
</style>
