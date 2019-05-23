<template>
  <section class="cover container-fluid">
    <div>
      <div class="catchline row">
        <div class="col-lg-6 col-md-12 col-xs-12">
          <div class="cover-para">
            <h1 class="maintitle title-size-responsive" v-if="is_main_title">
              <slot name="header"></slot><small><slot name="header-small"></slot></small>
            </h1>
            <h2 class="maintitle" v-if="!is_main_title">
              <slot name="header"></slot>
            </h2>
            <br/>
            <p class="text-muted subtitle main-text-responsive">
              <slot name="header-subtitle"></slot>
            </p>

            <a class="btn btn-lg btn-responsive" id="cover-trial-button">
              <slot name="text_button_free" class="free-size"></slot>
            </a>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-xs-12" v-if="is_with_video">
          <div class="video-container">
            <iframe class="center video-size" width="560" height="315" src="https://www.youtube.com/embed/-49EYn9eFtk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-xs-12 image-container" v-if="!is_with_video">
          <img v-if="page_selected == 'suivi-d-activite'" src="../assets/suivi-d-activité.jpg" class="size-image">
          <img v-if="page_selected == 'conges-et-absences'" src="../assets/gestion-des-congés.jpg" class="size-image">
          <img v-if="page_selected == 'notes-de-frais'" src="../assets/note-de-frais.jpg" class="size-image">
          <img v-if="page_selected == 'time-tracking'" src="../assets/time-tracking.jpg" class="size-image">
          <img v-if="page_selected == 'ordre-de-mission'" src="../assets/note-de-frais.jpg" class="size-image">
        </div>
      </div>
      <div class="row card-deck catchline" v-if="is_with_information">
        <product-information v-for="productInformation in productInformations" :key="productInformation.title"
             class="col-xs-12 col-md-6 col-lg-4">
          <span slot="title">{{productInformation.title}}</span>
          <p class="information-style" slot="information">{{productInformation.information}}</p>
        </product-information>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import ProductInformation from "./product-information";

  export default {
    components: {
      ProductInformation,
    },
    props: {
      scroll_to_signup: { type: Function, required: true },
      is_with_video: { type: Boolean, required: true },
      is_with_information: { type: Boolean, required: true },
      is_main_title: { type: Boolean, required: true },
      page_selected: { type: String, required: true }
    },
    data () {
      return {
        productInformations: [
          {
            title: "DIGITALISATION DE VOTRE ENTREPRISE",
            information:
                "Vous accompagner dans la digitalisation de votre entreprise, " +
                "c'est ce que vous promet notre application RH Apidae",
          },
          {
            title: "SIMPLIFIEZ VOS PROCESS RH",
            information:
                "Automatiser vos processus RH et faites gagner du temps à vos collaborateurs"
          },
          {
            title: "UNE SOLUTION TOUT-EN-UN",
            information:
                "Gérez vos notes de frais, vos comptes-rendus d'activités, vos congés et vos temps " +
                "de travail depuis une seule application web ou mobile"
          }
        ]
      };
    },
  }
</script>
<style>
  hr {
    margin-top: 2em;
    border-top-width: 3px;
  }

  .catchline {
    margin-top: 7vh;
    position: relative;
  }

  .maintitle {
    font-weight: bold;
  }

  .subtitle {
    hyphens: auto;
    font-weight: lighter;
  }

  .cover {
    position: relative;
    padding: 0;
  }

  .cover-para {
    margin-left: 10%;
    width: 80%;
  }

  .image-container {
    position: relative;
    width: 100%;
  }

  @media screen and (min-width: 991px) {
    .size-image {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 80%;
      margin: auto;
    }
  }

  @media screen and (min-width: 991px) {
    .video-size {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      max-width: 100%;
      max-height: 100%
    }
  }

  @media screen and (max-width: 991px) {
    .size-image {
      width: 80%;
      margin: auto auto auto 10%;
    }
  }

  @media screen and (max-width: 991px) {
    .video-size {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (min-width: 638px) {
    .video-container {
      width: 80%;
      margin: auto;
    }
  }

  .information-style{
    text-align: justify;
  }

  @media screen and (max-height: 638px) {
    .cover {
      background-size: cover;
    }
  }

  @media screen and (max-width: 991px) {
    .cover {
      background-size: auto;
    }
  }

  #cover-trial-button {
    display: block;
    white-space: normal !important;
      word-wrap: break-word;
    width: fit-content;
    width: -moz-fit-content;
    color: white;
    margin-top: 60px;
    margin-bottom: 40px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: #fcce21;
  }
</style>
