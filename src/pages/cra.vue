<template>
  <div class="page-container">
    <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true" :page_selected="page_selected">
      <span slot="header" class="m-x-auto">
        Logiciel de suivi d'activité
      </span>
      <span slot="header-subtitle">Simplifiez la déclaration des temps de travail de vos collaborateurs.
        Avec Apidae vos équipes remplissent leurs activités mensuellement et à la fin du mois vous récupérez
        le bilan de chacun. Cela vous permet de faciliter la gestion RH et financière de votre entreprise.
        <br/>
        <br/>
        Avoir une vision globale des temps de travail de vos équipes par projet vous permet de gérer
        facilement la facturation client et de connaître la rentabilité des projets.
      </span>
      <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
        <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
      </small>
    </cover>

    <argument :page_selected="page_selected">
      <span slot="title">
        Suivi d'activité de vos équipes
      </span>
      <span slot="header-subtitle"> Apidae est la solution idéale pour favoriser le suivi d'activité de
        votre entreprise. Notre logiciel de suivi d'activité vous permet d'avoir une vision à 360° sur
        l'activité de votre entreprise. Apidae, vous permet de connaître les temps d'activité de vos
        équipes par projet, et ainsi de faciliter la gestion de la facturation client.
      </span>
    </argument>

    <advantage-users :page_selected="page_selected">
      <span slot="title">
        Les avantages utilisateurs
      </span>
      <span slot="header-subtitle"> Ne perdez plus de temps à réaliser vos bilans d'activité. Avec Apidae
        vous remplissez chaque jour vos activités professionnnelles sur la plateforme.
      </span>
    </advantage-users>

    <cover class="place-cover" :scroll_to_signup="scroll_to_signup" :is_with_video="true"
         :is_with_information="false" :is_main_title="false" :page_selected="page_selected">
      <span slot="header" class="m-x-auto">
        Découvrez toutes les fonctionnalités de logiciel RH APIDAE
      </span>
      <span slot="header-subtitle">Apidae, c'est notre solution SIRH : Un logiciel tout-en-un. <br/>
        Retrouver toutes les fonctionnalités de Apidae : <br/> <br/>
        <span class="link-sentence" v-if="page_selected != 'conges-et-absences'" @click="change_page_selected('conges-et-absences')"><router-link to="/conges-et-absences">- Gestion des congés et des absences </router-link></span>
        <span v-if="page_selected == 'conges-et-absences'">- Gestion des congés et des absences </span>
        <br/>
        <span class="link-sentence" v-if="page_selected != 'suivi-d-activite'" @click="change_page_selected('suivi-d-activite')"><router-link to="/suivi-d-activite">- Suivi d'activité </router-link></span>
        <span v-if="page_selected == 'suivi-d-activite'">- Suivi d'activité </span>
        <br/>
        <span class="link-sentence" v-if="page_selected != 'time-tracking'" @click="change_page_selected('time-tracking')"><router-link to="/time-tracking">- Time tracking </router-link></span>
        <span v-if="page_selected == 'time-tracking'">- Time tracking </span>
        <br/>
        <span class="link-sentence" v-if="page_selected != 'notes-de-frais'" @click="change_page_selected('notes-de-frais')"><router-link to="/notes-de-frais">- Gestion des notes de frais </router-link></span>
        <span v-if="page_selected == 'notes-de-frais'">- Gestion des notes de frais </span>
        <br/>
        <span class="link-sentence" v-if="page_selected != 'ordre-de-mission'" @click="change_page_selected('ordre-de-mission')"><router-link to="/ordre-de-mission">- Ordre de mission </router-link></span>
        <span v-if="page_selected == 'ordre-de-mission'">- Ordre de mission </span>
        <br>
        <span class="link-sentence" v-if="page_selected != 'wellness'" @click="change_page_selected('wellness')"><router-link to="/wellness">- Bien-être au travail</router-link></span>
        <span v-if="page_selected == 'wellness'">- Bien-être au travail</span>
      </span>
      <small slot="text_button_free" class="size-btn-cover" @click="change_page_selected('accueil')">
        <router-link to="/">DÉCOUVREZ APIDAE</router-link>
      </small>
    </cover>

    <pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

    <signup :scroll_to_price="scroll_to_price"></signup>

    <section id="nous-contacter" class="row default-container">
      <call-to-action class="col-xs-12"></call-to-action>
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
  import Cover from "./../components/cover";
  import Argument from "./../components/argument";
  import AdvantageUsers from "./../components/advantage-users";
  import CallToAction from "./../components/call-to-action";
  import Pricing from "./../components/Pricing.vue";
  import Signup from "./../components/Signup.vue";

  export default {
    props: {
      scroll_to_signup: { type: Function, required: true },
      scroll_to_price: { type: Function, required: true },
      page_selected: { type: String, required: true },
      change_page_selected: { type: Function, required: true }
    },

    components: {
      Cover,
      Argument,
      AdvantageUsers,
      CallToAction,
      Pricing,
      Signup
    },

    methods: {
    }
  };
</script>

<style scoped>
  .core-cra {
    position: relative;
    overflow: auto;
    width: 100%;
    height: 100%;
  }

  .size-btn-cover {
    font-size: 1em;
  }

  @media (min-width: 638px) {
    .place-cover {
      margin-top: 8em;
      width: 100%;
      margin: 0;
    }
  }

</style>
