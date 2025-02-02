import Vue from "vue";
import Vuex from "vuex";
import travels from "./travels";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    travels,
  },
});
export default store;
