<template>
    <div>
      <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true">
        <span slot="header" class="m-x-auto">
          Apidae : Gestion des notes de frais
        </span>
        <span slot="header-subtitle">Simplifiez la gestion des notes de frais en automatisant les procedures
          avec Apidae ! Terminez les notes de frais qui se perdent, Apidae est la solution de gestion des frais
          professionnels en ligne. Vos collaborateurs remplissent leurs frais professionnels directement sur la
          plateforme en y associant les justificatifs.  Les frais sont automatiquement envoyés au service associé
          ce qui permet d’optimiser le délai de remboursement des frais professionnels au sein de votre entreprise.
        </span>
        <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
          <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
        </small>
      </cover>

      <argument :page_selected="page_selected">
        <span slot="title">
          Automatisez la gestion des notes de frais
        </span>
      </argument>

      <advantage-users :page_selected="page_selected">
        <span slot="title">
          Les avantages utilisateurs
        </span>
        <small slot="header-subtitle"> Apidae vous promet une gestion simple et rapide des notes de frais. Vous
          gagnez du temps sur la gestion des frais professionnels avec un processusde demande de remboursement
          simple et rapide. Apidae vous permet de centraliser les demandes et de donner un cadre fiable à la gestion
          des notes de frais dans votre entreprise.
        </small>
      </advantage-users>

      <cover class="place-cover" :scroll_to_signup="scroll_to_signup" :is_with_video="true"
           :is_with_information="false" :is_main_title="false">
        <span slot="header" class="m-x-auto">
          Découvrez toutes les fonctionnalités de logiciel RH APIDAE
        </span>
        <span slot="header-subtitle">Apidae, c'est notre solution SIRH : Un logiciel tout-en-un. <br/>
          Retrouver toutes les fonctionnalités de Apidae : <br/> <br/>
          <span class="link-sentence" v-if="page_selected != 'holiday'" @click="change_page_selected('holiday')"><router-link to="/holiday">- Gestion des congés et des absences </router-link></span>
          <span v-if="page_selected == 'holiday'">- Gestion des congés et des absences </span>
          <br/>
          <span class="link-sentence" v-if="page_selected != 'cra'" @click="change_page_selected('cra')"><router-link to="/cra">- Suivi d'activité </router-link></span>
          <span v-if="page_selected == 'cra'">- Suivi d'activité </span>
          <br/>
          <span class="link-sentence" v-if="page_selected != 'time'" @click="change_page_selected('time')"><router-link to="/time">- Time tracking </router-link></span>
          <span v-if="page_selected == 'time'">- Time tracking </span>
          <br/>
          <span class="link-sentence" v-if="page_selected != 'cost'" @click="change_page_selected('cost')"><router-link to="/cost">- Gestion des notes de frais </router-link></span>
          <span v-if="page_selected == 'cost'">- Gestion des notes de frais </span>
          <br/>
          <span class="link-sentence" v-if="page_selected != 'order'" @click="change_page_selected('order')"><router-link to="/order">- Ordre de mission </router-link></span>
          <span v-if="page_selected == 'order'">- Ordre de mission </span>
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
