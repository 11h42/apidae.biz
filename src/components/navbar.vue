<template>
  <nav class="navbar navbar-full navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo-apidae.png" alt="Logo Apidae" id="navbar-logo">
        &nbsp;Apidae</a>
      <div class="nav-item navmenu" id="navmenuId">
        <a @click="change_page_selected('accueil')"><router-link to="/" :class="{'active-menu': page_selected == 'accueil'}">
          Accueil</router-link></a>
        <a @click="change_page_selected('cra')"><router-link to="/cra" :class="{'active-menu': page_selected == 'cra'}">
          Suivi d'activité</router-link></a>
<!--        <a href="/cra">Suivi d'activité</a>-->
        <a @click="change_page_selected('holiday')"><router-link to="/holiday" :class="{'active-menu': page_selected == 'holiday'}">Congés et absences</router-link></a>
        <a @click="change_page_selected('cost')"><router-link to="/cost" :class="{'active-menu': page_selected == 'cost'}">Notes de frais</router-link></a>
        <a @click="change_page_selected('time')"><router-link to="/time" :class="{'active-menu': page_selected == 'time'}">Time tracking</router-link></a>
        <a @click="change_page_selected('order')"><router-link to="/order" :class="{'active-menu': page_selected == 'order'}">Ordre de mission</router-link></a>
        <a href="javascript:void(0);" class="icon" @click="transformMenu()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <a class="nav-item btn btn-yellow" v-if="showbtntry" @click="scroll_to_signup">Essai gratuit</a>
    </div>
  </nav>
</template>
<script type="text/ecmascript-6">

  export default {
    props: {
      showbtntry: { type: Boolean, required: true },
      scroll_to_signup: { type: Function, required: true },
      page_selected: { type: String, required: true },
      change_page_selected: { type: Function, required: true }
    },
    methods: {
      transformMenu: function () {
        var x = document.getElementById("navmenuId");
        if (x.className === "navmenu") {
          x.className += " responsive";
        } else {
          x.className = "navmenu";
        }
      }
    }
  };
</script>
<style>
  nav {
    background-color: #1C2B36 !important;
  }

  #navbar-logo {
    display: inline-block;
    width: 55px;
    height: 55px;
  }

  .active-menu {
    font-weight: bold;
    color: #fcce21 !important;
  }

  a {
    color: white !important;
    outline: none;
    text-decoration: none !important;
  }

  nav a.btn {
    float: right !important;
    margin-top: 0px;
    margin-right: 15px;
  }

  nav a.btn-yellow {
    background-color: #fcce21;
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
