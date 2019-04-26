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
    <div class="row" v-if="page_selected == 'suivi-d-activite'">
      <div :class=argument.look_block v-for="argument in argumentsListCra">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <span :class=argument.look_litle_link>{{argument.litle_link}}</span>
        <span :class=argument.look_litle_title>{{argument.litle_title}}</span>
        <div class="col-xs-12">
          <p :class=argument.look_infomation>{{argument.information}}</p>
        </div>
        <div style="height: 100%"></div>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'conges-et-absences'">
      <div :class=argument.look_block v-for="argument in argumentsListHoliday">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <span :class=argument.look_litle_link>{{argument.litle_link}}</span>
        <span :class=argument.look_litle_title>{{argument.litle_title}}</span>
        <div class="col-xs-12">
          <p :class=argument.look_infomation>{{argument.information}}</p>
        </div>
        <div style="height: 100%"></div>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'notes-de-frais'">
      <div :class=argument.look_block v-for="argument in argumentsListCost">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <span :class=argument.look_litle_link>{{argument.litle_link}}</span>
        <span :class=argument.look_litle_title>{{argument.litle_title}}</span>
        <div class="col-xs-12">
          <p :class=argument.look_infomation>{{argument.information}}</p>
        </div>
        <div style="height: 100%"></div>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'time-tracking'">
      <div :class=argument.look_block v-for="argument in argumentsListTime">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <span :class=argument.look_litle_link>{{argument.litle_link}}</span>
        <span :class=argument.look_litle_title>{{argument.litle_title}}</span>
        <div class="col-xs-12">
          <p :class=argument.look_infomation>{{argument.information}}</p>
        </div>
        <div style="height: 100%"></div>
      </div>
    </div>
    <div class="row" v-if="page_selected == 'ordre-de-mission'">
      <div :class=argument.look_block v-for="argument in argumentsListOrder">
        <span :class=argument.look_number>{{argument.number}}</span>
        <span :class=argument.look_title>{{argument.title}}</span>
        <span :class=argument.look_litle_link>{{argument.litle_link}}</span>
        <span :class=argument.look_litle_title>{{argument.litle_title}}</span>
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

    props: {
      page_selected: { type: String, required: true }
    },

    data () {
      return {
        argumentsListCra: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Remplir ses activités",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Tous les membres de vos équipes remplissent leurs activités quotidiennes dans la " +
              "partie bilan d'activité : Ils indiquent le nom du projet/client sur lequel " +
              "ils travaillent et indiquent leur temps de travail (journée entière, demi-journée). " +
              "Vous pouvez remplir votre bilan d'activité quand vous le souhaitez selon les " +
              "exigences de votre entreprise.",
            look_infomation: "para-argument"
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
            look_infomation: "para-argument"
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
            title: "Facturation client",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Simplifiez la gestion des facturations lient. Envoyé à votre service comptabilité " +
              "la synthèse des temps d'activité par projet/ par client.",
            look_infomation: "para-argument"
          }
        ],
        argumentsListHoliday: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Faites vos demandes",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Apidae contient un module Absences et Congés. Depuis cette page vous pouvez faire vos demandes de " +
              "congés simplement. Remplissez les dates et le motif de votre absence (Formation, arrêt maladie, RTT, " +
              "congés payés,événement familial,  ....). Une fois votre demande terminée vous pouvez l’envoyer " +
              "directement à votre responsable.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-2",
            number: "02",
            title: "Demande d’absence en cours",
            look_title: "sub-tittle-activity sub-tittle-activity-2 col-lg-6 col-md-6 col-xs-12",
            information:
              "Pour prévenir le responsable, un e-mail lui est envoyé automatiquement après la demande d’absence " +
              "rédigée par l’employé. L’employé peut connaitre l’état de sa demande d’absence directement sur la " +
              "plateforme : Validée, refusée ou en attente.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "03",
            title: "Gestion de la validation des congés",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Sur le Dashboard de Apidae le responsable a une vision sur les demandes en cours. Ainsi il va pouvoir " +
              "valider directement ou non les demandes de congés. Pour faciliter la prise de décision, un calendrier " +
              "global des absences est disponible pour permettre de voir les absences de tous les collaborateurs. " +
              "Cela lui donne une vision globale de l’effectif présent.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row pt-xs-0 look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-4",
            number: "04",
            title: "Confirmation de validation de l’absence",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Un mail est envoyé à la personne qui a fait la demande, pour lui informer de l’état de sa demande : " +
              "validée ou refusée.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "05",
            title: "Calendrier des absences",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Une fois validée l’absence est automatiquement renseignée sur le calendrier. L’accès au calendrier " +
              "est paramétrable, les collaborateurs ont une visibilité sur le calendrier des absences en fonction de " +
              "leur droit.",
            look_infomation: "para-argument"
          }
        ],
        argumentsListTime: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Remplir le Time Tracking",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            litle_title: "Chronomètre intégré",
            look_litle_title: "litle-title-activity",
            information:
              "C’est un chronomètre directement intégré sur la plateforme Apidae, " +
              "cela permet à vos équipes de mesurer leurs temps de travail sur une activité. Le collaborateur, " +
              "lors d'une nouvelle tâche sur un projet, peut déclencher un chronomètre en début d'activité et " +
              "l'arrêter selon ses besoins ou contraintes, ou bien tout simplement lorsque la tâche est terminée.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-2 shadow-icon",
            number: "01B",
            title: "",
            look_title: "sub-tittle-activity sub-tittle-activity-2 col-lg-6 col-md-6 col-xs-12",
            litle_link: "ou",
            look_litle_link: "icon-yellow litle-link-activity",
            litle_title: "Manuellement",
            look_litle_title: "litle-title-activity",
            information:
              "Vous avez oublié de lancer ou d’arrêter le chronomètre pas de soucis, vous pouvez aussi remplir vos " +
              "temps d’activité manuellement directement sur votre calendrier.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "02",
            title: "Gestion des temps de travail",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Vous disposez d’une vue globale de l’activité de vos collaborateurs, cela vous permet de " +
              "faciliter l’organisation du travail de vos équipes.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row pt-xs-0 look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-4",
            number: "03",
            title: "Confirmation de validation de l’absence",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Suivez en temps réel l’avancement des projets en cours. Obtenez une synthèse mensuelle avec des " +
              "données significatives telles que le projet le plus travaillé et les temps par projets.",
            look_infomation: "para-argument"
          }
        ],
        argumentsListCost: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Remplir les notes de frais",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Le salarié se rend sur la plateforme Apidae dans le module Note de frais, il indique ses frais " +
              "professionnels rapidement et simplement. Le salarié doit créer une note de frais, choisir la nature " +
              "(frais de déplacement, repas, frais téléphonique, ...), indiquer le montant de la note de frais et " +
              "ajouter un justificatif. Il ne reste plus qu’à l’enregistrer.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-2",
            number: "02",
            title: "Les justificatifs des notes de frais",
            look_title: "sub-tittle-activity sub-tittle-activity-2 col-lg-6 col-md-6 col-xs-12",
            information:
              "Transférez directement vos justificatifs de note   de frais depuis votre mobile. Prenez en photo le " +
              "reçu et ajoutez le sur Apidae. Ne perdez plus vos justificatifs de note de frais.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "03",
            title: "La validation des frais professionnels",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Une fois la demande créée par le salarié le manager reçoit automatiquement un mail qui lui indique " +
              "une nouvelle demande de remboursement de frais professionnels par un de ses collaborateurs. Il peut " +
              "ainsi valider la demande pour lancer le processus de remboursement",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row pt-xs-0 look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-4",
            number: "04",
            title: "Le remboursement des dépenses professionnelles",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Le salarié est prévenu dès que la demande de remboursement a été validée.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "05",
            title: "Exportation des données",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Exporter directement toutes les données des notes de frais au service concerné. En cas de contrôle " +
              "(URSSAF) vous pouvez exporter directement les historiques des notes de frais de tous vos " +
              "collaborateurs.",
            look_infomation: "para-argument"
          }
        ],
        argumentsListOrder: [
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon build-icon-1",
            number: "01",
            title: "Remplissez votre ordre de mission",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Le module ordre de mission permet à vos collaborateurs de saisir leurs demandes de déplacement " +
              "rapidement en y associant toutes les informations nécessaires (l’objet du déplacement, la date, le " +
              "lieu, moyen de transport, ...)",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-2",
            number: "02",
            title: "Contrôler l’ordre de mission",
            look_title: "sub-tittle-activity sub-tittle-activity-2 col-lg-6 col-md-6 col-xs-12",
            information:
              "Avant la validation de l’ordre de mission, vous pouvez vous assurer de la nécessité de cette dernière. " +
              "Vous évitez tout frais inutiles.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row look-block-left",
            look_number: "icon-yellow build-icon",
            number: "03",
            title: "Émission du billet",
            look_title: "sub-tittle-activity col-lg-6 col-md-6 col-xs-12",
            information:
              "Une fois que l’ordre de mission est validé par le responsable concerné la plateforme émet donc " +
              "le billet qui vous permet d’être en règle.",
            look_infomation: "para-argument"
          },
          {
            look_block: "col-lg-6 row pt-xs-0 look-block-right pt-xs-0 pt-md-0 pt-lg-6",
            look_number: "icon-yellow build-icon build-icon-4",
            number: "04",
            title: "Être conforme à votre convention collective",
            look_title: "sub-tittle-activity sub-tittle-activity-4 col-lg-6 col-md-6 col-xs-12",
            information:
              "Soyez conforme à l’article 51 de la convention collective syntec en remplissant vos ordres de mission " +
              "sur Apidae.",
            look_infomation: "para-argument"
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

  @media (min-width: 992px) {
    .shadow-icon {
      color: transparent !important;
    }
  }

  @media (max-width: 992px) {
    .shadow-icon {
      color: transparent !important;
      height: 0 !important;
    }
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
      text-align: center;
      font-size: 1.7em;
      margin: 1rem 0 0 0 !important;
      padding: 3rem 0 0 0 !important;
    }
  }

  @media (max-width: 638px) {
    .sub-tittle-activity {
      float: right;
      text-align: center;
      font-size: 1.7em;
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

  @media (min-width: 992px) {
    .litle-link-activity {
      width: 100%;
      text-align: left;
      font-size: 1.7em;
      padding: 0;
    }
  }

  @media (max-width: 992px) {
    .litle-link-activity {
      width: 100%;
      text-align: center;
      font-size: 1.7em;
      padding: 0;
    }
  }

  .litle-title-activity {
    margin: auto;
    font-size: 1.3em;
    padding-bottom: 0.7em;
  }

  .para-argument {
    text-align: justify;
    text-align-last: center;
    font-size: 1.5em;
    float: top;
    width: 80%;
    margin-left: 10%;
  }
</style>
