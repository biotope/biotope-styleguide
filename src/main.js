import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import AsyncComputed from 'vue-async-computed'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import store from './store'
import vuexI18n from 'vuex-i18n';
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import translationsEn from './languages/en.json'
import translationsDe from './languages/de.json'


var divSelector = '#styleGuide';
Vue.config.productionTip = false;
Vue.directive('resize', {
  inserted: function (el) {
    IFrameResize({log:false, autoResize: true}, el);
  }
});
Vue.use(AsyncComputed);
Vue.use(Vuex);
Vue.use(VueScrollTo, {
  offset: parseInt(document.querySelector(divSelector).dataset.scrollOffset) || 0
});
Vue.use(vuexI18n.plugin, store);


// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.


// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

// set the start locale to use
const usedLanguage = document.querySelector(divSelector).dataset.lang || 'en';
Vue.i18n.set(usedLanguage);


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount(divSelector)
