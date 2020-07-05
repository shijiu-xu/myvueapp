import Vue from "vue";
import Vuex from "vuex";
import movie from "./movie";
import city from "./city";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movie,
    city
  },
});
