<template>
  <div class="row advantage-container">
    <div class="col-lg-5 col-md-12 col-xs-12">
      <div class="main-advantage">
        <h2 class="title-advantage title-size-responsive">Les avantages du logiciel RH Apidae</h2>
        <br/>
        <span class="main-text-responsive">
          Apidae est une solution de gestion d'entreprise facile à mettre en place au sein de vos équipes.
          Apidae vous accompagne dans la digitalisation des tâches administratives pour faciliter la gestion du
          personnel. Avec Apidae vous faites gagner du temps à tous vos collaborateurs &nbsp;!
        </span>
        <br/>
        <div class="place-button">
          <div class="center-button">
            <a class="btn btn-lg btn-yellow btn-responsive" v-if="showbtntry" @click="scroll_to_signup">Essayez dés maintenant</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 col-md-12 col-xs-12 row product-advantage-container">
      <product-advantage v-for="product in productAdvantages" :key="product.title"
             class="col-xs-12 col-md-6 col-lg-6">
          <span slot="title">{{product.title}}</span>
          <span slot="nexttitle">{{product.nexttitle}}</span>
          <p class="text-responsive" slot="advantage">{{product.advantage}}</p>
          <p class="text-responsive" :aria-hidden="product.isHidden" slot="advantage2">{{product.advantage2}}</p>
      </product-advantage>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import ProductAdvantage from "./product-advantage";

  export default {
    components: {
      ProductAdvantage
    },
    props: {
      showbtntry: { type: Boolean, required: true },
      scroll_to_signup: { type: Function, required: true }
    },
    data () {
      return {
        productAdvantages: [
          {
            title: "SIMPLE D'UTILISATION",
            advantage:
                "Conscient que le changement peut être difficile à adopter, les équipes d'Apidae " +
                "ont mis en place un logiciel RH facile à prendre en main, son interface ergonomique " +
                "vous permet de l'installer rapidement au sein de votre entreprise. Vos équipes " +
                "pourront prendre en main l'outil rapidement.",
            isHidden: true
          },
          {
            title: "NOTRE ACCOMPAGNEMENT",
            advantage:
                "Un logiciel adaptable à vos besoins : Une équipe travaille constamment sur le " +
                "déveleppement de l'application Apidae pour répondre favorablement à vos " +
                "besoins !",
            advantage2:
                "Vous pouvez contacter le support technique rapidement par mail ou " +
                "par téléphone. Une équipe vous répond le plus rapidement possible.",
            isHidden: false
          },
          {
            title: "GAGNER EN PRODUCTIVITÉ ET EFFICACITÉ :",
            advantage:
                "Gagner en productivité en intégrant notre SIRH dans votre entreprise. Faites gagner " +
                "du temps à chaque membre de votre équipe, en centratisant les tâches administratives " +
                "sur une seule application RH.",
            isHidden: true
          },
          {
            title: "100% COMPATIBLE ",
            nexttitle: "(ORDINATEUR, TABLETTE, SMARTPHONE) :",
            advantage:
                "L'application a été conçu pour être entièrement responsive. Chaque utilisateur " +
                "peut accéder à Apidae quel que soit son lieu de travail et depuis n'importe " +
                "qu'elle interface.",
            isHidden: true
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .advantage-container {
    padding-top: 10em;
  }

  .main-advantage {
    text-align: left;
    margin-left: 10%;
    margin-bottom: 0;
    width: 80%;
  }

  .place-button {
    width: 100%;
  }

  @media (min-width: 638px){
    .center-button {
      width: 18.4em;
      margin: 0 auto;
    }
  }

  .btn-yellow {
    margin-top: 2em;
    margin-bottom: 2.2em;
    font-weight: bold;
    font-size: x-large;
    background-color: #fcce21;
  }

  .title-advantage {
    text-align: left;
  }

  .product-advantage-container {
    margin: 0;
    padding: 0;
  }
</style>
