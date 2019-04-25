<template>
    <div>
      <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true">
        <span slot="header" class="m-x-auto">
          Apidae : Gestion des congés et absences
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
        <small slot="header-subtitle"> Simple, rapide et efficace c’est la promesse de Apidae. Toutes les demandes
          d’absences et de congés sont centralisées sur une seule plateforme. Fini les demandes de congés qui sont
          oubliées, il n’y a plus de malentendu, ni de confusion. Si une demande est validée elle est directement
          visible dans le calendrier. Apidae vous permet donc de simplifier et de cadrer les demandes de congé.
          Les services qui s’occupentde valider les congés ne sont plus dérangés pendant leur travail. Cela permet
          donc de fluidifier les demandes d’absence et de gagner en productivité.
        </small>
      </argument>

      <advantage-users :page_selected="page_selected">
        <span slot="title">
          Les avantages utilisateurs
        </span>
        <small slot="header-subtitle"> Gérer les congés n’a jamais était aussi simple et rapide. Apidae est un
          logiciel 100% web utilisable sur tout type de support et disponible n’importe où. Les gestions des demandes
          de congés et d’absences peuvent donc être réalisées à distance. La partie congé et absence de notre
          solution RH vous permet de gérer facilement le planning de congés de vos équipes et de fluidifier chaque
          demande.
        </small>
      </advantage-users>

      <cover class="place-cover" :scroll_to_signup="scroll_to_signup" :is_with_video="true"
           :is_with_information="false" :is_main_title="false">
        <span slot="header" class="m-x-auto">
          Découvrez toutes les fonctionnalités de logiciel RH APIDAE
        </span>
        <span slot="header-subtitle">Apidae, c'est notre solution SIRH : Un logiciel tout-en-un. <br/>
          Retrouver toutes les fonctionnalités de Apidae : <br/> <br/>
          -Gestion des congés et des absences <br/> -Suivi d'activité <br/> -Time tracking <br/>
          -Gestion des notes de frais
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
