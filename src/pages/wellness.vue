<template>
  <div class="page-container">
    <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true" :page_selected="page_selected">
      <span slot="header" class="m-x-auto">
        Gestion du bien-être au travail
      </span>
      <span slot="header-subtitle">Vous voulez mettre en place stratégie RH sur le bien-être au travail? Nous sommes là pour vous accompagner!
        Avec notre solution, vous pouvez connaître le ressenti de vos salariés sous trois déclinaisons !
        <br/>
        <br/>
        Vous pouvez également cibler vos thématiques via des questionnaires personnalisables.
      </span>
      <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
        <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
      </small>
    </cover>
    <different-wellness :page_selected="page_selected">
      <span slot="title">
        Mesurer la qualité du bien-être au travail
      </span>
      <span slot="header-subtitle"> Optimisez votre temps! Vos employés remplissent
        le ou les formulaire(s) en fonction   de   votre   thématique   sur   Apidae.biz.
        Vous   recevez   directement   le compte rendu et
        vous donneront des indicateurs afin de mettre en place le meilleur process
        de bien-être au travail, au sein de votre entreprise. Notre solution   vous
         permet   d’avoir   des   échanges   plus   fréquents   avec   vos collaborateurs,
        lorsqu’ils en ont besoin, ou non.
      </span>
    </different-wellness>
    <argument :page_selected="page_selected">
      <span slot="title">
        Suivi d'activité de vos équipes
      </span>
    </argument>
    <advantage-users :page_selected="page_selected">
      <span slot="title">
        Les avantages utilisateurs
      </span>
      <span slot="header-subtitle"> Connaître si votre salarié se sent bien au travail
        n’a jamais été aussi rapide et simple! La partie «bien-être  au travail»
        vous  permet de gérer facilement vos salariés sur le plan émotionnel et physique.
        Certains profils ont du mal à communiquer verbalement sur leur ressenti: par écrit et sur leur session,
        ils se sentiront en confiance.
        <br>
        Avec l’application Apidae et l’onglet «Bien-être au travail»,
        le confort de vos collaborateurs est au cœur de votre entité.
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
  import DifferentWellness from "./../components/different-wellness"
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
      Signup,
      DifferentWellness
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
