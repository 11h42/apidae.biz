<template>
    <div class="page-container">
      <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true" :page_selected="page_selected">
        <span slot="header" class="m-x-auto">
          Gestion des congés et des absences
        </span>
        <span slot="header-subtitle">Apidae est la solution idéale pour digitaliser la gestion des congés et des
          absences pour votre entreprise TPE et PME. Gérer les congés n’a jamais été aussi simple et rapide !
          <br/>
          <br/>
          En quelques clics les salariés peuvent faire une demande d’absence ou de congé, le manager en est
          automatiquement averti et peut donc gérer la demande.
        </span>
        <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
          <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
        </small>
      </cover>

      <argument :page_selected="page_selected">
        <span slot="title">
          Automatisez la gestion des demandes des congés
        </span>
        <span slot="header-subtitle"> Simple, rapide et efficace c’est la promesse de Apidae. Toutes les demandes
          d’absences et de congés sont centralisées sur une seule plateforme. Fini les demandes de congés qui sont
          oubliées, il n’y a plus de malentendu, ni de confusion. Si une demande est validée elle est directement
          visible dans le calendrier. Apidae vous permet donc de simplifier et de cadrer les demandes de congé.
          Les services qui s’occupent de valider les congés ne sont plus dérangés pendant leur travail. Cela permet
          donc de fluidifier les demandes d’absence et de gagner en productivité.
        </span>
      </argument>

      <advantage-users :page_selected="page_selected">
        <span slot="title">
          Les avantages utilisateurs
        </span>
        <span slot="header-subtitle"> Gérer les congés n’a jamais été aussi simple et rapide. Apidae est un
          logiciel 100% web utilisable sur tous types de supports et disponible n’importe où. Les gestions des demandes
          de congés et d’absences peuvent donc être réalisées à distance. La partie congé et absence de notre
          solution RH vous permet de gérer facilement le planning de congés de vos équipes et de fluidifier chaque
          demande.
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

</style>
