import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     componentList: [],
     selectedGrid: 12,
  },

  getters: {
    getComponentList: (state) => {
      return state.componentList
    },
    getComponentByName: (state) => (name) => {
      return state.componentList.find(obj => obj.name === name);
    },
    getSelectedGrid: (state) => {
      return state.selectedGrid;
    }
  },
  mutations: {
    setComponentList (state, list) {
      state.componentList = list;
    },
    setSelectedGrid (state, grid) {
      state.selectedGrid = grid;
    }
  },
  actions: {
    loadSelectedGrid ({ commit }, grid) {
      commit('setSelectedGrid', grid);
    },
    loadComponentList ({ commit }) {
      axios
        .get('componentList.json')
        .then(r => r.data)
        .then(list => {
        commit('setComponentList', list)
      })
    }
  }
})