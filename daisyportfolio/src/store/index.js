import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activaPage: 0
  },
  mutations: {
    changePage: function(state, data) {
      state.activePage = data
    },
  },
  actions: {},
  modules: {}
});
