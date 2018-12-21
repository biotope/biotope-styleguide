import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import store from './store'
import 'prismjs'
import 'prismjs/themes/prism.css'


Vue.config.productionTip = false;
Vue.directive('resize', {
  inserted: function (el) {
    IFrameResize({log:false, autoResize: true}, el);
  }
});
Vue.use(Vuex);
Vue.use(VueScrollTo);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
