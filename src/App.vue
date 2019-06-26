<template>
  <div class="core-app" onresize="resizeEvent()" onload="loadEvent()" v-on:scroll="scrollFunction()">
    <navbar :showbtntry="true" :scroll_to_signup="scroll_to_signup"
            :page_selected="page_selected" :change_page_selected="change_page_selected"></navbar>

    <router-view :scroll_to_signup="scroll_to_signup" :scroll_to_price="scroll_to_price"
                 :change_page_selected="change_page_selected" :page_selected="page_selected"/>

    <div><a id="bt-retour" class="btn btn-lg btn-yellow fa fa-3x fa-arrow-circle-up bt-invisible"
      @click="return_top_page">

    </a></div>

    <my-footer></my-footer>
  </div>
</template>
<script type="text/ecmascript-6">
  import Navbar from "./components/navbar";
  import MyFooter from "./components/footer";
  import $ from "jquery";

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
        if (pageSelected === "accueil") {
          changeTab();
        }
        $(".core-app").animate(
          {
            scrollTop: 0
          },
          0
        );
        this.page_selected = pageSelected;
      },
      default_page_selected: function () {
        return window.location.pathname.substring(1) !== "" ? window.location.pathname.substring(1) : 'accueil';
      },
      return_top_page: function () {
        $(".core-app").animate(
          {
            scrollTop: 0
          },
          1000
        );
      },
      scrollFunction: function () {
        var valueClass = ($(".core-app")[0].scrollTop > $(".core-app")[0].offsetHeight) ? "bt-visible" : "bt-invisible";

        if (document.getElementById("bt-retour").className.indexOf("bt-visible") > 0) {
          document.getElementById("bt-retour").className = document.getElementById("bt-retour").className.replace("bt-visible", '');
        }
        if (document.getElementById("bt-retour").className.indexOf("bt-invisible") > 0) {
          document.getElementById("bt-retour").className = document.getElementById("bt-retour").className.replace("bt-invisible", '');
        }
        document.getElementById("bt-retour").className += valueClass;
      }
    },
    data () {
      return {
        page_selected: this.default_page_selected()
      };
    }
  };

  function changeTab () {
    changeSizeSubTitleSolution();
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function resizeEvent () {
    changeSizeSubTitleSolution();
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function loadEvent () {
    loadVideo();
    changeSizeSubTitleSolution();
    changeSizeSubTitle();
    changeSizeTitleInformation();
  }

  function loadVideo () {
    var elementVideo = document.getElementById("youtube_video");
    elementVideo.src = "https://www.youtube.com/embed/-49EYn9eFtk";
  }

  function changeSizeSubTitleSolution () {
    if (window.innerWidth > 1200) {
      var baseHeight = 0;
      for (var id in window.heightSubTitleSolution) {
        var subTitle = window.heightSubTitleSolution[id];
        if (subTitle.firstChild && subTitle.firstChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.firstChild.offsetHeight;
        }
      }
      for (var idIn in window.heightSubTitleSolution) {
        var subTitle = window.heightSubTitleSolution[idIn];
        if (subTitle.style) {
          subTitle.style.height = baseHeight + 'px';
        }
      }

      baseHeight = 0;
      for (var id in window.heightDescSolution) {
        var subTitle = window.heightDescSolution[id];
        if (subTitle.firstChild && subTitle.firstChild.offsetHeight > baseHeight) {
          baseHeight = subTitle.firstChild.offsetHeight;
        }
      }
      for (var idIn in window.heightDescSolution) {
        var subTitle = window.heightDescSolution[idIn];
        if (subTitle.style) {
          subTitle.style.height = baseHeight + 'px';
        }
      }
    }
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
      var baseHeightFirstLine = 0;
      var baseHeightSecondLine = 0;
      var count = 0;
      for (var id in window.heightSubTitle) {
        count += 1;
        var subTitle = window.heightSubTitle[id];
        if (subTitle.children && subTitle.children[1] && count > 2 && (subTitle.children[1].offsetHeight) > baseHeightSecondLine) {
          baseHeightSecondLine = subTitle.children[1].offsetHeight;
        }
        if (subTitle.children && subTitle.children[1] && count < 3 && (subTitle.children[1].offsetHeight) > baseHeightFirstLine) {
          baseHeightFirstLine = subTitle.children[1].offsetHeight;
        }
      }
      count = 0;
      for (var idIn in window.heightSubTitle) {
        count += 1;
        var subTitle = window.heightSubTitle[idIn];
        if (subTitle.style && count < 3) {
          subTitle.style.height = baseHeightFirstLine + 'px';
        }
        if (subTitle.style && count > 2) {
          subTitle.style.height = baseHeightSecondLine + 'px';
        }
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
  @import "../node_modules/ubuntu-fontface/ubuntu.min.css";

  body,
  html {
    font-family: "Ubuntu Condensed", sans-serif;
    font-weight: 400;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  a:not([href]):not([tabindex]) {
    color: white;
  }

  a:not([href]):not([tabindex]):hover {
    color: white;
  }

  a {
    color: white;
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

  /* global style*/

  .page-container {
    width: 80%;
    margin-left: 10%;
  }

  .container-fluid {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 638px) {
    .video-container {
      height: 10em;
      max-width: 16em;
      margin: auto;
    }
  }

  #bt-retour {
    bottom: 0;
    position:fixed;
    opacity: 0.5;
    right: 0;
  }

  #bt-retour.bt-invisible{
    opacity:0;
    bottom:-3em;
    position:fixed;
    right: 0;
    transition:all ease-in 0.5s;
  }

  #bt-retour.bt-visible{
    right: 0;
    position:fixed;
    bottom:0;
    opacity:0.5;
  }

  #bt-retour.bt-visible:hover {
    transition:all ease-in 0.3s;
    opacity: 1;
  }

  @media (min-width: 638px) {
    .btn-yellow {
      margin: 1em;
      padding: 0.2em;
      background-color: #fcce21;
    }
  }

  @media (max-width: 638px) {
    .btn-yellow {
      margin: 0.2em;
      padding: 0.1em;
      background-color: #fcce21;
    }
  }

  .size-btn-cover {
    font-size: 1em;
  }

  .size-btn-cover a {
    color: white;
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
    color: #6c757d;
  }

  .link-sentence:hover a{
    color: #fcce21;
  }
  .link-sentence:hover {
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .title-size-responsive {
      font-weight: bold;
      font-size: 2.1em;
    }
  }

  @media (min-width: 638px) and (max-width: 992px) {
    .title-size-responsive {
      font-weight: bold;
      font-size: 1.7em;
    }
  }

  @media (max-width: 638px) {
    .title-size-responsive {
      font-weight: bold;
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    .sub-title-responsive {
      font-size: 1.2em;
    }
  }

  @media (min-width: 638px) and (max-width: 992px) {
    .sub-title-responsive {
      font-size: 1.1em;
    }
  }

  @media (max-width: 638px) {
    .sub-title-responsive {
      font-size: 1em;
    }
  }

  @media (min-width: 992px) {
    .small-sub-title-responsive {
      font-size: 1em;
    }
  }

  @media (min-width: 638px) and (max-width: 992px) {
    .small-sub-title-responsive {
      font-size: 0.9em;
    }
  }

  @media (max-width: 638px) {
    .small-sub-title-responsive {
      font-size: 0.8em;
    }
  }

  @media (min-width: 992px) {
    .main-text-responsive {
      font-size: 1.3em;
    }
  }

  @media (min-width: 638px) and (max-width: 992px) {
    .main-text-responsive {
      font-size: 1.2em;
    }
  }

  @media (max-width: 638px) {
    .main-text-responsive {
      font-size: 1.1em;
    }
  }

  .text-responsive {
    font-size: 0.9em;
  }

  .small-text-responsive {
    font-size: 0.8em;
  }

  .tiny-text-responsive {
    font-size: 0.6em;
  }

  @media (min-width: 638px) {
    .btn-responsive {
      padding-left: 50px;
      padding-right: 50px;
      margin-top: 60px;
      margin-bottom: 40px;
    }
  }

  @media (max-width: 638px) {
    .btn-responsive {
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 30px;
      margin-bottom: 40px;
    }
  }

</style>
