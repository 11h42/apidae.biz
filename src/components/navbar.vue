<template>
	<nav class="navbar navbar-full navbar-dark">
		<div class="container">
			<a class="navbar-brand" href="/">
				<img src="../assets/logo-apidae.png" alt="Logo Apidae" id="navbar-logo">
				&nbsp;Apidae</a>
			<div class="nav-item navmenu" id="navmenuId">
				<a href="/">Accueil</a>
				<a href="/cra" @click="changePage">Suivi d'activité</a>
				<!--href="/cra"-->
				<a href="./src/absences.html">Congés et absences</a>
				<a href="./src/frais.html">Notes de frais</a>
				<a href="./src/time.html">Time tracking</a>
				<a href="javascript:void(0);" class="icon" @click="transformMenu()">
					<i class="fa fa-bars"></i>
				</a>
			</div>
			<a class="nav-item btn btn-yellow" v-if="showbtntry" @click="scroll_to_signup">Essai gratuit</a>
		</div>
	</nav>
</template>
<script type="text/ecmascript-6">

	import App from './../App.vue'
	import Signup from './../Signup.vue'
	import Cra from './../pages/cra.vue'

	export default {
		props: {
			showbtntry: {type: Boolean, required: true},
			scroll_to_signup: {type: Function, required: true}
		},
		methods: {
			transformMenu: function () {
				var x = document.getElementById("navmenuId");
				if (x.className === "navmenu") {
					x.className += " responsive";
				} else {
					x.className = "navmenu";
				}
			},
			changePage: function (event) {
				const routes = {
					'/': App ,
					'/signup': Signup,
					'/cra': Cra,
				};
				event.preventDefault();
				this.$root.currentRoute = '/cra';
				window.history.pushState(
				  null,
				  routes['/cra'],
				  '/cra'
				);
			}
		}
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
		margin-top: 0px;
		margin-right: 15px;
	}

	nav a.btn-yellow {
		background-color: #fcce21;
	}

	nav a.btn-default {
		border: 1px solid white;
	}

	.navmenu {
	  	overflow: hidden;
		margin-top: 1em;
	}

	.navmenu a {
	  	float: left;
	  	display: block;
	  	text-align: center;
	  	padding: 7px 8px;
	  	font-size: 1.3em;
	}

	.navmenu .icon {
	  display: none;
	}

	@media screen and (max-width: 62em) {
	  .navmenu a {display: none;}
	  .navmenu a.icon {
		float: right;
		display: block;
	  }
	}

	@media screen and (max-width: 62em) {
	  .navmenu.responsive {position: relative;}
	  .navmenu.responsive .icon {
		position: absolute;
		right: 0;
		top: 0;
	  }
	  .navmenu.responsive a {
		float: none;
		display: block;
		text-align: left;
	  }
	}

</style>
