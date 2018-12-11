import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     componentList: []
  },

  getters: {
    getComponentList: (state) => {
      return state.componentList
    }
  },
  mutations: {
    setComponentList (state, list) {
      state.componentList = list
    }
  },
  actions: {
    loadComponentList ({ commit }) {
      axios
        .get('../componentList.json')
        .then(r => r.data)
        .then(list => {
        commit('setComponentList', list)
        })
    }
  }
})