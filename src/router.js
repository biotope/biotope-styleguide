import Vue from 'vue'
import Router from 'vue-router'
import Overview from './components/Overview.vue'
import Details from './components/Details.vue'

Vue.use(Router)

export default new Router({
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
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
