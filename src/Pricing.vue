<template>
	<div id="app">
		<navbar :features="[]" :showbtntry="true" :showbtnpricing="false" v-if="!ascomponent"></navbar>

		<div id="pricing-container" class="container">
			<h2>Tarifs</h2>
			<hr>
			<h5 class="text-muted">Découvrez l'offre adaptée à vos besoins</h5>

			<div id="pricings" class="row">
				<div class="pricing col-lg-4" id="decouverte">
					<div class="inner-pricing">
						<div class="pricing-header">
							<h5>Découverte</h5>
							<hr>
							<h2><b>Gratuit</b></h2>
							<br>
							<i>Période d'essai d'une durée de 2 mois sans engagement</i>
							<br>
							<br>
							<a href="/signup" class="btn">S'inscrire</a>
						</div>
						<div class="pricing-body">
							<ul>
								<li>
									<i class="fa fa-user">&nbsp&nbsp</i>
									Limité à 3 comptes utilisateurs
								</li>
								<li>
									<i class="fa fa-calendar">&nbsp&nbsp</i>
									Accés limité à deux mois
								</li>
								<li>
									<i class="fa fa-check">&nbsp&nbsp</i>
									Conservation de vos données au passage à une offre supérieure
								</li>
								<li>
									<i class="fa fa-thumbs-up">&nbsp&nbsp</i>
									Inscription gratuite et sans engagement
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="pricing col-lg-4" id="starter">
					<div class="inner-pricing box-shadow">
						<div class="pricing-header">
							<h5>Starter</h5>
							<hr>
							<h1 class="d-inline-block"><b>9</b></h1>
							<sup><h5 class="d-inline-block">€</h5></sup>
							<br/>
							<i>Hors taxes / mois</i>
							<br>
							<br>
							<br>
							<button class="btn">Découvrir</button>
						</div>
						<div class="pricing-body">
						<ul>
							<li>
								<i class="fa fa-users">&nbsp&nbsp</i>
								Jusqu'à 5 utilisateurs
							</li>
							<li>
								<i class="fa fa-mobile">&nbsp&nbsp</i>
								Accés depuis tout support
							</li>
							<li>
								<i class="fa fa-line-chart">&nbsp&nbsp</i>
								Module de Comptes Rendus d'Activités
							</li>
							<li>
								<i class="fa fa-credit-card">&nbsp&nbsp</i>
								Module de Notes de Frais
							</li>
							<li>
								<i class="fa fa-plane">&nbsp&nbsp</i>
								Modules d'Absences et Congés
							</li>
							<li>
								<i class="fa fa-file">&nbsp&nbsp</i>
								Modules Ordres de Missions <i>(bientôt !)</i>
							</li>
							<li>
								<i class="fa fa-file-pdf-o">&nbsp&nbsp</i>
								Exports avancés
							</li>
						</ul>
					</div>
					</div>
				</div>
				<div class="pricing col-lg-4" id="entreprise">
					<div class="inner-pricing box-shadow">
						<div class="pricing-header">
							<h5>Entreprise</h5>
							<hr>
							<h3><b>Tarif dégréssif</b></h3>
							<br>
							<i>Payez en fonction du nombre d'utilisateurs</i>
							<br>
							<br>
							<button class="btn">Nous contacter</button>
						</div>
						<div class="pricing-body">
							<div class="quote">
								<i>Tout les avantages 'Starter' 
									<i class="fa fa-plus"></i>
								</i>
							</div>
							<ul>
								<li>
									<i class="fa fa-users">&nbsp&nbsp</i>
									<i class="fa fa-user">&nbsp&nbsp</i>									
									Nombre d'utilisateurs <b>adapté à vos besoins</b>
								</li>
								<li>
									<i class="fa fa-clock-o">&nbsp&nbsp</i>									
									Module de Time-tracking
								</li>
								<li>
									<i class="fa fa-check">&nbsp&nbsp</i>									
										<a href="#">
											<u>Devis personnalisé et rapide</u>
											&nbsp<i class="fa fa-arrow-circle-o-right"></i>
										</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<my-footer v-if="!ascomponent"></my-footer>
	</div>
</template>
<script type="text/ecmascript-6">
import Navbar from "./components/navbar";
import MyFooter from "./components/footer";

export default {
  props: {
	  ascomponent: {type: Boolean, required: true},
  },
  components: {
    Navbar,
    MyFooter
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
@import "../node_modules/hint.css/hint.min.css";

body {
  font-family: "Open Sans", sans-serif;
}

#pricing-container {
  text-align: center;
  padding: 40px 0;
}

#pricings {
  padding: 25px 0;
}

#pricings .btn {
  background-color: #222f39;
  color: white;
}

.pricing {
  padding: 20px;
  color: white !important;
}

@media screen and (max-width: 991px) {
}

.inner-pricing {
  border: 1px solid rgb(230, 230, 230);
  border-radius: 15px;
}

.inner-pricing.box-shadow {
  border: none;
  box-shadow: -10px 10px 40px #3c3c3c;
}

.pricing-shifted {
  margin-top: 35px;
}

.pricing-header {
  border-radius: 15px 15px 0 0;
  padding: 25px 35px;
}

.pricing-body {
  padding: 0px 35px 20px 35px;
  color: #3c3c3c !important;
  text-align: left;
}

.pricing-body * {
  color: #3c3c3c !important;
}

.pricing-body .fa {
  color: #f25224 !important;
}

.pricing-body .quote {
  margin-top: 15px;
  margin-left: -35px;
  padding: 15px 25px 15px 10%;
  font-weight: bold;
  background-color: #f2512448;
  border-radius: 0 5px 5px 0;
  border-left: 5px solid firebrick;
  position: relative;
}

.pricing-body .quote .fa {
  position: absolute;
  right: 0px;
  bottom: 15px;
  padding: 5px 25px 5px 15px;
  color: firebrick;
}

.pricing-body ul {
  padding-left: 0;
}

.pricing-body li {
  list-style-type: none;
  margin: 25px 0;
}

#decouverte .pricing-header {
  background-color: rgba(32, 109, 141, 0.54);
}

#starter .pricing-header {
  background-color: #246d84;
}

#entreprise .pricing-header {
  background-color: #f25224;
}
</style>
