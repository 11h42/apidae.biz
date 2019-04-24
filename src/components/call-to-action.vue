<template>
  <article id="call-to-action" class="mx-auto text-xs-center">

    <span class="size-title-middle">
      Envie d’un <span class="text-warning">devis</span> ou simplement de nous poser une <span class="text-primary">question</span>
      ?
    </span>

    <hr>

    <div class="row justify-content-center">
      <a href="mailto:contact@apidae.biz" class="btn btn-lg">
        <span>Contactez-nous</span>
      </a>
    </div>
  </article>
</template>
<script type="text/ecmascript-6">
  import Continue from "./continue";

  export default {
    components: {
      Continue
    }
  };
</script>
<style>
  #call-to-action {
    position: relative;
    margin-bottom: 100px;
  }

  #call-to-action h2 {
    font-weight: bold;
  }

  #call-to-action .btn {
    background-color: #fcce21;
  }

  .text-warning {
    color: #fcce21;
  }

  .text-primary {
    color: #246d84 !important;
  }
</style>
