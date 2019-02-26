import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import vuexI18n from 'vuex-i18n';
import translationsEn from './languages/en.json';
import translationsDe from './languages/de.json';

export default (vue, config) => {
  vue.use(VueAxios, axios);
  vue.use(Vuex);

  const store = new Vuex.Store({
    state: {
      componentList: [],
      selectedGrid: 12,
      componentDetails: {},
    },

    getters: {
      getUrlRoot: () => {
        return config.root;
      },
      getGridGenerateCol: () => {
        return config.gridGenerateCol;
      },
      getComponentList: (state) => {
        return state.componentList;
      },
      getComponentByName: (state) => (name) => {
        return state.componentDetails[name];
      },
      getSelectedGrid: (state) => {
        return state.selectedGrid;
      }
    },
    mutations: {
      setComponentList(state, list) {
        state.componentList = list;
      },
      setSelectedGrid(state, grid) {
        state.selectedGrid = grid;
      },
      setComponentDetails(state, { detail, componentName }) {
        state.componentDetails = {
          ...state.componentDetails,
          [componentName]: detail
        }
      }
    },
    actions: {
      loadSelectedGrid({ commit }, grid) {
        commit('setSelectedGrid', grid);
      },
      loadComponentList({ commit }) {
        axios
          .get(`${config.root}componentOverview.json`)
          .then(r => r.data)
          .then(list => {
            commit('setComponentList', list);
          })
      },
      loadComponentDetails({ commit }, componentName) {
        axios
          .get(`${config.root}${componentName}/package.json`)
          .then(r => r.data)
          .then(detail => {
            commit('setComponentDetails', { detail, componentName });
          })
      }
    }
  })

  vue.use(vuexI18n.plugin, store);
  vue.i18n.add('en', translationsEn);
  vue.i18n.add('de', translationsDe);
  vue.i18n.set(config.locale || 'en');

  return store;
}
