import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import Cra from '@/pages/cra';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cra',
      name: 'CRA',
      component: Cra
    }
  ]
});
