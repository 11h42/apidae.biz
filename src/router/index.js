import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import Cra from '@/pages/cra';
import Holiday from '@/pages/holiday';
import Cost from '@/pages/cost';
import Time from '@/pages/time';
import Order from '@/pages/order';
import Legal from '@/pages/legal';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/suivi-d-activite',
      name: 'CRA',
      component: Cra
    },
    {
      path: '/conges-et-absences',
      name: 'HOLIDAY',
      component: Holiday
    },
    {
      path: '/notes-de-frais',
      name: 'COST',
      component: Cost
    },
    {
      path: '/time-tracking',
      name: 'TIME',
      component: Time
    },
    {
      path: '/ordre-de-mission',
      name: 'ORDER',
      component: Order
    },
    {
      path: '/mentions-legales',
      name: 'LEGAL',
      component: Legal
    }
  ],
  mode: 'history'
});
