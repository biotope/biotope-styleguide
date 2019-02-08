import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default (config) => new Vuex.Store({
  state: {
     componentList: [],
     selectedGrid: 12,
     componentDetails: {}
  },

  getters: {
    getComponentList: (state) => {
      return state.componentList
    },
    getComponentByName: (state) => (name) => {
      return state.componentDetails[name];
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
    },
    setComponentDetails (state, {detail, componentName}) {
      state.componentDetails = {
        ...state.componentDetails,
        [componentName]: detail
      }
    }
  },
  actions: {
    loadSelectedGrid ({ commit }, grid) {
      commit('setSelectedGrid', grid);
    },
    loadComponentList ({ commit }) {
      axios
        .get(`${config.root}componentOverview.json`)
        .then(r => r.data)
        .then(list => {
        commit('setComponentList', list);
      })
    },
    loadComponentDetails ({ commit }, componentName) {
      axios
        .get(`${config.root}${componentName}/package.json`)
        .then(r => r.data)
        .then(detail => {
        commit('setComponentDetails', {detail, componentName});
      })
    }
    
  }
})