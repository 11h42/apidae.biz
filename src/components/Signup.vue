<template>
  <div id="signup-form" class="container">
    <h2 class="font-weight-bold">Essayer gratuitement</h2>
    <hr>
    <span class="text-muted size-text-important">
      Découvrez les fonctionnalités d'Apidae
      <br>
      <span class="text-warning">pendant deux mois gratuitement et sans engagement</span> !
    </span>

    <div class="row">
      <div class="col-lg-6" id="inner-form" v-bind:class="{'faded': submit_success}">
        <span class="size-title">Créer votre compte</span>
        <hr>
        <form @submit.prevent="send_form">
          <label for="companyname">
            Nom de votre société* :
            <i class="text-muted">
              <br>(ex: 'Entre-Prise',
              accédez à Apidae via entre-prise.apidae.biz)
            </i>
          </label>
          <input
            type="text"
            name="companyname"
            id="companyname"
            class="margin-bottom"
            v-model="form.companyname"
            :disabled="submit_success"
          >

          <label for="lastname">Nom* :</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            class="margin-bottom"
            v-model="form.lastname"
            :disabled="submit_success"
          >

          <label for="firstname">Prénom* :</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            class="margin-bottom"
            v-model="form.firstname"
            :disabled="submit_success"
          >

          <label for="email">
            Email* :
            <i class="text-muted">
              (vous y recevrez un mail de
              confirmation)
            </i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="margin-bottom"
            v-model="form.email"
            :disabled="submit_success"
          >

          <label for="telephone">
            Téléphone* :
            <i class="text-muted">(format: 06XXXXXXXX)</i>
          </label>
          <input
            type="text"
            name="telephone"
            id="telephone"
            class="margin-bottom"
            v-model="form.telephone"
            :disabled="submit_success"
          >

          <label for="password">
            Mot de passe* :
            <i class="text-muted">
              (pourquoi ne pas utiliser
              <a
                target="_blank"
                href="https://lesspass.com/"
                tabindex="-1"
              >LessPass</a> ?)
            </i>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="form.password"
            :disabled="submit_success"
          >
          <label for="codePartenaire">
            Code Partenaire* :
          </label>
          <input
            type="text"
            name="code Partenaire"
            id="codePart"
            class="margin-bottom"
            v-model="form.codePart"
            :disabled="submit_success"
          >
          <br>
          <br v-if="error_message">
          <i v-if="error_message" id="error-message">{{ error_message }}</i>
          <br v-if="error_message">
          <br>
          <div id="captcha-and-submit">
            <div id="captcha-load"
              class="g-recaptcha captcha-container"
              data-sitekey="6LemBHwUAAAAAIBgnSCFE1Pk0BWVbZkwWU05TYYU"
            ></div>
            <input v-if="!loading" type="submit" value="Valider" class="btn btn-lg valid-button">
            <button v-if="loading" class="btn btn-lg" id="form-loading-button">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Inscription</span>
            </button>
          </div>
          <p class="col-xs-12">
            <i class="text-muted comment-text-muted size-title-small">
              <br>Aucune carte de crédit demandée
            </i>
          </p>
        </form>
      </div>

      <div class="col-lg-6 hidden-md-down" id="access-pricing-div" v-if="!submit_success">
        <span class="text-muted size-title">Ou bien...</span>
        <br>
        <span class="size-title">Votre version d'évaluation est expirée ?</span>
        <br>
        <br>
        <a @click="scroll_to_price" class="btn btn-lg">Voir les tarifs</a>
      </div>

      <div
        class="col-lg-12"
        v-if="submit_success"
        id="submit-success-div"
        v-bind:class="{'visible': submit_success}"
      >
      <script type="text/javascript"> (function (w, d, id) { if(w.av) { return; } var ts = new Date().getTime(); w.avURL = w.avURL || 'https://appvizer.one'; w.avPool = w.avPool || []; w.avPool.push({start: ts, id: id}); w.av = function () { w.avPool.push(arguments) }; var e = document.createElement("script"); e.async = true; e.src = w.avURL + '/ariadne/v1/ariadne.js?ts=' + ts; d.getElementsByTagName("head")[0].appendChild(e); })(window, document); av("conversion", {id: 'AP-25378'}); </script>
        <span class="text-muted size-title">Il ne reste plus qu'une étape ...</span>
        <br>
        <span class="size-text-important">Nous vous avons envoyé un mail,</span>
        <span class="size-text-important">
          cliquez sur le lien à l'intérieur de celui-ci pour activer votre compte !
          <br>
          <br>
        </span>
        <span>Attention pensez à vérifier dans vos indésirables et si vous ne recevez pas le mail de confirmation d’ici 10 mins veuillez nous contacter : contact@apidae.biz !</span><br><br>
        <span class="fa fa-exclamation-triangle"> Vous ne pourrez pas vous connecter avant d'avoir validé votre e-mail !</span> <br> <br>
        <span>À bientôt, <br>
              Toute l’équipe Apidae
        </span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Navbar from "./navbar";
import MyFooter from "./footer";
import $ from "jquery";

export default {

  props: {
    scroll_to_price: { type: Function, required: true }
  },

  components: {
    Navbar,
    MyFooter
  },
  data() {
    return {
      form: {},
      error_message: "",
      submit_success: false,
      login_url: "",
      loading: false
    };
  },
  methods: {
    send_form: function() {
      let _this = this;
      this.loading = true;
      this.form.gRecaptchaResponse = grecaptcha.getResponse();

      $.post({
        url: "https://signup.apidae.biz/api/signup/",
        crossDomain: true,
        dataType: "text",
        contentType: "application/json",
        data: JSON.stringify(this.form)
      })
        .done(function(data) {
          _this.submit_success = true;
          _this.login_url = data;
          _this.loading = false;
          $("#inner-form").slideUp("slow");

          gtag_report_conversion();
        })
        .fail(function(error) {
          grecaptcha.reset();
          _this.error_message = JSON.parse(error.responseText).error;
          _this.loading = false;
        });
    }
  }
};
</script>

<style>
@import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../../node_modules/font-awesome/css/font-awesome.min.css";
@import "../../node_modules/hint.css/hint.min.css";

#signup-form {
  padding: 8em 15px 0 15px;
  text-align: center;
}

#inner-form {
  text-align: left;
  margin: 50px 0 50px 0;
  padding: 20px 30px 20px 30px;
  border-radius: 6px;
  transition: opacity 1s ease;
  box-shadow: 0 0 10px lightgray;
  border: 1px solid lightgray;
}

#inner-form.faded {
  opacity: 0.6;
}

#signup-form form {
  margin-bottom: 10px;
}

#signup-form form label {
  color: #3c3c3c;
  font-weight: bold;
  font-size: 13px;
}

#signup-form form label a {
  color: #0275d8;
}

#signup-form form input {
  background-color: white;
  color: #3c3c3c;
  outline: none;
  border: 1px solid rgba(142, 153, 138, 0.5);
  padding: 4px 8px;
  width: 100%;
}

#signup-form form .margin-bottom {
  margin-bottom: 8px;
}

#signup-form form .btn {
  background-color: #fcce21;
  color: white;
  width: fit-content;
  width: -moz-fit-content;
  padding: 7px 20px;
  border: none;
  margin-top: 15px;
}

#captcha-and-submit {
  display: block;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

@media (min-width: 1200px) {
  .captcha-container {
    float: left;
    width: 70%;
    margin: 0;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .captcha-container {
    float: left;
    width: 100%;
    margin: 0;
  }
}

@media (min-width: 638px) and (max-width: 992px) {
  .captcha-container {
    float: left;
    width: 70%;
    margin: 0;
  }
}

@media (min-width: 1200px) {
  .valid-button {
    float: right;
    width: 28%;
    margin: 0;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .valid-button {
    float: left;
    margin: 0;
  }
}

@media (min-width: 638px) and (max-width: 992px) {
  .valid-button {
    float: right;
    width: 28%;
    margin: 0;
  }
}

@media (max-width: 638px) {
  .valid-button {
    float: left;
    margin: 0;
  }
}

.comment-text-muted {
  float: left;
}

#access-pricing-div {
  text-align: center;
  padding: 200px 50px;
}

#access-pricing-div .btn {
  background-color: #fcce21;
  padding-left: 20px;
  padding-right: 20px;
}

#submit-success-div {
  text-align: center;
  padding: 200px 50px;
  opacity: 0;
  transition: opacity 1s;
}

#submit-success-div.visible {
  opacity: 1;
}

#submit-success-div .btn {
  background-color: #f4511e;
  padding-left: 35px;
  padding-right: 35px;
}

#error-message {
  color: rgb(255, 0, 0);
}

/* ======================== */
/* loading animations style */

#form-loading-button {
  display: flex;
  align-items: center;
}

.lds-ring {
  display: inline-block;
  position: relative;
  top: -3px;
  left: -5px;
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 24px;
  height: 24px;
  margin: 6px;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
