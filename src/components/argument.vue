<template>
  <div class="argument-container">
    <h2 class="title-argument">
      <slot name="title"></slot>
    </h2>
    <hr/>
    <div class="subtittle-argument">
      <div class="col-lg-8 col-md-10 col-sm-11 col-xs-12 position-subtitle">
        <slot name="header-subtitle"></slot>
      </div>
    </div>
    <div class="row">
      <div :class=argument.look_block v-for="argument in argumentsList">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <div class="col-xs-12">
          <p :class=argument.look_infomation>{{argument.information}}</p>
        </div>
        <div style="height: 100%"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "argument",

    data() {
      return {
        argumentsList: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Remplir ses activités",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Tous les menbres de vos équipes remplissent leurs activités quotidiennes dans la " +
              "partie bilan d'activité : Ils indiquent le nom du projet/client sur lequel " +
              "ils travaillent et indiquent leur temps de travail (journée entière, demi-journée). " +
              "Vous pouvez remplir votre bilan d'activité quand vous le souhaitez selon les " +
              "exigences de votre entreprise.",
            look_infomation: "para-argument",
          },
          {
            look_block: "col-lg-6 row look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-2",
            number: "02",
            title: "Bilan d'activité",
            look_title: "sub-tittle-activity sub-tittle-activity-2 col-lg-6 col-md-6 col-xs-12",
            information:
              "Faire remplir un suivi d'activité par vos équipes vous permet une gestion claire des" +
              " temps de travail de vos équipes. Vous obtenez chaque mois le bilan d'activité " +
              "par employé.",
            look_infomation: "para-argument",
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "03",
            title: "Statistiques",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Apidae regroupe les différentes informations remplies par vos équipes et vous donne " +
              "des statistiques suite au bilan d'activité de vos équipes. Par exemple vous pouvez " +
              "maintenant connaître le temps de travail consacré à chaque projet.",
            look_infomation: "para-argument",
          },
          {
            look_block: "col-lg-6 row pt-xs-0 look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-4",
            number: "04",
            title: "Bilan facturation client",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Simplifiez la gestion des facturations lient. Envoyé à votre service comptabilité " +
              "la synthèse des temps d'activité par projet/ par client.",
            look_infomation: "para-argument",
          }
        ]
      };
    },
  }
</script>

<style scoped>

  .argument-container {
    padding-top: 8em;
    text-align: center;
    margin-left: 10%;
    width: 80%;
  }

  .title-argument {
    font-size: 3.6em;
  }

  .subtittle-argument {
    width: 100%;
    text-align: center;
    font-size: 1.8em;
  }

  .position-subtitle {
    margin: auto;
  }

  .look-block-right {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 991px) {
    .look-block-left {
      padding: 0;
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    .pt-lg-6 {
      padding-top: 8em !important;
    }
  }

  .icon-yellow {
    color: #fcce21;
  }

  .build-icon {
    font-size: 7em;
    float: left;
    width: 2em;
  }

  @media (min-width: 992px) {
    .build-icon-1 {
      margin-left: 0.3em;
    }
  }

  @media (min-width: 992px) {
    .build-icon-2 {
      position: relative;
      left: -50px;
    }
  }

  @media (min-width: 992px) {
    .build-icon-4 {
      position: relative;
      left: -25px;
    }
  }

  @media (min-width: 638px) {
    .sub-tittle-activity {
      max-width: calc(100% - 9em);
      float: right;
      text-align: left;
      font-size: 2em;
      margin: 1rem 0 0 0 !important;
      padding: 3rem 0 0 0 !important;
    }
  }

  @media (max-width: 638px) {
    .sub-tittle-activity {
      float: right;
      text-align: left;
      font-size: 2em;
      margin: 0 0 0 1em;
      padding: 0;
    }
  }

  @media (min-width: 992px) {
    .sub-tittle-activity-2 {
      position: relative;
      left: -50px;
    }
  }

  @media (min-width: 992px) {
    .sub-tittle-activity-4 {
      position: relative;
      left: -25px;
    }
  }

  .para-argument {
    text-align: justify;
    text-align-last: center;
    font-size: 1.3em;
    float: top;
    width: 80%;
    margin-left: 10%;
  }
</style>
