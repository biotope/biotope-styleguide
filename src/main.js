import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render(h) {
    return h(App, {
      props: {
        componentList: this.$el.attributes.componentlist.nodeValue
      }
    })
  }
})