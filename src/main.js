import Vue from 'vue'

import iFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './routes'
import VueResource from 'vue-resource'

Vue.directive('resize', {
    inserted: function (el) {
        iFrameResize({log:false, autoResize: true}, el);
    }
});


Vue.use(VueResource)

new Vue({
  router,
  el: '#app',
  render(h) {
    return h(App, {})
  }
})