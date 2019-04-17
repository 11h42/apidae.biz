import Vue from 'vue';
import router from './router';
import App from './App.vue';
// import Signup from './Signup.vue';
// import Cra from './pages/cra.vue';

// Vue.use(VueRouter);

// new Vue(App).$mount('#app');

// const routes = {
//   '/': App,
//   '/signup': Signup,
//   '/cra': Cra
// };

// const routes = [
//   { path: '/', component: App },
//   { path: '/signup', component: Signup },
//   { path: '/cra', component: Cra }
// ];

// const router = new VueRouter({
//   routes // raccourci pour `routes: routes`
// });

// const app = new Vue({
//   router
// }).$mount('#app');

// eslint-disable-next-line no-unused-vars
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

  // data: {
  //   currentRoute: window.location.pathname
  // },
  // computed: {
  //   ViewComponent () {
  //     return routes[this.currentRoute] || '<h1>NOT FOUND</h1>';
  //   }
  // },
  // render (h) {
  //   return h(this.ViewComponent);
  // }
});
