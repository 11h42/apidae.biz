<template>
  <div class="core-app" onresize="resizeEvent()" onload="loadEvent()">
    <navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"></navbar>

    <router-view/>

    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import Navbar from "./components/navbar";
  import MyFooter from "./components/footer";

  export default {
    components: {
      Navbar,
      MyFooter,
    },

    methods: {
      scroll_to_signup: function () {
        $("html, body").animate(
          {
            scrollTop: $("#signup-form").offset().top
          },
          1000
        );
      },
      scroll_to_price: function () {
        $("html, body").animate(
          {
            scrollTop: $("#pricing-form").offset().top
          },
          1000
        );
      }
    }
  };
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/hint.css/hint.min.css";

  body,
  html {
    font-family: "Ubuntu", sans-serif !important;
    font-weight: 400;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #call-to-action {
    padding-top: 50px;
  }

  .center {
    text-align: center;
  }

  .core-app {
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  .size-btn-cover {
    font-size: 1em;
  }

  .size-text-important {
    font-size: 1.3em;
  }

  .size-title-big {
    font-size: 2em;
    margin-bottom: 0.7em;
  }

  .size-title-small {
    font-size: 1.5em;
  }

  .size-title-middle {
    font-size: 1.7em;
  }

  .size-title {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  .default-container {
    width: 80%;
    margin-left: 10%;
  }

</style>
