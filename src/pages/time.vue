<template>
    <div>
      <cover :scroll_to_signup="scroll_to_signup" :is_with_video="false"
         :is_with_information="false" :is_main_title="true">
        <span slot="header" class="m-x-auto">
          Apidae : Votre logiciel de gestion des temps de travail ( À venir prochainement)
        </span>
        <span slot="header-subtitle">La fonctionnalité Time Tracking de Apidae vous permet de suivre en détail
          les tâches réalisées par projet. Vos collaborateurs peuvent remplir leurs missions par heure. Cela permet
          une gestion claire des temps de travail et de suivre l’avancée des projets. De plus si vous facturez vos
          clients à l’heure ou à la minute vous pouvez déterminer exactement le temps travaillé pour chaque client.
        </span>
        <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
          <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
        </small>
      </cover>

      <argument :page_selected="page_selected">
        <span slot="title">
          Gestion des temps d’activité
        </span>
        <small slot="header-subtitle"> Apidae, vous permet de connaitre les temps d'activité de vos équipes par
          taches, projet et/ou par mission.  Augmenter la productivité de vos équipes en suivant les temps passés
          pour chaque partie du projet.
        </small>
      </argument>

      <advantage-users :page_selected="page_selected">
        <span slot="title">
          Les avantages utilisateurs
        </span>
        <small slot="header-subtitle"> Ne perdez plus de temps à réaliser vos bilans d’activités. Avec Apidae vous
          remplissez chaque jour vos activités professionnelles sur la plateforme.
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
