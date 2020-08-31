<template>
  <div class="advantage-users-container">
    <h2 class="title-size-responsive">
      <slot name="title"></slot>
    </h2>
    <hr/>
    <div class="subtittle-advantage-users main-text-responsive row">
      <div class="col-lg-8 col-md-10 col-sm-11 col-xs-12 subtittle-advantage-container">
        <slot name="header-subtitle"></slot>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'wellness'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in differentWellness">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "different-wellness",

    props: {
      page_selected: { type: String, required: true }
    },

    data () {
      return {
        differentWellness: [
          {
            source: require("./../assets/daily.png"),
            title: "Quotidien",
            advantages: [
              "Chaque jour est un jour nouveau! Des humeurs différentes!"
            ]
          },
          {
            source: require("../assets/monthly.png"),
            title: "Mensuel",
            advantages: [
              "Une vision globale sur le déroulement du mois écoulé reste important pour le suivi du bien - être! "
            ]
          },
          {
            source: require("../assets/projet.png"),
            title: "Projet",
            advantages: [
              "Un projet non comprit? Stressant? Vous savez tout!"
            ]
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .advantage-users-container {
    padding-top: 5em;
    text-align: center;
    margin: 0;
    width: 100%;
  }

  .subtittle-advantage-users {
    margin: 0;
    width: 100%;
    text-align: left;
  }

  .subtittle-advantage-container {
    margin: auto;
  }

  @media (min-width: 1140px) {
    .image-advantage {
      margin: 2em 0;
      width: 18em;
      height: 13.5em;
      border: none;
      box-shadow: -10px 10px 20px #9A989D;
    }
  }

  @media (min-width: 992px) and (max-width: 1140px){
    .image-advantage {
      margin: 2em 0;
      width: 12em;
      height: 9em;
      border: none;
      box-shadow: -10px 10px 20px #9A989D;
    }
  }

  @media (min-width: 638px) and (max-width: 992px){
    .image-advantage {
      margin: 2em 0;
      width: 18em;
      height: 13.5em;
      border: none;
      box-shadow: -10px 10px 20px #9A989D;
    }
  }

  @media (max-width: 638px){
    .image-advantage {
      margin: 2em 0;
      width: 12em;
      height: 9em;
      border: none;
      box-shadow: -10px 10px 20px #9A989D;
    }
  }

  .text-advantage {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 0.1em;
  }
</style>
