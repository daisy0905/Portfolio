import Vue from "vue";
import Vuex from "vuex";
import cookies from "vue-cookies"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activaPage: cookies.get("currentPage")
  },
  mutations: {
    changePage: function(state, data) {
      state.activePage = data
    },
  },
  actions: {},
  getters: {
    pageGet: function(state) {
      return state.activePage;
    }
  }
});
