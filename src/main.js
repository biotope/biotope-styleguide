import Vue from 'vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import IFrameResize from 'iframe-resizer/js/iframeResizer'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
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
Vue.use(VueResource);

new Vue({
  data:{
    componentList: []
  },
  mounted() {
    this.getComponentList();
  },
  methods: {
    getComponentList() {
      this.$http.get('../componentList.json').then(response => {
        if(response.status === 200) {
           this.componentList = response.body;
        } else {
          console.log('unable to load componentList.json');
        }
      })
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')
