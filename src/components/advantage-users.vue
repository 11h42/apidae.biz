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
    <div class="row" v-if="page_selected == 'suivi-d-activite'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListCra">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'conges-et-absences'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListHoliday">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'notes-de-frais'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListCost">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'time-tracking'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListTime">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'ordre-de-mission'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersListOrder">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'wellness'">
      <div class="col-lg-4 col-md-6 col-xs-12" v-for="advantageUser in advantageUsersWellness">
        <img :src="advantageUser.source" class="image-advantage rounded-circle">
        <p class="sub-title-responsive font-weight-bold">{{advantageUser.title}}</p>
        <p v-for="advantage in advantageUser.advantages" class="text-left text-advantage text-responsive">{{advantage}}</p>
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
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Facilite la rédaction des comptes rendus d'activités",
              "- Gagnez du temps dans la gestion du temps de travail",
              "- Avoir une vision globale sur son planning"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Connaître la rentabilité des projets",
              "- Vision globale des activités de vos équipes"
            ]
          },
          {
            source: require("../assets/compta.png"),
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
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Faire une demande rapidement",
              "- Gérer son solde de congé",
              "- Possibilité de faire les demandes à distance",
              "- Visibilité sur le planning des absences"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Valider rapidement les demandes",
              "- Facilite la prise de décision",
              "- Fluidifier les demandes d’absences",
              "- Vision globale sur les effectifs présents."
            ]
          },
          {
            source: require("../assets/compta.png"),
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
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Facilite la rédaction des comptes rendues d’activités",
              "- Gagner du temps dans la gestion du temps de travail"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Connaitre la rentabilité des projets",
              "- Vision globale des activités de vos équipes",
              "- Gestion des temps de travail"
            ]
          },
          {
            source: require("../assets/compta.png"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Faciliter la facturation client",
              "- Gagner du temps"
            ]
          }
        ],
        advantageUsersListCost: [
          {
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Délais de remboursement plus rapide",
              "- Enregistrer ses notes de frais rapidement",
              "- Pas de risque de perdre les justificatifs de notes de frais"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Vision globale des dépenses par employé, par services et par projet",
              "- Dépenses par type de frais (frais de transport, repas, ...) ",
              "- Centralisation des frais professionnels",
              "- Gain de temps"
            ]
          },
          {
            source: require("../assets/compta.png"),
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
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Enregistrer son déplacement rapidement",
              "- Délais de remboursement plus rapides",
              "- Être assuré légalement pendant son déplacement"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Contrôler la nécessité des frais professionnels.",
              "- Éviter les frais de mission inutiles",
              "- Gagner du temps pour l’émission des billets"
            ]
          },
          {
            source: require("../assets/compta.png"),
            title: "SERVICE COMPTABILITÉ",
            advantages: [
              "- Diminuer les temps de remboursement",
              "- Gagner du temps dans la gestion des frais professionnels",
              "- Anticiper les dépenses"
            ]
          }
        ],
        advantageUsersWellness: [
          {
            source: require("./../assets/collab.png"),
            title: "COLLABORATEUR",
            advantages: [
              "- Réponses rapides aux questionnaires",
              "- Permet d’évoquer les souhaits rapidement",
              "- Confidentialité"
            ]
          },
          {
            source: require("../assets/manager.png"),
            title: "MANAGER",
            advantages: [
              "- Vision globale du fonctionnement de ses équipes/salariés",
              "- Gain de temps",
              "- Adaptabilité de la communication",
              "- Mise en place du process approprié"
            ]
          },
          {
            source: require("../assets/rh.png"),
            title: "SERVICE RESSOURCES HUMAINES",
            advantages: [
              "- Retours rapides aux questionnaires",
              "- Permet de comprendre au mieux les attentes  des collaborateurs",
              "- Confidentialité"
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
