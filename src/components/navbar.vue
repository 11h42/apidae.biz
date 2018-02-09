<template>
	<nav class="navbar navbar-full bg-inverse">
		<ul class="nav navbar-nav container">
			<a class="navbar-brand" href="/">
				<img src="../assets/logo-apidae.png" alt="Logo Apidae" id="navbar-logo">
				&nbspApidae</a>
			<a href="mailto:contact@apidae.biz?subject=Version d'essai Apidae" class="nav-item btn btn-blue" v-if="showbtntry">Essai gratuit</a>
		</ul>
	</nav>
</template>
<script type="text/ecmascript-6">
	export default {
		props: {
			features: {type: Array, required: true},
			showbtntry: {type: Boolean, required: true},
		},
	}
</script>
<style>
	nav {
		background-color: #1C2B36 !important;
	}

	#navbar-logo {
		display: inline-block;
		width: 55px;
		height: 55px;
	}

	a {
		color: white !important;
		outline: none;
		text-decoration: none !important;
	}

	nav a.btn {
		float: right !important;
		margin-top: 15px;
		margin-right: 15px;
	}

	nav a.btn-blue {
		background-color: #1B6D85;
	}

	nav a.btn-default{
		border: 1px solid white;
	}

</style>
