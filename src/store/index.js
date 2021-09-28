import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    btnStatus: false
  },
  mutations: {
  },
  actions: {
    showSpinner({state}, data) {
      state.btnStatus = data
    },
    hideSpinner({state}, data) {
      state.btnStatus = data
    }
  },
  modules: {
  }
})
