<template>
  <div id="signup-form" class="container">

    <h2 class="font-weight-bold">Essayer gratuitement</h2>
    <hr>
    <h5 class="text-muted">Découvrez les fonctionnalités d'Apidae<br/>
      <span class="text-warning">pendant deux mois gratuitement et sans engagement</span> !</h5>

    <div class="row">
      <div class="col-lg-6" id="inner-form" v-bind:class="{'faded': submit_success}">
        <h3>Créer votre compte</h3>
        <hr>
        <form @submit.prevent="send_form">
          <label for="companyname">Nom de votre société* : <i class="text-muted"><br/>(ex: 'Entre-Prise',
            accédez à Apidae via entre-prise.apidae.biz)</i></label>
          <input type="text" name="companyname" id="companyname" class="margin-bottom"
               v-model="form.companyname" :disabled="submit_success">

          <label for="lastname">Nom* :</label>
          <input type="text" name="lastname" id="lastname" class="margin-bottom" v-model="form.lastname"
               :disabled="submit_success">

          <label for="firstname">Prénom* :</label>
          <input type="text" name="firstname" id="firstname" class="margin-bottom" v-model="form.firstname"
               :disabled="submit_success">

          <label for="email">Email* : <i class="text-muted">(vous y recevrez un mail de
            confirmation)</i></label>
          <input type="email" name="email" id="email" class="margin-bottom" v-model="form.email"
               :disabled="submit_success">

          <label for="telephone">Téléphone* : <i class="text-muted">(format: 06XXXXXXXX)</i></label>
          <input type="text" name="telephone" id="telephone" class="margin-bottom" v-model="form.telephone"
               :disabled="submit_success">

          <label for="password">Mot de passe* : <i class="text-muted">(pourquoi ne pas utiliser <a
              target="_blank" href="https://lesspass.com/" tabindex="-1">LessPass</a> ?)</i></label>
          <input type="password" name="password" id="password" v-model="form.password"
               :disabled="submit_success">

          <br/>
          <br v-if="error_message"/>
          <i v-if="error_message" id="error-message">{{ error_message }}</i>
          <br v-if="error_message">
          <br>
          <div id="captcha-and-submit">
            <div class="g-recaptcha" data-sitekey="6LemBHwUAAAAAIBgnSCFE1Pk0BWVbZkwWU05TYYU"></div>
            <input v-if="!loading" type="submit" value="Valider" class="btn btn-lg">
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
        </form>
      </div>


      <div class="col-lg-6 hidden-md-down" id="access-pricing-div" v-if="!submit_success">
        <h4 class="text-muted">Ou bien...</h4>
        <br/>
        <h3>Votre version d'évaluation est expirée ?</h3>
        <br/>
        <br/>
        <a @click="scroll_to_price" class="btn">Voir les tarifs</a>
      </div>

      <div class="col-lg-12" v-if="submit_success" id="submit-success-div"
         v-bind:class="{'visible': submit_success}">
        <h4 class="text-muted">Il ne reste plus qu'une étape ...</h4>
        <br/>
        <h5>Nous vous avons envoyé un mail, </h5>
        <h5>cliquez sur le lien à l'intérieur de celui-ci pour activer votre compte !
          <br/>
          <br/>
        </h5>
        <span>Attention, vous ne pourrez pas vous connecter avant d'avoir validé votre e-mail !</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Navbar from "./components/navbar";
  import MyFooter from "./components/footer";

  export default {
    props: {
      scroll_to_price: {type: Function, required: true}
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
      send_form: function () {
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
            .done(function (data) {
              _this.submit_success = true;
              _this.login_url = data;
              _this.loading = false;
              $("#inner-form").slideUp("slow");
            })
            .fail(function (error) {
              grecaptcha.reset();
              _this.error_message = JSON.parse(error.responseText).error;
              _this.loading = false;
            });
      }
    }
  }
</script>

<style>
  @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  @import "../node_modules/font-awesome/css/font-awesome.min.css";
  @import "../node_modules/hint.css/hint.min.css";

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
    color: #0275d8 !important;
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
    float: right;
    margin-top: 15px;
  }

  #captcha-and-submit {
    display: block;
    justify-content: space-between;
    align-items: center;
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
