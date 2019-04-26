<template>
  <div id="pricing-form" class="container">
    <navbar :features="[]" :showbtntry="true" v-if="!ascomponent"></navbar>

    <div id="pricing-container" class="container">
      <h2 class="font-weight-bold">Tarifs</h2>
      <hr>
      <span class="text-muted size-text-important">Découvrez l'offre adaptée à vos besoins</span>

      <div id="pricings" class="row">
        <div class="pricing col-lg-4" id="decouverte">
          <div class="inner-pricing">
            <div class="pricing-header">
              <span class="size-text-important">Découverte</span>
              <hr>
              <span class="size-title-big d-inline-block">Gratuit</span>
              <br>
              <i>Période d'essai d'une durée de 2 mois sans engagement</i>
              <br>
              <br>
              <a @click="scroll_to_signup" class="btn btn-gratuit">Essai gratuit</a>
            </div>
            <div class="pricing-body">
              <ul>
                <li>
                  <i class="fa fa-user">&nbsp;&nbsp;</i>
                  Limité à 3 comptes utilisateurs
                </li>
                <li>
                  <i class="fa fa-calendar">&nbsp;&nbsp;</i>
                  Accés limité à deux mois
                </li>
                <li>
                  <i class="fa fa-check">&nbsp;&nbsp;</i>
                  Conservation de vos données au passage à une offre supérieure
                </li>
                <li>
                  <i class="fa fa-thumbs-up">&nbsp;&nbsp;</i>
                  Inscription gratuite et sans engagement
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="pricing col-lg-4" id="starter">
          <div class="inner-pricing box-shadow">
            <div class="pricing-header">
              <span class="size-text-important">Starter</span>
              <hr>
              <span class="size-title-big d-inline-block"><b>9</b></span>
              <sup><span class="size-text-important d-inline-block">€</span></sup>
              <br/>
              <i>H.T. / mois</i>
              <br>
              <br>
              <br>
              <a href="mailto:contact@apidae.biz?subject=Demande de devis offre Starter Apidae" class="btn starter-btn">Nous contacter</a>
            </div>
            <div class="pricing-body">
            <ul>
              <li>
                <i class="fa fa-users">&nbsp;&nbsp;</i>
                Jusqu'à 5 utilisateurs
              </li>
              <li>
                <i class="fa fa-mobile">&nbsp;&nbsp;</i>
                Accés depuis tout support
              </li>
              <li>
                <i class="fa fa-line-chart">&nbsp;&nbsp;</i>
                Module de Comptes Rendus d'Activité
              </li>
              <li>
                <i class="fa fa-credit-card">&nbsp;&nbsp;</i>
                Module de Notes de Frais
              </li>
              <li>
                <i class="fa fa-plane">&nbsp;&nbsp;</i>
                Module d'Absences et Congés
              </li>
              <li>
                <i class="fa fa-envelope-open">&nbsp;&nbsp;</i>
                Module Ordres de Mission <i>(bientôt !)</i>
              </li>
              <li>
                <i class="fa fa-file-pdf-o">&nbsp;&nbsp;</i>
                Exports avancés
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div class="pricing col-lg-4" id="entreprise">
          <div class="inner-pricing box-shadow">
            <div class="pricing-header">
              <span class="size-text-important">Premium</span>
              <hr>
              <span class="size-title-big d-inline-block">Tarif sur demande</span>
              <br>
              <i>Payez en fonction du nombre d'utilisateurs</i>
              <br>
              <br>
              <a href="mailto:contact@apidae.biz?subject=Demande de devis offre Premium Apidae" class="btn entreprise-btn">Nous contacter</a>
            </div>
            <div class="pricing-body">
              <div class="quote">
                <i>Tous les avantages 'Starter'
                  <i class="fa fa-plus icon-plus"></i>
                </i>
              </div>
              <ul>
                <li>
                  <i class="fa fa-users">&nbsp;&nbsp;</i>
                  <i class="fa fa-user">&nbsp;&nbsp;</i>
                  Nombre d'utilisateurs adapté à vos besoins
                </li>
                <li>
                  <i class="fa fa-clock-o">&nbsp;&nbsp;</i>
                  Module de Time-tracking
                </li>
                <li>
                  <i class="fa fa-check">&nbsp;&nbsp;</i>
                    <a href="mailto:contact@apidae.biz?subject=Demande de devis offre Premium Apidae">
                      <u>Devis personnalisé et rapide</u>
                      &nbsp;<i class="fa fa-arrow-circle-o-right"></i>
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
    scroll_to_signup: {type: Function, required: true}
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

  #pricing-container {

    text-align: center;
    padding: 8em 0 0 0;
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
    padding: 0 35px 20px 35px;
    color: #3c3c3c !important;
    text-align: left;
  }

  .pricing-body * {
    color: #3c3c3c !important;
  }

  .pricing-body .fa {
    color: #fcce21 !important;
  }

  .pricing-body i .icon-plus {
    color: black !important;
  }

  .pricing-body .quote {
    margin-top: 15px;
    margin-left: -35px;
    padding: 15px 25px 15px 10%;
    font-weight: bold;
    background-color: #fcce21;
    border-radius: 0 5px 5px 0;
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
    background-color: #ababab;
  }

  #starter .pricing-header {
    background-color: #1c2b36;
  }

  #entreprise .pricing-header {
    background-color: #fcce21;
  }

  .center {
    text-align : center;
    margin : 0 auto;
  }

  .btn-gratuit {
    border: 3px solid white;
  }

  .starter-btn {
    border: 3px solid white;
  }

  .entreprise-btn {
    border: 3px solid white !important;
  }

</style>
