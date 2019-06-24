<template>
  <div class="page-container">
    <cover :scroll_to_signup="scroll_to_signup" :is_with_video="true"
           :is_with_information="true" :is_main_title="true" :page_selected="page_selected">
      <span slot="header" class="m-x-auto">
        Apidae : Solution de management des ressources
      </span>
      <span slot="header-subtitle">Apidae est le logiciel de management des ressources en entreprise idéal pour les
        TPE/PME.
        Vous allez pouvoir centraliser et automatiser des procédures administratives telles que la
        <b>gestion des notes de frais</b>, <b>la gestion des congés et des absences</b> des salariés ainsi
        que la <b>gestion du suivi d'activité</b> au sein de l'entreprise. Des solutions RH dans une seule
        application, c'est ce que Apidae vous propose &nbsp;!
      </span>
      <small slot="text_button_free" class="size-btn-cover" @click="scroll_to_signup">
        <i class='fa fa-arrow-circle-o-right'/>&nbsp;Essayer gratuitement
      </small>
    </cover>

    <div class="container-fluid">
      <solution :change_page_selected="change_page_selected"></solution>

      <advantage :showbtntry="true" :scroll_to_signup="scroll_to_signup"></advantage>

      <pricing :ascomponent="true" :scroll_to_signup="scroll_to_signup"></pricing>

      <signup :scroll_to_price="scroll_to_price"></signup>

      <section id="nous-contacter" class="row default-container">
        <call-to-action class="col-xs-12"></call-to-action>
      </section>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Cover from "../components/cover";
  import CallToAction from "../components/call-to-action";
  import Solution from "../components/solution";
  import Advantage from "../components/advantage";
  import Pricing from "./../components/Pricing.vue";
  import Signup from "./../components/Signup.vue";

  export default {
    props: {
      scroll_to_signup: { type: Function, required: true },
      scroll_to_price: { type: Function, required: true },
      change_page_selected: { type: Function, required: true },
      page_selected: { type: String, required: true }
    },

    components: {
      CallToAction,
      Solution,
      Advantage,
      Cover,
      Pricing,
      Signup
    },

    methods: {
    }
  };
</script>
