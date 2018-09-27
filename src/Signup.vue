<template>
	<div id="signup-form" class="container">

		<h2 class="font-weight-bold">Essayer gratuitement</h2>
		<hr>
		<h5 class="text-muted">Découvrez les fonctionnalités d'Apidae<br />
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
                            target="_blank" href="https://lesspass.com/">LessPass</a> ?)</i></label>
                    <input type="password" name="password" id="password" class="margin-bottom" v-model="form.password" :disabled="submit_success">
                    
					<br/>
					<br/>          
          <div class="g-recaptcha" data-sitekey="6Lcvy0oUAAAAAHDt9ZyGMBTWSRPsMiM58aZCg4gR"></div>
          <br />
					<i v-if="error_message" id="error-message">{{ error_message }}</i>
					<input type="submit" value="Valider" class="btn btn-lg">
				</form>
			</div>


			<div class="col-lg-6 hidden-md-down" id="access-pricing-div" v-if="!submit_success">
				<h4 class="text-muted">Ou bien...</h4>
				<br/>
				<h3>Votre version d'évaluation est expirée ?</h3>
				<br/>
				<br/>
				<a href="/#pricing-container" class="btn">Voir les tarifs</a>
			</div>

			<div class="col-lg-12" v-if="submit_success" id="submit-success-div"
				 v-bind:class="{'visible': submit_success}">
				<h4 class="text-muted">Il ne reste plus qu'une étape ...</h4>
				<br/>
				<h3>Nous vous avons envoyé un mail, </h3>
				<h5><b>cliquez sur le lien à l'intérieur de celui-ci pour activer votre compte !</b>
            <br />
            <br />
            <small>Attention, vous ne pourrez pas vous connecter avant d'avoir validé votre e-mail !</small>
        </h5>
				<br/>
				<a :href="'https://' + login_url" class="btn">Accéder à Apidae</a>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
import Navbar from "./components/navbar";
import MyFooter from "./components/footer";

export default {
  components: {
    Navbar,
    MyFooter
  },
  data() {
    return {
      form: {},
      error_message: "",
      submit_success: false,
      login_url: ""
    };
  },
  methods: {
    send_form: function() {
      let _this = this;
      this.form.gRecaptchaResponse = grecaptcha.getResponse();
      $.post({
        url: "https://apidae-dev.akema.fr/api/signup/",
        dataType: "text",
        contentType: "application/x-www-form-urlencoded",
        data: this.form
      })
        .done(function(data) {
          _this.submit_success = true;
          _this.login_url = data;
          $("#inner-form").slideUp("slow");
        })
        .fail(function(error) {
          _this.error_message = error.responseText;
        });
    }
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
@import "../node_modules/hint.css/hint.min.css";

#signup-form {
  padding: 35px 15px;
  text-align: center;
}

#inner-form {
  text-align: left;
  margin: 50px 0 50px 0;
  padding: 20px 30px 20px 30px;
  box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
            0 5px 15px 0 rgba(0,0,0,0.08);
  transition: opacity 1s ease;
}

#inner-form.faded {
  opacity: 0.6;
}

#signup-form form {
  margin-bottom: 50px;
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
  background-color: #f4511e;
  color: white;
  width: fit-content;
  width: -moz-fit-content;
  padding: 7px 20px;
  border: none;
  float: right;
  margin-top: 15px;
}

#access-pricing-div {
  text-align: center;
  padding: 200px 50px;
}

#access-pricing-div .btn {
  background-color: #1b6d85;
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
</style>
