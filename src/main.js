import Vue from 'vue'
import App from './App.vue'
import Signup from './Signup.vue'
import Cra from './pages/cra'

const routes = {
	'/': App ,
	'/signup': Signup,
	'/cra': Cra,
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
