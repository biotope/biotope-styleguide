import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import AsyncComputed from 'vue-async-computed'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
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
Vue.use(VueScrollTo, {
  offset: parseInt(document.querySelector(divSelector).dataset.scrollOffset) || 0
});
Vue.use(VueI18n);


// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.


// add translations directly to the application

const messages = {
  en: translationsEn,
  de: translationsDe
}
const usedLanguage = document.querySelector(divSelector).dataset.lang || 'en';

const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: usedLanguage,
  messages
})


new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount(divSelector)
