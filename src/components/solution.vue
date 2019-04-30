<template>
  <div class="solution-container">
    <h2 class="title-solution">Nos solutions RH Apidae</h2>
    <hr class="split-line"/>
    <section id="solutions" class="feature-container">
      <feature v-for="feature in features" :illustration="feature.illustration" :id="feature.id" :key="feature.id" :link="feature.reference"
         :class="feature.columnClass">
        <span class="title" slot="title">{{feature.title}}</span>
        <span class="subtitle" slot="subtitle">{{feature.subtitle}}</span>
        <p class="description" slot="description">{{feature.description}}</p>
        <p class="description" slot="description2">{{feature.description2}}</p>
        <p class="description" slot="description3">{{feature.description3}}</p>
        <a class="btn learn-more" slot="button" @click="change_page_selected(feature.pageSelected)">
          <router-link :to="feature.reference">{{feature.label}}</router-link>
          </a>
      </feature>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
  import Feature from "./feature";

  export default {
    props: {
      change_page_selected: { type: Function, required: true }
    },
    components: {
      Feature
    },
    data () {
      return {
        features: [
          {
            columnClass: "feature-column",
            id: "suivi-d’activité",
            title: "Suivi d’activité",
            illustration: "fa fa-3x fa-line-chart color-illustration",
            subtitle: "Gain de temps, plus d'oubli",
            description:
                "C'est l'heure du bilan d'activité mensuel.",
            description2:
                "L'un de vos collaborateurs ne se rappelle plus ce qu'il a fait le vendredi 12 après-midi ?",
            description3:
                "Plus de prise de tête : les tâches peuvent être saisies au jour le jour en toute simplicité. Coté manager, vous avez une vision globale du planning et de l'organisation de vos équipes.",
            label: "En savoir plus",
            reference: "/suivi-d-activite",
            pageSelected: "suivi-d-activite"
          },
          {
            columnClass: "feature-column",
            id: "congés-et-absences",
            title: "Congés et absences",
            illustration: "fa fa-3x fa-plane color-illustration",
            subtitle: "Rapide, simple et efficace",
            description:
                "En quelques clics, les collaborateurs posent leurs prévisions de congés ou renseignent leurs absence (RTT, déplacements ...). Ils reçoivent la réponse par email dès que le manager a répondu.",
            description2:
                "Dès la validation, les périodes concernées sont automatiquement renseignées dans le rapport d'activité du collaborateur heureux qui va partir en vacances.",
            description3:
                "Le calendrier global des absences vos permet de visualiser mois par mois le planning prévu.",
            label: "En savoir plus",
            reference: "/conges-et-absences",
            pageSelected: "conges-et-absences"
          },
          {
            columnClass: "feature-column",
            id: "notes-de-frais",
            title: "Notes de frais",
            illustration: "fa fa-3x fa-credit-card color-illustration",
            subtitle: "Fini la paperasse inutile",
            description:
                "A la fin du repas avec le client, et depuis son smartphone, le collaborateur crée et vous envoie la note de frais en quelques clics. ",
            description2:
                "Plus besoin de rechercher les justificatifs égarés ou rangés au fond d'un tiroir.",
            description3:
                "De votre coté, vous optimisez le délai de remboursement et avez une vision globale des frais liés à chacun des services de l'entreprise.",
            label: "En savoir plus",
            reference: "/notes-de-frais",
            pageSelected: "notes-de-frais"
          },
          {
            columnClass: "feature-column",
            id: "time-tracking",
            title: "Time tracking",
            illustration: "fa fa-3x fa-clock-o color-illustration",
            subtitle: "Traçabilité des tâches à venir ou en cours (À venir prochainement)",
            description:
                "Suivez en temps réel les temps d'activité de chacun de vos collaborateurs, par tâche et par projet, et obtenez des synthèses significatives et détaillées. ",
            description2:
                "Idéal pour l'organisation du travail et pour disposer d'une vue globale de l'activité de chacun des membres de votre équipe. Le collaborateur, lors d'une nouvelle tâche sur un projet, peut déclencher un chronomètre en début d'activité, et l'arrêter selon ses besoins ou contraintes, ou bien tout simplement lorsque la tâche est terminée.",
            description3:
                "",
            label: "En savoir plus",
            reference: "/time-tracking",
            pageSelected: "time-tracking"
          },
          {
            columnClass: "feature-column",
            id: "ordres-de-mission",
            title: "Ordre de mission",
            illustration: "fa fa-3x fa-clock-o color-illustration",
            subtitle: "Règlementer les déplacements",
            description:
                "Vos collaborateurs ont une mission à l’extérieur des bureaux ? Avec Apidae ils vont pouvoir remplir un ordre de mission rapidement et compléter simplement toutes les informations nécessaires.",
            description2:
                "La gestion des ordres de mission avec Apidae vous permet de donner un cadre légal aux déplacements de vos employés et de donner les conditions de remboursement pour chaque mission.",
            description3:
                "",
            label: "En savoir plus",
            reference: "/ordre-de-mission",
            pageSelected: "ordre-de-mission"
          }
        ]
      };
    }
  };
</script>

<style>
  .solution-container{
    padding-top: 8em;
    text-align: center;
  }

  .title-solution {
    font-size: 3.6em;
  }

  .split-line {
    margin-left: 10%;
    width: 80%;
  }

  .feature-container {
    width: 80%;
    margin-left: 10% !important;
    position: relative;
    height: 100%;
  }

  @media (min-width: 1600px) {
    .feature-column {
      position: initial;
      height: 100%;
      display: inline-flex !important;
      width: 19%;
      font-weight: bold;
      font-size: large;
      padding: 0 0 4em 0 !important;
      margin: 0 !important;
    }
  }

  @media (max-width: 1600px) and (min-width: 638px) {
    .feature-column {
      position: relative;
      height: 100%;
      display: inline-flex !important;
      width: 48%;
      font-weight: bold;
      font-size: large;
      padding: 0 0 4em 0 !important;
      margin: 0 !important;
    }
  }

  @media (max-width: 638px) {
    .feature-column {
      position: relative;
      width: 100%;
      font-weight: bold;
      font-size: large;
      padding: 0 0 4em 0 !important;
      margin: 0 !important;
    }
  }

  .color-illustration {
    color: #fcce21;
    border-bottom: black solid 1px;
    width: 100%;
    padding-bottom: 1.2em;
  }

  #solutions{
    top: 10vh;
    margin: 3em 0  0 0;
  }

  .learn-more {
    background-color: #fcce21 !important;
    font-size: large;
    font-weight: bold;
    position: relative;
    left: -50%;
  }

</style>
