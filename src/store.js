import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    components: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeState(state, toNewState) {
        state.components = toNewState;
    }
  }
})
