import Vue from 'vue'
import Router from 'vue-router'
import Overview from './views/Overview.vue'
import Details from './views/Details.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/details/:name',
      name: 'details',
      component: Details
    }
  ]
})
