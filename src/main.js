import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import createStore from './store'
import vuexI18n from 'vuex-i18n';
import AsyncComputed from 'vue-async-computed';
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

import translationsEn from './languages/en.json'
import translationsDe from './languages/de.json'

window.biotope = window.biotope || {};
window.biotope.styleGuide = window.biotope.styleGuide || {};
window.biotope.styleGuide.init = (config) => {
  Vue.config.productionTip = false;
  Vue.directive('resize', {
    inserted: function (el) {
      IFrameResize({ log: false, autoResize: true }, el);
    }
  });
  Vue.use(Vuex);
  Vue.use(VueScrollTo, {
    offset: config.contentOffset.top || 0
  });
  const store = createStore(config);
  Vue.use(vuexI18n.plugin, store);

  Vue.use(AsyncComputed);

  // translations can be kept in separate files for each language
  // i.e. resources/i18n/de.json.


  // add translations directly to the application
  Vue.i18n.add('en', translationsEn);
  Vue.i18n.add('de', translationsDe);

  // set the start locale to use
  const usedLanguage = config.language || 'en';
  Vue.i18n.set(usedLanguage);

  new Vue({
    store,
    router,
    test: { some: 'value' },
    render: h => h(App)
  }).$mount(config.entryPoint || '#styleGuide')

};
