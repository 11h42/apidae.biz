<template>
    <div class="core-cra">
		<navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

		<pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

		<signup :scroll_to_price="scroll_to_price"></signup>

		<section id="nous-contacter" class="row">
			<call-to-action class="col-xs-12"></call-to-action>
		</section>

		<my-footer></my-footer>
	</div>
</template>

<script type="text/ecmascript-6">
	import Navbar from "./../components/navbar";
	import CallToAction from "./../components/call-to-action";
	import Pricing from "./../Pricing.vue";
	import Signup from "./../Signup.vue";
	import MyFooter from "./../components/footer";

	export default {
        components: {
			Navbar,
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

</style>
