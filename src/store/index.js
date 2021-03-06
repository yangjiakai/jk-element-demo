import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    age: 0,
  },
  mutations: {
    upadteAge(state, payload) {
      state.age += payload;
    },
  },
  actions: {},
  modules: {},
});
