import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { info: undefined, page: 0 },
  getters: {
    getInfo: (state) => {
      return state.info;
    },
  },
  mutations: {
    putDataInStore(state, data) {
      state.info = data;
    },
    pageIncrement(state) {
      state.page += 1;
    },
  },
  actions: {
    putDataInStore(context, value) {
      context.commit("putDataInStore", value);
    },
    pageIncrement(context) {
      context.commit("pageIncrement");
    },
  },
  modules: {},
});
