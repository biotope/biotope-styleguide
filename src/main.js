import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import VueResource from 'vue-resource'

Vue.use(VueResource)

new Vue({
  router,
  el: '#app',
  render(h) {
    return h(App, {
      
    })
  }
})