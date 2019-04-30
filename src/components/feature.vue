<template>
  <article :id="id" class="feature row">
    <div class="card-container">
      <!--col-lg-9 col-md-10 col-xs-12-->
      <div class="text-xs-center">
        <div class="card-title sub-title-responsive" id="heightSubTitleSolution">
          <slot name="title"></slot>
        </div>
        <div class="card-subtitle text-muted sub-second-title-responsive" id="heightDescSolution" >
          <slot name="subtitle"></slot>
        </div>
      </div>
      <div class="m-x-auto text-xs-center illustration">
        <i :class="illustrationClass"></i>
      </div>
      <div class="card-block">
        <div class="card-text">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="card-block">
        <div class="card-text">
          <slot name="description2"></slot>
        </div>
      </div>
      <div class="card-block">
        <div class="card-text">
          <slot name="description3"></slot>
        </div>
      </div>
      <div class="card-block">
        <a class="card-button">
          <slot name="button"></slot>
        </a>
      </div>
    </div>
  </article>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      illustration: { type: String, required: true },
      link: { type: String, required: true },
      id: { type: String, required: true }
    },
    computed: {
      illustrationClass: function () {
        return this.illustration;
      }
    }
  };
</script>
<style>
  .feature {
    text-align: center;
    border: none;
  }
  .feature .illustration {
    padding: 40px 0 25px 0;
  }
  .feature .card-container {
    margin-left: 10%;
    width: 80%;
  }
  .feature .card-button {
    position: absolute;
    bottom: 1.5em;
  }
  .feature .subtitle {
    /*text-transform: capitalize;*/
  }
  .feature .image {
    with : 100%;
    padding: 25px;
    padding-top: 40px;
  }
</style>
