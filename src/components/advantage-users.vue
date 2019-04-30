<template>
  <div class="advantage-users-container">
    <h2 class="title-size-responsive">
      <slot name="title"></slot>
    </h2>
    <hr/>
    <div class="subtittle-advantage-users row">
      <div class="col-lg-8 col-md-10 col-sm-11 col-xs-12 subtittle-advantage-container">
        <slot name="header-subtitle"></slot>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'suivi-d-activite'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListCra">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="lead font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'conges-et-absences'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListHoliday">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="lead font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'notes-de-frais'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListCost">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="lead font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'time-tracking'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListTime">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="lead font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'ordre-de-mission'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListOrder">
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

    props: {
      page_selected: { type: String, required: true }
    },

    data () {
      return {
        advantageUsersListCra: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "- Facilite la rédaction des comptes rendus d'activités",
              "- Gagnez du temps dans la gestion du temps de travail",
              "- Avoir une vision globale sur son planning"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "- Connaître la rentabilité des projets",
              "- Vision globale des activités de vos équipes"
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Faciliter la facturation client",
              "- Gagner du temps",
              "- Récupération rapide des heures travaillées par projet",
              "- Exportation vars le logiciel de paie"
            ]
          }
        ],
        advantageUsersListHoliday: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "- Faire une demande rapidement",
              "- Gérer son solde de congé",
              "- Possibilité de faire les demandes à distance",
              "- Visibilité sur le planning des absences"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "- Valider rapidement les demandes",
              "- Facilite la prise de décision",
              "- Fluidifier les demandes d’absences",
              "- Vision globale sur les effectifs présents."
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Gestion fiable du planning des absences",
              "- Exportation des données vers le logiciel de paie",
              "- Visibilité sur les effectifs présents"
            ]
          }
        ],
        advantageUsersListTime: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "- Facilite la rédaction des comptes rendues d’activités",
              "- Gagner du temps dans la gestion du temps de travail"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "- Connaitre la rentabilité des projets",
              "- Vision globale des activités de vos équipes",
              "- Gestion des temps de travail"
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Faciliter la facturation client",
              "- Gagner du temps"
            ]
          }
        ],
        advantageUsersListCost: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "- Délais de remboursement plus rapide",
              "- Enregistrer ses notes de frais rapidement",
              "- Pas de risque de perdre les justificatifs de notes de frais"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "- Vision globale des dépenses par employé, par services et par projet",
              "- Dépenses par type de frais (frais de transport, repas, ...) ",
              "- Centralisation des frais professionnels",
              "- Gain de temps"
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Diminuer les temps de remboursement",
              "- Gagner du temps dans la gestion des frais professionnels",
              "- Visibilité sur le flux de dépenses",
              "- Exportation des données pour votre comptable"
            ]
          }
        ],
        advantageUsersListOrder: [
          {
            source: require("./../assets/Salarié.jpg"),
            title: "SALARIÉ",
            advantages: [
              "- Enregistrer son déplacement rapidement",
              "- Délais de remboursement plus rapides",
              "- Être assuré légalement pendant son déplacement"
            ]
          },
          {
            source: require("../assets/manager.jpg"),
            title: "MANAGER",
            advantages: [
              "- Contrôler la nécessité des frais professionnels.",
              "- Éviter les frais de mission inutiles",
              "- Gagner du temps pour l’émission des billets"
            ]
          },
          {
            source: require("../assets/comptable.jpg"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Diminuer les temps de remboursement",
              "- Gagner du temps dans la gestion des frais professionnels",
              "- Anticiper les dépenses"
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

  .subtittle-advantage-users {
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.8em;
  }

  .subtittle-advantage-container {
    font-size: 0.9em;
    margin: auto;
  }

  .position-subtitle {
    margin: auto;
  }

  .image-advantage {
    margin: 2em 0;
    width: 20em;
    height: 15em;
    border: none;
    box-shadow: -10px 10px 20px #9A989D;
  }

  .text-advantage {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 0.1em;
  }
</style>
