import Vue from 'vue'
import App from './App.vue'
import Signup from './Signup.vue'
import Pricing from './Pricing.vue'

const routes = {
	'/': App ,
	'/signup': Signup,
	'/pricing': Pricing,
};

new Vue({
	el: '#app',
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent () {
			return routes[this.currentRoute] || '<h1>NOT FOUND</h1>'
		}
	},
	render (h) {
		return h(this.ViewComponent)
	}
});
