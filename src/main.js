import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import store from './store'
import vuexI18n from 'vuex-i18n';
import 'prismjs'
import 'prismjs/themes/prism.css'

import translationsEn from './languages/en.json'
import translationsDe from './languages/de.json'



Vue.config.productionTip = false;
Vue.directive('resize', {
  inserted: function (el) {
    IFrameResize({log:false, autoResize: true}, el);
  }
});
Vue.use(Vuex);
Vue.use(VueScrollTo);
Vue.use(vuexI18n.plugin, store);


// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.


// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

// set the start locale to use
const usedLanguage = document.querySelector('#styleGuide').dataset.lang || 'en';
Vue.i18n.set(usedLanguage);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#styleGuide')
