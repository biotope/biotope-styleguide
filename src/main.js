import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import iFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './routes'
import VueResource from 'vue-resource'
import 'prismjs'
import 'prismjs/themes/prism.css'

Vue.directive('resize', {
    inserted: function (el) {
        iFrameResize({log:false, autoResize: true}, el);
    }
});
Vue.use(VueScrollTo);
Vue.use(VueResource);

new Vue({
  router,
  el: '#app',
  render(h) {
    return h(App, {})
  }
})