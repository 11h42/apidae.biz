<template>
	<div id="app">
		<navbar :features="[]" :showbtn="false"></navbar>

		<div id="signup-form" class="container">
			<div class="row">
				<div class="col-lg-6" id="inner-form">
					<h2>S'inscrire</h2>
					<i class="text-muted">Cette version d'évaluation a une durée de validité de deux mois à compté de
						l'inscription.</i>
					<hr>
					<form action="">
						<label for="company-name">Nom de votre société : <i class="text-muted"><br/>(ex: 'Entre-Prise',
							accédez à Apidae via entre-prise.apidae.biz)</i></label>
						<input type="text" name="company-name" id="company-name" class="margin-bottom">

						<label for="lastname">Nom :</label>
						<input type="text" name="lastname" id="lastname" class="margin-bottom">

						<label for="firstname">Prénom :</label>
						<input type="text" name="firstname" id="firstname" class="margin-bottom">

						<label for="email">Email : <i class="text-muted">(vous y recevrez un mail de
							confirmation)</i></label>
						<input type="email" name="email" id="email" class="margin-bottom">

						<label for="telephone">Téléphone : <i class="text-muted">(format: 06XXXXXXXX)</i></label>
						<input type="text" name="telephone" id="telephone" class="margin-bottom">

						<label for="password">Mot de passe : <i class="text-muted">(pourquoi ne pas utiliser <a
								target="_blank" href="https://lesspass.com/">LessPass</a> ?)</i></label>
						<input type="password" name="password" id="password" class="margin-bottom">

						<br/>
						<br/>
						<i class="text-muted">En cliquant sur ce bouton, vous serez redirigé vers l'espace de connexion
							de votre compte Apidae.</i>
						<input type="submit" value="Valider" class="btn btn-lg">
					</form>
				</div>


				<div class="col-lg-6" id="access-pricing-div">
					<h4 class="text-muted">Ou bien...</h4>
					<br/>
					<h3>Votre version d'évaluation est expirée ?</h3>
					<br/>
					<br/>
					<a href="/#pricing" class="btn">Accéder au pricing</a>
				</div>
			</div>
		</div>

		<my-footer></my-footer>
	</div>
</template>
<script type="text/ecmascript-6">
	import Navbar from './components/navbar';
	import MyFooter from './components/footer';

	export default {
		components: {
			Navbar,
			MyFooter
		}
	}
</script>

<style>
	@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
	@import '../node_modules/font-awesome/css/font-awesome.min.css';
	@import '../node_modules/hint.css/hint.min.css';

	body {
		font-family: 'Open Sans', sans-serif;
	}

	#signup-form {
		padding: 35px 15px;
	}

	#inner-form {
		padding: 20px 30px 20px 30px;
		border: 1px solid rgba(142, 153, 138, .5);
		border-bottom: 5px solid #1b6d85;
	}

	#signup-form form {
		margin-bottom: 50px;
	}

	#signup-form form label {
		color: #3C3C3C;
		font-weight: bold;
		font-size: 13px;
	}

	#signup-form form label a {
		color: #0275d8 !important;
	}

	#signup-form form input {
		background-color: white;
		color: #3C3C3C;
		outline: none;
		border: 1px solid rgba(142, 153, 138, .5);
		padding: 4px 8px;
		width: 100%;
	}

	#signup-form form .margin-bottom {
		margin-bottom: 8px;
	}

	#signup-form form .btn {
		background-color: #F4511E;
		color: white;
		width: fit-content;
		width: -moz-fit-content;
		padding: 7px 30px;
		border: none;
		float: right;
		margin-top: 15px;
	}

	#access-pricing-div {
		text-align: center;
		padding: 200px 50px;
	}

	#access-pricing-div .btn {
		background-color: #1B6D85;
		padding-left: 35px;
		padding-right: 35px;
	}
</style>
