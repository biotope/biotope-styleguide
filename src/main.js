import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import IFrameResize from 'iframe-resizer/js/iframeResizer';
import App from './components/App.vue';
import router from './router';
import setupStore from './setupStore';
import VueClipboard from 'vue-clipboard2'
import AsyncComputed from 'vue-async-computed';

window.biotope = window.biotope || {};
window.biotope.styleGuide = window.biotope.styleGuide || {};
window.biotope.styleGuide.init = (config) => {

  Vue.directive('resize', {
    inserted: function (el) {
      IFrameResize({ log: false, autoResize: true }, el);
    }
  });
  Vue.use(VueScrollTo, {
    offset: config.contentOffset.top || 0
  });

  Vue.use(AsyncComputed);
  Vue.use(VueClipboard);

  Vue.config.devtools = true;
  new Vue({
    store: setupStore(Vue, config),
    router,
    test: { some: 'value' },
    render: h => h(App)
  }).$mount(config.entryPoint || '#style-guide')

};
