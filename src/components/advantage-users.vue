<template>
  <div class="advantage-users-container">
    <h2 class="advantage-users-argument">
      <slot name="title"></slot>
    </h2>
    <hr/>
    <div class="subtittle-advantage-users row">
      <div class="col-lg-8 col-md-10 col-sm-11 col-xs-12 position-subtitle">
        <slot name="header-subtitle"></slot>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersList">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="lead font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage">{{advantage}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "advantage-users",

    data () {
      return {
        advantageUsersList: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "-Facilite la rédaction des comptes rendus d'activités",
              "-Gagnez du temps dans la gestion du temps de travail",
              "-Avoir une vision globale sur son planning"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "-Connaître la rentabilité des projets",
              "-Vision globale des activités de vos équipes"
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "-Faciliter la facturation client",
              "-Gagner du temps",
              "-Récupération rapide des heures travaillées par projet",
              "-Exportation vars le logiciel de paie"
            ]
          }
        ]
      };
    }
  };
</script>

<style scoped>
  .advantage-users-container {
    padding-top: 8em;
    text-align: center;
    margin-left: 10%;
    width: 80%;
  }

  .advantage-users-argument {
    font-size: 3.6em;
  }

  .subtittle-advantage-users {
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.8em;
  }

  .position-subtitle {
    margin: auto;
  }

  .image-advantage {
    margin: 2em 0;
    width: 20em;
    height: 15em;
    border: none;
    box-shadow: -10px 10px 40px #3c3c3c;
  }

  .text-advantage {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 0.1em;
  }
</style>
