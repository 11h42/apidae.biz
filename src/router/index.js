import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home';
import Cra from '@/pages/cra';
import Holiday from '@/pages/holiday';
import Cost from '@/pages/cost';
import Time from '@/pages/time';
import Order from '@/pages/order';

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
    },
    {
      path: '/holiday',
      name: 'HOLIDAY',
      component: Holiday
    },
    {
      path: '/cost',
      name: 'COST',
      component: Cost
    },
    {
      path: '/time',
      name: 'TIME',
      component: Time
    },
    {
      path: '/order',
      name: 'ORDER',
      component: Order
    }
  ],
  mode: 'history'
});
