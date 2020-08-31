<template>
  <nav class="navbar navbar-full navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo-apidae.png" alt="Logo Apidae" id="navbar-logo">
        &nbsp;Apidae</a>
      <div class="nav-item navmenu" id="navmenuId">
        <a @click="change_page_selected('accueil'); transformMenu();"><router-link to="/" :class="{'active-menu': page_selected == 'accueil', 'inactive-menu': page_selected != 'accueil'}">
          Accueil</router-link></a>
        <a @click="change_page_selected('suivi-d-activite'); transformMenu();"><router-link to="/suivi-d-activite" :class="{'active-menu': page_selected == 'suivi-d-activite', 'inactive-menu': page_selected != 'suivi-d-activite'}">
          Suivi d'activité</router-link></a>
<!--        <a href="/cra">Suivi d'activité</a>-->
        <a @click="change_page_selected('conges-et-absences'); transformMenu();"><router-link to="/conges-et-absences" :class="{'active-menu': page_selected == 'conges-et-absences', 'inactive-menu': page_selected != 'conges-et-absences'}">Congés et absences</router-link></a>
        <a @click="change_page_selected('notes-de-frais'); transformMenu();"><router-link to="/notes-de-frais" :class="{'active-menu': page_selected == 'notes-de-frais', 'inactive-menu': page_selected != 'notes-de-frais'}">Notes de frais</router-link></a>
        <a @click="change_page_selected('ordre-de-mission'); transformMenu();"><router-link to="/ordre-de-mission" :class="{'active-menu': page_selected == 'ordre-de-mission', 'inactive-menu': page_selected != 'ordre-de-mission'}">Ordre de mission</router-link></a>
        <a @click="change_page_selected('time-tracking'); transformMenu();"><router-link to="/time-tracking" :class="{'active-menu': page_selected == 'time-tracking', 'inactive-menu': page_selected != 'time-tracking'}">Time tracking</router-link></a>
        <a @click="change_page_selected('wellness'); transformMenu();"><router-link to="/wellness" :class="{'active-menu': page_selected == 'wellness', 'inactive-menu': page_selected != 'wellness'}">Bien-être</router-link></a>
        <a href="javascript:void(0);" class="icon" @click="transformMenu()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <a id="essai" class="nav-item btn btn-yellow" v-if="showbtntry" @click="scroll_to_signup">Essai gratuit</a>
    </div>
  </nav>
</template>
<script type="text/ecmascript-6">
  import $ from "jquery";

  export default {
    props: {
      showbtntry: { type: Boolean, required: true },
      scroll_to_signup: { type: Function, required: true },
      page_selected: { type: String, required: true },
      change_page_selected: { type: Function, required: true }
    },
    methods: {
      transformMenu: function () {
        loadVideo();
        if (window.grecaptcha) {
          $('#captcha-load').html('');
          $.getScript("https://www.google.com/recaptcha/api.js");
        }
        var x = document.getElementById("navmenuId");
        if (x.className === "navmenu") {
          x.className += " responsive";
        } else {
          x.className = "navmenu";
        }
      }
    }
  };

  function loadVideo () {
    var elementVideo = document.getElementById("youtube_video");
    elementVideo.src = "https://www.youtube.com/embed/-49EYn9eFtk";
  }
</script>
<style>
  nav {
    background-color: #1C2B36;
  }

  #navbar-logo {
    display: inline-block;
    width: 55px;
    height: 55px;
  }

  .active-menu {
    font-weight: bold;
    color: #fcce21;
  }

  .active-menu:hover {
    font-weight: bold;
    color: #fcce21;
  }

  .inactive-menu {
    color: white;
  }

  .inactive-menu:hover {
    color: white;
  }

  a {
    color: white;
    outline: none;
    text-decoration: none;
  }

  nav a.btn {
    float: right;
    margin-top: 0px;
    margin-right: 15px;
  }

  nav a.btn-yellow {
    background-color: #fcce21;
  }

  #essai {
    padding : 1%;
    margin: auto;
  }

  nav a.btn-default {
    border: 1px solid white;
  }

  .navmenu {
    overflow: hidden;
  }

  .navmenu a {
      float: left;
      display: block;
      text-align: center;
      padding: 7px 8px;
  }

  .navmenu a:hover {
    text-decoration: none;
  }

  .navmenu .icon {
    display: none;
  }

  @media screen and (max-width: 62em) {
    .navmenu a {display: none;}
    .navmenu a.icon {
    float: right;
    display: block;
    }
  }

  @media screen and (max-width: 62em) {
    .navmenu.responsive {position: relative;}
    .navmenu.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
    }
    .navmenu.responsive a {
    float: none;
    display: block;
    text-align: left;
    }
  }

</style>
