<template>
  <div class="core-app" onresize="resizeEvent()" onload="loadEvent()">
    <navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"
            :page_selected="page_selected" :change_page_selected="change_page_selected"></navbar>

    <router-view :scroll_to_signup="scroll_to_signup" :scroll_to_price="scroll_to_price"
                 :change_page_selected="change_page_selected" :page_selected="page_selected"/>

    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import Navbar from "./components/navbar";
  import MyFooter from "./components/footer";

  export default {
    components: {
      Navbar,
      MyFooter
    },

    methods: {
      scroll_to_signup: function () {
        $(".core-app").animate(
          {
            scrollTop: $("#signup-form")[0].offsetTop
          },
          1000
        );
      },
      scroll_to_price: function () {
        $(".core-app").animate(
          {
            scrollTop: $("#pricing-form")[0].offsetTop
          },
          1000
        );
      },
      change_page_selected: function (pageSelected) {
        $(".core-app").animate(
          {
            scrollTop: 0
          },
          1000
        );
        this.page_selected = pageSelected;
      },
      default_page_selected: function () {
        return window.location.pathname.substring(1) !== "" ? window.location.pathname.substring(1) : 'accueil';
      }
    },
    data () {
      return {
        page_selected: this.default_page_selected()
      };
    }
  };

  function resizeEvent () {
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function loadEvent () {
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function changeSizeTitleInformation () {
    if (window.innerWidth > 768) {
      var baseHeight = 0;
      for (var id in window.heightTitleInformation) {
        var subTitle = window.heightTitleInformation[id];
        if (subTitle.firstChild && subTitle.firstChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.firstChild.offsetHeight;
        }
      }
      for (var idIn in window.heightTitleInformation) {
        var subTitle = window.heightTitleInformation[idIn];
        if (subTitle.style) {
          subTitle.style.height = baseHeight + 'px';
        }
      }
    }
  }

  function changeSizeSubTitle () {
    if (window.innerWidth > 768) {
      var baseHeight = 0;
      for (var id in window.heightSubTitle) {
        var subTitle = window.heightSubTitle[id];
        if (subTitle.lastChild && subTitle.lastChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.lastChild.offsetHeight;
        }
      }
      for (var idIn in window.heightSubTitle) {
        var subTitle = window.heightSubTitle[idIn];
        if (subTitle.style)
          subTitle.style.height = baseHeight + 'px';
      }
    }
  }

  window.onresize = resizeEvent;
  window.onload = loadEvent;
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

  .link-sentence a {
    color: #6c757d !important;
  }

  .link-sentence:hover a{
    color: #fcce21 !important;
  }
  .link-sentence:hover {
    cursor: pointer;
  }

</style>
