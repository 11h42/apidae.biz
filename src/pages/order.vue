<template>
    <div>
      <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
           :is_with_information="false" :is_main_title="true" :page_selected="page_selected">
        <span slot="header" class="m-x-auto">
          Apidae : Gestion des ordres de mission (À venir prochainement)
        </span>
        <span slot="header-subtitle">Simplifiez la gestion des déplacements professionnels de vos équipes en
          dématérialisant les processus de gestion des ordres de mission ponctuels ou permanents. Vos employés
          remplissent leur ordre de mission sur l’application en renseignant les frais liés à ce déplacement. Vous
          pouvez également indiquer sur l’ordre de mission les frais maximums autorisés par type de frais pour chaque
          mission.
        </span>
        <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
          <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
        </small>
      </cover>

      <argument :page_selected="page_selected">
        <span slot="title">
          Automatisez la gestion des Ordres de mission
        </span>
      </argument>

      <advantage-users :page_selected="page_selected">
        <span slot="title">
          Les avantages utilisateurs
        </span>
        <small slot="header-subtitle"> Apidae vous permet d’optimiser le processus de gestion des ordres de mission.
          Vous gagnez du temps sur la gestion des frais professionnels avec un processus de demande de remboursement
          simple et rapide. Apidae vous permet de centraliser les demandes et de donner un cadre légal aux déplacements
          de vos collaborateurs.
        </small>
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
  import Pricing from "./../Pricing.vue";
  import Signup from "./../Signup.vue";

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

</style>
