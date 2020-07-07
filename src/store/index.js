import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { info: null, img: null },
  mutations: {
    putDataInStore(state, data) {
      state.info = data;
    },
  },
  actions: {
    putDataInStore(context, value) {
      context.commit("putDataInStore", value);
    },
  },
  modules: {},
});
